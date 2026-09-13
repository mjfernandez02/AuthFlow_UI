import { createContext, useState, useCallback } from "react";
import { apiPost, CODE_MAP, codeMessage } from "../utils/apiClient";
import { useToast } from "./ToastContext";

export const AuthContext = createContext();

const decodeUser = (token) => {
  if (!token) return null;
  try {
    const payload = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(atob(payload));
  } catch {
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    decodeUser(localStorage.getItem("accessToken")),
  );
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken"),
  );
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem("refreshToken"),
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { showToast } = useToast();

  const login = useCallback(async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiPost(
        "/login",
        { email, password },
        { credentials: "include" },
      );

      setAccessToken(data.accessToken);
      setRefreshToken(data.refreshToken);
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);

      // Auto-decode JWT to get user info
      setUser(decodeUser(data.accessToken));

      return { success: true };
    } catch (err) {
      const errObj = /** @type {any} */ (err);
      const code = errObj?.errorCode || "SERVER_ERROR";
      if (code === "VALIDATION_ERROR") {
        const fieldErrors = CODE_MAP.VALIDATION_ERROR(errObj);
        setError(Object.values(fieldErrors)[0] || "Validation error");
        return { success: false, fieldErrors, errorCode: code };
      }

      const message =
        codeMessage(code, errObj) || errObj?.message || "Login failed";
      if (code === "RATE_LIMITED" || code === "SERVER_ERROR")
        showToast(message, "error");
      setError(message);
      return { success: false, error: message, errorCode: code };
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await apiPost("/logout", { refreshToken }, { credentials: "include" });
    } catch (err) {
      const errObj = /** @type {any} */ (err);
      console.error("Logout error:", errObj);
    } finally {
      setAccessToken(null);
      setRefreshToken(null);
      setUser(null);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    }
  }, [refreshToken]);

  const refreshAccessToken = useCallback(async () => {
    if (!refreshToken) return false;
    try {
      const data = await apiPost("/refresh", { refreshToken });
      setAccessToken(data.accessToken);
      setRefreshToken(data.refreshToken);
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);

      setUser(decodeUser(data.accessToken));

      return true;
    } catch (err) {
      const errObj = /** @type {any} */ (err);
      console.error("Token refresh error:", errObj);
      await logout();
      return false;
    }
  }, [refreshToken, logout]);

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken,
        refreshToken,
        loading,
        error,
        login,
        logout,
        refreshAccessToken,
        isAuthenticated: !!accessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
