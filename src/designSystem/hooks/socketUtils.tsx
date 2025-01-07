// import { createContext, useContext, useEffect, useState } from "react";
// import { HOSTNAME } from "../../api/services/axios";
// import { io } from "socket.io-client";

// export const SocketContext = createContext<{
//   socket: any;
//   setToken: (token: string) => void;
// } | null>(null);

// export const SocketProvider = ({ children }: { children: any }) => {
//   const [socket, setSocket] = useState<any>(null);
//   const [token, setToken] = useState<string | null>(
//     localStorage.getItem("token")
//   );

//   useEffect(() => {
//     if (token) {
//       const newSocket = io(HOSTNAME, {
//         auth: { token },
//       });

//       newSocket.on("connect", () => {
//         console.log("Connected to Socket.IO server");
//       });

//       setSocket(newSocket);

//       return () => {
//         newSocket.disconnect();
//       };
//     }
//   }, [token]);

//   return (
//     <SocketContext.Provider value={{ socket, setToken }}>
//       {children}
//     </SocketContext.Provider>
//   );
// };

// export const useSocket = () => {
//   const context = useContext(SocketContext);
//   if (!context) {
//     throw new Error("useSocket must be used within a SocketProvider");
//   }
//   return context;
// };
