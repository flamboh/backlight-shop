"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [isDarkMode, setDarkMode] = React.useState(true);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    setTheme(checked ? "dark" : "light");
  };

  return (
    <DarkModeSwitch
      style={{ marginLeft: "1rem" }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={30}
      moonColor="var(--foreground)"
      sunColor="var(--foreground)"
    />
  );
}
