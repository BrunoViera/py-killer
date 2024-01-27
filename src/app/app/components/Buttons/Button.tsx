import classNames from "classnames";
import { ReactNode } from "react";

enum ButtonStyle {
  primary = "bg-blue-500 text-blue-950 hover:bg-blue-400  focus-visible:ring-blue-500",
  success = "bg-green-500 text-green-950 hover:bg-green-400  focus-visible:ring-green-500",
  warning = "bg-yellow-500 text-yellow-950 hover:bg-yellow-400  focus-visible:ring-yellow-500",
  danger = "bg-red-500 text-red-950 hover:bg-red-400  focus-visible:ring-red-500",
}

export default function Button({
  children,
  className = "",
  type = "button",
  style = ButtonStyle.primary,
  onClick,
}: {
  style?: ButtonStyle;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(
        "inline-flex justify-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2  focus-visible:ring-offset-2",
        style,
        className
      )}
    >
      {children}
    </button>
  );
}

Button.Primary = ButtonStyle.primary;
Button.Success = ButtonStyle.success;
Button.Warning = ButtonStyle.warning;
Button.Danger = ButtonStyle.danger;
