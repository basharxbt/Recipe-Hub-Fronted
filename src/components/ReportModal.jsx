"use client";

import { useState } from "react";
import {
  Flag,
  AlertTriangle,
  ShieldAlert,
  Info,
  FileWarning,
} from "lucide-react";
import { Button, Modal, TextArea, useOverlayState } from "@heroui/react";
import { reportSend } from "@/lib/data";
import { useSession } from "@/lib/auth-client";

const reportReasons = [
  {
    value: "inappropriate",
    label: "Inappropriate content",
    description: "Content that is offensive or inappropriate",
    icon: ShieldAlert,
  },
  {
    value: "incorrect",
    label: "Incorrect information",
    description: "Recipe information is incorrect or misleading",
    icon: Info,
  },
  {
    value: "copyright",
    label: "Copyright issue",
    description: "This recipe may violate copyright",
    icon: FileWarning,
  },
  {
    value: "spam",
    label: "Spam or misleading",
    description: "Promotional, fake, or misleading content",
    icon: AlertTriangle,
  },
  {
    value: "other",
    label: "Other",
    description: "Something else is wrong with this recipe",
    icon: Flag,
  },
];

const ReportModal = ({ recipe }) => {
  const { data: session, error } = useSession();
  const state = useOverlayState();

  const [selectedReason, setSelectedReason] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reportData = {
      recipeId: recipe?._id,
      reason: selectedReason,
      user: session?.user?.email,
    };

    await reportSend(reportData);

    console.log("Report submitted:", reportData);

    setSelectedReason("");

    state.close();
  };

  return (
    <>
      <Button
        variant="tertiary"
        onPress={state.open}
        className="text-gray-400 transition-colors hover:text-[#c93632]"
      >
        <Flag size={17} />
        Report
      </Button>

      <Modal.Backdrop
        isOpen={state.isOpen}
        onOpenChange={state.setOpen}
        className="bg-black/50 backdrop-blur-sm"
      >
        <Modal.Container>
          <Modal.Dialog className="w-full max-w-[520px] max-h-[90vh] overflow-hidden rounded-3xl bg-white shadow-2xl">
            <Modal.CloseTrigger />

            <Modal.Header className="flex flex-col items-start gap-4 border-b border-gray-100 px-6 pb-5 pt-6">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50">
                  <Flag size={21} className="text-[#c93632]" />
                </div>

                <div>
                  <Modal.Heading className="text-xl font-bold text-gray-900">
                    Report Recipe
                  </Modal.Heading>

                  <p className="mt-1 text-sm text-gray-500">
                    Help us keep Platea safe and useful.
                  </p>
                </div>
              </div>
            </Modal.Header>

            <form onSubmit={handleSubmit}>
              <Modal.Body className="max-h-[60vh] overflow-y-auto px-6 py-5">
                <div className="space-y-5">
                  <div>
                    <h3 className="mb-3 text-sm font-semibold text-gray-900">
                      Why are you reporting this recipe?
                    </h3>

                    <div className="space-y-2">
                      {reportReasons.map((reason) => {
                        const Icon = reason.icon;
                        const isSelected = selectedReason === reason.label;

                        return (
                          <button
                            key={reason.value}
                            type="button"
                            onClick={() => setSelectedReason(reason.label)}
                            className={`flex w-full items-center gap-3 rounded-xl border p-3.5 text-left transition-all ${
                              isSelected
                                ? "border-[#c93632] bg-red-50"
                                : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                            }`}
                          >
                            <div
                              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                                isSelected
                                  ? "bg-[#c93632] text-white"
                                  : "bg-gray-100 text-gray-500"
                              }`}
                            >
                              <Icon size={17} />
                            </div>

                            <div className="min-w-0 flex-1">
                              <p
                                className={`text-sm font-semibold ${
                                  isSelected
                                    ? "text-[#c93632]"
                                    : "text-gray-800"
                                }`}
                              >
                                {reason.label}
                              </p>

                              <p className="mt-0.5 text-xs text-gray-500">
                                {reason.description}
                              </p>
                            </div>

                            <div
                              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                                isSelected
                                  ? "border-[#c93632]"
                                  : "border-gray-300"
                              }`}
                            >
                              {isSelected && (
                                <div className="h-2.5 w-2.5 rounded-full bg-[#c93632]" />
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-900">
                      Additional details
                      <span className="ml-1 font-normal text-gray-400">
                        (optional)
                      </span>
                    </label>

                    <TextArea
                      placeholder="Tell us more about the issue..."
                      variant="bordered"
                      className="w-full"
                    />
                  </div>
                </div>
              </Modal.Body>

              <Modal.Footer className="border-t border-gray-100 bg-gray-50/70 px-6 py-4">
                <Button
                  type="button"
                  variant="secondary"
                  onPress={state.close}
                  className="rounded-xl px-5"
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  isDisabled={!selectedReason}
                  className="rounded-xl bg-[#c93632] px-5 font-semibold text-white"
                >
                  Submit Report
                </Button>
              </Modal.Footer>
            </form>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </>
  );
};

export default ReportModal;
