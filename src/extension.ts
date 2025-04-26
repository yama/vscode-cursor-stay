import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const scrollDown = vscode.commands.registerCommand('cursorStay.scrollDown', async () => {
        // 組み込みコマンドを使用して1行スクロール（カーソルを表示したまま）
        await vscode.commands.executeCommand('editorScroll', {
            to: 'down',
            by: 'line',
            revealCursor: true
        });
    });

    const scrollUp = vscode.commands.registerCommand('cursorStay.scrollUp', async () => {
        // 組み込みコマンドを使用して1行スクロール（カーソルを表示したまま）
        await vscode.commands.executeCommand('editorScroll', {
            to: 'up',
            by: 'line',
            revealCursor: true
        });
    });

    context.subscriptions.push(scrollDown, scrollUp);
}

export function deactivate() {}
