"use client";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";

export const ProjectDate: React.FC = () => {
  return true;
};

export const ProjectTimer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formattedTime = format(currentTime, "HH:mm:ss");

  return (
    <div>
      <div className="date section">{formattedTime}</div>
    </div>
  );
};
