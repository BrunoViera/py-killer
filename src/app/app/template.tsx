import SidebarMenu from "./components/Template/SidebarMenu";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <SidebarMenu />
      </div>
      <div>{children}</div>
    </div>
  );
}
