import { useAuth } from "../hooks/useAuth";
import { useLocation } from "react-router-dom";
import {
  NavbarAvatar,
  NavbarAppLinks,
  NavbarBrand,
  NavbarGhostLink,
  NavbarLinks,
  NavbarLogo,
  NavbarName,
  NavbarOutlineButton,
  NavbarPrimaryLink,
  NavbarRoot,
  NavbarStatPill,
  NavbarStats,
  NavbarUser,
  NavbarUserName,
} from "../styles/Navbar.styles";
import { Coin, Zap } from "./Logos";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { pathname, hash } = useLocation();
  const isAppPreview = ["/onboarding", "/practice"].includes(pathname);
  const showAppNavigation = Boolean(user) || isAppPreview;
  const experience = user?.xp ?? user?.experience ?? 0;
  const coins = user?.coins ?? 0;

  const initials = user?.email
    ? user.email.split("@")[0].slice(0, 2).toUpperCase()
    : user?.name
      ? user.name.slice(0, 2).toUpperCase()
      : "??";

  return (
    <NavbarRoot>
      <NavbarBrand to={showAppNavigation ? "/onboarding" : "/"}>
        <NavbarLogo>W</NavbarLogo>
        <NavbarName>WordWell</NavbarName>
      </NavbarBrand>

      {showAppNavigation && (
        <NavbarAppLinks aria-label="Main navigation">
          <NavbarGhostLink
            to="/onboarding"
            active={pathname === "/onboarding" && hash !== "#pet"}
          >
            Home
          </NavbarGhostLink>
          <NavbarGhostLink to="/practice" active={pathname === "/practice"}>
            Practice
          </NavbarGhostLink>
          <NavbarGhostLink to="/onboarding#pet" active={hash === "#pet"}>
            My Pet
          </NavbarGhostLink>
        </NavbarAppLinks>
      )}

      {user ? (
        <NavbarLinks>
          <NavbarStats aria-label="Your rewards">
            <NavbarStatPill aria-label={`${experience} experience points`}>
              <Zap /> {experience} XP
            </NavbarStatPill>
            <NavbarStatPill tone="reward" aria-label={`${coins} coins`}>
              <Coin /> {coins}
            </NavbarStatPill>
          </NavbarStats>
          <NavbarUser>
            <NavbarAvatar>{initials}</NavbarAvatar>
            <NavbarUserName>
              {user?.email || user?.name || "User"}
            </NavbarUserName>
          </NavbarUser>
          <NavbarOutlineButton onClick={logout}>Sign out</NavbarOutlineButton>
        </NavbarLinks>
      ) : showAppNavigation ? (
        <NavbarStats aria-label="Your rewards">
          <NavbarStatPill aria-label="0 experience points">
            <Zap /> 0 XP
          </NavbarStatPill>
          <NavbarStatPill tone="reward" aria-label="0 coins">
            <Coin /> 0
          </NavbarStatPill>
        </NavbarStats>
      ) : (
        <NavbarLinks>
          <NavbarGhostLink to="/login">Sign in</NavbarGhostLink>
          <NavbarPrimaryLink to="/signup">Get started</NavbarPrimaryLink>
        </NavbarLinks>
      )}
    </NavbarRoot>
  );
};

export default Navbar;
