"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { Close, Menu } from "@/components/icons";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-colors duration-300",
          scrolled
            ? "border-b border-line bg-paper/85 backdrop-blur-md"
            : "border-b border-transparent",
        )}
      >
        <Container className="flex items-center justify-between py-5">
          <Link href="/" aria-label="HMS — на главную">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm transition-colors",
                  isActive(link.href)
                    ? "text-graphite"
                    : "text-muted hover:text-graphite",
                )}
              >
                {link.label}
                {isActive(link.href) ? (
                  <span className="absolute -bottom-1.5 left-0 h-px w-full bg-accent" />
                ) : null}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contacts"
              className="text-sm font-medium text-graphite transition-colors hover:text-accent"
            >
              Обсудить сотрудничество
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-graphite/15 text-graphite lg:hidden"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </Container>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="border-b border-line bg-paper lg:hidden"
          >
            <Container className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "border-b border-line py-4 text-base",
                    isActive(link.href) ? "text-graphite" : "text-muted",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contacts"
                className="py-4 text-base font-medium text-accent"
              >
                Обсудить сотрудничество
              </Link>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
