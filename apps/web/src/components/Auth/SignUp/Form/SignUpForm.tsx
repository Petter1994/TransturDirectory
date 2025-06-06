"use client";
import { useActionState } from "react";
import SignUpBtn from "@/components/Auth/SignUp/Btn/SignUpBtn";
import { signUp } from "@/lib/request/auth";

export default function SignUpForm() {
  const [state, action] = useActionState(signUp, undefined);

  return (
    <>
      <form action={action}>
        {
          state?.message && (
            <p className="text-sm text-red-500">{state.message}</p>
          )
        }
        <div className="mb-8">
          <label
            htmlFor="username"
            className="text-dark mb-3 block text-sm dark:text-white"
          >
            {" "}
            Usuario{" "}
          </label>
          <input
            type="text"
            name="username"
            placeholder="Entre su usuario de dominio"
            className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
          />
          {
            state?.error?.username && (
              <p className="text-sm text-red-500">{state.error.username}</p>
            )
          }

        </div>
        <div className="mb-8">
          <label
            htmlFor="email"
            className="text-dark mb-3 block text-sm dark:text-white"
          >
            {" "}
            Correo{" "}
          </label>
          <input
            type="email"
            name="email"
            placeholder="Entre su correo electrónico"
            className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
          />
          {
            state?.error?.email && (
              <p className="text-sm text-red-500">{state.error.email}</p>
            )
          }
        </div>
        <div className="mb-8">
          <label
            htmlFor="password"
            className="text-dark mb-3 block text-sm dark:text-white"
          >
            {" "}
            Contraseña{" "}
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
          />
        </div>
        {
          state?.error?.password && (
            <p className="text-sm text-red-500">{state.error.password}</p>
          )
        }
        {/*<div className="mb-8 flex">*/}
        {/*  <label*/}
        {/*    htmlFor="checkboxLabel"*/}
        {/*    className="text-body-color flex cursor-pointer text-sm font-medium select-none"*/}
        {/*  >*/}
        {/*    <div className="relative">*/}
        {/*      <input*/}
        {/*        type="checkbox"*/}
        {/*        id="checkboxLabel"*/}
        {/*        className="sr-only"*/}
        {/*      />*/}
        {/*      <div*/}
        {/*        className="box border-body-color/20 mt-1 mr-4 flex h-5 w-5 items-center justify-center rounded-sm border dark:border-white/10">*/}
        {/*                  <span className="opacity-0">*/}
        {/*                    <svg*/}
        {/*                      width="11"*/}
        {/*                      height="8"*/}
        {/*                      viewBox="0 0 11 8"*/}
        {/*                      fill="none"*/}
        {/*                      xmlns="http://www.w3.org/2000/svg"*/}
        {/*                    >*/}
        {/*                      <path*/}
        {/*                        d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"*/}
        {/*                        fill="#3056D3"*/}
        {/*                        stroke="#3056D3"*/}
        {/*                        strokeWidth="0.4"*/}
        {/*                      />*/}
        {/*                    </svg>*/}
        {/*                  </span>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <span>*/}
        {/*                By creating account means you agree to the*/}
        {/*                <a href="#0" className="text-primary hover:underline">*/}
        {/*                  {" "}*/}
        {/*                  Terms and Conditions{" "}*/}
        {/*                </a>*/}
        {/*                , and our*/}
        {/*                <a href="#0" className="text-primary hover:underline">*/}
        {/*                  {" "}*/}
        {/*                  Privacy Policy{" "}*/}
        {/*                </a>*/}
        {/*              </span>*/}
        {/*  </label>*/}
        {/*</div>*/}
        <div className="mb-6">
          <SignUpBtn />
        </div>
      </form>
    </>
  );
}