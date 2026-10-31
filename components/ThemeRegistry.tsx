"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import type { ReactNode } from "react";

let portalTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FBC02D",
      dark: "#F57F17",
      light: "#FFF176",
      contrastText: "#000000",
    },
    secondary: {
      main: "#FFEB3B",
      dark: "#FBC02D",
      light: "#FFF59D",
      contrastText: "#000000",
    },
    error: {
      main: "#000000",
      dark: "#000000",
      light: "#666666",
    },
    success: {
      main: "#000000",
      dark: "#000000",
      light: "#666666",
    },
    warning: {
      main: "#333333",
      dark: "#111111",
      light: "#999999",
    },
    info: {
      main: "#333333",
      dark: "#111111",
      light: "#999999",
    },
    background: {
      default: "#F9F9F9",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
    divider: "#E0E0E0",
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily:
      '"Inter", "Noto Sans", "Noto Sans Telugu", "Segoe UI", Arial, sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: "-0.035em",
      lineHeight: 1.12,
    },
    h2: {
      fontWeight: 800,
      letterSpacing: "-0.03em",
      lineHeight: 1.18,
    },
    h3: {
      fontWeight: 750,
      letterSpacing: "-0.022em",
      lineHeight: 1.22,
    },
    h4: {
      fontWeight: 750,
      letterSpacing: "-0.018em",
      lineHeight: 1.28,
    },
    h5: {
      fontWeight: 750,
      lineHeight: 1.32,
    },
    h6: {
      fontWeight: 750,
      lineHeight: 1.36,
    },
    button: {
      fontWeight: 750,
      textTransform: "none",
      letterSpacing: 0,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "::selection": {
          backgroundColor: "#FFE082",
          color: "#2B2100",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 9,
          minHeight: 44,
          paddingInline: 18,
        },
        containedPrimary: {
          boxShadow: "0 8px 20px rgba(91, 67, 0, 0.2)",
          "&:hover": {
            boxShadow: "0 10px 24px rgba(91, 67, 0, 0.28)",
          },
        },
        outlined: {
          borderWidth: 1.5,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 9,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: "1px solid #E8D9B6",
          boxShadow: "0 8px 28px rgba(91, 67, 0, 0.08)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          backgroundImage: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 700,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          backgroundColor: "#FFFFFF",
          minHeight: 56,
        },
        notchedOutline: {
          borderColor: "#CDBB91",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#5E5543",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundImage: "none",
          border: "1px solid #E8D9B6",
          boxShadow: "0 16px 38px rgba(39, 33, 22, 0.18)",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          borderRadius: 7,
          minHeight: 42,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundImage: "none",
          border: "1px solid #E8D9B6",
          boxShadow: "0 24px 70px rgba(39, 33, 22, 0.28)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundImage: "none",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 48,
          backgroundColor: "#FFF9C4",
          borderRadius: 8,
          padding: 4,
        },
        indicator: {
          height: "100%",
          borderRadius: 6,
          backgroundColor: "#FFFFFF",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          zIndex: 0,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: 40,
          textTransform: "none",
          fontWeight: 750,
          color: "#333333",
          zIndex: 1,
          "&.Mui-selected": {
            color: "#000000",
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 8,
          borderRadius: 999,
        },
        bar: {
          borderRadius: 999,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow: "0 12px 30px rgba(91, 67, 0, 0.34)",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#2B2100",
          fontSize: "0.78rem",
          fontWeight: 700,
        },
      },
    },
  },
});

portalTheme = responsiveFontSizes(portalTheme);

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={portalTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
