import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xc68o2a",
        "template_ypwd7xq",
        form.current,
        "H2xmgS95wzjgO1L5t"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    toast.success("email sent succesfully to mdarifuddin040@gmail.com");
    e.target.reset();
  };
  return (
    <div>
      <h1 className="text-orange-400 mt-16 text-3xl font-bold">Contact Us</h1>
      <div className="flex items-center justify-center mt-24">
        <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full  px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-orange-500  text-xl font-bold mb-2">
                Name
              </label>
              <input
                name="from_name"
                className="shadow-lg shadow-orange-500/50 block w-full bg-gray-200 text-gray-700 border border-none rounded py-3 px-4 mb-3 "
                type="text"
                placeholder="your name"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-orange-500  text-xl font-bold mb-2">
                E-mail
              </label>
              <input
                name="email_id"
                className=" shadow-lg shadow-orange-500/50 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 "
                id="email"
                type="email"
                placeholder="email"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase  tracking-wide text-orange-500 text-xl  font-bold mb-2">
                Message
              </label>
              <textarea
                name="message"
                className="shadow-lg shadow-orange-500/50 no-resize  block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 "
                id="message"
                placeholder="type your message"
                required
              ></textarea>
            </div>
          </div>

          <div className="md:w-1/3">
            <input
              type="submit"
              value="Send"
              className="shadow-lg shadow-orange-500/50   h-10
                px-5
                bg-orange-400
                font-bold
                btn btn-primary
                rounded-lg
                transition-colors
                duration-150
                focus:shadow-outline
                hover:bg-indigo-800"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
