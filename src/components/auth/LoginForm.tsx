"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Formik, Form } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { TextField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { loginSchema, LoginValues } from "@/lib/validation";
import { useAuth } from "@/context/AuthContext";

const initialValues: LoginValues = { email: "", password: "" };

export function LoginForm() {
  const { login } = useAuth();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25 }}
    >
      <h2 className="font-headline-lg text-headline-lg-mobile text-on-surface mb-2">
        Welcome back
      </h2>
      <p className="font-body-md text-body-md text-on-surface-variant mb-8">
        Log in to your SupportFlow AI workspace.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setFormError(null);
          try {
            await login(values.email, values.password);
            router.push("/dashboard");
          } catch {
            setFormError("Something went wrong. Please try again.");
          } finally {
            setSubmitting(false);
          }
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
            <TextField
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              icon={faLock}
              placeholder="••••••••"
              autoComplete="current-password"
              rightSlot={
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="text-outline hover:text-on-surface-variant"
                  tabIndex={-1}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              }
            />
            <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="font-label-sm text-label-sm text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            {formError && (
              <p className="text-label-sm text-error">{formError}</p>
            )}
            <Button
              type="submit"
              fullWidth
              size="lg"
              isLoading={isSubmitting}
            >
              Log In
            </Button>
          </Form>
        )}
      </Formik>

      <p className="mt-8 text-center font-body-sm text-body-sm text-on-surface-variant">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-primary font-medium hover:underline">
          Sign up for free
        </Link>
      </p>
    </motion.div>
  );
}
