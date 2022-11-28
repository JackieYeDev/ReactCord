import React, { useState } from "react";
const ChannelContext = React.createContext();
function ChannelProvider({ children }) {
  const [channelName, setChannelName] = useState("");
  return (
    <ChannelContext.Provider value={[channelName, setChannelName]}>
      {children}
    </ChannelContext.Provider>
  );
}

export { ChannelContext, ChannelProvider };
