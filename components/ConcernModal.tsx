"use client";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FormEvent, useEffect, useRef, useState } from "react";

type SubmitStatus = "idle" | "pending" | "success" | "error";
type FormValues = { name: string; mobile: string; concern: string };
type FieldErrors = Partial<Record<keyof FormValues, string>>;

const EMPTY_FORM: FormValues = { name: "", mobile: "", concern: "" };

function responseMessage(payload: unknown, fallback: string): string {
  if (payload && typeof payload === "object") {
    const record = payload as Record<string, unknown>;
    if (typeof record.message === "string" && record.message.trim()) {
      return record.message.trim();
    }
    if (typeof record.error === "string" && record.error.trim()) {
      return record.error.trim();
    }
    if (record.data && typeof record.data === "object") {
      const data = record.data as Record<string, unknown>;
      if (typeof data.message === "string" && data.message.trim()) {
        return data.message.trim();
      }
    }
  }
  return fallback;
}

export default function ConcernModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [values, setValues] = useState<FormValues>(EMPTY_FORM);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [serverMessage, setServerMessage] = useState("");
  const abortControllerRef = useRef<AbortController | null>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const statusHeadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort();
    };
  }, []);

  useEffect(() => {
    if (open) {
      return;
    }

    abortControllerRef.current?.abort();
    abortControllerRef.current = null;
    setValues(EMPTY_FORM);
    setErrors({});
    setStatus("idle");
    setServerMessage("");
  }, [open]);

  useEffect(() => {
    if (status === "success" || status === "error") {
      statusHeadingRef.current?.focus();
    }
  }, [status]);

  const updateValue = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
    if (status === "error") {
      setStatus("idle");
      setServerMessage("");
    }
  };

  const handleClose = () => {
    abortControllerRef.current?.abort();
    abortControllerRef.current = null;
    onClose();
  };

  const handleSubmit = async (event: FormEvent<HTMLDivElement>) => {
    event.preventDefault();

    const name = values.name.trim();
    const mobile = values.mobile.trim();
    const concern = values.concern.trim();
    const nextErrors: FieldErrors = {};

    if (!name) {
      nextErrors.name = "Please enter your name.";
    }
    if (!/^\d{10}$/.test(mobile)) {
      nextErrors.mobile = "Enter exactly 10 digits.";
    }
    if (!concern) {
      nextErrors.concern = "Please describe your concern.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      if (nextErrors.name) {
        nameInputRef.current?.focus();
      }
      return;
    }

    const controller = new AbortController();
    abortControllerRef.current?.abort();
    abortControllerRef.current = controller;
    setStatus("pending");
    setServerMessage("");

    try {
      const response = await fetch("/api/concern", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, mobile, concern }),
        signal: controller.signal,
      });

      let payload: unknown = null;
      try {
        payload = await response.json();
      } catch {
        payload = null;
      }

      if (!response.ok) {
        throw new Error(
          responseMessage(
            payload,
            `We could not submit your concern (error ${response.status}). Please try again.`,
          ),
        );
      }

      setServerMessage(
        responseMessage(
          payload,
          "Thank you. Your concern has been received and will be reviewed by the district team.",
        ),
      );
      setStatus("success");
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return;
      }

      setServerMessage(
        error instanceof Error
          ? error.message
          : "We could not submit your concern. Please check your connection and try again.",
      );
      setStatus("error");
    } finally {
      if (abortControllerRef.current === controller) {
        abortControllerRef.current = null;
      }
    }
  };

  const startAnotherConcern = () => {
    setValues(EMPTY_FORM);
    setErrors({});
    setServerMessage("");
    setStatus("idle");
    window.requestAnimationFrame(() => nameInputRef.current?.focus());
  };

  return (
    <Dialog
      aria-describedby="concern-modal-description"
      aria-labelledby="concern-modal-title"
      fullWidth
      maxWidth="sm"
      onClose={handleClose}
      open={open}
      scroll="paper"
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(15, 23, 42, 0.6)",
            backdropFilter: "blur(4px)"
          }
        },
        paper: {
          component: "form",
          onSubmit: handleSubmit,
          sx: {
            borderRadius: 3.5,
            overflow: "hidden",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            border: "1px solid rgba(255, 193, 7, 0.2)"
          }
        },
      }}
    >
      {/* Premium Header Banner */}
      <Box
        sx={{
          bgcolor: "#FFC107",
          color: "#1F1700",
          px: { xs: 2.5, sm: 3 },
          py: 2,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(0,0,0,0.06)"
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Box
            sx={{
              alignItems: "center",
              bgcolor: "#1F1700",
              color: "#FFC107",
              borderRadius: 2,
              display: "flex",
              height: 38,
              justifyContent: "center",
              width: 38,
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              flexShrink: 0
            }}
          >
            <PhoneInTalkRoundedIcon sx={{ fontSize: 20 }} />
          </Box>
          <Box>
            <Typography id="concern-modal-title" component="h2" sx={{ fontWeight: 900, fontSize: "1.1rem", lineHeight: 1.2, color: "#1F1700" }}>
              Share your concern
            </Typography>
            <Typography
              sx={{ color: "rgba(31,23,0,0.8)", fontSize: "0.74rem", fontWeight: 600, mt: 0.2 }}
            >
              Citizen request and grievance support
            </Typography>
          </Box>
        </Stack>

        <IconButton
          aria-label="Close concern form"
          onClick={handleClose}
          sx={{
            color: "#1F1700",
            bgcolor: "rgba(0,0,0,0.06)",
            width: 32,
            height: 32,
            "&:hover": { bgcolor: "rgba(0,0,0,0.12)" }
          }}
        >
          <CloseRoundedIcon sx={{ fontSize: 18 }} />
        </IconButton>
      </Box>

      <DialogContent sx={{ px: { xs: 2.5, sm: 3.5 }, py: 2.5, bgcolor: "#FAFAFA" }}>
        <Box sx={{ mb: 2.5, bgcolor: "#FFFFFF", p: 1.5, borderRadius: 2, border: "1px solid #E2E8F0" }}>
          <Typography id="concern-modal-description" sx={{ color: "#475569", fontSize: "0.82rem", lineHeight: 1.55 }}>
            Provide your contact number and a clear description. The district administration team will follow up directly using the contact details you provide.
          </Typography>
        </Box>

        {status === "success" ? (
          <Box
            ref={statusHeadingRef}
            role="status"
            tabIndex={-1}
            sx={{ outline: "none", py: { xs: 2, sm: 3 }, textAlign: "center" }}
          >
            <CheckCircleRoundedIcon
              aria-hidden="true"
              sx={{ color: "#16A34A", fontSize: 60 }}
            />
            <Typography component="h3" sx={{ color: "#0F172A", fontSize: "1.25rem", fontWeight: 850, mt: 1 }}>
              Concern received successfully
            </Typography>
            <Typography aria-live="polite" sx={{ color: "#64748B", fontSize: "0.85rem", lineHeight: 1.6, margin: "0 auto", maxWidth: 420, mt: 0.75 }}>
              {serverMessage}
            </Typography>
            <Box
              sx={{
                background: "#FEFCE8",
                border: "1px solid #FEF08A",
                borderRadius: 2.5,
                mt: 2.5,
                p: 2,
                display: "inline-block"
              }}
            >
              <Typography sx={{ color: "#854D0E", fontSize: "0.78rem", fontWeight: 600 }}>
                Need urgent or emergency assistance?
              </Typography>
              <Button
                component="a"
                href="tel:1902"
                variant="contained"
                startIcon={<PhoneInTalkRoundedIcon sx={{ fontSize: 18 }} />}
                sx={{
                  mt: 1,
                  bgcolor: "#FFC107",
                  color: "#1F1700",
                  fontWeight: 800,
                  fontSize: "0.8rem",
                  borderRadius: 8,
                  textTransform: "none",
                  boxShadow: "none",
                  "&:hover": { bgcolor: "#FACC15" }
                }}
              >
                Call IVRS 1902 (Toll-Free)
              </Button>
            </Box>
          </Box>
        ) : (
          <Stack component="fieldset" disabled={status === "pending"} spacing={2} sx={{ border: 0, m: 0, minWidth: 0, p: 0 }}>
            <TextField
              autoFocus
              autoComplete="name"
              error={Boolean(errors.name)}
              helperText={errors.name ?? " "}
              inputRef={nameInputRef}
              label="Full name"
              name="name"
              onChange={(event) => updateValue("name", event.target.value)}
              required
              value={values.name}
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#FFFFFF",
                  borderRadius: 2,
                  "&.Mui-focused fieldset": {
                    borderColor: "#FFC107",
                    borderWidth: 2
                  }
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#B45309"
                }
              }}
            />
            <TextField
              autoComplete="tel"
              error={Boolean(errors.mobile)}
              helperText={errors.mobile ?? "Enter a 10-digit mobile number."}
              inputProps={{ inputMode: "numeric", maxLength: 10, pattern: "[0-9]*" }}
              label="Mobile number"
              name="mobile"
              onChange={(event) => updateValue("mobile", event.target.value)}
              required
              type="tel"
              value={values.mobile}
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#FFFFFF",
                  borderRadius: 2,
                  "&.Mui-focused fieldset": {
                    borderColor: "#FFC107",
                    borderWidth: 2
                  }
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#B45309"
                }
              }}
            />
            <TextField
              error={Boolean(errors.concern)}
              helperText={errors.concern ?? " "}
              label="Describe your concern"
              minRows={3}
              maxRows={6}
              multiline
              name="concern"
              onChange={(event) => updateValue("concern", event.target.value)}
              required
              value={values.concern}
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#FFFFFF",
                  borderRadius: 2,
                  "&.Mui-focused fieldset": {
                    borderColor: "#FFC107",
                    borderWidth: 2
                  }
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#B45309"
                }
              }}
            />

            {status === "error" ? (
              <Box ref={statusHeadingRef} tabIndex={-1} sx={{ outline: "none" }}>
                <Alert severity="error" sx={{ alignItems: "flex-start", borderRadius: 2 }}>
                  {serverMessage}
                </Alert>
              </Box>
            ) : null}
          </Stack>
        )}
      </DialogContent>

      <DialogActions sx={{ gap: 1, justifyContent: "space-between", px: { xs: 2.5, sm: 3 }, py: 1.75, bgcolor: "#FFFFFF", borderTop: "1px solid #E2E8F0" }}>
        {status === "success" ? (
          <>
            <Button onClick={handleClose} variant="outlined" sx={{ borderRadius: 8, textTransform: "none", fontWeight: 700, borderColor: "#CBD5E1", color: "#475569" }}>
              Close
            </Button>
            <Button onClick={startAnotherConcern} variant="contained" sx={{ bgcolor: "#FFC107", color: "#1F1700", fontWeight: 800, borderRadius: 8, textTransform: "none", boxShadow: "none", "&:hover": { bgcolor: "#FACC15" } }}>
              Submit another concern
            </Button>
          </>
        ) : (
          <>
            <Button disabled={status === "pending"} onClick={handleClose} sx={{ color: "#64748B", fontWeight: 700, textTransform: "none" }}>
              Cancel
            </Button>
            <Button
              disabled={status === "pending"}
              startIcon={status === "pending" ? <CircularProgress color="inherit" size={16} /> : undefined}
              type="submit"
              variant="contained"
              sx={{
                bgcolor: "#1F1700",
                color: "#FFFFFF !important",
                fontWeight: 800,
                fontSize: "0.85rem",
                px: 2.75,
                py: 0.75,
                borderRadius: 8,
                textTransform: "none",
                boxShadow: "none",
                "&:hover": { bgcolor: "#332600" }
              }}
            >
              {status === "pending" ? "Submitting…" : "Submit concern"}
            </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
}
