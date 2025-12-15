"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Circle, FileText, Database, Zap } from "lucide-react"

const phases = [
  {
    phase: "Phase 1",
    status: "current",
    title: "入力支援 & 編集UI",
    description: "AI-OCRによるデータ抽出、ステートレス設計",
    features: ["PDF/画像のOCR処理", "抽出データの編集UI", "Gemini API連携"],
    icon: Zap,
    color: "bg-indigo-600",
  },
  {
    phase: "Phase 2",
    status: "future",
    title: "PDF生成 & メール下書き",
    description: "書類自動生成、メールテンプレート作成",
    features: ["PDF自動生成", "メール文面下書き", "テンプレート管理"],
    icon: FileText,
    color: "bg-slate-400",
  },
  {
    phase: "Phase 3",
    status: "future",
    title: "DB実装 & 完全自動化",
    description: "データベース導入、エンドツーエンド自動化",
    features: ["データベース連携", "履歴管理", "完全自動化"],
    icon: Database,
    color: "bg-slate-400",
  },
]

export function RoadmapTab() {
  return (
    <div className="relative">
      {/* Timeline Line - Added dark mode color */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 hidden md:block" />

      <div className="space-y-8">
        {phases.map((phase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            {/* Timeline Dot */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
              <div
                className={`p-2 rounded-full ${phase.status === "current" ? "bg-indigo-600" : "bg-slate-300 dark:bg-slate-600"}`}
              >
                {phase.status === "current" ? (
                  <CheckCircle2 className="w-5 h-5 text-white" />
                ) : (
                  <Circle className="w-5 h-5 text-white" />
                )}
              </div>
            </div>

            {/* Content */}
            <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
              <Card
                className={`border-0 shadow-lg bg-white dark:bg-slate-800 ${phase.status === "current" ? "ring-2 ring-indigo-600" : ""}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`p-2 rounded-lg ${phase.status === "current" ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-400" : "bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-400"}`}
                    >
                      <phase.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <Badge
                        variant={phase.status === "current" ? "default" : "secondary"}
                        className="dark:bg-slate-700 dark:text-slate-300"
                      >
                        {phase.phase}
                      </Badge>
                      {phase.status === "current" && (
                        <Badge className="ml-2 bg-emerald-100 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-900 dark:text-emerald-400">
                          Current
                        </Badge>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">{phase.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">{phase.description}</p>

                  <div className="space-y-2">
                    {phase.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle2
                          className={`w-4 h-4 ${phase.status === "current" ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400 dark:text-slate-500"}`}
                        />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
