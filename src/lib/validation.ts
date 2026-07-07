import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export type LoginValues = Yup.InferType<typeof loginSchema>;

export const registerSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "Too short")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Too short")
    .required("Last name is required"),
  email: Yup.string()
    .email("Enter a valid work email")
    .required("Work email is required"),
  password: Yup.string()
    .min(8, "Minimum 8 characters")
    .matches(/[A-Z]/, "Add at least one uppercase letter")
    .matches(/[0-9]/, "Add at least one number")
    .required("Password is required"),
  terms: Yup.boolean()
    .oneOf([true], "You must accept the Terms of Service")
    .required(),
});

export type RegisterValues = Yup.InferType<typeof registerSchema>;

export const forgotPasswordSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),
});

export type ForgotPasswordValues = Yup.InferType<typeof forgotPasswordSchema>;

export const profileSchema = Yup.object({
  displayName: Yup.string()
    .min(2, "Too short")
    .required("Display name is required"),
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),
  role: Yup.string().required("Role is required"),
  location: Yup.string().nullable(),
});

export type ProfileValues = Yup.InferType<typeof profileSchema>;

export const newTicketSchema = Yup.object({
  subject: Yup.string()
    .min(6, "Give it a more descriptive subject")
    .required("Subject is required"),
  customer: Yup.string().required("Customer name is required"),
  priority: Yup.mixed<"Urgent" | "High" | "Medium" | "Low">()
    .oneOf(["Urgent", "High", "Medium", "Low"])
    .required("Priority is required"),
  category: Yup.string().required("Category is required"),
  description: Yup.string()
    .min(10, "Please add a bit more detail")
    .required("Description is required"),
});

export type NewTicketValues = Yup.InferType<typeof newTicketSchema>;

export const replyMessageSchema = Yup.object({
  message: Yup.string()
    .min(1, "Message can't be empty")
    .required("Message can't be empty"),
});

export type ReplyMessageValues = Yup.InferType<typeof replyMessageSchema>;
