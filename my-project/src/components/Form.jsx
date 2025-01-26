import React from "react";
import { motion } from "motion/react";

const Form = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8c1ac23a-882d-463b-9c3e-68d32e8ab291");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="xl:mt-12 flex flex-col-reverse lg:flex-row gap-10 overflow-hidden min-h-screen justify-center items-center">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="bg-[#11131e] lg:w-[50%] p-8 rounded-2xl flex justify-center items-center w-full"
      >
        <form
          onSubmit={onSubmit}
          className="mt-12 flex flex-col gap-8 rounded-2xl max-w-lg w-full"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              placeholder="What's your name?"
              className="bg-[#242946] py-4 px-6 placeholder:text-neutral-400 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              placeholder="What's your Email?"
              className="bg-[#242946] py-4 px-6 placeholder:text-neutral-400 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              placeholder="What do you want to Say?"
              className="bg-[#242946] py-4 px-6 placeholder:text-neutral-400 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-teal-200 py-3 px-8 outline-none w-fit text-black font-bold shadow-md shadow-black rounded-xl"
          >
            Submit
          </button>
          <span>{result}</span>
        </form>
      </motion.div>
    </div>
  );
};

export default Form;
