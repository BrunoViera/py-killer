import classNames from "classnames";
import { ReactNode } from "react";

interface PanelProps {
  children: ReactNode;
}

export function Panel({ children }: PanelProps) {
  return (
    <section className="flex h-full max-h-screen flex-col bg-slate-100 rounded-sm">
      {children}
    </section>
  );
}

function Header({
  children,
  isFrozen,
  center,
}: {
  children: ReactNode;
  isFrozen?: boolean;
  center?: boolean;
}) {
  return (
    <header
      className={classNames(
        "z-10 flex items-center border-b border-slate-300 p-4 leading-none",
        isFrozen ? "glass-backdrop-light glass-backdrop fixed w-full" : "",
        center ? "justify-center" : ""
      )}
    >
      {children}
    </header>
  );
}

function Body({
  children,
  className,
  isFrozen,
}: {
  children: ReactNode;
  className?: string;
  isFrozen?: boolean;
}) {
  return (
    <main
      className={classNames(
        "z-0 flex-1 screen:overflow-y-auto",
        isFrozen ? "px-4" : "p-4",
        className
      )}
    >
      {children}
    </main>
  );
}

function Footer({
  children,
  isFrozen,
}: {
  children: ReactNode;
  isFrozen?: boolean;
}) {
  return (
    <footer
      className={classNames(
        "flex-none border-t border-slate-300 p-4",
        isFrozen
          ? "glass-backdrop-light glass-backdrop fixed bottom-0 z-10 w-full"
          : ""
      )}
    >
      {children}
    </footer>
  );
}

Panel.Header = Header;
Panel.Body = Body;
Panel.Footer = Footer;
