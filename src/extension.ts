import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const scrollDown = vscode.commands.registerCommand('cursorStay.scrollDown', async () => {
        await vscode.commands.executeCommand('editorScroll', {
            to: 'down',
            by: 'line'
        });
        await vscode.commands.executeCommand('cursorDown');
    });

    const scrollUp = vscode.commands.registerCommand('cursorStay.scrollUp', async () => {
        await vscode.commands.executeCommand('editorScroll', {
            to: 'up',
            by: 'line'
        });
        await vscode.commands.executeCommand('cursorUp');
    });

    context.subscriptions.push(scrollDown, scrollUp);
}

export function deactivate() {}
