// create context
import React from "react";
import { useState } from "react";

export const AccountContext = React.createContext()

const user1 = {username:'Schwifty Master', firstName: 'Rick', lastName: 'Sanchez', email: 'gettingschwifty@glorp.com'}

const AccountProvider = (props) => {
  let [user, setUser] = useState(null)
  const login = () => {
    setUser(user1)
  }

  const updateUser = (updatedUser) => {
    setUser(updatedUser)
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AccountContext.Provider value={{user, updateUser, login, logout}}>
      {props.children}
    </AccountContext.Provider>
  )
}

export default AccountProvider