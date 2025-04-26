import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const scrollDown = vscode.commands.registerCommand('cursorStay.scrollDown', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

        // スクロールが下端に達したかどうかを確認
        const document = editor.document;
        const lastLineIndex = document.lineCount - 1;
        const lastVisibleRange = editor.visibleRanges[editor.visibleRanges.length - 1];
        
        // 最後の表示範囲が文書の最後の行を含む場合、もうスクロールできない
        if (lastVisibleRange.end.line >= lastLineIndex) {
            return;
        }

        // 1行スクロール
        await vscode.commands.executeCommand('scrollLineDown');
        
        // カーソルを1行下に移動
        const currentPosition = editor.selection.active;
        const newPosition = currentPosition.with(currentPosition.line + 1, currentPosition.character);
        editor.selection = new vscode.Selection(newPosition, newPosition);
    });

    const scrollUp = vscode.commands.registerCommand('cursorStay.scrollUp', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

        // スクロールが上端に達したかどうかを確認
        const firstVisibleRange = editor.visibleRanges[0];
        
        // 最初の表示範囲が文書の最初の行を含む場合、もうスクロールできない
        if (firstVisibleRange.start.line === 0) {
            return;
        }

        // 1行スクロール
        await vscode.commands.executeCommand('scrollLineUp');
        
        // カーソルを1行上に移動
        const currentPosition = editor.selection.active;
        const newPosition = currentPosition.with(currentPosition.line - 1, currentPosition.character);
        editor.selection = new vscode.Selection(newPosition, newPosition);
    });

    context.subscriptions.push(scrollDown, scrollUp);
}

export function deactivate() {}
