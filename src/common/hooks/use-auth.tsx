import React, { useEffect, useState } from "react";
import cookies from "js-cookie";

export const useAuth = () => {
  // const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    console.log(cookies.get("token"));
  }, []);
};
