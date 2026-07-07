"use client";

import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faDesktop, faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { Card } from "@/components/ui/Card";
import { TextField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { ToggleSwitch } from "@/components/ui/ToggleSwitch";

const passwordSchema = Yup.object({
  currentPassword: Yup.string().required("Current password is required"),
  newPassword: Yup.string()
    .min(8, "Minimum 8 characters")
    .required("New password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Please confirm your new password"),
});

const sessions = [
  {
    icon: faDesktop,
    device: "MacBook Pro · Chrome",
    location: "Cairo, Egypt",
    current: true,
  },
  {
    icon: faMobileScreen,
    device: "iPhone 15 · Safari",
    location: "Cairo, Egypt",
    current: false,
  },
];

export function SecuritySettings() {
  const [twoFactor, setTwoFactor] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className="space-y-6">
      <Card>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-1">
          Change Password
        </h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
          Choose a strong password you haven&apos;t used elsewhere.
        </p>
        <Formik
          initialValues={{
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
          }}
          validationSchema={passwordSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            await new Promise((r) => setTimeout(r, 700));
            setSubmitting(false);
            resetForm();
            setSaved(true);
            setTimeout(() => setSaved(false), 2500);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-5">
              <TextField
                name="currentPassword"
                label="Current password"
                type="password"
                icon={faLock}
              />
              <div className="grid sm:grid-cols-2 gap-4">
                <TextField
                  name="newPassword"
                  label="New password"
                  type="password"
                  icon={faLock}
                />
                <TextField
                  name="confirmPassword"
                  label="Confirm new password"
                  type="password"
                  icon={faLock}
                />
              </div>
              <div className="flex items-center gap-4">
                <Button type="submit" isLoading={isSubmitting}>
                  Update Password
                </Button>
                {saved && (
                  <span className="font-label-sm text-label-sm text-green-600">
                    Password updated
                  </span>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </Card>

      <Card>
        <ToggleSwitch
          checked={twoFactor}
          onChange={setTwoFactor}
          label="Two-factor authentication"
          description="Require a verification code in addition to your password"
        />
      </Card>

      <Card>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
          Active Sessions
        </h3>
        <div className="space-y-3">
          {sessions.map((session) => (
            <div
              key={session.device}
              className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface-variant">
                  <FontAwesomeIcon icon={session.icon} />
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface">
                    {session.device}
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {session.location}
                  </p>
                </div>
              </div>
              {session.current ? (
                <span className="font-label-sm text-label-sm text-green-600">
                  This device
                </span>
              ) : (
                <button className="font-label-sm text-label-sm text-error hover:underline">
                  Revoke
                </button>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
