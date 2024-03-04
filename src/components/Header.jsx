import Logo from './ui/Logo';
function Header({ children }) {
  return (
    <header className="flex justify-between items-center p-5 relative">
      <Logo />
      {children}
    </header>
  );
}

export default Header;
