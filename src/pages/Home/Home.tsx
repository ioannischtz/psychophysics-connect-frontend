import AccountBanner from "../../components/features/AccountBanner/AccountBanner";
import LangSelect from "../../components/features/LangSelect/LangSelect";
import Logo from "../../components/features/Logo/Logo";
import ThemeSwitch from "../../components/features/ThemeSwitch/ThemeSwitch";
import { Button } from "../../components/ui/form/Button/Button";
import AppBar from "../../components/ui/navigation/AppBar/AppBar";

const Elements = {
  AppBar: (
    <AppBar
      logo={<Logo />}
      settings={
        <>
          <LangSelect />
          <ThemeSwitch />
        </>
      }
      accountBanner={<AccountBanner role="experimenter" username="User007" />}
      actionButton={
        <Button variant="outline" colorScheme="destructive" shape="pill">
          Logout
        </Button>
      }
    />
  ),
  SideMenu: <div>Sidemenu</div>,
  AvailableExperiments: {
    Table: <div>Available Experiments Table</div>,
  },
  Sessions: {
    Table: <div>Sessions Table</div>,
  },
};

function Home() {
  return (
    <div className="py-1 px-1 md:py-3 md:px-48 flex-col justify-between font-roboto">
      {Elements.AppBar}
      <div className="grid grid-cols-4">
        <div className="col-span-1">{Elements.SideMenu}</div>
        <div className="col-start-2 col-span-3">{Elements.Sessions.Table}</div>
      </div>
    </div>
  );
}

export default Home;
