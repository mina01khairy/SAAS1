"use client";

import { useRouter } from "next/navigation";
import { Formik, Form } from "formik";
import { Modal } from "@/components/ui/Modal";
import { TextField, TextAreaField, SelectField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { newTicketSchema, NewTicketValues } from "@/lib/validation";
import { useTickets } from "@/context/TicketsContext";

const initialValues: NewTicketValues = {
  subject: "",
  customer: "",
  priority: "Medium",
  category: "",
  description: "",
};

export function NewTicketModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { addTicket } = useTickets();
  const router = useRouter();

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create New Ticket">
      <Formik
        initialValues={initialValues}
        validationSchema={newTicketSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          await new Promise((r) => setTimeout(r, 500));
          const ticket = addTicket(values);
          setSubmitting(false);
          resetForm();
          onClose();
          router.push(`tickets/${ticket.id}`);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-5">
            <TextField
              name="subject"
              label="Subject"
              placeholder="Brief summary of the issue"
            />
            <div className="grid grid-cols-2 gap-4">
              <TextField
                name="customer"
                label="Customer name"
                placeholder="Jane Doe"
              />
              <SelectField
                name="priority"
                label="Priority"
                options={[
                  { label: "Urgent", value: "Urgent" },
                  { label: "High", value: "High" },
                  { label: "Medium", value: "Medium" },
                  { label: "Low", value: "Low" },
                ]}
              />
            </div>
            <SelectField
              name="category"
              label="Category"
              options={[
                { label: "Select a category", value: "" },
                { label: "API", value: "API" },
                { label: "Billing", value: "Billing" },
                { label: "Performance", value: "Performance" },
                { label: "Account", value: "Account" },
                { label: "Other", value: "Other" },
              ]}
            />
            <TextAreaField
              name="description"
              label="Description"
              rows={4}
              placeholder="Describe the issue in detail..."
            />
            <div className="flex gap-3 pt-2">
              <Button type="button" variant="outline" fullWidth onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" fullWidth isLoading={isSubmitting}>
                Create Ticket
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}
