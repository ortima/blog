import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Github, Send } from "lucide-react";
import { Navbar } from "./navbar";
import MobileNav from "./mobile-nav";
import { Modetoggle } from "./mode-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Navbar />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <div className={cn(buttonVariants({ variant: "ghost" }), "w-10 px-0 hidden sm:inline-flex")}>
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link href={siteConfig.links.telegram} target="_blank" rel="noreferrer">
              <div className={cn(buttonVariants({ variant: "ghost" }), "w-10 px-0 hidden sm:inline-flex")}>
                <Send className="h-4 w-4" />
                <span className="sr-only">Telegram</span>
              </div>
            </Link>
            <Modetoggle />
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  )
}