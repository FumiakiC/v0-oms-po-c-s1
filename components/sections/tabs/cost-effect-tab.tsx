"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Server, Shield, TrendingDown, ArrowDown } from "lucide-react"

const metrics = [
  {
    icon: Server,
    label: "AWS コスト",
    value: "約 $5",
    unit: "USD/月",
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-100 dark:bg-orange-950/50",
  },
  {
    icon: Shield,
    label: "セキュリティコスト",
    value: "ドメイン費用のみ",
    unit: "(Zero Trust)",
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-100 dark:bg-amber-950/50",
  },
  {
    icon: TrendingDown,
    label: "処理コスト削減",
    value: "¥1,000 → ¥168",
    unit: "/件 (-83%)",
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-100 dark:bg-emerald-950/50",
  },
]

export function CostEffectTab() {
  return (
    <div className="space-y-8">
      {/* Metric Cards */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="border-0 shadow-lg text-center bg-white dark:bg-slate-800">
              <CardContent className="p-6">
                <div className={`w-14 h-14 ${metric.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <metric.icon className={`w-7 h-7 ${metric.color}`} />
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{metric.label}</p>
                <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{metric.unit}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Comparison Chart */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <Card className="border-0 shadow-lg bg-white dark:bg-slate-800">
          <CardHeader>
            <CardTitle className="text-lg dark:text-slate-50">工数比較: 手動処理 vs AI支援</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Manual Process */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">手動処理</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-50">100%</span>
                </div>
                <div className="h-8 bg-slate-100 dark:bg-slate-700 rounded-lg overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-lg flex items-center justify-end pr-3"
                  >
                    <span className="text-xs text-white font-medium">¥1,000/件</span>
                  </motion.div>
                </div>
              </div>

              {/* AI Assisted */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">AI支援処理</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">17%</span>
                </div>
                <div className="h-8 bg-slate-100 dark:bg-slate-700 rounded-lg overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "17%" }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-lg flex items-center justify-end pr-3"
                  >
                    <span className="text-xs text-white font-medium">¥168/件</span>
                  </motion.div>
                </div>
              </div>

              {/* Savings Indicator */}
              <div className="flex items-center justify-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                  <ArrowDown className="w-5 h-5" />
                  <span className="text-2xl font-bold">83%</span>
                </div>
                <span className="text-slate-600 dark:text-slate-400">工数削減</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
