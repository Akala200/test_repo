import { redirect } from "next/navigation";

import { sidebarLinks } from "@/config/dashboard";
import { getCurrentUser } from "@/lib/session";
import { SearchCommand } from "@/components/dashboard/search-command";
import { ModeToggle } from "@/components/layout/mode-toggle";
import { UserAccountNav } from "@/components/layout/user-account-nav";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import BottomNav from "@/components/layout/mobile-nav";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default async function Dashboard({ children }: ProtectedLayoutProps) {
  const user = await getCurrentUser();


  const filteredLinks = sidebarLinks.map((section) => ({
    ...section,
    items: section.items.filter(
      ({ authorizeOnly }) => !authorizeOnly || authorizeOnly === user?.role
    ),
  }));

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* <header className="sticky top-0 z-50 flex h-14 bg-background px-4 lg:h-[60px] xl:px-8">
        <MaxWidthWrapper className="flex max-w-7xl items-center gap-x-3 px-0">
          <ModeToggle />
        </MaxWidthWrapper>
      </header> */}

      <main className="flex-1 p-4 pb-16 xl:px-8">
        <MaxWidthWrapper className="flex h-full max-w-7xl flex-col gap-4 px-0 lg:gap-6">
          {children}
        </MaxWidthWrapper>
      </main>

      <BottomNav />
    </div>
  );
}
