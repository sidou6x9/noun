import React from "react";

function ContactForm() {
  return (
    <section
      className="  dark:bg-gray-900"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(61,178,169,1) 27%, rgba(29,102,72,1) 70%, rgba(29,76,56,1) 82%)",
      }}
    >
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-stone-300 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-medium text-center text-gray-200 dark:text-gray-50 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>

        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-semibold text-gray-200 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-semibold text-gray-200 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-semibold text-gray-200 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className=" bg-stone-50 hover:before:bg-stone-950  relative p-2 overflow-hidden font-bold   px-3  transition before:absolute before:bottom-0 before:left-0 before:text-stone-100 before:top-0 before:z-0 before:h-full before:w-0 before:  before:transition-all before:duration-500 hover:text-emerald-300 
            hover:before:left-0 hover:before:w-full"
          >
            <span className="relative z-10" aria-hidden="true">
              Send message &rarr;
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
