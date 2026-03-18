"use client";

import { motion } from "framer-motion";
import { Bell, ArrowLeft, Mail, MessageSquare, MapPin, Smartphone } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function ContactUs() {
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
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeIn} className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <MessageSquare size={16} />
              Support & Inquiries
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl mb-6">Get in <span className="text-gradient">Touch</span></h1>
            <p className="mx-auto max-w-2xl text-zinc-500 dark:text-zinc-400 text-lg">Have a suggestion or need help? Our team is here to support your journey towards better time management.</p>
          </motion.div>

          <div className="flex justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="w-full max-w-2xl"
            >
              <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border-white/5 space-y-10">
                <h2 className="text-3xl font-bold text-center mb-8">Contact Information</h2>
                
                <div className="grid gap-8 md:grid-cols-1">
                  <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Mail size={32} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">Email Us</h4>
                      <p className="text-zinc-500 dark:text-zinc-400">support@rvreminder.com</p>
                      <p className="text-zinc-400 text-sm mt-1">Typical response time: 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-secondary/30 transition-colors">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                      <Smartphone size={32} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">Live Support</h4>
                      <p className="text-zinc-500 dark:text-zinc-400">Available Mon-Fri, 9am - 6pm EST</p>
                      <p className="text-primary font-medium hover:underline cursor-pointer mt-1">Launch Instant Chat</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
                      <MapPin size={32} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">Headquarters</h4>
                      <p className="text-zinc-500 dark:text-zinc-400">123 Innovation Way, Tech District</p>
                      <p className="text-zinc-500 dark:text-zinc-400">San Francisco, CA 94103</p>
                    </div>
                  </div>
                </div>

                <div className="pt-10 border-t border-zinc-200 dark:border-white/5 text-center">
                   <h4 className="font-bold mb-6 text-lg">Follow Our Updates</h4>
                   <div className="flex justify-center gap-6">
                      <div className="h-12 w-12 rounded-2xl bg-zinc-100 dark:bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-all hover:scale-110 cursor-pointer text-zinc-500">𝕏</div>
                      <div className="h-12 w-12 rounded-2xl bg-zinc-100 dark:bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-all hover:scale-110 cursor-pointer text-zinc-500">in</div>
                      <div className="h-12 w-12 rounded-2xl bg-zinc-100 dark:bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-all hover:scale-110 cursor-pointer text-zinc-500">ig</div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
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
