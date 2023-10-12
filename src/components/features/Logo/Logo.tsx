import { useTheme } from "../ThemeSwitch/useTheme";
import { Separator } from "../../ui/data_display/Separator/Separator";
import OrigamiBrain from "./OrigamiBrain";

function Logo() {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "dark"
          ? " text-foreground bg-background  backdrop-filter backdrop-blur-lg"
          : ""
      } md:py-2 md:px-4 rounded flex w-fit items-center space-x-2`}
    >
      <OrigamiBrain
        width="40"
        height="40"
        strokeWidth="2"
        className="w-[48px] h-[48px] md:w-[40px] md:h-[40px] fill-foreground stroke-foreground border-2 border-primary"
      />
      <div className="h-12 md:h-10">
        <Separator orientation="vertical" className="bg-accent w-[4px]" />
      </div>
      <h2 className="scroll-m-20 text-2xl md:text-3xl font-robotoSlab font-light tracking-tight transition-colors first:mt-0">
        Psychophysics Connect
      </h2>
    </div>
  );
}

export default Logo;
