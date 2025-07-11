
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // loading state bhi

  const fetchUserProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false); // token nahi mila to loading hatao
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/users/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // token bhejna hai header me
        },
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.data); // user data set
      } else {
        setUser(null); // galat token ya error
        console.log("Error fetching user:", data.message);
      }
    } catch (error) {
      console.log("Something went wrong:", error.message);
      setUser(null);
    } finally {
      setLoading(false); // success ya error dono me loading hatao
    }
  };

  useEffect(() => {
    fetchUserProfile(); // app load hote hi profile lao
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};






















// import { createContext, useContext, useEffect, useState } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const fetchUserProfile = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) return;

//     try {
//       const response = await fetch("http://localhost:8000/users/me", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`, // 👈 VERY IMPORTANT
//         },
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setUser(data.data);  // assume backend sends { data: {user data} }

//         // console.log(data, "user find successfully");
        
//       } else {
//         console.log("Error fetching user:", data.message);
//       }
//     } catch (error) {
//       console.log("Something went wrong while fetching user", error);
//     }
//   };

//   useEffect(() => {
//     fetchUserProfile(); // jab app reload ho to try fetching user
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, setUser, fetchUserProfile }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };
