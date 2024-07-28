import { useEffect, useState } from "react";

export const useOnlineStatus = () => {
  const [onLineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => setOnlineStatus(true));
    window.addEventListener("offline", () => setOnlineStatus(false));
  }, []);
  return onLineStatus;
};
