import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AccountContext } from "../providers/AccountProvider";

const LoginButton = () => {
  const {login} = useContext(AccountContext)
  const navigate = useNavigate()

  const handleLogin = () => {
    login ()
    navigate('/account')
  }
  return <button onClick={handleLogin}>Login!</button>
}

export default LoginButton;