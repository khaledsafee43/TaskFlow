import { ArrowRightIcon, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function SignUp() {
  // =========================
  // States
  // =========================

  const [show, setShow] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmePassword, setConfirmePassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [termsTouched, setTermsTouched] = useState(false);

  // =========================
  // Validation
  // =========================

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isFullNameEntered = fullName.length !== 0;
  const isFullNameValid = fullName.length >= 3 && fullName.length <= 15;

  const isEmailEntered = email.length !== 0;
  const isEmailValid = emailRegex.test(email);

  const passwordChecks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    symbol: /[^A-Za-z0-9]/.test(password),
  };

  const strength = Object.values(passwordChecks).filter(Boolean).length;

  const isPasswordValid =
    passwordChecks.length && passwordChecks.uppercase && passwordChecks.symbol;

  const passwordMatch = confirmePassword && confirmePassword === password;

  const isConfirmPasswordValid = confirmePassword.length !== 0 && passwordMatch;

  const isTermsValid = agreeTerms;

  const isValidForm =
    isFullNameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid &&
    isTermsValid;

  // =========================
  // UI Classes
  // =========================

  const fullNameInputClass = isFullNameEntered
    ? isFullNameValid
      ? "border-2 border-green-400 focus:ring-2 focus:ring-green-400/50"
      : "border-red-400 focus:ring-2 focus:ring-red-400"
    : "";

  const emailInputClass = isEmailEntered
    ? isEmailValid
      ? "border-2 border-green-400 focus:ring-2 focus:ring-green-400/50"
      : "border-red-400 focus:ring-2 focus:ring-red-400"
    : "";

  const passwordStrengthText =
    strength === 3 ? "Strong" : strength === 2 ? "Medium" : "Weak";

  const passwordStrengthWidth =
    strength === 1
      ? "w-1/3 bg-red-500"
      : strength === 2
        ? "w-2/3 bg-yellow-500"
        : strength === 3
          ? "w-full bg-green-600"
          : "w-0";

  return (
    <main className="min-h-[884px] w-full flex items-center justify-center p-gutter relative bg-surface-container-low/40">
      <div className="relative bg-surface-container-lowest rounded-xl shadow-xl p-8 transition-all">
        {/* =========================
            Header
        ========================= */}

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

        {/* =========================
            Form
        ========================= */}

        <form action="#" className="w-full flex flex-col">
          {/* =========================
              Full Name
          ========================= */}

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
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
                placeholder="Enter your name"
                className={`w-full h-[40px] outline-none pl-3.5 pr-10 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md outline-none transition-shadow focus:ring-2 focus:ring-blue-600/50 ${fullNameInputClass}`}
              />

              {isFullNameValid && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-green-900 py-0.3 px-1.5 text-white font-bold inline-block rounded-full">
                  ✓
                </span>
              )}
            </div>
          </div>

          {/* =========================
              Email
          ========================= */}

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
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="name@example.com"
                className={`w-full h-[40px] outline-none pl-3.5 pr-10 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md outline-none transition-shadow focus:ring-2 focus:ring-blue-600/50 ${emailInputClass}`}
              />

              {isEmailValid && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-green-900 py-0.3 px-1.5 text-white font-bold inline-block rounded-full">
                  ✓
                </span>
              )}
            </div>
          </div>

          {/* =========================
              Password
          ========================= */}

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label
                htmlFor="password"
                className="block font-label-md text-label-md text-on-surface"
              >
                Password
              </label>

              <button
                type="button"
                onClick={() => setShow(!show)}
                className="text-gray-500 hover:text-gray-700"
              >
                {show ? (
                  <Eye className="h-5 w-5" />
                ) : (
                  <EyeOff className="h-5 w-5" />
                )}
              </button>
            </div>

            <div className="relative">
              <input
                type={show ? "text" : "password"}
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="w-full h-[40px] outline-none pl-3.5 pr-10 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md outline-none transition-shadow shadow-sm focus:ring-2 focus:ring-blue-600/50"
              />

              <p className="text-red-600">
                {password.length < 6 &&
                  password.length !== 0 &&
                  "Your password must be greater than 6"}
              </p>
            </div>

            {/* Password Strength */}

            <div className="mt-2 rounded-lg bg-slate-50 p-3">
              <div className="mb-2 flex justify-between text-xs">
                <span className="text-slate-500">Strength Assessment</span>

                <span className="font-medium text-green-600">
                  {passwordStrengthText}
                </span>
              </div>

              <div className="h-1.5 rounded-full bg-slate-200">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${passwordStrengthWidth}`}
                />
              </div>

              <div className="mt-2 flex gap-3 text-[10px]">
                <span
                  className={
                    passwordChecks.length ? "text-green-600" : "text-gray-400"
                  }
                >
                  ✓ 8+ chars
                </span>

                <span
                  className={
                    passwordChecks.uppercase
                      ? "text-green-600"
                      : "text-gray-400"
                  }
                >
                  ✓ Uppercase
                </span>

                <span
                  className={
                    passwordChecks.symbol ? "text-green-600" : "text-gray-400"
                  }
                >
                  ✓ Symbol
                </span>
              </div>
            </div>
          </div>

          {/* =========================
              Confirm Password
          ========================= */}

          <div className="flex flex-col">
            <label
              htmlFor="confirmPassword"
              className="py-1.5block font-label-md text-label-md text-on-surface mb-1.5"
            >
              Confirm Password
            </label>

            <div className="relative">
              <input
                type={show ? "text" : "password"}
                id="confirmPassword"
                onChange={(e) => setConfirmePassword(e.target.value)}
                value={confirmePassword}
                className="w-full h-[40px] outline-none pl-3.5 pr-10 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md outline-none transition-shadow shadow-sm focus:ring-2 focus:ring-blue-600/50"
              />

              {confirmePassword && (
                <p
                  className={`mt-1 text-xs ${
                    passwordMatch ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {passwordMatch
                    ? "✓ Passwords match"
                    : "✕ Passwords do not match"}
                </p>
              )}
            </div>
          </div>

          {/* =========================
              Terms & Privacy
          ========================= */}

          <div className="flex flex-col gap-1 py-3">
            <div className="flex items-center justify-between gap-1">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => {
                  setAgreeTerms(e.target.checked);
                  setTermsTouched(true);
                }}
              />

              <p className="text-gray-500">
                I agree to{" "}
                <span className="font-medium text-blue-900">
                  Terms of Services
                </span>{" "}
                and{" "}
                <span className="font-semibold text-blue-900">
                  Privacy Policy
                </span>
              </p>
            </div>

            {termsTouched && !agreeTerms && (
              <p className="text-xs text-red-500">
                You must agree to the Terms of Services and Privacy Policy
              </p>
            )}
          </div>

          {/* =========================
              Submit
          ========================= */}

          {isValidForm && (
            <button className="bg-blue-800 flex justify-center items-center gap-2 text-white py-3 px-4 rounded-md hover:bg-blue-700">
              Create Account <ArrowRightIcon />
            </button>
          )}
        </form>
      </div>
    </main>
  );
}
