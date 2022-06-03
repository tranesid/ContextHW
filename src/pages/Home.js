// visible to everyone
import React, { useContext } from "react";
import { AccountContext } from "../providers/AccountProvider";

const Home = () => {
  const {user} = useContext(AccountContext)
  return (
    <div>
      <h1>HOME PAGE</h1>
      {user && <p>Hello {user.username}</p>}
    </div>

  )
}

export default Home;