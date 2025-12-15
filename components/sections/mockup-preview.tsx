"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, FileImage, Loader2, CheckCircle, Calendar, Building, Package, Sparkles } from "lucide-react"

export function MockupPreview() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm tracking-wider uppercase mb-4 block">
            Mockup Preview
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 text-balance">
            Phase 1 ツール コンセプト
          </h2>
        </motion.div>

        {/* Browser Frame - Added dark mode styling */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700"
        >
          {/* Browser Header */}
          <div className="bg-slate-100 dark:bg-slate-800 px-4 py-3 flex items-center gap-3 border-b border-slate-200 dark:border-slate-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-white dark:bg-slate-700 px-4 py-1.5 rounded-lg text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                order-management.internal.app
              </div>
            </div>
          </div>

          {/* App Content */}
          <div className="bg-slate-50 dark:bg-slate-900 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Upload Section */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">1. ファイルアップロード</h3>

                {/* Drag & Drop Area */}
                <Card className="border-2 border-dashed border-indigo-300 dark:border-indigo-700 bg-indigo-50/50 dark:bg-indigo-950/30 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-colors">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Upload className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                    </motion.div>
                    <p className="text-slate-700 dark:text-slate-300 font-medium mb-2">ドラッグ & ドロップ</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">PDF / 画像ファイル対応</p>
                    <div className="flex items-center justify-center gap-2 mt-4">
                      <FileImage className="w-4 h-4 text-slate-400" />
                      <span className="text-xs text-slate-400">発注書_2025.pdf</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Processing Indicator */}
                <Card className="bg-white dark:bg-slate-800 border-0 shadow-md">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                          <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <motion.div
                          className="absolute inset-0 rounded-xl border-2 border-indigo-400"
                          animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Loader2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 animate-spin" />
                          <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                            Gemini API 処理中...
                          </span>
                        </div>
                        <div className="mt-2 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600"
                            initial={{ width: "0%" }}
                            animate={{ width: "75%" }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Extracted Data Form */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 flex items-center gap-2">
                  2. 抽出データ編集
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                </h3>

                <Card className="bg-white dark:bg-slate-800 border-0 shadow-md">
                  <CardContent className="p-6 space-y-4">
                    {/* Date Field */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        発注日
                      </label>
                      <div className="bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-slate-900 dark:text-slate-50">
                        2025年6月15日
                      </div>
                    </div>

                    {/* Supplier Field */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                        <Building className="w-4 h-4 text-slate-400" />
                        発注先
                      </label>
                      <div className="bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-slate-900 dark:text-slate-50">
                        株式会社サンプル商事
                      </div>
                    </div>

                    {/* Items Field */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                        <Package className="w-4 h-4 text-slate-400" />
                        発注品目
                      </label>
                      <div className="bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg p-3 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-700 dark:text-slate-300">部品A-001</span>
                          <span className="text-slate-500 dark:text-slate-400">x 100</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-700 dark:text-slate-300">部品B-002</span>
                          <span className="text-slate-500 dark:text-slate-400">x 50</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-700 dark:text-slate-300">部品C-003</span>
                          <span className="text-slate-500 dark:text-slate-400">x 200</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <button className="flex-1 bg-indigo-600 text-white py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                        確認して保存
                      </button>
                      <button className="px-4 py-2.5 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                        編集
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
