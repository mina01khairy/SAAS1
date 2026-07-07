"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Formik, Form } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { TextField, CheckboxField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { registerSchema, RegisterValues } from "@/lib/validation";
import { useAuth } from "@/context/AuthContext";

const initialValues: RegisterValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  terms: false,
};

export function RegisterForm() {
  const { register } = useAuth();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, x: 8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25 }}
    >
      <h2 className="font-headline-lg text-headline-lg-mobile text-on-surface mb-2">
        Create your account
      </h2>
      <p className="font-body-md text-body-md text-on-surface-variant mb-8">
        Start your 14-day free trial. No credit card required.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setFormError(null);
          try {
            await register(values);
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
            <div className="grid grid-cols-2 gap-4">
              <TextField
                name="firstName"
                label="First name"
                icon={faUser}
                placeholder="Mina"
                autoComplete="given-name"
              />
              <TextField
                name="lastName"
                label="Last name"
                placeholder="Khairy"
                autoComplete="family-name"
              />
            </div>
            <TextField
              name="email"
              label="Work email"
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
              placeholder="Min. 8 characters"
              autoComplete="new-password"
              hint="Use at least 8 characters, one uppercase letter, and a number."
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
            <CheckboxField name="terms">
              I agree to the{" "}
              <a href="#" className="text-primary hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-primary hover:underline">
                Privacy Policy
              </a>
              .
            </CheckboxField>
            {formError && (
              <p className="text-label-sm text-error">{formError}</p>
            )}
            <Button type="submit" fullWidth size="lg" isLoading={isSubmitting}>
              Create Account
            </Button>
          </Form>
        )}
      </Formik>

      <p className="mt-8 text-center font-body-sm text-body-sm text-on-surface-variant">
        Already have an account?{" "}
        <Link href="/login" className="text-primary font-medium hover:underline">
          Log in
        </Link>
      </p>
    </motion.div>
  );
}
