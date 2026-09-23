import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const actionStyles = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  minH: "40px",
  padding: "0 15px",
  border: "1px solid transparent",
  borderRadius: "9px",
  color: "inherit",
  background: "transparent",
  fontSize: "13px",
  fontWeight: "700",
  lineHeight: "normal",
  textDecoration: "none",
  cursor: "pointer",
};

export const NavbarRoot = (props) => (
  <Flex
    as="nav"
    position="sticky"
    top="0"
    zIndex="10"
    minH="68px"
    padding="0 clamp(18px, 5vw, 72px)"
    align="center"
    justify="space-between"
    gap="24px"
    borderBottom="1px solid #e3e7df"
    background="rgba(247, 247, 242, 0.94)"
    css={{
      "@media (max-width: 760px)": {
        padding: "0 15px",
      },
    }}
    {...props}
  />
);

export const NavbarBrand = (props) => (
  <Link
    asChild
    display="flex"
    alignItems="center"
    gap="10px"
    color="inherit"
    textDecoration="none"
    _hover={{ textDecoration: "none" }}
  >
    <RouterLink {...props} />
  </Link>
);

export const NavbarLogo = (props) => (
  <Box
    width="34px"
    height="34px"
    display="grid"
    placeItems="center"
    borderRadius="10px"
    color="white"
    background="app.action.default"
    fontFamily="Georgia, serif"
    fontWeight="700"
    {...props}
  />
);

export const NavbarName = (props) => (
  <Text
    as="span"
    fontFamily="Georgia, serif"
    fontSize="20px"
    fontWeight="700"
    css={{
      "@media (max-width: 480px)": {
        display: "none",
      },
    }}
    {...props}
  />
);

export const NavbarLinks = (props) => (
  <Flex align="center" gap="10px" {...props} />
);

export const NavbarGhostLink = (props) => (
  <Link
    asChild
    {...actionStyles}
    _hover={{ background: "app.surface.hover", textDecoration: "none" }}
    css={{
      "@media (max-width: 480px)": {
        display: "none",
      },
    }}
  >
    <RouterLink {...props} />
  </Link>
);

export const NavbarPrimaryLink = (props) => (
  <Link
    asChild
    {...actionStyles}
    color="white"
    background="app.action.default"
    _hover={{ background: "app.action.hover", textDecoration: "none" }}
  >
    <RouterLink {...props} />
  </Link>
);

export const NavbarOutlineButton = (props) => (
  <Button
    {...actionStyles}
    borderColor="#cad3cc"
    _hover={{ background: "app.surface.hover" }}
    {...props}
  />
);

export const NavbarUser = (props) => (
  <Flex
    align="center"
    gap="8px"
    padding="6px 12px"
    background="app.surface.hover"
    border="1px solid"
    borderColor="app.border.card"
    borderRadius="8px"
    css={{
      "@media (max-width: 760px)": {
        display: "none",
      },
    }}
    {...props}
  />
);

export const NavbarAvatar = (props) => (
  <Flex
    width="22px"
    height="22px"
    align="center"
    justify="center"
    flexShrink="0"
    borderRadius="6px"
    color="white"
    background="linear-gradient(135deg, #6366f1, #818cf8)"
    fontSize="10px"
    fontWeight="700"
    {...props}
  />
);

export const NavbarUserName = (props) => (
  <Text as="span" color="app.text.default" fontSize="13px" {...props} />
);
