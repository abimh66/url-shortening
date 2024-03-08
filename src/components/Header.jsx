import Logo from './ui/Logo';
function Header({ children }) {
  return (
    <header className="flex justify-between items-center p-5 md:px-32 md:py-8 md:gap-10 relative">
      <Logo />
      {children}
    </header>
  );
}

export default Header;
