import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import Landing from "./pages/Landing";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Landing />
    </ThemeProvider>
  );
}

export default App;
