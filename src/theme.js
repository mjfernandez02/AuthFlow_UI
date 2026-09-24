import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    keyframes: {
      orbitFloat: {
        "0%, 100%": {
          transform: "translate3d(0, 0, 0) rotate(-1deg)",
        },
        "25%": {
          transform: "translate3d(14px, -9px, 0) rotate(1deg)",
        },
        "50%": {
          transform: "translate3d(2px, -18px, 0) rotate(-0.5deg)",
        },
        "75%": {
          transform: "translate3d(-13px, -8px, 0) rotate(-2deg)",
        },
      },
    },
    tokens: {
      colors: {
        brand: {
          50: { value: "#eff5ef" },
          100: { value: "#edf1e9" },
          300: { value: "#cfd9d1" },
          500: { value: "#2b6a55" },
          600: { value: "#287058" },
          700: { value: "#185b46" },
          800: { value: "#104a38" },
        },
        neutral: {
          50: { value: "#f7f7f2" },
          200: { value: "#e1e6df" },
          400: { value: "#87928c" },
          500: { value: "#69756f" },
          600: { value: "#66736c" },
          900: { value: "#223129" },
          950: { value: "#24312b" },
        },
        reward: {
          50: { value: "#fff7ed" },
          500: { value: "#e97a34" },
          600: { value: "#e97a34" },
          700: { value: "#d46625" },
        },
      },
    },

    semanticTokens: {
      colors: {
        app: {
          action: {
            default: { value: "{colors.brand.700}" },
            hover: { value: "{colors.brand.800}" },
          },
          accent: {
            text: { value: "{colors.brand.600}" },
            subtle: { value: "{colors.brand.50}" },
          },
          text: {
            default: { value: "{colors.neutral.950}" },
            heading: { value: "{colors.neutral.900}" },
            body: { value: "{colors.neutral.600}" },
            muted: { value: "{colors.neutral.500}" },
            subtle: { value: "{colors.neutral.400}" },
          },
          border: {
            accent: { value: "{colors.brand.300}" },
            card: { value: "{colors.neutral.200}" },
          },
          surface: {
            page: { value: "{colors.neutral.50}" },
            card: { value: "{colors.white}" },
            hover: { value: "{colors.brand.100}" },
          },
          reward: {
            default: { value: "{colors.reward.600}" },
            hover: { value: "{colors.reward.700}" },
            subtle: { value: "{colors.reward.50}" },
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
