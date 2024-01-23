import classNames from "classnames";
import { ReactNode } from "react";

export default function Button({
  children,
  className = "",
  type = "button",
  onClick,
}: {
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick: () => void;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(
        "font-bold py-2 px-4 rounded inline-flex items-center",
        className
      )}
    >
      {children}
    </button>
  );
}
