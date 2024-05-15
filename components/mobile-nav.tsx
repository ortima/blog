'use client'

import React, { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import { Github, Menu, Rss, Send } from 'lucide-react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/navigation'
import { siteConfig } from '@/config/site'

const MobileNav = () => {
    const [open, setOpen] = useState(false)
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="outline" className='w-10 px-0 sm:hidden'>
                    <Menu className='h-5 w-5' />
                    <span className='sr-only'>Toggle theme</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right">
                <MobileLink href="/" className="flex items-center pb-2 border-b border-border">
                    <Rss className='mr-2 h-4 w-4' />
                    <span className='font-bold'>{siteConfig.name}</span>
                </MobileLink>
                <div className='flex flex-col gap-3 mt-3'>
                    <MobileLink onOpenChange={setOpen} href="/blog">
                        Blog
                    </MobileLink>
                    <MobileLink onOpenChange={setOpen} href="/about">
                        About
                    </MobileLink>
                    <div className='flex gap-2 items-center'>
                        <Link target='_blank' rel='noreferrer' href={siteConfig.links.github}>
                            GitHub
                        </Link>
                        <Github className='h-4 w-4' />
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Link target='_blank' rel='noreferrer' href={siteConfig.links.telegram}>
                            Telegram
                        </Link>
                        <Send className='h-4 w-4' />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav

interface MobileLinkProps extends LinkProps {
    children: React.ReactNode
    onOpenChange?: (open: boolean) => void
    className?: string
}

function MobileLink({
    href,
    onOpenChange,
    children,
    className,
    ...props
}: MobileLinkProps) {
    const router = useRouter()
    return (
        <Link href={href}
            onClick={() => {
                router.push(href.toString())
                onOpenChange?.(false)
            }}
            className={className}
            {...props}
        >
            {children}
        </Link>)
}