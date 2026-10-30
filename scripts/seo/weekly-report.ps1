$ErrorActionPreference = "Stop"
$root = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
if (-not $env:FIREBASE_TOOLS_MODULE_ROOT) {
    $env:FIREBASE_TOOLS_MODULE_ROOT = "C:\Users\nicol\AppData\Local\Temp\opencode\npm-cache\_npx\d69a650dc7266bd8\node_modules\firebase-tools"
}
& node (Join-Path $root "scripts\seo-report.mjs") --save --inspect-all
exit $LASTEXITCODE
