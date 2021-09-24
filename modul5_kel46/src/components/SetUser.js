import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "./User";
import axios from "axios";

export const SetUser = () => {
    const history = useHistory();

    
    const { username, setUsername, setUser } = useContext(UserContext);
    useEffect(() => {
        axios
            .get("http://localhost:3001/posts")
            .then((res) => {
                setUsername(res.data);
            })
            .catch((err) => {
                console.log(err);
                history.push("/");
            });
    }, []);
    const handleSetName = () => {
      history.push("/user");
    };
    const setSelectedClass = (item) => {
      setUser(item);
    };
    return (
      <>
        <h1>Daftar Username Member Warnet</h1>
        {username.map((item) => (
          <button
            key={item.id}
            value={item.id}
            onClick={(e) => {
              setSelectedClass(item);

              handleSetName();
            }}
          >
            {item.username}
          </button>
        ))}
      </>
    );
};


