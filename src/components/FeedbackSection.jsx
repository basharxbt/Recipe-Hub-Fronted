"use client";

import { motion } from "framer-motion";

const FeedbackSection = () => {
  const feedbacks = [
    {
      name: "Sarah Ahmed",
      role: "Home Cook",
      image: "https://i.pravatar.cc/100?img=47",
      rating: 5,
      message:
        "RecipeHub has made cooking so much easier for me. The recipes are simple, detailed, and actually taste amazing!",
    },
    {
      name: "James Wilson",
      role: "Food Lover",
      image: "https://i.pravatar.cc/100?img=12",
      rating: 5,
      message:
        "I love discovering new recipes here. The instructions are easy to follow and the recipe collection keeps getting better.",
    },
    {
      name: "Nusrat Jahan",
      role: "Home Chef",
      image: "https://i.pravatar.cc/100?img=32",
      rating: 5,
      message:
        "Finally, a recipe website that feels simple and enjoyable to use. I have already tried so many recipes from here!",
    },
  ];

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c93632]">
            Community Feedback
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            What our food lovers say
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-500 md:text-base">
            Thousands of home cooks are discovering, sharing, and enjoying
            delicious recipes with RecipeHub.
          </p>
        </motion.div>

        {/* Feedback cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {feedbacks.map((feedback, index) => (
            <motion.div
              key={feedback.name}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="rounded-2xl border border-gray-100 bg-[#fffaf7] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(feedback.rating)].map((_, index) => (
                  <span key={index} className="text-lg text-[#f4b740]">
                    ★
                  </span>
                ))}
              </div>

              {/* Feedback */}
              <p className="mt-5 text-sm leading-7 text-gray-600">
                “{feedback.message}”
              </p>

              {/* User */}
              <div className="mt-7 flex items-center gap-3">
                <img
                  src={feedback.image}
                  alt={feedback.name}
                  className="h-11 w-11 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {feedback.name}
                  </h3>

                  <p className="text-xs text-gray-400">{feedback.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
