export async function POST(request) {
  try {
    const apiKey = process.env.IMGBB_API_KEY;

    if (!apiKey) {
      return Response.json(
        { message: "IMGBB_API_KEY is missing" },
        { status: 500 },
      );
    }

    const formData = await request.formData();
    const file = formData.get("imageFile");

    if (!file || typeof file === "string") {
      return Response.json(
        { message: "Image file is missing" },
        { status: 400 },
      );
    }

    const uploadForm = new FormData();

    uploadForm.append(
      "image",
      Buffer.from(await file.arrayBuffer()).toString("base64"),
    );

    let response;

    try {
      response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
        method: "POST",
        body: uploadForm,
        signal: AbortSignal.timeout(30000),
      });
    } catch (error) {
      console.error("ImgBB connection error:", error);

      return Response.json(
        {
          message: "Cannot connect to ImgBB",
          details: error.cause?.message || error.message,
        },
        { status: 502 },
      );
    }

    const result = await response.json();

    if (!response.ok || !result.success) {
      return Response.json(
        {
          message: result.error?.message || "ImgBB rejected the upload",
        },
        { status: 400 },
      );
    }

    return Response.json({
      imageUrl: result.data.url,
    });
  } catch (error) {
    console.error("Upload error:", error);

    return Response.json(
      { message: error.message || "Upload failed" },
      { status: 500 },
    );
  }
}
