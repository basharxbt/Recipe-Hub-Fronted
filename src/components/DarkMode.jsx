"use client";

import { Moon, Sun } from "@gravity-ui/icons";
import { Switch } from "@heroui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Darkmode() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  const handleToggle = () => {
    console.log("clicked, current:", resolvedTheme);
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Switch
      aria-label="Toggle dark mode"
      size="lg"
      isSelected={isDark}
      onChange={handleToggle}
    >
      <Switch.Content>
        <Switch.Control className={isDark ? "bg-[#c93632]" : "bg-[#f1ece9]"}>
          <Switch.Thumb>
            <Switch.Icon>
              {isDark ? (
                <Moon className="size-3 text-[#c93632]" />
              ) : (
                <Sun className="size-3 text-black" />
              )}
            </Switch.Icon>
          </Switch.Thumb>
        </Switch.Control>
      </Switch.Content>
    </Switch>
  );
}
