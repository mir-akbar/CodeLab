import { AppSidebar } from "@/components/app-sidebar";
import CodeEditor from '@/components/CodeEditor';
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider className="h-screen w-screen flex bg-[#1e1e1e]">
      <AppSidebar className="fixed left-0 top-0 bottom-0" />
      <SidebarInset className="flex-1">
        <CodeEditor />
      </SidebarInset>
    </SidebarProvider>
  );
}