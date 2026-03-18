"use client";

import { motion } from "framer-motion";
import { Bell, ArrowLeft, Scale, Gavel, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function TermsOfService() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary/30 transition-colors duration-300">
      {/* Navbar */}
      <nav className="fixed top-0 z-100 w-full border-b border-zinc-200 dark:border-white/5 bg-background/80 backdrop-blur-xl transition-colors duration-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
              <Bell className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight">RV Reminder</span>
          </Link>
          
          <div className="flex items-center gap-4">
             <ThemeToggle />
             <Link href="/" className="hidden md:flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-primary transition-colors">
                <ArrowLeft size={16} />
                Back to Home
             </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div {...fadeIn} className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary mb-6">
              <Scale size={16} />
              Fair Usage & Rules
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl mb-6">Terms of <span className="text-gradient">Service</span></h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg">Last updated: March 17, 2026</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="glass-card p-8 md:p-12 rounded-[2.5rem] border-primary/10 dark:border-white/5 space-y-10"
          >
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500">
                  <Gavel size={20} />
                </div>
                <h2 className="text-2xl font-bold">1. Agreement to Terms</h2>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                By accessing or using RV Reminder, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-green-500/10 text-green-500">
                  <CheckCircle2 size={20} />
                </div>
                <h2 className="text-2xl font-bold">2. Proper Use</h2>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                You are responsible for your own use of the service and for any data or content you post or enter into RV Reminder. You agree not to:
              </p>
              <ul className="mt-4 space-y-3 text-zinc-600 dark:text-zinc-400 list-disc pl-6">
                <li>Use the service for any illegal purposes.</li>
                <li>Attempt to gain unauthorized access to our systems.</li>
                <li>Interfate with or disrupt the integrity or performance of the service.</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
                  <AlertCircle size={20} />
                </div>
                <h2 className="text-2xl font-bold">3. Disclaimer of Warranty</h2>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed italic">
                RV Reminder is provided "as is" and "as available". While we strive for 100% reliability, we do not guarantee that reminders will always be delivered on time due to potential technical limitations (such as device settings).
              </p>
            </section>

            <div className="pt-10 border-t border-zinc-200 dark:border-white/5 text-center">
              <p className="text-zinc-500 text-sm mb-6 pb-2">By using our app, you agree to these terms.</p>
              <Link href="/" className="inline-flex items-center gap-2 rounded-2xl bg-secondary text-white px-8 py-3 font-bold transition-all hover:scale-105 active:scale-95 shadow-lg">
                I Understand
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Simplified Footer */}
      <footer className="border-t border-zinc-200 dark:border-white/5 py-12 px-6 bg-background">
        <div className="mx-auto max-w-7xl text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Bell className="text-white" size={18} />
            </div>
            <span className="text-xl font-bold tracking-tight">RV Reminder</span>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            &copy; {new Date().getFullYear()} RV Reminder App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
