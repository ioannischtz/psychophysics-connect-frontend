import AppBar from "../components/AppBar";
import InpageNav from "../components/InpageNav";
import Logo from "../components/Logo/Logo";
import ThemeSwitch from "../components/ThemeSwitch";
import { Button } from "../components/ui/Button";
import LangSelect from "../components/LangSelect";

function Landing() {
  return (
    <div className="py-4 px-32 flex-col justify-between ">
      <AppBar
        logo={<Logo />}
        nav={
          <InpageNav
            links={[
              { href: "#about", text: "About" },
              { href: "#how-it-works", text: "How it works" },
            ]}
          />
        }
        settings={
          <>
            <div>
              <LangSelect />
            </div>
            <ThemeSwitch />
          </>
        }
        actionButton={
          <Button variant="success" className="w-fit">
            Get Started
          </Button>
        }
      />
      <main className="my-12 w-3/4  flex"></main>
    </div>
  );
}

export default Landing;
