const vscode = require('vscode')

// This hack is necessary to ensure that the vscode.html-language-features extension is activated in order to enable
// htmlLanguageParticipants support. Please see https://github.com/microsoft/vscode/issues/160585 for more info.
async function activate() {
  const output = vscode.window.createOutputChannel('Mako')
  const htmlExtension = vscode.extensions.getExtension('vscode.html-language-features')
  if (!htmlExtension) {
    output.appendLine(
      'Warning: Could not find vscode.html-language-features. HTML Language Participants support will be disabled.',
    )
    return
  }
  await htmlExtension?.activate()
  output.appendLine('HTML Language Participants support enabled.')
}

module.exports = {
  activate,
}
