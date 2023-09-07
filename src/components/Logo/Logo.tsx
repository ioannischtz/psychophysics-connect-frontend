import { useTheme } from "../theme-provider";
import { Separator } from "../ui/Separator";
import OrigamiBrain from "./OrigamiBrain";

function Logo() {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "dark"
          ? "light text-foreground bg-background  backdrop-filter backdrop-blur-lg"
          : ""
      }  py-2 px-4 rounded flex  w-fit items-center space-x-2`}
    >
      <OrigamiBrain
        width="44"
        height="44"
        strokeWidth="2"
        className="fill-foreground stroke-foreground border-2 border-primary"
      />
      <div className="h-11">
        <Separator orientation="vertical" className="bg-accent w-[4px]" />
      </div>
      <h2 className="font-robotoSlab text-3xl font-light">
        Psychophysics Connect
      </h2>
    </div>
  );
}

export default Logo;
