"use client"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Menu, XIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { ThemeToggle } from "./theme-toggle"
import { Button, buttonVariants } from "./ui/button"

const navLinks = [
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Projects", href: "/projects" },
  // { title: "Blog", href: "/blog" },
]

export const MobileMenu = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="block md:hidden px-2">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger>
          <div className="p-2">
            <Menu aria-label="open menu" />
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <ul className="flex flex-col gap-2 pt-2 px-4">
            {navLinks.map(({ title, href }) => (
              <li key={href}>
                <Link
                  onClick={() => setOpen(false)}
                  className={
                    buttonVariants({ variant: "secondary" }) +
                    " capitalize w-full"
                  }
                  href={href}
                >
                  {title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                onClick={() => setOpen(false)}
                href="/#contact"
                className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium rounded-lg bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors duration-200"
              >
                Get in touch
              </Link>
            </li>
          </ul>
          <DrawerFooter>
            <div className="w-full justify-end flex gap-4">
              <ThemeToggle variant="outline" size="default" />
              <Button asChild variant="outline">
                <DrawerClose>
                  <XIcon />
                </DrawerClose>
              </Button>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
