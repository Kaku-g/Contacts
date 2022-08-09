import React, { useEffect, useState } from "react";
import axios from "axios";
import { alignProperty } from "@mui/material/styles/cssUtils";

const data = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => console.log(res.data));
  }, []);
  return <div>data</div>;
};

export default data;
