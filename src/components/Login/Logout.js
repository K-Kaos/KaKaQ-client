import React, { useEffect } from "react";
function Logout() {
    useEffect(() => {
        sessionStorage.setItem("isLoggedIn", "false");
        sessionStorage.removeItem("whoLoggedIn");
        sessionStorage.removeItem("userRole");
        alert("로그아웃 되었습니다.");
        window.location.href = "/";
      }, []);
    
      return null;
}

export default Logout;