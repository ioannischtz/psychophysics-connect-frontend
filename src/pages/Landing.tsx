import Logo from "../components/Logo/Logo";

function Landing() {
  return (
    <div className="flex flex-col">
      <div>
        <Logo />
        <h1>App Bar</h1>
      </div>
      <main>Main</main>
    </div>
  );
}

export default Landing;
