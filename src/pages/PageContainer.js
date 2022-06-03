// page layout

import React, { useContext } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import LoginButton from "../components/LoginButton";
import { AccountContext } from "../providers/AccountProvider";

const PageContainer = () => {
  let {user, login, logout} = useContext(AccountContext)

  const renderRightNav = () => {
    if(user){
      return <button onClick={logout}>logout</button>
    }
    return <LoginButton />
  }

  return (
    <div>
      <div className="navbar">
        <div>
         <NavLink to="/">Home</NavLink>
         <NavLink to="/about">About</NavLink>
         {user && <NavLink to="/account">Account</NavLink>}
         {user && <NavLink to="/users">Users</NavLink>}
        </div>
        <div>
          {renderRightNav()}
        </div>
      </div>
      <div className="page-content">
        
        <Outlet />
      </div>
    </div>
  );
};

export default PageContainer;