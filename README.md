# Order Management System (OMS) PoC - DevOps Practice Repo

このリポジトリは、**「注文管理システム（OMS）実証導入計画」** のプレゼンテーション用Webアプリケーションです。

現在は、リポジトリ所有者の**Kubernetes (k8s)** および **CI/CD パイプライン** 構築の技術検証・学習用環境として運用されています。

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Practice-326ce5)

## 🎯 このリポジトリの目的 (Goal)

このプロジェクトの主な目的は、モダンなフロントエンドアプリケーションを対象とした、**コンテナオーケストレーションと自動デプロイフローの習得**です。

- **Docker化**: Next.js アプリケーションのコンテナイメージ作成と最適化（マルチステージビルド等）
- **Kubernetes (k8s)**: マニフェスト（Deployment, Service, Ingress）の作成とクラスタへの展開
- **CI/CD**: GitHub Actions を用いたテスト・ビルド・デプロイの自動化
- **GitOps**: ArgoCD 等を用いた宣言的なインフラ管理（Option）

## 📦 アプリケーション概要 (App Overview)

2026年1月施行の「中小受託取引適正化法」に対応するための、AI活用型注文管理システム導入計画を社内に提案するためのインタラクティブな資料（ランディングページ）です。

### 主な機能
- **Hero Section**: プロジェクトのビジョンと提案者をアニメーションで表示
- **Executive Summary**: 法改正リスクと導入効果（工数83%削減）の可視化
- **Architecture**: AWS Lightsail x Gemini API (Stateless) の構成図
- **Mockup Demo**: AI-OCRによる入力支援のUI体験デモ

### 技術スタック (Tech Stack)
v0.app ベースのモダンな構成を採用しています。

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)

## 🚀 ローカルでの実行方法 (Local Development)

インフラ構築の前に、アプリケーションをローカルで動作確認する手順です。

\`\`\`bash
# 1. リポジトリのクローン
git clone <your-repo-url>
cd v0-oms-po-c

# 2. 依存パッケージのインストール
npm install
# または
pnpm install

# 3. 開発サーバーの起動
npm run dev
\`\`\`

## ⚠️ 免責事項

このアプリケーションコードのベースは v0.app によって生成されました。 

実証導入計画の内容（提案者名や具体的なコスト試算など）はデモ用の架空またはサンプルのデータを含みます。
