import AppBar from "../components/AppBar";
import LangSelect from "../components/LangSelect";
import Logo from "../components/Logo/Logo";
import ThemeSwitch from "../components/ThemeSwitch";
import { useLanguage } from "../components/language-provider";
import H1 from "../components/typography/H1";
import loginPageText from "../constants/login-page-text.json";
import { ReactComponent as LoginSVG } from "../assets/undraw_login_re_4vu2.svg";
import LoginForm from "../components/LoginForm";

function Login() {
  const { language } = useLanguage();

  return (
    <div className="py-1 px-2 md:py-3 md:px-64 md:min-h-screen flex-col items-center justify-between font-roboto">
      <AppBar
        logo={<Logo />}
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
                ? loginPageText.title.en
                : loginPageText.title.gr}
            </H1>
            <LoginForm />
          </div>
        </div>
        <div
          id="signup-visual"
          className="flex-1 hidden sm:hidden md:hidden lg:inline-block xl:inline-block 2xl:inline-block"
        >
          <LoginSVG className="w-full" />
        </div>
      </main>
    </div>
  );
}

export default Login;
