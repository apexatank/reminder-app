"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Bell, 
  Calendar, 
  CheckCircle2, 
  Cloud, 
  Compass, 
  Download, 
  MapPin, 
  ShieldCheck, 
  Smartphone, 
  Wrench,
  Star,
  Zap,
  Check,
  Menu,
  X,
  Play,
  Droplets,
  CreditCard,
  Briefcase,
  Heart,
  Target
} from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary/30 transition-colors duration-300">
      {/* Navbar */}
      <nav className="fixed top-0 z-[100] w-full border-b border-zinc-200 dark:border-white/5 bg-background/80 backdrop-blur-xl transition-colors duration-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/20">
              <Bell className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight">RV Reminder</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex text-sm font-medium">
            <a href="#features" className="text-zinc-500 dark:text-zinc-400 transition-colors hover:text-primary dark:hover:text-white">Features</a>
            <a href="#how-it-works" className="text-zinc-500 dark:text-zinc-400 transition-colors hover:text-primary dark:hover:text-white">How it Works</a>
            <a href="#preview" className="text-zinc-500 dark:text-zinc-400 transition-colors hover:text-primary dark:hover:text-white">App Preview</a>
            <a href="#testimonials" className="text-zinc-500 dark:text-zinc-400 transition-colors hover:text-primary dark:hover:text-white">Reviews</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <button className="hidden rounded-full bg-foreground text-background px-6 py-2.5 text-sm font-semibold transition-all hover:opacity-90 active:scale-95 md:block">
              Download App
            </button>
            <button 
              className="md:hidden p-2 text-zinc-500 dark:text-zinc-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="border-b border-white/5 bg-background px-6 py-6 md:hidden"
          >
            <div className="flex flex-col gap-4 text-lg font-medium">
              <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
              <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)}>How it Works</a>
              <a href="#preview" onClick={() => setIsMobileMenuOpen(false)}>App Preview</a>
              <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)}>Reviews</a>
              <div className="flex items-center justify-between pt-4 border-t border-zinc-200 dark:border-white/5">
                <span className="text-sm text-zinc-500 lowercase">Switch Theme</span>
                <ThemeToggle />
              </div>
              <button className="mt-4 w-full rounded-2xl bg-primary py-4 font-bold text-white">Download App</button>
            </div>
          </motion.div>
        )}
      </nav>

      <main>
        {/* Section: Hero */}
        <section className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-48 md:pb-32">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 blur-[120px] opacity-10 dark:opacity-20 w-full max-w-4xl h-full pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full animate-pulse-slow"></div>
          </div>

          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center text-center md:items-start md:text-left"
              >
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                  </span>
                  Your Personal Life Assistant
                </div>
                <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl leading-[1.1]">
                  Master Your Day, <span className="text-gradient">Every Day.</span>
                </h1>
                <p className="mb-8 max-w-lg text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed md:text-xl">
                  From drinking water at 5 PM to tracking payments 90 days out, RV Reminder keeps your life on track so you never miss a beat.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
                  <button className="group flex h-14 items-center gap-3 rounded-2xl bg-foreground text-background px-6 font-bold transition-all hover:scale-105 active:scale-95 shadow-lg">
                    <Smartphone size={20} />
                    <div className="text-left leading-tight">
                      <p className="text-[10px] uppercase tracking-wider opacity-70 font-medium">Download on the</p>
                      <p className="text-base font-black">App Store</p>
                    </div>
                  </button>
                  <button className="group flex h-14 items-center gap-3 rounded-2xl bg-background text-foreground border border-zinc-200 dark:border-white/10 px-6 font-bold transition-all hover:scale-105 active:scale-95 shadow-sm">
                    <Download size={20} className="text-secondary" />
                    <div className="text-left leading-tight">
                      <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium">Get it on</p>
                      <p className="text-base font-black">Google Play</p>
                    </div>
                  </button>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative flex justify-center"
              >
                <div className="relative z-10 w-full max-w-[400px] animate-float">
                  <Image 
                    src="/hero.png" 
                    alt="RV Reminder App UI" 
                    width={500} 
                    height={800} 
                    className="rounded-[3rem] shadow-2xl dark:shadow-indigo-500/10"
                    priority
                  />
                  
                  {/* Floating Indicator 1: Hero (Top Right) */}
                  <div className="absolute -top-6 -right-12 glass rounded-2xl p-4 animate-float shadow-xl backdrop-blur-xl border-white/10 hidden md:block" style={{ animationDelay: "1s" }}>
                    <div className="flex items-center gap-3">
                       <div className="h-8 w-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                          <Droplets size={16} className="text-blue-500" />
                       </div>
                       <div>
                          <p className="text-xs font-bold leading-none">Drink Water</p>
                          <p className="text-[10px] text-zinc-500 mt-1">Due now • 500ml</p>
                       </div>
                    </div>
                  </div>

                  {/* Floating Indicator 2: Hero (Bottom Left) */}
                  <div className="absolute bottom-20 -left-16 glass rounded-2xl p-4 animate-float shadow-xl backdrop-blur-xl border-white/10 hidden md:block" style={{ animationDelay: "2s" }}>
                    <div className="flex items-center gap-3">
                       <div className="h-8 w-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                          <CreditCard size={16} className="text-secondary" />
                       </div>
                       <div>
                          <p className="text-xs font-bold leading-none">Payment Due</p>
                          <p className="text-[10px] text-zinc-500 mt-1">In 90 days • $150</p>
                       </div>
                    </div>
                  </div>

                  {/* Floating Indicator 3: Hero (Top Left - NEW) */}
                  <div className="absolute top-10 -left-20 glass rounded-2xl p-4 animate-float shadow-xl backdrop-blur-xl border-white/10 hidden md:block" style={{ animationDelay: "0.5s" }}>
                    <div className="flex items-center gap-3">
                       <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
                          <Briefcase size={16} className="text-primary" />
                       </div>
                       <div>
                          <p className="text-xs font-bold leading-none">Deep Focus</p>
                          <p className="text-[10px] text-zinc-500 mt-1">Active • 25m left</p>
                       </div>
                    </div>
                  </div>

                  {/* Floating Indicator 4: Hero (Bottom Right - NEW) */}
                  <div className="absolute -bottom-6 -right-16 glass rounded-2xl p-4 animate-float shadow-xl backdrop-blur-xl border-white/10 hidden md:block" style={{ animationDelay: "1.5s" }}>
                    <div className="flex items-center gap-3">
                       <div className="h-8 w-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                          <Calendar size={16} className="text-purple-500" />
                       </div>
                       <div>
                          <p className="text-xs font-bold leading-none">Meeting</p>
                          <p className="text-[10px] text-zinc-500 mt-1">In 15 mins • Zoom</p>
                       </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section: Features */}
        <section id="features" className="relative px-6 py-24 md:py-32 bg-background overflow-hidden">
          {/* Decorative background mesh */}
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] dark:opacity-[0.07] pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full blur-[100px]"></div>
            <div className="absolute top-1/2 -right-24 w-80 h-80 bg-secondary rounded-full blur-[100px]"></div>
          </div>
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 text-center relative">
              <motion.h2 {...fadeIn} className="mb-4 text-3xl font-bold md:text-5xl">Reminders for <span className="text-primary">Every Moment</span></motion.h2>
              <motion.p {...fadeIn} className="mx-auto max-w-2xl text-zinc-500 dark:text-zinc-400">Whether it's a daily habit or a long-term milestone, we've got you covered. Simplify your brain by offloading your schedule.</motion.p>
              
              {/* Floating Indicator 3: Features */}
              <div className="absolute -top-10 right-10 glass rounded-2xl p-3 animate-pulse hidden lg:block">
                 <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-green-500" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Settings Synced</span>
                 </div>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: <Droplets className="text-blue-500" />,
                  title: "Healthy Habits",
                  desc: "Set recurring alerts to stay hydrated, take vitamins, or stretch throughout the day."
                },
                {
                  icon: <CreditCard className="text-yellow-600 dark:text-yellow-400" />,
                  title: "Financial Tracking",
                  desc: "Never forget a bill or a payment again. Set reminders for 30, 60, or even 90 days in advance."
                },
                {
                  icon: <Briefcase className="text-purple-500" />,
                  title: "Work & Projects",
                  desc: "Manage deadlines and meetings with precision. Professional tools for professional results."
                },
                {
                  icon: <Heart className="text-red-500" />,
                  title: "Wellness & Self-Care",
                  desc: "Schedule time for meditation, exercise, or just a break to recharge your batteries."
                },
                {
                  icon: <Target className="text-green-500" />,
                  title: "Goal Milestones",
                  desc: "Track long-term progress and get notified when it's time to take the next big step."
                },
                {
                  icon: <Cloud className="text-indigo-500" />,
                  title: "Cloud Sync",
                  desc: "Your reminders are always with you, synced perfectly across all your mobile and desktop devices."
                }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="glass-card group p-8 rounded-3xl transition-all border-primary/10 dark:border-white/5 hover:border-primary/30"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 dark:bg-white/5 transition-colors group-hover:bg-primary/20">
                    {feature.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 line-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: App Preview */}
        <section id="preview" className="px-6 py-24 md:py-32 overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-16 md:grid-cols-5">
              <div className="md:col-span-2 text-center md:text-left">
                <h2 className="mb-6 text-4xl font-bold md:text-6xl">Your Life, <span className="text-primary italic">Organized.</span></h2>
                <p className="mb-10 text-lg text-zinc-600 dark:text-zinc-400">Our intuitive interface makes setting complex, long-term reminders as easy as a single tap. Stay ahead of your schedule.</p>
                
                <div className="space-y-6 text-left">
                  {[
                    { title: "Smart Dashboard", desc: "View all your upcoming alerts in one beautiful timeline." },
                    { title: "Custom Logic", desc: "Set reminders based on time, location, or repeating intervals." },
                    { title: "Zero Noise", desc: "Intelligent notifications that get your attention without being annoying." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold">{i+1}</div>
                      <div>
                        <h4 className="font-bold">{item.title}</h4>
                        <p className="text-zinc-500 dark:text-zinc-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-3 flex justify-center perspective-1000">
                <motion.div 
                   initial={{ opacity: 0, rotateX: 10, rotateY: -10 }}
                   whileInView={{ opacity: 1, rotateX: 0, rotateY: 0 }}
                   transition={{ duration: 1, ease: "easeOut" }}
                   viewport={{ once: true }}
                   className="relative w-full max-w-[440px]"
                >
                  {/* The "Brain" or Central Interface */}
                  <div className="relative z-10 glass-card rounded-[3rem] p-8 shadow-2xl border-white/20 overflow-hidden min-h-[500px]">
                    <div className="mb-8 flex items-center justify-between">
                      <div className="h-2 w-12 rounded-full bg-zinc-200 dark:bg-zinc-800"></div>
                      <div className="flex gap-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <div className="h-1.5 w-1.5 rounded-full bg-secondary"></div>
                      </div>
                    </div>
                    
                    <h3 className="mb-6 text-xl font-bold">Today's Timeline</h3>
                    
                    <div className="space-y-4">
                      {[
                        { icon: <Droplets size={18} />, color: "text-blue-500", bg: "bg-blue-500/10", title: "Hydration", time: "11:00 AM", status: "Done" },
                        { icon: <Briefcase size={18} />, color: "text-primary", bg: "bg-primary/10", title: "Work Session", time: "2:00 PM", status: "Upcoming" },
                        { icon: <CreditCard size={18} />, color: "text-secondary", bg: "bg-secondary/10", title: "Internet Bill", time: "Tomorrow", status: "Scheduled" },
                        { icon: <Heart size={18} />, color: "text-rose-500", bg: "bg-rose-500/10", title: "Meditation", time: "5:00 PM", status: "Pending" }
                      ].map((item, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.2 + (i * 0.1) }}
                          className="flex items-center justify-between p-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/10"
                        >
                          <div className="flex items-center gap-4">
                            <div className={`${item.bg} ${item.color} p-3 rounded-xl`}>{item.icon}</div>
                            <div>
                              <p className="font-bold text-sm">{item.title}</p>
                              <p className="text-[10px] text-zinc-500">{item.time}</p>
                            </div>
                          </div>
                          <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${item.status === 'Done' ? 'bg-green-500/10 text-green-500' : 'bg-zinc-100 dark:bg-white/5 text-zinc-400'}`}>
                            {item.status}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Floating Context Cards */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-10 -right-20 glass p-5 rounded-2xl shadow-xl z-20 hidden lg:block"
                  >
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Upcoming</p>
                    <p className="text-sm font-bold">Project Deadline</p>
                    <div className="mt-3 flex items-center gap-2">
                       <div className="h-1 w-24 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                          <div className="h-full w-2/3 bg-primary rounded-full"></div>
                       </div>
                       <span className="text-[10px] font-bold">75%</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-12 -left-20 glass p-6 rounded-3xl shadow-2xl z-20 hidden lg:block"
                  >
                    <div className="flex items-center gap-4">
                       <div className="h-12 w-12 rounded-full border-4 border-secondary border-t-zinc-200 flex items-center justify-center font-bold text-xs">82%</div>
                       <div>
                          <p className="text-sm font-bold">Daily Focus</p>
                          <p className="text-xs text-zinc-500">You're doing great!</p>
                       </div>
                    </div>
                  </motion.div>

                  {/* Ambient Glows */}
                  <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/20 blur-[100px]"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: How It Works */}
        <section id="how-it-works" className="relative px-6 py-24 md:py-32 bg-zinc-50 dark:bg-primary/5 overflow-hidden">
          {/* Subtle background mesh */}
          <div className="absolute bottom-0 right-0 w-full h-full opacity-[0.05] pointer-events-none">
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-secondary rounded-full blur-[150px]"></div>
          </div>
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">Set It and <span className="text-primary">Forget It</span></h2>
            </div>
            <div className="grid gap-12 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Quick Creation",
                  desc: "Type or speak your reminder. Our AI understands natural language like 'Remind me to pay Sarah in 3 months'."
                },
                {
                  step: "02",
                  title: "Smart Scheduling",
                  desc: "Choose the perfect time or location trigger. Set custom repeating patterns for daily habits."
                },
                {
                  step: "03",
                  title: "Live Stress-Free",
                  desc: "Receive perfectly timed notifications. Spend your energy on what matters while we handle the rest."
                }
              ].map((step, i) => (
                <div key={i} className="relative p-10 glass-card rounded-[3rem] text-center border-secondary/10 hover:border-secondary/30 transition-all shadow-xl">
                   <span className="text-7xl font-black text-black/5 dark:text-white/5 absolute top-4 left-1/2 -translate-x-1/2 italic leading-none">{step.step}</span>
                   <h3 className="text-2xl font-bold mb-4 relative z-10">{step.title}</h3>
                   <p className="text-zinc-600 dark:text-zinc-400 relative z-10">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Testimonials */}
        <section id="testimonials" className="py-24 md:py-32 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6">
             <div className="mb-20 text-center">
                <h2 className="text-3xl font-bold md:text-5xl">Loved by <span className="text-primary">Thousands</span></h2>
                <p className="mt-4 text-zinc-500 dark:text-zinc-400">Join a global community of focused individuals.</p>
             </div>
          </div>

          <div className="relative">
            {/* Edge fades */}
            <div className="absolute left-0 top-0 z-10 h-full w-32 bg-linear-to-r from-background to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 z-10 h-full w-32 bg-linear-to-l from-background to-transparent pointer-events-none"></div>

            <motion.div 
              animate={{ x: [0, -1920] }}
              transition={{ 
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex gap-8 w-max px-4"
            >
              {[
                { name: "Alex Johnson", role: "Freelance Designer", content: "The 90-day payment reminder is a lifesaver for my business. I never have to chase invoices manually anymore!" },
                { name: "Maria Garcia", role: "Health Enthusiast", content: "Finally, an app that actually helps me drink more water. The subtle reminders are exactly what I needed." },
                { name: "David Chen", role: "Project Manager", content: "RV Reminder is my core tool for managing complex timelines. It's clean, fast, and does exactly what it says." },
                { name: "Sarah Miller", role: "Full-time Parent", content: "Keeping track of family schedules used to be a nightmare. This app simplified everything in days." },
                { name: "James Wilson", role: "Software Engineer", content: "The API integrations and recurring logic are top-notch. Best notification engine I've used." },
                { name: "Elena Rossi", role: "Travel Blogger", content: "From flight reminders to hotel bookings, I never miss a beat on my journeys. Truly indispensable." },
                // Duplicate for seamless loop
                { name: "Alex Johnson", role: "Freelance Designer", content: "The 90-day payment reminder is a lifesaver for my business. I never have to chase invoices manually anymore!" },
                { name: "Maria Garcia", role: "Health Enthusiast", content: "Finally, an app that actually helps me drink more water. The subtle reminders are exactly what I needed." },
                { name: "David Chen", role: "Project Manager", content: "RV Reminder is my core tool for managing complex timelines. It's clean, fast, and does exactly what it says." }
              ].map((testimonial, i) => (
                <div key={i} className="w-[400px] shrink-0 p-8 glass-card rounded-3xl">
                  <div className="flex gap-1 text-secondary mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300 italic mb-8 text-lg font-serif">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary">{testimonial.name[0]}</div>
                    <div>
                      <p className="font-bold leading-none">{testimonial.name}</p>
                      <p className="text-sm text-zinc-500 mt-1">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section: CTA */}
        <section className="px-6 py-24 md:py-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-5xl rounded-[3rem] bg-zinc-950 border border-white/10 px-10 py-16 text-center shadow-2xl md:py-24 relative overflow-hidden group"
          >
            {/* Premium "Aura" Glows */}
            <div className="absolute top-0 -left-1/4 w-full h-full bg-primary/20 blur-[130px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 -right-1/4 w-full h-full bg-secondary/10 blur-[130px] rounded-full pointer-events-none"></div>
            
            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

            <Zap className="relative z-10 mx-auto mb-8 text-primary shadow-2xl" size={48} />
            <h2 className="relative z-10 mb-6 text-4xl font-black md:text-6xl text-white tracking-tight">Reclaim Your <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Focus</span> Today.</h2>
            <p className="relative z-10 mx-auto mb-10 max-w-xl text-lg font-medium text-zinc-400 md:text-xl">
              Join 50,000+ users who are mastering their time with RV Reminder. Professional tools for your everyday life.
            </p>
            <div className="relative z-10 flex flex-col justify-center gap-4 sm:flex-row">
              <button className="flex h-16 items-center justify-center rounded-2xl bg-white px-12 font-bold text-black transition-all hover:scale-105 active:scale-95 shadow-xl">
                Start Free Trial
              </button>
              <button className="flex h-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md px-12 font-bold text-white transition-all hover:bg-white/10 active:scale-95">
                View All Features
              </button>
            </div>
            
            {/* Indicator in CTA */}
            <div className="absolute bottom-8 right-8 glass rounded-xl p-3 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
               <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary animate-ping"></div>
                  <span className="text-[10px] font-bold text-white">52 New Users Today</span>
               </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-white/5 py-20 px-6 bg-background transition-colors duration-300">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <Bell className="text-white" size={18} />
                </div>
                <span className="text-xl font-bold tracking-tight">RV Reminder</span>
              </div>
              <p className="max-w-xs text-zinc-500 dark:text-zinc-400">Making life management and habit tracking simple, beautiful, and reliable.</p>
              
              <div className="flex gap-4 mt-8">
                 <div className="h-10 w-10 rounded-full border border-zinc-200 dark:border-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer text-zinc-500 dark:text-zinc-400"><Star size={18} /></div>
                 <div className="h-10 w-10 rounded-full border border-zinc-200 dark:border-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer text-zinc-500 dark:text-zinc-400"><Compass size={18} /></div>
                 <div className="h-10 w-10 rounded-full border border-zinc-200 dark:border-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer text-zinc-500 dark:text-zinc-400"><Cloud size={18} /></div>
              </div>
            </div>
            <div>
              <h4 className="mb-6 font-bold uppercase text-xs tracking-wider text-zinc-500 dark:text-zinc-500">Product</h4>
              <ul className="space-y-4 text-zinc-600 dark:text-zinc-400 text-sm">
                <li><a href="#" className="hover:text-primary dark:hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary dark:hover:text-white transition-colors">Habit Tracking</a></li>
                <li><a href="#" className="hover:text-primary dark:hover:text-white transition-colors">Life Log</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 font-bold uppercase text-xs tracking-wider text-zinc-500 dark:text-zinc-500">Legal</h4>
              <ul className="space-y-4 text-zinc-600 dark:text-zinc-400 text-sm">
                <li><Link href="/privacy" className="hover:text-primary dark:hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-primary dark:hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/contact" className="hover:text-primary dark:hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-20 border-t border-zinc-200 dark:border-white/5 pt-10 text-center text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} RV Reminder App. Your life, remembered.
          </div>
        </div>
      </footer>
    </div>
  );
}
