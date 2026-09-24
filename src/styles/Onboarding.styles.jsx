import { Box, Flex, Grid, Heading, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const linkReset = {
  textDecoration: "none",
  _hover: { textDecoration: "none" },
};

export const OnboardingPage = (props) => (
  <Box
    minH="calc(100vh - 68px)"
    color="app.text.default"
    background="app.surface.page"
    {...props}
  />
);

export const DashboardMain = (props) => (
  <Grid
    as="main"
    width="100%"
    maxW="1314px"
    mx="auto"
    px={{ base: "16px", md: "32px" }}
    pt={{ base: "32px", md: "56px" }}
    pb="72px"
    gridTemplateColumns={{
      base: "1fr",
      lg: "minmax(0, 1.55fr) minmax(360px, 1fr)",
    }}
    gap={{ base: "28px", lg: "40px" }}
    alignItems="start"
    {...props}
  />
);

export const OnboardingLeftColumn = (props) => (
  <Grid gap={{ base: "22px", md: "30px" }} {...props} />
);

export const DashboardCard = (props) => (
  <Box
    border="1px solid"
    borderColor="app.border.card"
    borderRadius={{ base: "14px", md: "18px" }}
    background="app.surface.card"
    boxShadow="0 12px 35px rgba(35, 55, 45, 0.06)"
    {...props}
  />
);

export const WelcomeCard = (props) => (
  <DashboardCard
    height={{ base: "auto", md: "316px" }}
    padding={{ base: "34px 26px", md: "50px" }}
    {...props}
  />
);

export const WelcomeHeading = (props) => (
  <Heading
    as="h1"
    margin="0"
    color="app.text.heading"
    fontFamily="Georgia, serif"
    fontSize={{ base: "34px", md: "42px" }}
    fontWeight="600"
    letterSpacing="-0.035em"
    lineHeight="1.1"
    {...props}
  />
);

export const WelcomeText = (props) => (
  <Text
    maxW="650px"
    margin={{ base: "15px 0 25px", md: "14px 0 28px" }}
    color="app.text.body"
    fontSize={{ base: "15px", md: "16px" }}
    lineHeight="1.7"
    {...props}
  />
);

export const PrimaryAction = (props) => (
  <Link
    asChild
    display="inline-flex"
    minH="40px"
    px="15px"
    alignItems="center"
    justifyContent="center"
    gap="8px"
    border="1px solid transparent"
    borderRadius="9px"
    color="white"
    background="app.action.default"
    fontSize="13px"
    fontWeight="700"
    {...linkReset}
    _hover={{ background: "app.action.hover", textDecoration: "none" }}
  >
    <RouterLink {...props} />
  </Link>
);

export const GoalCard = (props) => (
  <DashboardCard
    minH={{ base: "auto", md: "187px" }}
    padding={{ base: "28px 24px", md: "38px 39px" }}
    {...props}
  />
);

export const GoalHeader = (props) => (
  <Flex
    align={{ base: "flex-start", sm: "center" }}
    justify="space-between"
    direction={{ base: "column", sm: "row" }}
    gap="6px"
    {...props}
  />
);

export const GoalTitle = (props) => (
  <Heading
    as="h2"
    color="app.text.heading"
    fontFamily="Georgia, serif"
    fontSize="20px"
    fontWeight="600"
    {...props}
  />
);

export const GoalCount = (props) => (
  <Text color="app.accent.text" fontSize="14px" fontWeight="700" {...props} />
);

export const ProgressTrack = (props) => (
  <Box
    height="14px"
    margin="20px 0 20px"
    overflow="hidden"
    borderRadius="999px"
    background="app.border.card"
    {...props}
  />
);

export const ProgressFill = (props) => (
  <Box
    width="4px"
    minW="4px"
    height="100%"
    borderRadius="999px"
    background="app.action.default"
    {...props}
  />
);

export const GoalDescription = (props) => (
  <Text color="app.text.body" fontSize="14px" lineHeight="1.6" {...props} />
);

export const PetCard = (props) => (
  <DashboardCard
    minH={{ base: "auto", lg: "485px" }}
    padding={{ base: "34px 24px", md: "46px 39px 40px" }}
    textAlign="center"
    {...props}
  />
);

export const PetArtwork = (props) => (
  <Flex
    width="158px"
    height="158px"
    margin="0 auto 39px"
    align="center"
    justify="center"
    borderRadius="50%"
    background="app.reward.subtle"
    css={{
      "& img": {
        display: "block",
        width: "140px",
        height: "140px",
      },
    }}
    {...props}
  />
);

export const PetHeading = (props) => (
  <Heading
    as="h2"
    color="app.text.heading"
    fontFamily="Georgia, serif"
    fontSize={{ base: "24px", md: "27px" }}
    fontWeight="600"
    letterSpacing="-0.02em"
    {...props}
  />
);

export const PetText = (props) => (
  <Text
    maxW="350px"
    margin="7px auto 32px"
    color="app.text.body"
    fontSize="14px"
    lineHeight="1.6"
    {...props}
  />
);

export const PetDivider = (props) => (
  <Box height="1px" margin="0 0 30px" background="app.border.card" {...props} />
);

export const PetAction = (props) => (
  <Link
    asChild
    display="inline-flex"
    minH="40px"
    px="15px"
    alignItems="center"
    justifyContent="center"
    gap="8px"
    border="1px solid"
    borderColor="app.border.accent"
    borderRadius="9px"
    color="app.action.default"
    background="white"
    fontSize="13px"
    fontWeight="700"
    {...linkReset}
    _hover={{ background: "app.surface.hover", textDecoration: "none" }}
  >
    <RouterLink {...props} />
  </Link>
);
