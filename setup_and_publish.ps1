$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

Write-Host ""
Write-Host "====================================================="
Write-Host " Robert Billings portfolio - setup and publish"
Write-Host "====================================================="
Write-Host ""

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    throw "Node.js was not found. Install Node.js LTS first: https://nodejs.org/"
}

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    throw "Git was not found. Install Git for Windows first: https://git-scm.com/download/win"
}

if (-not (Test-Path ".git")) {
    Write-Host "Initialising git repository..."
    git init
    git branch -M main
}

try {
    $remote = git remote get-url origin
    Write-Host "GitHub remote already exists: $remote"
} catch {
    Write-Host "Adding GitHub remote..."
    git remote add origin https://github.com/robertjgvv/portfolio-site.git
}

Write-Host "Installing packages..."
npm install

Write-Host "Saving source files to main branch..."
git add .
git commit -m "Restore portfolio site" 2>$null

Write-Host "Syncing main branch with GitHub..."
git fetch origin
try {
    git pull origin main --rebase --allow-unrelated-histories
} catch {
    Write-Host "Pull skipped or failed; continuing to push/deploy."
}

try {
    git push -u origin main
} catch {
    Write-Host "Source push to main failed, usually because of conflicting/protected remote history. Continuing to deploy gh-pages."
}

Write-Host "Building and publishing to gh-pages..."
npm run deploy

Write-Host ""
Write-Host "Done. Your site should update at: https://robert-billings.com/"
Write-Host "If GitHub Pages shows a DNS/HTTPS warning, wait a few minutes and click Check again."
Read-Host "Press Enter to close"
