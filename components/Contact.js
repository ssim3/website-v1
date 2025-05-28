"use client";

import React from "react";
import { toast, Toaster } from "sonner";

const Contact = () => {
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "f6b84a00-a342-41ab-a561-108b9038bf83",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });

    const result = await response.json();

    if (result.success) {
      var form = document.getElementById("form");
      form.reset();

      toast("Mwahahahha I have your personal details now! Just kidding.");
    }
  }

  return (
    <div className="w-full flex-1">
      <form id="form" className="flex flex-col gap-10" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label className="text-sm" htmlFor="name">
            Name
          </label>
          <input
            className="border-b p-2"
            type="text"
            name="name"
            required
            placeholder="Your name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm" htmlFor="email">
            Email
          </label>
          <input
            className="border-b p-2"
            type="email"
            name="email"
            required
            placeholder="email@example.com"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm" htmlFor="message">
            Message
          </label>
          <textarea
            className="border-b p-2"
            name="message"
            required
            rows="3"
            placeholder="Enter Message"
          ></textarea>
        </div>
        <button
          className="group m-auto mr-0 h-5 max-w-[200px] cursor-pointer transition-all duration-300 hover:text-[var(--main)]"
          type="submit"
        >
          Submit
          <span className="block h-0.5 max-w-0 bg-[var(--main)] transition-all duration-500 group-hover:max-w-full"></span>
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default Contact;
