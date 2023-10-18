"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";

const ThemeToggle = ({ className }) => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mode, setMode] = useState();

  useEffect(() => {
    setMode(resolvedTheme);
  }, [resolvedTheme]);

  const changeTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
      return;
    }
    setTheme("dark");
  };

  return (
    <button className={className} onClick={() => changeTheme()}>
      {mode === "dark" ? <MdOutlineWbSunny /> : <MdOutlineDarkMode />}
    </button>
  );
};

export default ThemeToggle;
