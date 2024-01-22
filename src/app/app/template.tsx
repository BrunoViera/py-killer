import SidebarMenu from "./components/Template/SidebarMenu";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
      <SidebarMenu />
      <div className="grow w-full">{children}</div>
    </div>
  );
}
