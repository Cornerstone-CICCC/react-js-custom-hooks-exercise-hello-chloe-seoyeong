import { useEffect, useState } from "react";

function useTime<T>(timeType: T) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const today = new Date();

    if (timeType === "year") {
      const year = today.getFullYear();
      setTime(year + "");
    } else if (timeType === "day") {
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
    } else if (timeType === "month") {
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      setTime(monthNames[today.getMonth()]);
    } else if (timeType === "date") {
      setTime(today.getDate() + "");
    } else if (timeType === "min") {
      setTime(today.getMinutes() + "");
    }
  }, [timeType]);
  return time;
}

export default useTime;
