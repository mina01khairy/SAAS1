"use client";

import { useState } from "react";
import { Formik, Form } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { TextAreaField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { ToggleSwitch } from "@/components/ui/ToggleSwitch";
import { replyMessageSchema, ReplyMessageValues } from "@/lib/validation";
import { useTickets } from "@/context/TicketsContext";
import { useAuth } from "@/context/AuthContext";

const initialValues: ReplyMessageValues = { message: "" };

export function ReplyComposer({ ticketId }: { ticketId: string }) {
  const { addMessage } = useTickets();
  const { user } = useAuth();
  const [isInternal, setIsInternal] = useState(false);

  return (
    <div className="border-t border-outline-variant/30 pt-5 mt-6">
      <ToggleSwitch
        checked={isInternal}
        onChange={setIsInternal}
        label={isInternal ? "Internal note" : "Reply to customer"}
        description={
          isInternal
            ? "Only visible to your team"
            : "The customer will be notified by email"
        }
      />
      <Formik
        initialValues={initialValues}
        validationSchema={replyMessageSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          addMessage(ticketId, {
            author: user?.name ?? "Alex Rivers",
            isAgent: true,
            isInternal,
            timestamp: "Just now",
            body: values.message,
          });
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="mt-3 space-y-3">
            <TextAreaField
              name="message"
              rows={3}
              placeholder={
                isInternal
                  ? "Leave a note for your team..."
                  : "Type your reply..."
              }
            />
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="text-on-surface-variant hover:text-on-surface p-2 rounded-lg hover:bg-surface-container-low transition-colors"
                aria-label="Attach file"
              >
                <FontAwesomeIcon icon={faPaperclip} />
              </button>
              <Button
                type="submit"
                icon={faPaperPlane}
                iconPosition="right"
                isLoading={isSubmitting}
                variant={isInternal ? "dark" : "primary"}
              >
                {isInternal ? "Add Note" : "Send Reply"}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
