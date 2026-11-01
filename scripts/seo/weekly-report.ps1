$ErrorActionPreference = "Stop"
$root = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
& node (Join-Path $root "scripts\seo-report.mjs") --save --inspect-all
exit $LASTEXITCODE
