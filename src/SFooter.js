import React from "react";
import Logo from "./Image/Logo.png";

const SFooter = () => {
  return (
    <section className="py-10 bg-gray-200 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <img className="Logo" src={Logo} alt="<LOGO HERE>" />

            <p className="text-base leading-relaxed text-gray-600 mt-7">
              Hi, I'm Pradeep, an IT student passionate about technology and
              innovation. I thrive on solving complex problems and building
              impactful solutions.
            </p>

            <ul className="flex items-center space-x-3 mt-9">
              <li>
                <a
                  href="https://github.com/Pradeep-1496"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Github"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-red-600 focus:bg-blue-600">
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/pradeep_prajapati.21/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Insta"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-red-600 focus:bg-blue-600">
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                    <circle cx="16.806" cy="7.207" r="1.078"></circle>
                    <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://leetcode.com/Pradeep_1496"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LeetCode"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-red-600 focus:bg-blue-600">
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.03 20 4 16.97 4 12C4 7.03 7.03 4 12 4C16.97 4 20 7.03 20 12C20 16.97 16.97 20 12 20ZM12 6C12.55 6 13 6.45 13 7V11C13 11.55 12.55 12 12 12C11.45 12 11 11.55 11 11V7C11 6.45 11.45 6 12 6ZM12 14C12.55 14 13 14.45 13 15V17C13 17.55 12.55 18 12 18C11.45 18 11 17.55 11 17V15C11 14.45 11.45 14 12 14Z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Company
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="/about"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                  {" "}
                  About{" "}
                </a>
              </li>

              <li>
                <a
                  href="/projects"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                  {" "}
                  Projects{" "}
                </a>
              </li>

              <li>
                <a
                  href="/activity"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                  {" "}
                  Activity{" "}
                </a>
              </li>

              <li></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Help
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="/CustomerSupport"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                  {" "}
                  Customer Support{" "}
                </a>
              </li>

              <li>
                <a
                  href="/"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                  {" "}
                  Terms & Conditions{" "}
                </a>
              </li>

              <li>
                <a
                  href="/"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                  {" "}
                  Privacy Policy{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              More About Me
            </p>

            <button
              type="submit"
              className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-black transition-all duration-200 bg-[white] rounded-[10px] rounded-md hover:border-2 hover:border-solid hover:border-[black] hover:text-[#ff0000]">
              <a
                href="https://doc-08-a0-apps-viewer.googleusercontent.com/viewer/secure/pdf/3nb9bdfcv3e2h2k1cmql0ee9cvc5lole/nn1qnt62bglv5je9noo3t3mfp9o4fqdl/1752990375000/drive/*/ACFrOgDXKUXQ2ynXmyzuGd5wRaxAZ6n--oFEVWsREoSA5snRsjFVx1rCTcCXrBssZeBcNrdnv3M9WHBgYMeXgNr56GDzfqG6XmkBEwSO9d3JNManIWO7yVbwBD4-XDFH4Wmb-C5Oy3JnXhw07DaJMXjlU6dD7HNaGfNxXG-V1pionfciuPEGwADyA9XS9b2kJcOPvsLoBsnl-Em29tqd9dZ1nLDdDmD5pw-kQCTZFNCkKNvs8GFhhFg-uOcU2GY=?print=true"
                target="_blank"
                rel="noreferrer">
                Download CV
              </a>
            </button>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-900" />

        <p className="text-sm text-center text-gray-600">
          © Copyright 2024-25, All Rights Reserved by Pradeep
        </p>
      </div>
    </section>
  );
};
export default SFooter;
