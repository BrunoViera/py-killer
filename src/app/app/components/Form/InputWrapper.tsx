"use client";

import classNames from "classnames";
import { ReactNode } from "react";
import { FieldError } from "react-hook-form";

export function InputWrapper({
  id,
  name,
  label,
  error,
  hasError = false,
  isDisabled = false,
  children,
}: {
  id?: string;
  name: string;
  label: string;
  error?: FieldError;
  hasError?: boolean;
  isDisabled?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={classNames("input-wrapper py-2", {
        "field-error": error || hasError,
      })}
    >
      <label
        htmlFor={name}
        className={classNames("w-full block text-left", {
          "text-black ": !isDisabled,
          "text-gray-500 ": isDisabled,
        })}
      >
        {label}
      </label>
      <div
        className={classNames("relative mt-2 rounded-md shadow-sm", {
          "!border-red-500 !bg-red-100": error || hasError,
        })}
      >
        {children}
      </div>
      {error?.message && (
        <div className="pt-1 text-sm text-red-600">{error.message}</div>
      )}
    </div>
  );
}
