import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const SetUser = () => {
    const history = useHistory();

    

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



};


