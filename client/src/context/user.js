import React, { useContext, useState } from "react";
const UserContext = React.createContext();
function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.UserProvider value={[user, setUser]}>
      {children}
    </UserContext.UserProvider>
  );
}
