"use client";

import classNames from "classnames";
import { ReactNode } from "react";

export function InputWrapper({
  id,
  name,
  label,
  hasError = false,
  children,
}: {
  id?: string;
  name: string;
  label: string;
  hasError?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={classNames("py-2", {
        border: hasError,
      })}
    >
      <label
        htmlFor={id ?? name}
        className="block text-sm font-medium leading-6 text-gray-900 text-left"
      >
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">{children}</div>
    </div>
  );
}
