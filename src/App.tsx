import "./App.css";
import { LanguageProvider } from "./components/language-provider";
import { ThemeProvider } from "./components/theme-provider";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <LanguageProvider defaultLanguage="EN" storageKey="app-language">
        {/* <Landing /> */}
        {/* <Signup /> */}
        <Login />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
