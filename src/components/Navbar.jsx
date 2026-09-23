import { useAuth } from "../hooks/useAuth";
import {
  NavbarAvatar,
  NavbarBrand,
  NavbarGhostLink,
  NavbarLinks,
  NavbarLogo,
  NavbarName,
  NavbarOutlineButton,
  NavbarPrimaryLink,
  NavbarRoot,
  NavbarUser,
  NavbarUserName,
} from "../styles/Navbar.styles";

const Navbar = () => {
  const { user, logout } = useAuth();

  const initials = user?.email
    ? user.email.split("@")[0].slice(0, 2).toUpperCase()
    : user?.name
      ? user.name.slice(0, 2).toUpperCase()
      : "??";

  return (
    <NavbarRoot>
      <NavbarBrand to="/">
        <NavbarLogo>W</NavbarLogo>
        <NavbarName>WordWell</NavbarName>
      </NavbarBrand>

      <NavbarLinks>
        {user ? (
          <>
            <NavbarGhostLink to="/practice">Practice</NavbarGhostLink>
            <NavbarUser>
              <NavbarAvatar>{initials}</NavbarAvatar>
              <NavbarUserName>
                {user?.email || user?.name || "User"}
              </NavbarUserName>
            </NavbarUser>
            <NavbarOutlineButton onClick={logout}>Sign out</NavbarOutlineButton>
          </>
        ) : (
          <>
            <NavbarGhostLink to="/login">Sign in</NavbarGhostLink>
            <NavbarPrimaryLink to="/signup">Get started</NavbarPrimaryLink>
          </>
        )}
      </NavbarLinks>
    </NavbarRoot>
  );
};

export default Navbar;
