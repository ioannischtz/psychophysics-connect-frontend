import { Award, UserSquare } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../ui/media/Avatar/Avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../../ui/overlays/DropdownMenu/DropdownMenu";
import { Button } from "../../ui/form/Button/Button";
import P from "../../ui/typography/P";
import Muted from "../../ui/typography/Muted";
import { Role } from "../../../constants/roles";

type AccountBannerProps = {
  role: Role;
  avatarSrc?: string;
  username?: string;
};

function AccountBanner({
  role,
  avatarSrc = "",
  username = "Username",
}: AccountBannerProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="hover:bg-background hover:text-foreground"
        >
          <div className="flex space-x-1 items-center">
            <Avatar className="">
              <AvatarImage src={avatarSrc} alt="user-avatar" />
              <AvatarFallback className="bg-background">
                <UserSquare />
              </AvatarFallback>
            </Avatar>
            <div>{username}</div>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <P>Account Settings</P>
            <Muted className="text-xs">{username}</Muted>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Edit Username</DropdownMenuItem>
          <DropdownMenuItem>Change Password</DropdownMenuItem>
          <DropdownMenuItem>Privacy</DropdownMenuItem>
          {role === "experimenter"
            ? <DropdownMenuItem>Billing</DropdownMenuItem>
            : null}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-primary focus:font-medium 
          focus:bg-primary focus:text-primary-foreground">
          Invite Colleagues
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Help/Info</DropdownMenuItem>
          {role === "experimenter"
            ? (
              <DropdownMenuItem className="border-2 border-dashed border-accent">
                <Award /> Premium Support
              </DropdownMenuItem>
            )
            : null}
          <DropdownMenuItem>Feedback</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive focus:font-bold
          focus:bg-destructive focus:text-destructive-foreground">
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default AccountBanner;
