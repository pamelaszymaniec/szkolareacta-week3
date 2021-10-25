import MenuLink from "./MenuLink";

function Menu() {
  return (
    <nav className="Menu">
      <ul>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to="/contact" isActive>
          Contact
        </MenuLink>
        <MenuLink to="/posts">Posts</MenuLink>
      </ul>
    </nav>
  );
}

export default Menu;
