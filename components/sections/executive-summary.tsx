"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, FileWarning, Cpu, Target } from "lucide-react"

const summaryItems = [
  {
    icon: AlertTriangle,
    title: "緊急性",
    highlight: "2026年1月 法改正",
    description: "コンプライアンス違反リスク",
    color: "from-red-500 to-orange-500",
    bgColor: "bg-red-50 dark:bg-red-950/50",
    iconColor: "text-red-500",
  },
  {
    icon: FileWarning,
    title: "課題",
    highlight: "事務工数増による",
    description: "設計業務の圧迫",
    color: "from-amber-500 to-yellow-500",
    bgColor: "bg-amber-50 dark:bg-amber-950/50",
    iconColor: "text-amber-500",
  },
  {
    icon: Cpu,
    title: "ソリューション",
    highlight: "Gemini API x AWS Lightsail",
    description: "Low Cost, High Accuracy",
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/50",
    iconColor: "text-indigo-500",
  },
  {
    icon: Target,
    title: "目標",
    highlight: "工数83%削減",
    description: "& コンプライアンス担保",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/50",
    iconColor: "text-emerald-500",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function ExecutiveSummary() {
  return (
    <section id="executive-summary" className="py-24 px-6 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm tracking-wider uppercase mb-4 block">
            Executive Summary
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 text-balance">
            プロジェクト概要
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {summaryItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group bg-white dark:bg-slate-900">
                <div className={`h-1 bg-gradient-to-r ${item.color}`} />
                <CardContent className="p-6">
                  <div
                    className={`w-14 h-14 ${item.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                  </div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">{item.title}</p>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-1">{item.highlight}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
