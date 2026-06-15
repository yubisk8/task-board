# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

React + TypeScript + Vite で作成したタスクボードアプリ。
タスクの追加・完了/未完了の切り替え・削除ができ、状態は `localStorage` に永続化される。

## Git 運用ルール（重要）

- **コードを変更するたびに GitHub へプッシュする。** 一連の変更が動作する状態になったら、その都度コミットして `git push` し、ローカルに未プッシュの変更を溜めないこと。
- まだ Git リポジトリが初期化されていない場合（`git status` が "not a git repository" を返す）、最初の作業前に初期化し、GitHub のリモートを設定する:
  ```bash
  git init
  git remote add origin <GitHub のリポジトリ URL>
  ```
- コミットメッセージは変更内容が分かるように簡潔に記述する。
- プッシュ先のブランチは原則として作業ブランチを使い、デフォルトブランチへ直接プッシュする場合は事前に確認する。

### 典型的な流れ

```bash
git add -A
git commit -m "<変更内容の要約>"
git push
```

## ビルド / テスト / 実行

```bash
npm install      # 依存関係のインストール
npm run dev      # 開発サーバー起動（http://localhost:5173）
npm run build    # 型チェック（tsc -b）＋本番ビルド（vite build）→ dist/
npm run preview  # ビルド成果物をローカルでプレビュー
```

テストランナーは未導入。

## アーキテクチャ

- 状態管理ライブラリは使わず、`src/App.tsx` の `useState` でタスク配列を一元管理する単一コンポーネント構成。
- タスクは `{ id, text, done }` 型。`id` は `crypto.randomUUID()` で採番。
- `useEffect` で `tasks` の変化を監視し `localStorage`（キー: `task-board.tasks`）へ保存。初期値は `loadTasks()` で読み込む。
- 完了済みタスクは `task-item done` クラスが付与され、`src/App.css` でグレー＋取り消し線表示にする。
