import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

export const PetPage = (props) => (
  <Box
    as="main"
    minH="calc(100vh - 68px)"
    px={{ base: "16px", md: "24px" }}
    py={{ base: "30px", md: "32px" }}
    color="app.text.default"
    background="app.surface.page"
    {...props}
  />
);

export const PetPanel = (props) => (
  <Box
    width="100%"
    maxW="514px"
    mx="auto"
    padding={{ base: "28px 20px", sm: "32px 30px" }}
    border="1px solid"
    borderColor="app.border.card"
    borderRadius="18px"
    background="app.surface.card"
    boxShadow="0 12px 35px rgba(35, 55, 45, 0.06)"
    {...props}
  />
);

export const PetTitle = (props) => (
  <Flex
    minH="104px"
    direction="column"
    align="center"
    justify="center"
    gap="8px"
    borderBottom="1px solid"
    borderColor="app.border.card"
    {...props}
  />
);

export const PetName = (props) => (
  <Heading
    as="h1"
    margin="0"
    color="app.text.heading"
    fontSize="20px"
    fontWeight="700"
    lineHeight="1.2"
    {...props}
  />
);

export const PetStatus = (props) => (
  <Flex
    minH="22px"
    px="8px"
    align="center"
    gap="4px"
    border="1px solid"
    borderColor="reward.500"
    borderRadius="7px"
    color="app.reward.default"
    background="app.reward.subtle"
    fontSize="10px"
    lineHeight="1"
    {...props}
  />
);

export const PetStatusIcon = (props) => (
  <Box
    width="12px"
    height="12px"
    css={{ "& img": { display: "block", width: "100%", height: "100%" } }}
    {...props}
  />
);

export const FeedItem = (props) => (
  <Flex
    minH="66px"
    mt="20px"
    px={{ base: "12px", sm: "15px" }}
    py="10px"
    align="center"
    gap="12px"
    border="1px solid"
    borderColor="app.border.card"
    borderRadius="13px"
    background="app.surface.page"
    {...props}
  />
);

export const FeedIcon = (props) => (
  <Flex
    width="36px"
    height="36px"
    flexShrink="0"
    align="center"
    justify="center"
    borderRadius="10px"
    background="app.reward.subtle"
    css={{ "& img": { display: "block", width: "24px", height: "24px" } }}
    {...props}
  />
);

export const FeedTitle = (props) => (
  <Text color="app.text.default" fontSize="12px" fontWeight="700" {...props} />
);

export const FeedDescription = (props) => (
  <Text color="app.text.body" fontSize="10px" lineHeight="1.5" {...props} />
);

export const FeedAction = (props) => (
  <Button
    minH="34px"
    ml="auto"
    px={{ base: "10px", sm: "14px" }}
    flexShrink="0"
    gap="7px"
    border="1px solid transparent"
    borderRadius="9px"
    color="white"
    background="app.action.default"
    fontSize="11px"
    fontWeight="700"
    whiteSpace="nowrap"
    _hover={{ background: "app.action.hover" }}
    css={{ "& img": { display: "block", width: "13px", height: "13px" } }}
    {...props}
  />
);

export const PetMessage = (props) => (
  <Flex
    minH="40px"
    mt="20px"
    px="12px"
    py="9px"
    align="center"
    gap="8px"
    borderRadius="11px"
    color="app.text.default"
    background="app.reward.subtle"
    fontSize="10px"
    lineHeight="1.5"
    {...props}
  />
);

export const PetMessageIcon = (props) => (
  <Box
    width="14px"
    height="14px"
    flexShrink="0"
    css={{ "& img": { display: "block", width: "100%", height: "100%" } }}
    {...props}
  />
);
