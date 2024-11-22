import React from "react";
import {motion} from "framer-motion"


const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "a2b1bb56-bcdf-47cb-9dba-cc0fd04c9fbb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setTimeout(() => {
        alert("Form Submitted Successfully");
        setResult("Send Message");
      }, 3000); // 3-second delay for alert and button reset
      event.target.reset();
    } else {
      console.log("Error", data);
      alert(data.message);
      setResult("Send Message");
    }
  };

  return (
    <motion.div

    initial ={{opacity:0, x:-200}}
    transition={{duration: 1}}
    whileInView={{opacity:1, x:0}}
    viewport={{once:true}}

      className="p-6 lg:px-32 w-full overflow-hidden py-20 text-center"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          With us
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mx-auto mb-8">
        Any queries, contact us anytime
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            <label>Your name</label>
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              name="Name"
              placeholder="Your name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            <label>Your email</label>
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
          </div>
        </div>
        <div className="my-6 text-left">
          <label>Message</label>
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button
          className="bg-blue-600 text-white py-2 px-12 mb-10"
          type="submit"
          disabled={result === "Sending..."} // Disable button while sending
        >
          {result ? result : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
