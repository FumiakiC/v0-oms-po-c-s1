"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Server, Shield, Layout, Bot, CheckCircle, KeyRound, Info } from "lucide-react"

const stackItems = [
  {
    icon: Server,
    title: "Infrastructure",
    tech: "AWS Lightsail",
    tags: ["Stateless", "Low Cost"],
    color: "bg-orange-100 text-orange-600 dark:bg-orange-950/50 dark:text-orange-400",
  },
  {
    icon: Shield,
    title: "Security",
    tech: "Cloudflare Access",
    tags: ["Zero Trust", "VPN-free"],
    color: "bg-amber-100 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400",
  },
  {
    icon: Layout,
    title: "Frontend",
    tech: "Next.js / React",
    tags: ["Standard", "Efficient"],
    color: "bg-sky-100 text-sky-600 dark:bg-sky-950/50 dark:text-sky-400",
  },
  {
    icon: Bot,
    title: "AI Engine",
    tech: "Google Gemini API",
    tags: ["OCR", "High Precision"],
    color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400",
  },
  {
    icon: CheckCircle,
    title: "Validation",
    tech: "Zod / TypeScript",
    tags: ["Quality Assurance"],
    color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
}

export function ArchitectureTab() {
  return (
    <div className="space-y-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {stackItems.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-slate-800 dark:border-slate-700">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-lg ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">{item.title}</p>
                    <CardTitle className="text-lg dark:text-slate-50">{item.tech}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs dark:bg-slate-700 dark:text-slate-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Secret Management Note */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
        <Card className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                <KeyRound className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-50 flex items-center gap-2">
                  Secret Management
                  <Info className="w-4 h-4 text-slate-400" />
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  API Keys in Environment Variables, No DB Persistence - セキュアなシークレット管理
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
