import { siteConfig } from "@/config/site";
import { Github, Mail, Send } from "lucide-react";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <div className="mb-6 mt-14 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <Link target="_blank" rel="noreferrer" href="mailto:hello@example.com">
            <span className="sr-only">Mail</span>
            <Mail className="h-6 w-6" />
          </Link>
          <Link target="_blank" rel="noreferrer" href={siteConfig.links.telegram}>
            <span className="sr-only">Telegram</span>
            <Send className="h-6 w-6" />
          </Link>
          <Link target="_blank" rel="noreferrer" href={siteConfig.links.github}>
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </Link>
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-muted-foreground">
          <Link href='#' target="_blank">
            {siteConfig.author}
          </Link>
        </div>
      </div>
    </footer>
  );
}