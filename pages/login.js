import Image from "next/image";
import React from "react";

const login = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#F2EEE3]">
      <div className="relative w-[100%] bg-[url('/bg-halfton.png')] bg-no-repeat">
        <Image src="/Group.png" alt="chronics" width="393" height="385" />
        <button></button>
        <button
          type="button"
          class="absolute top-[67px] left-[20px] inline-block rounded-full bg-[#707070] text-white leading-normal uppercase shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out w-[40px] h-[40px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="w-9 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col px-4 sm:px-6 md:px-8 lg:px-10 py-8  w-full max-w-md">
        <div className="font-lemondeliver font-bold self-center text-xl sm:text-2xl uppercase text-gray-800">
          Se Connecter
        </div>
        <div className="mt-10">
          <form action="#">
            <div className="flex flex-col mb-6">
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="text-sm sm:text-base placeholder-gray-500 pl-6 pr-4 rounded-lg borde w-full h-[58px] py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Adresse email"
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="text-sm sm:text-base placeholder-gray-500 pl-6 pr-4 rounded-lg border w-full h-[58px] py-2 focus:outline-none focus:border-blue-400"
                  placeholder="mote de passe"
                />
              </div>
            </div>

            <div className="flex items-center mb-6 -mt-4">
              <div className="flex ml-auto">
                <a
                  href="#"
                  className="font-opensans inline-flex text-[14px] sm:text-sm text-[#DF1F26] hover:text-red-700"
                >
                  Mot de passe oublié ?
                </a>
              </div>
            </div>

            <div className="flex w-full">
              <button
                type="submit"
                className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-[#282828] hover:bg-[#111111] rounded-full py-2 w-full h-[58px] transition duration-150 ease-in"
              >
                <span className="mr-2 uppercase">SE CONNECTER</span>
              </button>
            </div>
          </form>
        </div>
        <div className="relative mt-10 h-px bg-[#282828]">
          <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
            <span className="bg-[#F2EEE3] px-4 text-xs text-[#282828] uppercase">
              ou continuer avec
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center mt-6">
          <div>
            <Image src="/google.svg" width="50" height="50" alt="" />
          </div>
          <div>
            <Image src="http://placehold.it/50" width="50" height="50" alt="" />
          </div>
          <div>
            <Image src="http://placehold.it/50" width="50" height="50" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
