"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Layers, Calendar, TrendingUp, Shield } from "lucide-react"
import { ArchitectureTab } from "./tabs/architecture-tab"
import { RoadmapTab } from "./tabs/roadmap-tab"
import { CostEffectTab } from "./tabs/cost-effect-tab"
import { SecurityTab } from "./tabs/security-tab"

const tabs = [
  { value: "architecture", label: "アーキテクチャ", icon: Layers },
  { value: "roadmap", label: "ロードマップ", icon: Calendar },
  { value: "cost", label: "コスト & 効果", icon: TrendingUp },
  { value: "security", label: "セキュリティ", icon: Shield },
]

export function MainContent() {
  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm tracking-wider uppercase mb-4 block">
            Details
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 text-balance">計画詳細</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="architecture" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto bg-white dark:bg-slate-800 p-1.5 rounded-xl shadow-sm mb-8">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex items-center gap-2 py-3 px-4 data-[state=active]:bg-indigo-600 data-[state=active]:text-white dark:text-slate-300 dark:data-[state=inactive]:hover:bg-slate-700 rounded-lg transition-all"
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="font-medium">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="architecture">
              <ArchitectureTab />
            </TabsContent>
            <TabsContent value="roadmap">
              <RoadmapTab />
            </TabsContent>
            <TabsContent value="cost">
              <CostEffectTab />
            </TabsContent>
            <TabsContent value="security">
              <SecurityTab />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
