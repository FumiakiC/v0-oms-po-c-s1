"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Database, Users, FileCheck, EyeOff, ShieldCheck } from "lucide-react"

const securityItems = [
  {
    id: "stateless",
    icon: Database,
    title: "データ ステートレス",
    description: "処理完了後、データは即時削除されます。サーバーにデータは永続化されません。",
    color: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-100 dark:bg-indigo-900",
  },
  {
    id: "access",
    icon: Users,
    title: "アクセス制御",
    description: "Cloudflare Accessによる特定チームメンバーのみへのアクセス制限。VPN不要のゼロトラストセキュリティ。",
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-100 dark:bg-amber-900",
  },
  {
    id: "whitelist",
    icon: FileCheck,
    title: "データ ホワイト/ブラックリスト",
    description: "アップロード可能なデータの明確なルール定義。個人情報、機密情報のアップロード禁止。",
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-100 dark:bg-emerald-900",
  },
  {
    id: "masking",
    icon: EyeOff,
    title: "マスキングルール",
    description: "機密情報の黒塗り処理を必須化。処理前の情報保護を徹底。",
    color: "text-rose-600 dark:text-rose-400",
    bgColor: "bg-rose-100 dark:bg-rose-900",
  },
]

export function SecurityTab() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      {/* Security Badge */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-indigo-600 to-indigo-700 dark:from-indigo-700 dark:to-indigo-800">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <div className="text-white">
              <h3 className="text-xl font-bold">セキュリティ & ガイドライン</h3>
              <p className="text-indigo-100">安全な運用のための4つの原則</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Accordion - Added dark mode styling */}
      <Card className="border-0 shadow-lg bg-white dark:bg-slate-800">
        <CardContent className="p-2">
          <Accordion type="single" collapsible className="w-full">
            {securityItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem value={item.id} className="border-b dark:border-slate-700 last:border-0">
                  <AccordionTrigger className="hover:no-underline px-4 py-4">
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg ${item.bgColor}`}>
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <span className="font-semibold text-slate-900 dark:text-slate-50">{item.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="pl-14 text-slate-600 dark:text-slate-400">{item.description}</div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </motion.div>
  )
}
