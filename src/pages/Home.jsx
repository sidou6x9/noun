import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Data to enrich your online business
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 ">
              <a
                href="#"
                className="rounded-md bg-amber-500 text-gray-900 px-3.5 py-2.5 text-sm font-semibold  shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative max-w-screen-xl p-4 px-4 mx-auto bg-white  dark:bg-gray-800 sm:px-6 lg:px-8 py-26 lg:mt-20">
        <div className="relative">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
              <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">
                Interactive Collaboration
              </p>
              <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                Foster Team Collaboration for Success
              </h4>
              <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                Build a simple yet powerful collaborative space for your team.
                Track progress, share insights, and measure performance. With
                full control, efficiency has never been easier.
              </p>
              <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
                <li className="mt-6 lg:mt-0">
                  <div className="flex">
                    <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                      Real-time Collaboration
                    </span>
                  </div>
                </li>
                <li className="mt-6 lg:mt-0">
                  <div className="flex">
                    <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                      Performance Tracking
                    </span>
                  </div>
                </li>
                <li className="mt-6 lg:mt-0">
                  <div className="flex">
                    <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                      24/7 Support
                    </span>
                  </div>
                </li>
                <li className="mt-6 lg:mt-0">
                  <div className="flex">
                    <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                      Expert Tips for Efficiency
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
              <div className="relative space-y-4">
                <div className="flex items-end justify-center space-x-4 lg:justify-start">
                  <img
                    className="w-32 rounded-lg shadow-lg md:w-56"
                    width="200"
                    src="/female-designing.jpg"
                    alt="female-designing1"
                  />
                  <img
                    className="w-40 rounded-lg shadow-lg md:w-64"
                    width="260"
                    src="/problem-solving.jpg"
                    alt="problem-solving"
                  />
                </div>
                <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                  <img
                    className="w-24 rounded-lg shadow-lg md:w-40"
                    width="170"
                    src="/textures.jpg"
                    alt="textures"
                  />
                  <img
                    className="w-32 rounded-lg shadow-lg md:w-56"
                    width="200"
                    src="/officeWork.jpg"
                    alt="officeWork"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container p-6 px-6 mx-auto bg-white dark:bg-gray-800 lg:mt-20 lg:mb-20">
        <div className="mb-16 text-center">
          <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
            Our Services
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Crafting Brands That Shine
          </p>
        </div>
        <div className="flex flex-wrap my-12 dark:text-white">
          <div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3">
            <div className="flex items-center mb-6">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="w-6 h-6 text-indigo-500"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
              </svg>
              <div className="ml-4 text-xl">Creative Design</div>
            </div>
            <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
              Stand out from the crowd with our creative and innovative logo and
              brand design solutions.
            </p>
          </div>
          <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r">
            <div className="flex items-center mb-6">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="w-6 h-6 text-indigo-500"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
              </svg>
              <div className="ml-4 text-xl">Unique Identity</div>
            </div>
            <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
              Build a unique identity for your business with logos and brands
              that truly reflect your vision and values.
            </p>
          </div>
          <div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0">
            <div className="flex items-center mb-6">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="w-6 h-6 text-indigo-500"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
              </svg>
              <div className="ml-4 text-xl">Strategic Branding</div>
            </div>
            <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
              Our strategic approach to branding ensures that your business
              connects with your target audience effectively.
            </p>
          </div>
          <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0">
            <div className="flex items-center mb-6">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="w-6 h-6 text-indigo-500"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
              </svg>
              <div className="ml-4 text-xl">Brand Identity Development</div>
            </div>
            <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
              Develop a cohesive brand identity that resonates with your
              audience and sets you apart from the competition.
            </p>
          </div>
          <div className="w-full p-8 border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0">
            <div className="flex items-center mb-6">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="w-6 h-6 text-indigo-500"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
              </svg>
              <div className="ml-4 text-xl">Visual Identity Enhancement</div>
            </div>
            <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
              Enhance your visual identity with captivating designs that leave a
              lasting impression on your audience.
            </p>
          </div>
          <div className="w-full p-8 md:w-1/2 lg:w-1/3">
            <div className="flex items-center mb-6">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="w-6 h-6 text-indigo-500"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
              </svg>
              <div className="ml-4 text-xl">Brand Consultation</div>
            </div>
            <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
              Get expert advice and guidance on building and maintaining a
              strong brand presence in the mark
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Elevate Your Brand with Us
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-200">
            We are passionate about creating unique and memorable brand
            identities that captivate your audience and elevate your business.
          </p>
          <p className="mt-4 text-lg leading-6 text-gray-200">
            Our team of experienced designers combines creativity with strategic
            thinking to craft logos and brands that reflect your company's
            values and resonate with your target audience.
          </p>
          <p className="mt-8">
            <NavLink
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
            >
              Get Started
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
