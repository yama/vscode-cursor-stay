# vscode-cursor-stay

カーソルの位置を固定したままスクロールする VS Code 拡張です。

## 機能

この拡張機能は、カーソル位置を維持しながらエディタをスクロールする機能を提供します。通常のスクロールではカーソルは画面上の同じ位置に留まりますが、この拡張機能を使うと、スクロールしながらカーソルも一緒に移動させることができます。

- `Ctrl + ↓`: 下にスクロールしてカーソルも1行下へ
- `Ctrl + ↑`: 上にスクロールしてカーソルも1行上へ

![デモ](images/cursor-stay-demo.gif)

> ヒント: 上記の画像は例です。実際のデモ画像をimagesフォルダに配置してください。

## 要件

この拡張機能には特別な要件はありません。Visual Studio Code 1.60.0以降で動作します。

## 拡張機能の設定

現在、この拡張機能には設定オプションはありません。将来のバージョンで以下のような設定を追加する可能性があります：

* `cursorStay.scrollLines`: 一度にスクロールする行数
* `cursorStay.smoothScrolling`: スムーススクロールの有効/無効

## 既知の問題

- 非常に大きなファイルでスクロール時にパフォーマンスが低下する可能性があります
- 折りたたまれたコードブロックの中をスクロールする際に予期しない動作が発生することがあります

## リリースノート

### 0.0.1

- 初回リリース
- 基本的なカーソル維持スクロール機能の実装
- キーバインディング（`Ctrl + ↓`と`Ctrl + ↑`）の追加

## インストール

VSIXファイルを使って以下のようにインストールできます：

```bash
code --install-extension vscode-cursor-stay-0.0.1.vsix
```

## 拡張機能ガイドラインの順守

この拡張機能は、VS Codeの拡張機能ガイドラインに従って開発されています：

* [拡張機能ガイドライン](https://code.visualstudio.com/api/references/extension-guidelines)

## Markdownの操作

このREADMEはVisual Studio Codeで編集できます。便利なエディタのキーボードショートカット：

* エディタの分割（macOSでは`Cmd+\`、WindowsとLinuxでは`Ctrl+\`）
* プレビューの切り替え（macOSでは`Shift+Cmd+V`、WindowsとLinuxでは`Shift+Ctrl+V`）
* `Ctrl+Space`（Windows、Linux、macOS）を押すとMarkdownスニペットのリストが表示されます

## 詳細情報

* [Visual Studio CodeのMarkdownサポート](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown構文リファレンス](https://help.github.com/articles/markdown-basics/)

