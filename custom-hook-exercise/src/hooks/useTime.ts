import { useEffect, useState } from "react";

function useTime<T>(timeType: T) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const today = new Date();

    if (timeType === "day") {
      const dayNames = [
        "Sunday",
        "Monday",
        "Tueday",
        "Wedday",
        "Thuday",
        "Friday",
        "Satday",
      ];
      const days = today.getDay();
      setTime(dayNames[days]);
    } else if (timeType === "hour") {
      setTime(today.getHours() + "");
    }
  }, [timeType]);
  return time;
}

export default useTime;
