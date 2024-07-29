import { useState } from "react";

import Login from "./Login";

export default function App() {
  const [state, setState] = useState<"login" | "signup" | "authenticated">(
    "login",
  );

  return (
    <>
      {state === "login" && <Login />}
      {state === "signup" && <p>Signup</p>}
      {state === "authenticated" && <p>Authenticated</p>}
    </>
  );
}
