"use client";

import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import {
  Box,
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";

type PortalLanguage = "en" | "te";
type GoogleTranslateInstance = { translate: (language: string) => void };
type GoogleTranslateOptions = {
  pageLanguage: string;
  includedLanguages: string[];
  autoDisplay: boolean;
};
type GoogleTranslateConstructor = new (
  options: GoogleTranslateOptions,
  element: HTMLElement,
) => GoogleTranslateInstance;
type GoogleTranslateApi = {
  translate?: {
    element?: { init: (options: GoogleTranslateOptions) => void };
    TranslateElement?: GoogleTranslateConstructor;
  };
};

declare global {
  interface Window {
    google?: GoogleTranslateApi;
    googleTranslateElementInit?: () => void;
  }
}

const STORAGE_KEY = "vizianagaram-language";
const GOOGLE_TRANSLATE_SCRIPT_ID = "google-translate-vizianagaram";

function persistLanguage(language: PortalLanguage) {
  try {
    window.localStorage.setItem(STORAGE_KEY, language);
  } catch {
    // Translation still works when storage is unavailable.
  }
  document.cookie = `googtrans=/en/${language}; Max-Age=31536000; Path=/; SameSite=Lax${window.location.protocol === "https:" ? "; Secure" : ""}`;
}

function readCookieLanguage(): PortalLanguage | null {
  if (typeof document === "undefined") return null;
  const cookie = document.cookie.split(";").map((part) => part.trim()).find((part) => part.startsWith("googtrans="));
  if (!cookie) return null;
  const value = decodeURIComponent(cookie.slice("googtrans=".length));
  return value.endsWith("/te") ? "te" : value.endsWith("/en") ? "en" : null;
}

function isPortalLanguage(value: string | null): value is PortalLanguage {
  return value === "en" || value === "te";
}

function readStoredLanguage(): PortalLanguage {
  if (typeof window === "undefined") {
    return "en";
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (isPortalLanguage(stored)) return stored;
  return readCookieLanguage() ?? "en";
}

export default function LanguageSwitcher({
  variant = "full",
  tone = "dark",
}: {
  variant?: "full" | "icon";
  tone?: "dark" | "light";
}) {
  const [language, setLanguage] = useState<PortalLanguage>("en");
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const translateElementRef = useRef<GoogleTranslateInstance | null>(null);
  const desiredLanguageRef = useRef<PortalLanguage>("en");

  const initialiseGoogleTranslate = useCallback((): boolean => {
    const googleTranslate = window.google?.translate;
    if (!googleTranslate?.element?.init || !googleTranslate.TranslateElement) {
      return false;
    }

    const options: GoogleTranslateOptions = {
      pageLanguage: "en",
      includedLanguages: ["en", "te"],
      autoDisplay: false,
    };

    googleTranslate.element.init(options);
    if (!translateElementRef.current) {
      translateElementRef.current = new googleTranslate.TranslateElement(
        options,
        document.body,
      );
    }

    translateElementRef.current.translate(desiredLanguageRef.current);
    return true;
  }, []);

  const loadGoogleTranslate = useCallback(() => {
    if (initialiseGoogleTranslate()) {
      return;
    }

    const existingScript = document.getElementById(
      GOOGLE_TRANSLATE_SCRIPT_ID,
    ) as HTMLScriptElement | null;
    if (existingScript) {
      existingScript.addEventListener("load", initialiseGoogleTranslate, {
        once: true,
      });
      window.setTimeout(initialiseGoogleTranslate, 0);
      return;
    }

    window.googleTranslateElementInit = initialiseGoogleTranslate;
    const script = document.createElement("script");
    script.id = GOOGLE_TRANSLATE_SCRIPT_ID;
    script.async = true;
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.onerror = () => {
      window.googleTranslateElementInit = initialiseGoogleTranslate;
    };
    document.head.appendChild(script);
  }, [initialiseGoogleTranslate]);

  useEffect(() => {
    const storedLanguage = readStoredLanguage();
    desiredLanguageRef.current = storedLanguage;
    persistLanguage(storedLanguage);
    setLanguage(storedLanguage);
    document.documentElement.lang = storedLanguage;

    if (storedLanguage === "te") {
      loadGoogleTranslate();
    }
  }, [loadGoogleTranslate]);

  const selectLanguage = (nextLanguage: PortalLanguage) => {
    desiredLanguageRef.current = nextLanguage;
    setLanguage(nextLanguage);
    setAnchorEl(null);
    persistLanguage(nextLanguage);
    document.documentElement.lang = nextLanguage;

    if (nextLanguage === "te") {
      loadGoogleTranslate();
    } else if (translateElementRef.current) {
      translateElementRef.current.translate("en");
    }
  };

  const isDark = tone === "dark";
  const languageLabel = language === "en" ? "English" : "తెలుగు";

  return (
    <>
      <Button
        aria-controls={anchorEl ? "portal-language-menu" : undefined}
        aria-haspopup="menu"
        aria-label={`Language: ${languageLabel}`}
        onClick={(event) => setAnchorEl(event.currentTarget)}
        startIcon={<LanguageRoundedIcon sx={{ fontSize: "17px !important" }} />}
        sx={{
          backgroundColor: isDark ? "rgba(255,255,255,0.07)" : "#FFFFFF",
          border: "1px solid",
          borderColor: isDark
            ? "rgba(255,255,255,0.18)"
            : "divider",
          color: isDark ? "#FFFFFF" : "text.primary",
          flexShrink: 0,
          fontSize: "0.7rem",
          fontWeight: 700,
          justifyContent: variant === "icon" ? "center" : "flex-start",
          minHeight: 34,
          minWidth: variant === "icon" ? 36 : 0,
          p: variant === "icon" ? 0 : "5px 9px",
          px: variant === "icon" ? 0 : { xs: 0.6, sm: 1 },
          "&:hover": {
            backgroundColor: isDark
              ? "rgba(255,255,255,0.14)"
              : "#FFF8E1",
          },
        }}
        variant="text"
      >
        {variant === "icon" ? null : (
          <Box
            component="span"
            sx={{
              display: { xs: "none", sm: "inline" },
              whiteSpace: "nowrap",
            }}
          >
            English / తెలుగు
          </Box>
        )}
      </Button>

      <Menu
        anchorEl={anchorEl}
        id="portal-language-menu"
        onClose={() => setAnchorEl(null)}
        open={Boolean(anchorEl)}
        slotProps={{
          paper: {
            sx: { mt: 0.7, minWidth: 176, p: 0.6 },
          },
        }}
      >
        <MenuItem onClick={() => selectLanguage("en")} selected={language === "en"}>
          <ListItemIcon>
            {language === "en" ? (
              <CheckRoundedIcon color="primary" fontSize="small" />
            ) : null}
          </ListItemIcon>
          <ListItemText primary="English" secondary="Continue in English" />
        </MenuItem>
        <MenuItem onClick={() => selectLanguage("te")} selected={language === "te"}>
          <ListItemIcon>
            {language === "te" ? (
              <CheckRoundedIcon color="primary" fontSize="small" />
            ) : null}
          </ListItemIcon>
          <ListItemText primary="తెలుగు" secondary="Telugu" />
        </MenuItem>
      </Menu>
    </>
  );
}
