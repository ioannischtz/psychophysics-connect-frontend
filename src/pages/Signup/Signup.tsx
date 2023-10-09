/// <reference types="vite-plugin-svgr/client" />
import AppBar from "../../components/ui/navigation/AppBar";
import LangSelect from "../../components/features/LangSelect/LangSelect";
import Logo from "../../components/features/Logo/Logo";
import ThemeSwitch from "../../components/features/ThemeSwitch/ThemeSwitch";

import { ReactComponent as SignupSVG } from "../../assets/undraw_sign_up_n6im(1).svg";
import SignupForm from "../../components/features/SignupForm/SignupForm";
import H1 from "../../components/ui/typography/H1";
import { useLanguage } from "../../lib/contexts/language-provider";
import signupPageText from "../../constants/signup-page-text.json";
import { Link } from "react-router-dom";

function Signup() {
  const { language } = useLanguage();

  return (
    <div className="py-1 px-2 md:py-3 md:px-64 md:min-h-screen flex-col items-center justify-between font-roboto">
      <AppBar
        logo={
          <Link to="/">
            <Logo />
          </Link>
        }
        settings={
          <>
            <LangSelect />
            <ThemeSwitch />
          </>
        }
      />
      <main className="mt-12 md:mt-32 w-full flex flex-row  space-x-4 md:space-x-8">
        <div
          id="signup-form"
          className="flex-1 flex sm:max-2xl:justify-center 2xl:justify-end"
        >
          <div className="px-2 sm:max-2xl:w-full 2xl:w-3/5  space-y-8">
            <H1>
              {language === "EN"
                ? signupPageText.title.en
                : signupPageText.title.gr}
            </H1>
            <SignupForm />
          </div>
        </div>
        <div
          id="signup-visual"
          className="flex-1 hidden sm:hidden md:hidden lg:inline-block xl:inline-block 2xl:inline-block"
        >
          <SignupSVG className="w-full" />
        </div>
      </main>
    </div>
  );
}

export default Signup;
