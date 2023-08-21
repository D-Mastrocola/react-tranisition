import HeaderButton from "./HeaderButton/HeaderButton";

let Header = () => {
  return (
    <header>
      <a href="/">
        <h1>Website</h1>
      </a>
      <ul>
        <li><HeaderButton location={'/'} text='Home'/></li>
        <li><HeaderButton location={'/about'} text='About'/></li>
        <li><HeaderButton location={'/contact'} text='Contact'/></li>
  
      </ul>
    </header>
  );
};
export default Header;