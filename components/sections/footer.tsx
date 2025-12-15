"use client"

import { motion } from "framer-motion"
import { Lock } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-slate-400">
            <Lock className="w-4 h-4" />
            <span className="text-sm">Confidential - Internal Use Only</span>
          </div>

          <p className="text-sm text-slate-500">© {currentYear} Order Management System PoC. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
