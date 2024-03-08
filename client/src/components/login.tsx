import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState();
  return (
    <div className="">
      <h1>Login</h1>
      <form action="">
        <label htmlFor="email">Email</label>
        <input type="" />
        <label htmlFor="password">Password</label>

        <input type="password" />
      </form>
    </div>
  );
}

export default Login;
