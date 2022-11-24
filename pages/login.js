import Image from "next/image";
import { useState } from "react";
import React from "react";
import axios from "axios";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: email,
      password,
    };

    axios
      .post("https://chronics.v1.ajicreative.club/api/v1/login_check", user)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          window.localStorage.setItem(key, res.data.token);
          window.location = "/";
        } else {
          console.log("error", res.data.message);
          setErrMsg(res.data.message);
        }
      })
      .catch((err) => {
        setErrMsg(err.response);
        console.log(err.response);
      });
  };
  return (
    <div className="flex flex-col items-center justify-center bg-[#F2EEE3]">
      <div className="relative w-[100%] bg-[url('/bg-halfton.png')] bg-no-repeat">
        <Image src="/Group.png" alt="chronics" width="393" height="385" />
        <button></button>
        <button
          type="button"
          className="absolute top-[67px] left-[20px] inline-block rounded-full bg-[#707070] text-white leading-normal uppercase shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out w-[40px] h-[40px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            className="w-9 h-6"
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
        {/* 
        <div
          class="bg-red-100 rounded-lg py-5 px-6 mb-3 text-base text-red-700 inline-flex items-center w-full"
          role="alert"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="times-circle"
            class="w-4 h-4 mr-2 fill-current"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
            ></path>
          </svg>
          {error}
        </div> */}

        <div className="mt-10">
          <form action="#">
            <div className="flex flex-col mb-6">
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  className="text-sm sm:text-base placeholder-gray-500 pl-6 pr-4 rounded-lg border w-full h-[58px] py-2 focus:outline-none focus:border-blue-400"
                  placeholder="mote de passe"
                />
              </div>
            </div>
            {JSON.stringify({ email, password })}
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
                onClick={handleSubmit}
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
            <span className="font-opensans bg-[#F2EEE3] px-4 text-xs text-[#282828] uppercase">
              ou continuer avec
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center margin-social">
          <div>
            <Image src="/google.svg" width="43" height="43" alt="google" />
          </div>
          <div>
            <Image src="/facebook.svg" width="43" height="43" alt="facebook" />
          </div>
          <div>
            <Image src="/apple.svg" width="43" height="43" alt="apple" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
