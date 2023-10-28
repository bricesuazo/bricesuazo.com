"use client";

// import { useState } from "react";
import clsx from "clsx";
import {
  // AlertTriangleIcon,
  Loader2,
  // CheckCircleIcon,
} from "lucide-react";

export function Contact() {
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setSuccess("");
  //   setError("");

  //   const { email, name, message } = formData;

  //   if (!email || !isEmail(email)) {
  //     setInvalid({
  //       ...invalid,
  //       email: true,
  //     });

  //     return setError("Please enter a valid email address!");
  //   } else if (email.trim().length < 5 || email.trim().length > 50) {
  //     setInvalid({
  //       ...invalid,
  //       email: true,
  //     });
  //     return setError("Email address must be between 5 and 50 characters!");
  //   } else if (!name || name.trim().length === 0) {
  //     setInvalid({
  //       ...invalid,
  //       name: true,
  //     });
  //     return setError("Please enter your name!");
  //   } else if (
  //     !name.trim() ||
  //     name.trim().length < 3 ||
  //     name.trim().length > 20
  //   ) {
  //     setInvalid({
  //       ...invalid,
  //       name: true,
  //     });
  //     return setError("Name must be between 3 and 20 characters!");
  //   } else if (!message || message.trim().length === 0) {
  //     setInvalid({
  //       ...invalid,
  //       message: true,
  //     });
  //     return setError("Please enter a message!");
  //   } else if (
  //     !message.trim() ||
  //     message.trim().length < 10 ||
  //     message.trim().length > 500
  //   ) {
  //     setInvalid({
  //       ...invalid,
  //       message: true,
  //     });
  //     return setError("Message must be between 10 and 500 characters!");
  //   }

  //   const data = { email, name, message };

  //   setLoading(true);

  //   await fetch("/api/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setLoading(false);
  //       if (data.error) {
  //         setInvalid({
  //           ...invalid,
  //           [data.type]: true,
  //         });
  //         setError(data.message);
  //       } else {
  //         setFormData({ email: "", name: "", message: "" });
  //         setInvalid({
  //           email: false,
  //           name: false,
  //           message: false,
  //         });
  //         setSuccess(data.message);
  //       }
  //     });
  // };

  // const handleChange = (e, type) => {
  //   setSuccess("");
  //   setError("");

  //   if (
  //     type === "email" &&
  //     (e.target.value.trim().length === 0 || isEmail(e.target.value))
  //   ) {
  //     setInvalid({
  //       ...invalid,
  //       email: false,
  //     });
  //   } else if (
  //     type === "email" &&
  //     (!isEmail(e.target.value) ||
  //       e.target.value.trim().length < 5 ||
  //       e.target.value.trim().length > 50)
  //   ) {
  //     setInvalid({
  //       ...invalid,
  //       email: true,
  //     });
  //   }

  //   if (
  //     (type === "name" && e.target.value.trim().length === 0) ||
  //     (e.target.value.trim().length >= 3 && e.target.value.trim().length <= 20)
  //   ) {
  //     setInvalid({
  //       ...invalid,
  //       name: false,
  //     });
  //   } else if (
  //     type === "name" &&
  //     (e.target.value.trim().length < 3 || e.target.value.trim().length > 20)
  //   ) {
  //     setInvalid({
  //       ...invalid,
  //       name: true,
  //     });
  //   }

  //   if (type === "message" && e.target.value.trim().length > 500) {
  //     setInvalid({
  //       ...invalid,
  //       message: true,
  //     });

  //     return setFormData({
  //       ...formData,
  //       message: e.target.value.trim().slice(0, 500),
  //     });
  //   } else if (
  //     type === "message" &&
  //     e.target.value.trim().length >= 10 &&
  //     e.target.value.trim().length <= 500
  //   ) {
  //     setInvalid({
  //       ...invalid,
  //       message: false,
  //     });
  //   }

  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  return (
    <form
      // onSubmit={handleSubmit}
      className="relative flex w-full flex-col items-center justify-center"
    >
      <div className="z-[2] block w-full items-center justify-center gap-1.5 text-left md:flex">
        <label
          htmlFor="name"
          className="w-full text-left text-sm font-semibold tracking-wide text-gray-700 dark:text-neutral-300"
        >
          Name
          <span
            aria-hidden={true}
            className="cursor-help text-red-500"
            title="Required"
          >
            *
          </span>
          <input
            name="name"
            id="name"
            className={clsx(
              "my-2 w-full rounded-lg border-[1px] p-2 font-normal outline-0 duration-200 dark:bg-transparent",
            )}
            type="text"
            placeholder="John Doe"
          />
        </label>
        <label
          htmlFor="email"
          className="w-full text-left text-sm font-semibold tracking-wide text-gray-700 dark:text-neutral-300"
        >
          Email
          <span
            aria-hidden={true}
            className="cursor-help text-red-500"
            title="Required"
          >
            *
          </span>
          <input
            name="email"
            id="email"
            className={clsx(
              "my-2 w-full rounded-lg border-[1px] p-2 font-normal outline-0 duration-200 dark:bg-transparent",
            )}
            type="email"
            placeholder="john@doe.com"
          />
        </label>
      </div>
      <div className="mt-2 flex w-full flex-col items-center justify-center gap-1.5">
        <label
          htmlFor="message"
          className="w-full text-left text-sm font-semibold tracking-wide text-gray-700 dark:text-neutral-300"
        >
          Message
          <span
            aria-hidden={true}
            className="cursor-help text-red-500"
            title="Required"
          >
            *
          </span>
          <textarea
            name="message"
            id="message"
            className={clsx(
              "mt-2 max-h-40 min-h-[80px] w-full rounded-lg border-[1px] p-2 font-normal outline-0 duration-200 dark:bg-transparent",
            )}
            placeholder="Hello there!"
          />
        </label>
      </div>

      {/* {success && (
        <p className="flex items-center self-start text-green-500">
          <CheckCircleIcon className="mr-1 h-4 w-4" />
          {success}
        </p>
      )}
      {error && (
        <p className="flex items-center self-start text-red-400 ">
          <AlertTriangleIcon className="mr-1 h-4 w-4" />
          {error}
        </p>
      )} */}
      <div className="w-full py-2">
        <button
          className="group ml-auto mt-2 flex w-fit rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 duration-200 hover:bg-blue-200 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none dark:bg-white/[10%] dark:text-white dark:hover:bg-white/[15%]"
          type="submit"
        >
          {
            <>
              <>
                Sending
                <Loader2 className="ml-2 mt-[2px] h-4 w-4 animate-spin duration-200 motion-reduce:transition-none" />
              </>

              <>
                Send
                <svg
                  className="ml-2 mt-[2px] h-4 w-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </>
            </>
          }
        </button>
      </div>
    </form>
  );
}
