import { useEffect, useState } from "react";

import Login from "./Login";
import Signup from "./Signup";

export default function App() {
  const [state, setState] = useState<"login" | "signup" | "authenticated">(
    "login",
  );
  const url = window.location.href.replace(/https?:\/\//, "");

  useEffect(() => {
    const path = url.split("/")[1];

    if (path === "login" || path === "") {
      setState("login");
    } else if (path === "signup") {
      setState("signup");
    }
  }, [url]);

  return (
    <>
      {state === "login" && <Login />}
      {state === "signup" && <Signup />}
      {state === "authenticated" && <p>Authenticated</p>}
    </>
  );
}
