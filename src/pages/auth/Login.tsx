import { EyeIcon, EyeClosedIcon, ArrowRightIcon } from "lucide-react";
import { useState } from "react";
export default function Login() {
  const [show, setShow] = useState(true);
  return (
    <main className="min-h-[884px] w-full flex items-center justify-center p-gutter relative bg-surface-container-low/40">
      <div className="relative bg-surface-container-lowest rounded-xl shadow-xl p-8 transition-all">
        <div className="w-full py-6 flex flex-col gap-3 justify-center items-center">
          <img
            src="taskflow_logo.png"
            className="w-16 h-16 rounded-md border-blue-200 border-8"
            alt="The logo of the task flow"
          />
          <p className="text-blue-900 font-semibold px-4 rounded-4xl flex items-center justify-center gap-1 bg-blue-200">
            <span className="w-2 rounded-full h-2 bg-blue-900 inline-block"></span>{" "}
            workspace setup
          </p>
        </div>
        <div>
          <h1 className="font-bold font-serif text-center text-2xl">
            Create your account
          </h1>
          <p className="font-medium text-stone-400 text-center font-serif">
            start organizing projects and tracking task today
          </p>
        </div>

        <form action="#" className="w-full flex flex-col">
          <div>
            <label
              htmlFor="fullname"
              className="py-1.5block font-label-md text-label-md text-on-surface mb-1.5"
            >
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="fullname"
                placeholder="Enter your name"
                className="w-full h-[40px] pl-3.5 pr-10 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md outline-none transition-shadow shadow-sm focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="py-1.5block font-label-md text-label-md text-on-surface mb-1.5"
            >
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder="name@example.com"
                className="w-full h-[40px] pl-3.5 pr-10 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md outline-none transition-shadow shadow-sm focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label
                htmlFor="password"
                className="block font-label-md text-label-md text-on-surface"
              >
                Password
              </label>
              <button onClick={() => setShow(!show)}>
                {show ? <EyeIcon /> : <EyeClosedIcon />}
              </button>
            </div>
            <div className="relative">
              <input
                type="password"
                id="password"
                className="w-full h-[40px] pl-3.5 pr-10 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md outline-none transition-shadow shadow-sm focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <p>
                <span></span>
              </p>
              <p>
                <span></span>
              </p>
              <p>
                <span></span>
              </p>
              <p>
                <span></span>
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="confirmPassword"
              className="py-1.5block font-label-md text-label-md text-on-surface mb-1.5"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="confirmPassword"
                className="w-full h-[40px] pl-3.5 pr-10 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md outline-none transition-shadow shadow-sm focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <p></p>
          </div>
          <div className="flex gap-1 py-3">
            <input type="checkbox" />
            <p className="text-gray-500">
              I agree to the{" "}
              <span className="text-blue-900 font-medium">
                {" "}
                Terms of Services
              </span>{" "}
              and{" "}
              <span className="text-blue-900 font-semibold">
                Privacy Policy
              </span>
            </p>
          </div>
          <button className="bg-blue-800 flex justify-center items-center gap-2 text-white py-3 px-4 rounded-md hover:bg-blue-700">
            Create Account <ArrowRightIcon />
          </button>
        </form>
      </div>
    </main>
  );
}
