import { Button } from "@/components/ui/button";
import AppRouter from "./AppRouter";
import { AppSidebar } from "@/widgets/aside-bar/asidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import { useState } from "react";

function App() {
  // const [tooglebtn, setTooglebtn] = useState(false);

  return (
    <div>
      <SidebarProvider>
        <header>
          <SidebarTrigger />
        </header>
        <AppSidebar side="right" />
      </SidebarProvider>
      <AppRouter />
      <Button>Hello</Button>
    </div>
  );
}

export default App;
