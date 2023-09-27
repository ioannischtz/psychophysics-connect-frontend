import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { LanguageProvider } from "./lib/contexts/language-provider";
import { ThemeProvider } from "./lib/contexts/theme-provider";
import Landing from "./pages/Landing";
import Login, { action as loginAction } from "./pages/Login";
import Signup, { action as signupAction } from "./pages/Signup";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <LanguageProvider defaultLanguage="EN" storageKey="app-language">
            <Outlet />
          </LanguageProvider>
        </ThemeProvider>
      }
    >
      <Route path="/" element={<Landing />} />
      <Route path="/auth/signup" element={<Signup />} action={signupAction} />
      <Route path="/auth/login" element={<Login />} action={loginAction} />
      <Route path="/subject-homepage" element={<Home />} />
      <Route path="/experimenter-dashboard" element={<Dashboard />} />
    </Route>,
  ),
  { basename: import.meta.env.DEV ? "/" : "/psychophysics-connect-frontend/" },
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
