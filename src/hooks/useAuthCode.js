import { useState } from "react";

export const useAuthCode = () => {
  const [authParams] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return {
      code: params.get("code"),
      state: params.get("state"),
    };
  });

  return authParams;
};
