import { Switch } from "@headlessui/react";
import { ReactNode } from "react";

export function Toggle({
  label,
  value,
  onChange,
  FootNote,
}: {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
  FootNote?: ReactNode;
}) {
  return (
    <div className="py-4">
      <Switch.Group>
        <div className="flex items-center space-x-2 leading-tight">
          <span>
            <Switch
              checked={value}
              onChange={() => onChange(!value)}
              className={`${
                value ? "bg-green-600" : "bg-slate-400"
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
            >
              <span
                className={`${
                  value ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </Switch>
          </span>
          <span>
            <Switch.Label>{label}</Switch.Label>
          </span>
        </div>
      </Switch.Group>
      {FootNote && <div className="pt-2 text-sm opacity-50">{FootNote}</div>}
    </div>
  );
}
