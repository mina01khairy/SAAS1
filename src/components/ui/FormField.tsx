"use client";

import { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { useField } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import clsx from "@/lib/clsx";

interface BaseProps {
  label?: string;
  name: string;
  hint?: string;
  icon?: IconDefinition;
  rightSlot?: ReactNode;
}

function ErrorText({ name }: { name: string }) {
  const [, meta] = useField(name);
  if (!(meta.touched && meta.error)) return null;
  return <p className="mt-1.5 text-label-sm text-error">{meta.error}</p>;
}

export function TextField({
  label,
  name,
  hint,
  icon,
  rightSlot,
  className,
  ...props
}: BaseProps & InputHTMLAttributes<HTMLInputElement>) {
  const [field, meta] = useField(name);
  const hasError = meta.touched && Boolean(meta.error);

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="block font-label-md text-label-md text-on-surface mb-2"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-sm"
          />
        )}
        <input
          id={name}
          {...field}
          {...props}
          className={clsx(
            "block w-full py-3 bg-surface-container-lowest border rounded-lg font-body-md text-on-surface placeholder:text-outline/60 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-200 outline-none",
            icon ? "pl-10 pr-4" : "px-4",
            rightSlot && "pr-10",
            hasError
              ? "border-error focus:border-error focus:ring-error/10"
              : "border-outline-variant/40",
            className
          )}
        />
        {rightSlot && (
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2">
            {rightSlot}
          </div>
        )}
      </div>
      {hint && !hasError && (
        <p className="mt-1.5 text-label-sm text-on-surface-variant">{hint}</p>
      )}
      <ErrorText name={name} />
    </div>
  );
}

export function TextAreaField({
  label,
  name,
  hint,
  className,
  ...props
}: BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const [field, meta] = useField(name);
  const hasError = meta.touched && Boolean(meta.error);

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="block font-label-md text-label-md text-on-surface mb-2"
        >
          {label}
        </label>
      )}
      <textarea
        id={name}
        {...field}
        {...props}
        className={clsx(
          "block w-full px-4 py-3 bg-surface-container-lowest border rounded-lg font-body-md text-on-surface placeholder:text-outline/60 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-200 outline-none resize-none",
          hasError
            ? "border-error focus:border-error focus:ring-error/10"
            : "border-outline-variant/40",
          className
        )}
      />
      {hint && !hasError && (
        <p className="mt-1.5 text-label-sm text-on-surface-variant">{hint}</p>
      )}
      <ErrorText name={name} />
    </div>
  );
}

interface SelectOption {
  label: string;
  value: string;
}

export function SelectField({
  label,
  name,
  options,
  className,
  ...props
}: BaseProps &
  SelectHTMLAttributes<HTMLSelectElement> & { options: SelectOption[] }) {
  const [field, meta] = useField(name);
  const hasError = meta.touched && Boolean(meta.error);

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="block font-label-md text-label-md text-on-surface mb-2"
        >
          {label}
        </label>
      )}
      <select
        id={name}
        {...field}
        {...props}
        className={clsx(
          "block w-full px-4 py-3 bg-surface-container-lowest border rounded-lg font-body-md text-on-surface focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-200 outline-none",
          hasError ? "border-error" : "border-outline-variant/40",
          className
        )}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <ErrorText name={name} />
    </div>
  );
}

export function CheckboxField({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) {
  const [field, meta] = useField({ name, type: "checkbox" });
  return (
    <div>
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          {...field}
          className="mt-1 w-4 h-4 accent-[#004bca] rounded border-outline-variant/50"
        />
        <span className="text-label-sm text-on-surface-variant">
          {children}
        </span>
      </label>
      {meta.touched && meta.error && (
        <p className="mt-1.5 text-label-sm text-error">{meta.error}</p>
      )}
    </div>
  );
}
