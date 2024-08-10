import Logo from "./graphics/Logo";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 flex h-[4.375rem] w-screen justify-center bg-slate-dark px-5 lg:h-[6.25rem] xl:px-[6.25rem]">
      <div className="homepage-content-max-width flex w-full items-center justify-center sm:justify-start">
        <Logo />
      </div>
    </nav>
  );
};

export default Navbar;
