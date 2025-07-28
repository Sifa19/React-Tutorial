import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Jhon Doe",
});

export default UserContext;
