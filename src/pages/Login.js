// visible to everyone
import React from "react";
import LoginButton from "../components/LoginButton";
import { useContext } from "react";
import { AccountContext } from "../providers/AccountProvider";

const Login = () => {
  const {user} = useContext(AccountContext)
  return (
    <div>
      <h1>PLEASE LOGIN</h1>
      <LoginButton />
    </div>
  )
}

export default Login;