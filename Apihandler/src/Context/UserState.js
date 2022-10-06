import React, { useState } from "react";
import UserContext from "./UserContext";
import axios from "axios";
const url = "https://reqres.in/api/users?pag"

function UserState(props) {
  const [info, setInfo] = useState([]);
  const [load, setLoad] = useState(false);

  const getInfo = async () => {

    try {
      const res = await axios.get(url);
      setInfo(res.data.data);
    } catch (error) {
      console.log(error);
    }

  };

  const setLoading = () => {
    setLoad(true);
  };
  
  return (
    <UserContext.Provider value={{ info, getInfo, load, setLoading }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserState;
