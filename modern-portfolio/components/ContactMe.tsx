import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:victerphiathep@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="font-mono min-h-screen flex flex-col md:flex-row justify-center items-center px-5 lg:px-10">
      <div className="md:w-1/2">
        <h4 className="lg:text-4xl text-xl font-semibold text-center md:text-left">
          Let's Build Together,{" "}
          <span className="text-[#F7AB0A] underline">Get in Touch.</span>
        </h4>

        <div className="space-y-5 md:space-y-10 mt-5">
          <div className="flex items-center space-x-3">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl">609-515-0652</p>
          </div>

          <div className="flex items-center space-x-3">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl">victerphiathep@gmail.com</p>
          </div>

          <div className="flex items-center space-x-3">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl">New Jersey, USA</p>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 mt-5 md:mt-0">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3 max-w-md mx-auto"
        >
          <div className="space-y-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              type="text"
            />
          </div>

          <div className="space-y-2">
            <input
              {...register("email")}
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              type="email"
            />
          </div>

          <div className="space-y-2">
            <input
              {...register("subject")}
              placeholder="Subject"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              type="text"
            />
          </div>

          <div className="space-y-2">
            <textarea
              {...register("message")}
              placeholder="Message"
              className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none"
              rows={4}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#F7AB0A] py-3 px-6 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
