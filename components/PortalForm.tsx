"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

type PortalFormProps = {
  endpoint: "/api/concern" | "/api/feedback";
  title: string;
  description: string;
  submitLabel: string;
  messageLabel: string;
  messagePlaceholder: string;
};

type FormValues = {
  name: string;
  mobile: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = { name: "", mobile: "", message: "" };

export default function PortalForm({
  endpoint,
  title,
  description,
  submitLabel,
  messageLabel,
  messagePlaceholder,
}: PortalFormProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const update = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
    if (status !== "idle") {
      setStatus("idle");
      setMessage("");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: FormErrors = {};
    const name = values.name.trim();
    const mobile = values.mobile.replace(/\D/g, "").slice(0, 10);
    const text = values.message.trim();

    if (!name) nextErrors.name = "Please enter your name.";
    if (!/^\d{10}$/.test(mobile)) nextErrors.mobile = "Enter exactly 10 digits.";
    if (!text) nextErrors.message = "Please add a short message.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("pending");
    setMessage("");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, mobile, concern: text, message: text }),
      });
      const payload: unknown = await response.json().catch(() => null);
      if (!response.ok) {
        const record = payload && typeof payload === "object" ? (payload as Record<string, unknown>) : {};
        throw new Error(typeof record.error === "string" ? record.error : "We could not submit your message. Please try again.");
      }
      const record = payload && typeof payload === "object" ? (payload as Record<string, unknown>) : {};
      const reference = typeof record.referenceId === "string" ? record.referenceId : "your request has been received";
      setMessage(`Thank you. Your reference is ${reference}. A district team member can follow up during the next working day.`);
      setStatus("success");
      setValues(initialValues);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "We could not submit your message. Please try again.");
    }
  };

  return (
    <Box component="section" sx={{ background: "#FFFBF2", py: { xs: 2, md: 2.5 } }}>
      <Box sx={{ maxWidth: 820, minWidth: 0, mx: "auto", px: { xs: 2, sm: 3 }, width: "100%" }}>
        <Card sx={{ borderRadius: 3.5, maxWidth: "100%", minWidth: 0, overflow: "hidden", width: "100%" }}>
          <Box sx={{ background: "linear-gradient(120deg, #3D2D08, #8A6500)", color: "#FFFFFF", minWidth: 0, p: { xs: 2.4, sm: 3 } }}>
            <Typography component="h2" variant="h5" sx={{ color: "#FFFFFF", fontSize: "1.25rem" }}>{title}</Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.76)", fontSize: "0.8rem", lineHeight: 1.6, mt: 0.5 }}>{description}</Typography>
          </Box>
          <CardContent sx={{ minWidth: 0, p: { xs: 2.2, sm: 3 } }}>
            {status === "success" ? <Alert severity="success" sx={{ mb: 2.2, borderRadius: 2 }}>{message}</Alert> : null}
            {status === "error" ? <Alert severity="error" sx={{ mb: 2.2, borderRadius: 2 }}>{message}</Alert> : null}
            <Box component="form" noValidate onSubmit={handleSubmit}>
              <Grid container spacing={2} sx={{ minWidth: 0 }}>
                <Grid size={{ xs: 12, lg: 6 }}>
                  <TextField autoComplete="name" error={Boolean(errors.name)} helperText={errors.name ?? " "} label="Full name" onChange={(event) => update("name", event.target.value)} required sx={{ minWidth: 0 }} value={values.name} />
                </Grid>
                <Grid size={{ xs: 12, lg: 6 }}>
                  <TextField autoComplete="tel" error={Boolean(errors.mobile)} helperText={errors.mobile ?? "Use a 10-digit mobile number."} inputProps={{ inputMode: "numeric", maxLength: 10 }} label="Mobile number" onChange={(event) => update("mobile", event.target.value.replace(/\D/g, "").slice(0, 10))} required sx={{ minWidth: 0 }} type="tel" value={values.mobile} />
                </Grid>
                <Grid size={12}>
                  <TextField error={Boolean(errors.message)} helperText={errors.message ?? " "} label={messageLabel} minRows={5} multiline onChange={(event) => update("message", event.target.value)} placeholder={messagePlaceholder} required sx={{ minWidth: 0 }} value={values.message} />
                </Grid>
              </Grid>
              <Stack direction={{ xs: "column", lg: "row" }} alignItems={{ xs: "stretch", lg: "center" }} justifyContent="space-between" spacing={1.5} sx={{ mt: 2.5 }}>
                <Typography sx={{ color: "text.secondary", fontSize: "0.7rem", lineHeight: 1.5, maxWidth: 470 }}>
                  This demonstration form validates your details and returns a reference ID. It does not create an official government ticket or store personal information.
                </Typography>
                <Button disabled={status === "pending"} type="submit" variant="contained" startIcon={status === "pending" ? <CircularProgress color="inherit" size={16} /> : <SendRoundedIcon />}>
                  {status === "pending" ? "Submitting…" : submitLabel}
                </Button>
              </Stack>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
