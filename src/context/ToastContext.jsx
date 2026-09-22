import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Alert } from "@chakra-ui/react";

const ToastContext = createContext({
  showToast: () => {},
});

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  const showToast = useCallback((message, severity = "info") => {
    setToast({ open: true, message, severity });
  }, []);

  useEffect(() => {
    if (!toast.open) return undefined;

    const timeout = window.setTimeout(() => {
      setToast((current) => ({ ...current, open: false }));
    }, 6000);

    return () => window.clearTimeout(timeout);
  }, [toast.open, toast.message]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast.open && (
        <Alert.Root
          status={toast.severity}
          position="fixed"
          top="4"
          left="50%"
          transform="translateX(-50%)"
          width="fit-content"
          maxWidth="calc(100vw - 2rem)"
          zIndex="toast"
        >
          <Alert.Indicator />
          <Alert.Title>{toast.message}</Alert.Title>
        </Alert.Root>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
};

export default ToastContext;
