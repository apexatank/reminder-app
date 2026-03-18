"use client";

import { motion } from "framer-motion";
import { Bell, ArrowLeft, ShieldCheck, Lock, Eye, FileText } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function PrivacyPolicy() {
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
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <ShieldCheck size={16} />
              Privacy Matters
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl mb-6">Privacy <span className="text-gradient">Policy</span></h1>
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
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                  <Eye size={20} />
                </div>
                <h2 className="text-2xl font-bold">Information We Collect</h2>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                At RV Reminder, we take your privacy seriously. We collect minimal information necessary to provide you with the best reminder experience. This includes:
              </p>
              <ul className="mt-4 space-y-3 text-zinc-600 dark:text-zinc-400 list-disc pl-6">
                <li>Account Information: Name and email address when you create an account.</li>
                <li>Reminder Data: The content of your reminders, timing, and recurrence patterns.</li>
                <li>Device Information: Basic hardware and software details to optimize app performance.</li>
                <li>Usage Data: Anonymous statistics on how you interact with the application.</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Lock size={20} />
                </div>
                <h2 className="text-2xl font-bold">How We Use Your Data</h2>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Your data is used exclusively to:
              </p>
              <ul className="mt-4 space-y-3 text-zinc-600 dark:text-zinc-400 list-disc pl-6">
                <li>Provide, maintain, and improve the RV Reminder services.</li>
                <li>Sync your reminders across all your authorized devices.</li>
                <li>Send you push notifications and alerts as configured by you.</li>
                <li>Analyze app usage to identify and fix technical issues.</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500">
                  <FileText size={20} />
                </div>
                <h2 className="text-2xl font-bold">Data Security</h2>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We implement industry-standard security measures to protect your information. All data transmitted between the app and our servers is encrypted using SSL (Secure Sockets Layer) technology. We do not sell your personal information to third parties.
              </p>
            </section>

            <div className="pt-10 border-t border-zinc-200 dark:border-white/5 text-center">
              <p className="text-zinc-500 text-sm mb-6 pb-2">Questions about our Privacy Policy?</p>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-foreground text-background px-8 py-3 font-bold transition-all hover:scale-105 active:scale-95 shadow-lg">
                Contact Privacy Team
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
