import React, { useState, useEffect } from "react";

const Clock: React.FC<{ className?: any }> = (props) => {
  const now = new Date();
  const greenwichHours = now.getUTCHours();
  const greenwichMinutes = now.getUTCMinutes();
  const greenwichSeconds = now.getUTCSeconds();
  const [seconds, setSeconds] = useState<number>(
    3600 * greenwichHours + 60 * greenwichMinutes + greenwichSeconds
  );
  useEffect(() => {
    const interval = setInterval(() => {
      //code inside here will run every second
      setSeconds((current) => (current + 1) % 86400);

      // console.log('working')
    }, 1000); //change the 1000 to however many miliseconds you want between execution
    return () => clearInterval(interval);
  }, []);
  return (
    <pre className={props.className}>
      {Math.floor(seconds / 3600)
        .toString()
        .padStart(2, "0") +
        " : " +
        Math.floor((seconds - 3600 * Math.floor(seconds / 3600)) / 60)
          .toString()
          .padStart(2, "0") +
        " : " +
        (
          seconds -
          3600 * Math.floor(seconds / 3600) -
          60 * Math.floor((seconds - 3600 * Math.floor(seconds / 3600)) / 60)
        )
          .toString()
          .padStart(2, "0")}
    </pre>
  );
};
export default Clock;
