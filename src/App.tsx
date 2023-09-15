import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { LanguageProvider } from "./contexts/language-provider";
import { ThemeProvider } from "./contexts/theme-provider";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

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
      <Route path="/auth/signup" element={<Signup />} />
      <Route path="/auth/login" element={<Login />} />
    </Route>,
  ),
  { basename: import.meta.env.DEV ? "/" : "/psychophysics-connect-frontend/" },
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
