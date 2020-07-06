import { useState, useEffect, useContext } from "react";
import APIHandler from "../api/APIHandler";
import UserContext from "./UserContext";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const userContext = useContext(UserContext);
  const { setCurrentUser, currentUser } = userContext;

  useEffect(() => {
    APIHandler.get("/auth/is-loggedin")
      .then(res => {
        console.log("okay")
        setIsLoggedIn(true);
        setIsLoading(false);
        setCurrentUser(res.data.currentUser);
      })
      .catch(() => {
        console.log("oh no")
        setCurrentUser(null);
        setIsLoggedIn(false);
        setIsLoading(false);
      });
  }, [setCurrentUser]);

  return { isLoggedIn, isLoading, currentUser };
};