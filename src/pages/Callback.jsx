import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Container,
  Heading,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { apiPost } from "../utils/apiClient";

const Callback = () => {
  const [searchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("processing");
  const navigate = useNavigate();
  const { completeAuthentication } = useAuth();

  useEffect(() => {
    const handleCallback = async () => {
      const code = searchParams.get("code");

      if (!code) {
        setError("Missing authorization code");
        setStatus("error");
        return;
      }

      const clientId = sessionStorage.getItem("oauth_client_id");
      const redirectUri = sessionStorage.getItem("oauth_redirect_uri");

      if (!clientId || !redirectUri) {
        setError("Missing OAuth2 configuration");
        setStatus("error");
        return;
      }

      try {
        const clientSecret =
          sessionStorage.getItem("oauth_client_secret") ||
          import.meta.env.REACT_APP_CLIENT_SECRET ||
          null;
        const codeVerifier = sessionStorage.getItem("pkce_code_verifier");

        const body = {
          grant_type: "authorization_code",
          code,
          client_id: clientId,
          redirect_uri: redirectUri,
        };

        if (clientSecret) body.client_secret = clientSecret;
        if (codeVerifier) body.code_verifier = codeVerifier;

        const data = await apiPost("/token", body);

        completeAuthentication(data.access_token, data.refresh_token);

        sessionStorage.removeItem("oauth_client_id");
        sessionStorage.removeItem("oauth_redirect_uri");
        sessionStorage.removeItem("pkce_code_verifier");
        sessionStorage.removeItem("oauth_client_secret");

        setStatus("success");
        window.setTimeout(() => navigate("/practice"), 1500);
      } catch (caughtError) {
        setError(caughtError?.message || "Token exchange failed");
        setStatus("error");
      }
    };

    handleCallback();
  }, [searchParams, navigate, completeAuthentication]);

  return (
    <Container maxWidth="md" py="24">
      <Box borderWidth="1px" borderRadius="lg" p="8" textAlign="center">
        {status === "processing" && (
          <VStack gap="4">
            <Spinner size="xl" />
            <Heading size="lg">Processing login…</Heading>
            <Text color="fg.muted">
              Please wait while we complete your authentication.
            </Text>
          </VStack>
        )}

        {status === "success" && (
          <VStack gap="4">
            <Text fontSize="5xl" color="green.600" aria-hidden="true">
              ✓
            </Text>
            <Heading size="lg">Login successful</Heading>
            <Text color="fg.muted">Redirecting you to practice…</Text>
          </VStack>
        )}

        {status === "error" && (
          <VStack gap="4">
            <Heading size="lg">Authentication failed</Heading>
            {error && (
              <Alert.Root status="error" textAlign="left">
                <Alert.Indicator />
                <Alert.Description>{error}</Alert.Description>
              </Alert.Root>
            )}
            <Text color="fg.muted">Please try logging in again.</Text>
          </VStack>
        )}
      </Box>
    </Container>
  );
};

export default Callback;
