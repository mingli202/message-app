import { motion } from "framer-motion";

export default function Login() {
  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;

    const res = await fetch("http://0.0.0.0:8000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
      return;
    }

    const data = await res.json();
    console.log(data);
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-white font-sans text-black">
      <div className="flex w-[30rem] flex-col justify-center gap-4 rounded-lg bg-[#FFF] p-4 shadow-[rgba(0,_0,_0,_0.16)_0px_10px_36px_0px,_rgba(0,_0,_0,_0.06)_0px_0px_0px_1px]">
        <h1 className="p-1 text-4xl tracking-tight">Login</h1>

        <form className="flex flex-col gap-5" onSubmit={login}>
          <label htmlFor="username" className="flex flex-col">
            <span className="p-2">Username</span>
            <input
              id="username"
              className="w-full rounded-full bg-1/20 p-2 outline-none transition focus:bg-1/30"
              placeholder="example_user_123"
              required
            />
          </label>
          <label htmlFor="password" className="flex flex-col">
            <span className="p-2">Password</span>
            <input
              id="password"
              className="w-full rounded-full bg-1/20 p-2 outline-none transition focus:bg-1/30"
              type="password"
              required
            />
          </label>
          <LoginButton />
        </form>
      </div>
    </div>
  );
}

function LoginButton() {
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
      Login
    </motion.button>
  );
}
