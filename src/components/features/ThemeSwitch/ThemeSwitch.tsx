import { Moon, Sun } from "lucide-react";
import { Switch } from "../../ui/form/Switch/Switch";
import { useTheme } from "./useTheme";

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"; // Toggle between light and dark themes
    setTheme(newTheme);
  };

  return (
    <Switch
      checked={theme === "dark"}
      icon={theme === "dark" ? <Moon /> : <Sun />}
      onClick={toggleTheme}
      className="data-[state=checked]:bg-muted-foreground"
    />
  );
}

export default ThemeSwitch;
