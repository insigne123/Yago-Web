$ErrorActionPreference = "Stop"
$root = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
if (-not $env:FIREBASE_TOOLS_MODULE_ROOT) {
    $env:FIREBASE_TOOLS_MODULE_ROOT = "C:\Users\nicol\AppData\Local\Temp\opencode\npm-cache\_npx\d69a650dc7266bd8\node_modules\firebase-tools"
}
$secret = Read-Host "Pega la clave de Bing Webmaster API (entrada oculta)" -AsSecureString
$pointer = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($secret)
try {
    $value = [System.Runtime.InteropServices.Marshal]::PtrToStringBSTR($pointer)
    $value | & node (Join-Path $root "scripts\seo\save-bing-key.mjs")
    if ($LASTEXITCODE -ne 0) { throw "No se completó el almacenamiento de la clave." }
} finally {
    $value = $null
    [System.Runtime.InteropServices.Marshal]::ZeroFreeBSTR($pointer)
    $secret.Dispose()
}
