"use client";

import { useState } from "react";
import Link from "next/link";
import { Formik, Form } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faArrowLeft,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { TextField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { forgotPasswordSchema, ForgotPasswordValues } from "@/lib/validation";

const initialValues: ForgotPasswordValues = { email: "" };

export function ForgotPasswordForm() {
  const [sent, setSent] = useState(false);
  const [sentTo, setSentTo] = useState("");

  return (
    <div>
      <Link
        href="/login"
        className="inline-flex items-center gap-2 text-label-sm text-on-surface-variant hover:text-primary mb-8"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        Back to login
      </Link>

      <AnimatePresence mode="wait">
        {!sent ? (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h2 className="font-headline-lg text-headline-lg-mobile text-on-surface mb-2">
              Forgot your password?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              Enter your email and we&apos;ll send you a link to reset it.
            </p>
            <Formik
              initialValues={initialValues}
              validationSchema={forgotPasswordSchema}
              onSubmit={async (values, { setSubmitting }) => {
                await new Promise((r) => setTimeout(r, 800));
                setSentTo(values.email);
                setSent(true);
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-5">
                  <TextField
                    name="email"
                    label="Email address"
                    type="email"
                    icon={faEnvelope}
                    placeholder="you@company.com"
                    autoComplete="email"
                  />
                  <Button type="submit" fullWidth size="lg" isLoading={isSubmitting}>
                    Send Reset Link
                  </Button>
                </Form>
              )}
            </Formik>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-center py-6"
          >
            <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-6">
              <FontAwesomeIcon icon={faCircleCheck} className="text-3xl" />
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile text-on-surface mb-2">
              Check your inbox
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              We&apos;ve sent a password reset link to{" "}
              <span className="font-medium text-on-surface">{sentTo}</span>.
            </p>
            <Link href="/login">
              <Button variant="outline" fullWidth>
                Return to login
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
