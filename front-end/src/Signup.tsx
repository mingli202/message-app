import { motion } from "framer-motion";

export default function Signup() {
  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const password = e.currentTarget.password.value;
    const confirmPassword = e.currentTarget.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }

    const res = await fetch("http://0.0.0.0:8000/auth/signup", {
      method: "POST",
      body: new FormData(e.currentTarget),
    });

    if (!res.ok) {
      console.log("erorr");
      return;
    }

    console.log("success");
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-white font-sans text-black">
      <div className="flex w-[30rem] flex-col justify-center gap-4 rounded-lg bg-[#FFF] p-4 shadow-[rgba(0,_0,_0,_0.16)_0px_10px_36px_0px,_rgba(0,_0,_0,_0.06)_0px_0px_0px_1px]">
        <h1 className="p-1 text-4xl tracking-tight">Sign Up</h1>

        <form className="flex flex-col gap-5" onSubmit={login}>
          <label htmlFor="username" className="flex flex-col">
            <span className="p-2">Username</span>
            <input
              id="username"
              name="username"
              className="w-full rounded-full bg-1/20 p-2 outline-none transition focus:bg-1/30"
              placeholder="example_user_123"
              required
            />
          </label>
          <label htmlFor="password" className="flex flex-col">
            <span className="p-2">Password</span>
            <input
              id="password"
              name="password"
              className="w-full rounded-full bg-1/20 p-2 outline-none transition focus:bg-1/30"
              type="password"
              required
            />
          </label>
          <label htmlFor="confirmPassword" className="flex flex-col">
            <span className="p-2">Confirm Password</span>
            <input
              id="confirmPassword"
              className="w-full rounded-full bg-1/20 p-2 outline-none transition focus:bg-1/30"
              type="password"
              required
            />
          </label>

          <p
            className="cursor-pointer hover:underline"
            onClick={() => {
              window.location.assign("/login");
            }}
          >
            Already have an account? Login!
          </p>

          <SignupButton />
        </form>
      </div>
    </div>
  );
}

function SignupButton() {
  return (
    <motion.button
      type="submit"
      className="rounded-full p-2"
      initial={{
        outline: "solid #AAA 1px",
        backgroundColor: "#FFF",
        shadow: "rgba(255, 255, 255, 1) 0px 8px 24px",
      }}
      whileHover={{
        outline: "solid #FFF 1px",
        scale: 1.05,
        backgroundColor: "#bde0fe",
        shadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
    >
      Sign Up
    </motion.button>
  );
}
