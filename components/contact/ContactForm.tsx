"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import * as Yup from "yup";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { apiClient } from "@/lib/api";
import { useTranslation } from "react-i18next";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { t, i18n } = useTranslation();
  const direction = i18n.dir(); // "rtl" or "ltr"
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, t("form.errors.nameMin"))
      .required(t("form.errors.nameRequired")),
    email: Yup.string()
      .email(t("form.errors.emailInvalid"))
      .required(t("form.errors.emailRequired")),
    subject: Yup.string()
      .min(5, t("form.errors.subjectMin"))
      .required(t("form.errors.subjectRequired")),
    message: Yup.string()
      .min(10, t("form.errors.messageMin"))
      .required(t("form.errors.messageRequired")),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (formData: FormData) => {
    setIsSending(true);
    try {
      const response = await apiClient.post("/api/email/send-email", formData);

      if (response.status === 200) {
        setShowSuccess(true);
        reset();
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        throw new Error(response.data?.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Container dir={direction}>
      <AnimatePresence>
        {showSuccess && (
          <SuccessNotification
            dir={direction}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <CheckCircle2 size={20} />
            {t("form.success")}
          </SuccessNotification>
        )}
      </AnimatePresence>
      <FormWrapper
        dir={direction}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(onSubmit)(e);
        }}
      >
        <Title>{t("form.title")}</Title>
        <Description>{t("form.description")}</Description>

        <InputWrapper>
          <Input
            type="text"
            placeholder={t("form.name")}
            {...register("name")}
            $isError={!!errors.name}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </InputWrapper>

        <InputWrapper>
          <Input
            type="email"
            placeholder={t("form.email")}
            {...register("email")}
            $isError={!!errors.email}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </InputWrapper>

        <InputWrapper>
          <Input
            type="text"
            placeholder={t("form.subject")}
            {...register("subject")}
            $isError={!!errors.subject}
          />
          {errors.subject && (
            <ErrorMessage>{errors.subject.message}</ErrorMessage>
          )}
        </InputWrapper>

        <InputWrapper>
          <Textarea
            placeholder={t("form.message")}
            {...register("message")}
            $isError={!!errors.message}
          />
          {errors.message && (
            <ErrorMessage>{errors.message.message}</ErrorMessage>
          )}
        </InputWrapper>

        <SubmitButton type="submit" disabled={isSending}>
          {isSending ? t("form.sending") : t("form.submit")}
        </SubmitButton>
      </FormWrapper>
    </Container>
  );
};

export default ContactForm;

// Styled-components for design (same as before)
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  background-color: transparent;
  padding: 2rem;
  margin-bottom: 60px;
`;

const FormWrapper = styled.form`
  background: #ffffff;
  max-width: 500px;
  width: 100%;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333333;
  text-align: center;
`;

const Description = styled.p`
  font-size: 0.9rem;
  margin-bottom: 2rem;
  color: #666666;
  text-align: center;
`;

const InputWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

const Input = styled.input<{ $isError?: boolean }>`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ $isError }) => ($isError ? "#ff4d4f" : "#cccccc")};
  border-radius: 6px;
  font-size: 1rem;
  outline: none;
  background: ${({ $isError }) => ($isError ? "#ffeef0" : "#ffffff")};

  &:focus {
    border-color: ${({ $isError }) => ($isError ? "#ff4d4f" : "#9c3aaf")};
  }
`;

const Textarea = styled.textarea<{ $isError?: boolean }>`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ $isError }) => ($isError ? "#ff4d4f" : "#cccccc")};
  border-radius: 6px;
  font-size: 1rem;
  outline: none;
  min-height: 100px;
  background: ${({ $isError }) => ($isError ? "#ffeef0" : "#ffffff")};

  &:focus {
    border-color: ${({ $isError }) => ($isError ? "#ff4d4f" : "#9c3aaf")};
  }
`;

const ErrorMessage = styled.div`
  color: #ff4d4f;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff;
  background: linear-gradient(to right, #3785cc, #5b8af0);
  border: none;
  border-radius: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  box-shadow: 0 0 0 transparent;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 10px rgba(55, 133, 204, 0.2);
  }

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

const SuccessNotification = styled(motion.div)<{ dir?: string }>`
  position: fixed;
  top: 20px;
  ${({ dir }) => (dir === "rtl" ? "left: 20px;" : "right: 20px;")}
  background-color: #22c55e;
  color: white;
  padding: 16px 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: ${({ dir }) => (dir === "rtl" ? "row-reverse" : "row")};
  align-items: center;
  gap: 10px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 1000;
`;
