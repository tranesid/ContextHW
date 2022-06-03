import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  let [users, setUsers] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() =>{
    getUsers();
  }, []);

  const renderUsers = () => {
    if (loading) {
      return <p>Please Wait</p>;
    }
    return users.map((u) => {
      return (
        <div key={u.id}>
          <h1>{u.email}</h1>
          <h1>id: {u.id}</h1>
        </div>
      );
    });
  };

  const getUsers = async () => {
    setLoading(true)
    let res = await axios.get("https://reqres.in/api/users?delay=3");
    setLoading(false)
    setUsers(res.data.data);
  };
};

export default Users;