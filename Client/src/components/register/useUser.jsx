import { useState } from "react";

export function useUser() {
  const [isLogged, setIsLogged] = useState(false);

  const login_user = (isLoggedIn) => {
    setIsLogged(isLoggedIn);
  };

  return {
    isLogged,
    setIsLogged,
    login_user,
  };
}
