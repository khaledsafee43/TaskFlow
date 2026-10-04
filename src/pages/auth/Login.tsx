import { ArrowRightIcon, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { SiGithub, SiGoogle } from "react-icons/si";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = password.length >= 8;
  function handleSubmit(e) {
    e.preventDefault();
    if (!isValidForm) {
      setError("Please fill in all fields with valid information.");
      return;
    }
    setError("");
    // Proceed with login logic
  }
  const isValidForm = isEmailValid && isPasswordValid;
  return (
    <main className="min-h-screen bg-[#f5f7ff] flex flex-col items-center  justify-center px-4">
      <div className="flex flex-col items-center mb-5">
        <img
          src="taskflow_logo.png"
          className="w-16 h-16 rounded-md mb-2"
          alt="The logo of the task flow"
        />
        <h1 className="text-2xl font-bold flex items-center-safe gap-1">
          TaskFlow{" "}
          <span className="text-indigo-600 inline-block bg-indigo-600/15 text-[14px] font-semibold py-0.5 px-3 rounded-full">
            V2.4
          </span>
        </h1>
        <p className="w-72 text-center">
          Sign in to manage your tasks and stay productive
        </p>
      </div>
      <div className="w-full max-w-[360px]">
        <div className="bg-white rounded-lg shadow-lg p-5">
          <div className="grid grid-cols-2 gap-2 pt-5 mb-3">
            <button
              type="button"
              className="h-9 rounded-md bg-[#f0f4ff] text-xs font-medium flex items-center justify-center gap-2 hover:bg-[#e5ebff]"
            >
              <SiGoogle size={22} />
              Google
            </button>

            <button
              type="button"
              className="h-9 rounded-md bg-[#f0f4ff] text-xs font-medium flex items-center justify-center gap-2 hover:bg-[#e5ebff]"
            >
              <SiGithub size={22} />
              GitHub
            </button>
          </div>

          <p className="flex justify-center gap-1 items-center text-center w-full text-gray-400">
            <span className="inline-block bg-gray-900/20 h-[1px] w-23"></span>
            OR WITH EMAIL{" "}
            <span className="inline-block bg-gray-900/20 h-[1px] w-23"></span>
          </p>
          <form className="mt-3 flex flex-col gap-2" onSubmit={handleSubmit}>
            <label className="block text-xs font-medium mb-1">
              Email address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full h-10 px-3 rounded-md bg-[#f0f4ff] text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="relative">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-10 px-3 pr-10 rounded-md bg-[#f0f4ff] text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-11 -translate-y-1/2"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            <div className="flex items-center justify-between mt-2 text-[13px]">
              <label className="flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me for 30 days
              </label>

              <button type="button" className="text-indigo-600">
                Forgot password?
              </button>
            </div>
            <button
              type="submit"
              disabled={!isValidForm}
              className={`w-full h-10 mt-4 rounded-md text-white text-sm font-semibold flex items-center justify-center gap-2 ${
                isValidForm
                  ? "bg-indigo-700 hover:bg-indigo-800 cursor-pointer"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Sign in to TaskFlow
              <ArrowRightIcon size={16} />
            </button>
          </form>
        </div>
      </div>
      <p className="text-[16px] text-gray-600">
        Don't have an account?{" "}
        <a
          href="/signup"
          className="text-indigo-600 font-bold underline-offset-4 hover:underline"
        >
          Sign up for free
        </a>
      </p>
    </main>
  );
}
