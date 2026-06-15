# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

`task-board` プロジェクト。現時点ではリポジトリは空であり、コードベースはまだ存在しない。
セットアップが進んだら、本ファイルにビルド・テスト・実行コマンドとアーキテクチャ概要を追記すること。

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

（コードベース構築後に追記する。例: ビルドコマンド、リント、テスト全体実行、単一テストの実行方法など）

## アーキテクチャ

（複数ファイルを横断して理解する必要のある「全体像」をここに記述する）
