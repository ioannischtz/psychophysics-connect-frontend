import { Separator } from "../ui/Separator";
import OrigamiBrain from "./OrigamiBrain";

function Logo() {
  return (
    <div className="flex h-11 w-fit items-center space-x-2">
      <OrigamiBrain
        width="44"
        height="44"
        strokeWidth="2"
        className="fill-foreground stroke-foreground border-2 border-primary"
      />
      <Separator orientation="vertical" className="bg-accent w-[4px]" />
      <h2 className="font-robotoSlab text-3xl font-light">
        Psychophysics Connect
      </h2>
    </div>
  );
}

export default Logo;
