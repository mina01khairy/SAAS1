"use client";

import { useState } from "react";
import { Formik, Form } from "formik";
import { faUser, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Card } from "@/components/ui/Card";
import { TextField, SelectField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { profileSchema, ProfileValues } from "@/lib/validation";
import { useAuth } from "@/context/AuthContext";

export function AccountDetailsForm() {
  const { user, updateProfile } = useAuth();
  const [saved, setSaved] = useState(false);

  const initialValues: ProfileValues = {
    displayName: user?.name ?? "",
    email: user?.email ?? "",
    role: user?.role ?? "Support Agent",
    location: "Cairo, Egypt",
  };

  return (
    <Card>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-1">
        Account Details
      </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
        Update your personal information and how it appears to your team.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={profileSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise((r) => setTimeout(r, 600));
          updateProfile({ name: values.displayName, email: values.email, role: values.role });
          setSaved(true);
          setSubmitting(false);
          setTimeout(() => setSaved(false), 2500);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-5">
            <TextField
              name="displayName"
              label="Display name"
              icon={faUser}
              placeholder="Alex Rivers"
            />
            <TextField
              name="email"
              label="Email address"
              type="email"
              icon={faEnvelope}
              placeholder="you@company.com"
            />
            <div className="grid sm:grid-cols-2 gap-4">
              <SelectField
                name="role"
                label="Role"
                options={[
                  { label: "Support Agent", value: "Support Agent" },
                  { label: "Support Lead", value: "Support Lead" },
                  { label: "Team Manager", value: "Team Manager" },
                  { label: "Administrator", value: "Administrator" },
                ]}
              />
              <TextField
                name="location"
                label="Location"
                icon={faLocationDot}
                placeholder="City, Country"
              />
            </div>
            <div className="flex items-center gap-4 pt-2">
              <Button type="submit" isLoading={isSubmitting}>
                Save Changes
              </Button>
              {saved && (
                <span className="font-label-sm text-label-sm text-green-600">
                  Saved successfully
                </span>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </Card>
  );
}
