// import { AppSidebar } from "@/components/app-sidebar";
// import CodeEditor from '@/components/CodeEditor';
// import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

// export default function Page() {
//   return (
//     <SidebarProvider>
//       {/* <div className="flex h-screen w-screen"> */}
//         {/* Sidebar */}
//         <AppSidebar />

//         {/* Main Content Area */}
//         <SidebarInset>
//           <main className="flex flex-1 flex-col">
//             {/* Header
//             <header className="flex h-16 items-center border-b px-4">
//               <h1 className="text-xl font-semibold">Code Editor</h1>
//             </header> */}

//             {/* Content */}
//             <div className="flex flex-1">
//               <CodeEditor />
//             </div>
//           </main>
//         </SidebarInset>
//       {/* </div> */}
//     </SidebarProvider>
//   );
// }

import { AppSidebar } from "@/components/app-sidebar";
import CodeEditor from '@/components/CodeEditor';
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

// export default function Page() {
//   return (
//     <SidebarProvider className="flex h-screen w-screen">
//       <div className="flex h-screen">
//         {/* The AppSidebar will be controlled by the SidebarProvider */}
//         <AppSidebar className="fixed left-0 top-0 bottom-0" />
        
//         {/* Main Content Area */}
//         <SidebarInset>
//           <main className="flex flex-1 flex-col">
//             <div className="flex flex-1">
//               <CodeEditor />
//             </div>
//           </main>
//         </SidebarInset>
//       </div>
//     </SidebarProvider>
//   );
// }

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