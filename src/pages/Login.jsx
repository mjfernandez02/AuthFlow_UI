import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { API_URL } from "../config/api";
import { CODE_MAP, codeMessage } from "../utils/apiClient";
import { useToast } from "../context/ToastContext";
import { generateCodeVerifier, generateCodeChallenge } from "../pkce";
import {
  LoginAlert,
  LoginBadge,
  LoginBadgeDot,
  LoginCard,
  LoginDivider,
  LoginField,
  LoginFieldError,
  LoginFooter,
  LoginFooterLink,
  LoginGrid,
  LoginInput,
  LoginLabel,
  LoginOrb,
  LoginPage,
  LoginSubmit,
  LoginSubtitle,
  LoginTitle,
} from "../styles/Login.styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [searchParams] = useSearchParams();

  const clientId = searchParams.get("client_id");
  const redirectUri = searchParams.get("redirect_uri");
  const state = searchParams.get("state");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    const loginPayload = { email, password };

    if (clientId && redirectUri) {
      const codeVerifier = generateCodeVerifier();
      const codeChallenge = await generateCodeChallenge(codeVerifier);

      sessionStorage.setItem("pkce_code_verifier", codeVerifier);
      sessionStorage.setItem("oauth_client_id", clientId);
      sessionStorage.setItem("oauth_redirect_uri", redirectUri);

      loginPayload.client_id = clientId;
      loginPayload.redirect_uri = redirectUri;
      if (state) loginPayload.state = state;
      loginPayload.code_challenge = codeChallenge;
      loginPayload.code_challenge_method = "S256";

      const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginPayload),
        credentials: "include",
      });

      if (res.redirected || res.status === 302) {
        window.location.href = res.url;
      } else if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        const code = err.errorCode || err.code || null;
        if (code === "VALIDATION_ERROR") {
          setFieldErrors(CODE_MAP.VALIDATION_ERROR(err));
          setError(Object.values(CODE_MAP.VALIDATION_ERROR(err))[0]);
        } else if (code === "INVALID_CREDENTIALS") {
          setError(CODE_MAP.INVALID_CREDENTIALS());
        } else if (code === "RATE_LIMITED" || code === "SERVER_ERROR") {
          showToast(codeMessage(code), "error");
          setError(codeMessage(code));
        } else {
          setError(err.error || "Login failed");
        }
      }
    } else {
      setFieldErrors({});
      setError(null);
      const result = await login(email, password);
      if (result && result.success) {
        navigate("/practice");
      } else {
        if (result && result.fieldErrors) {
          setFieldErrors(result.fieldErrors);
          setError(Object.values(result.fieldErrors)[0]);
        } else {
          setError(result?.error || CODE_MAP.INVALID_CREDENTIALS());
        }
      }
    }
  };

  return (
    <LoginPage>
      <LoginOrb opacity="0.2" />
      <LoginGrid />

      <LoginCard>
        <LoginBadge>
          <LoginBadgeDot />
          Welcome to WordWell
        </LoginBadge>

        <LoginTitle>Welcome back</LoginTitle>
        <LoginSubtitle>
          Pick up your words right where you left off.
        </LoginSubtitle>

        {error && (
          <LoginAlert>
            <span>⚠</span> {error}
          </LoginAlert>
        )}

        <form onSubmit={handleLogin}>
          <LoginField>
            <LoginLabel>Email address</LoginLabel>
            <LoginInput
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              autoComplete="email"
            />
            {fieldErrors.email && (
              <LoginFieldError>{fieldErrors.email}</LoginFieldError>
            )}
          </LoginField>

          <LoginField>
            <LoginLabel>Password</LoginLabel>
            <LoginInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              autoComplete="current-password"
            />
            {fieldErrors.password && (
              <LoginFieldError>{fieldErrors.password}</LoginFieldError>
            )}
          </LoginField>

          <LoginSubmit type="submit" disabled={loading}>
            {loading ? "Signing in…" : "Sign in →"}
          </LoginSubmit>
        </form>

        <LoginDivider />

        <LoginFooter>
          No account?{" "}
          <LoginFooterLink to="/signup">Start learning free</LoginFooterLink>
        </LoginFooter>
      </LoginCard>
    </LoginPage>
  );
};

export default Login;
