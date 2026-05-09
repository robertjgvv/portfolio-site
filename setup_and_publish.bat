@echo off
setlocal enabledelayedexpansion
cd /d "%~dp0"

echo.
echo =====================================================
echo  Robert Billings portfolio - setup and publish
echo =====================================================
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js was not found. Install Node.js LTS first, then run this again.
  echo https://nodejs.org/
  pause
  exit /b 1
)

where git >nul 2>nul
if errorlevel 1 (
  echo Git was not found. Install Git for Windows first, then run this again.
  echo https://git-scm.com/download/win
  pause
  exit /b 1
)

if not exist .git (
  echo Initialising git repository...
  git init
  git branch -M main
)

git remote get-url origin >nul 2>nul
if errorlevel 1 (
  echo Adding GitHub remote...
  git remote add origin https://github.com/robertjgvv/portfolio-site.git
) else (
  echo GitHub remote already exists:
  git remote get-url origin
)

echo.
echo Installing packages...
call npm install
if errorlevel 1 goto :fail

echo.
echo Saving source files to main branch...
git add .
git commit -m "Restore portfolio site" 2>nul

echo.
echo Syncing main branch with GitHub...
git fetch origin
if not errorlevel 1 (
  git pull origin main --rebase --allow-unrelated-histories
)

echo.
echo Pushing source files to main...
git push -u origin main
if errorlevel 1 goto :push_note

goto :deploy

:push_note
echo.
echo The source push to main failed, usually because the remote has protected or conflicting history.
echo The deployment can still work because it publishes the built site to gh-pages.
echo Continuing to deploy...

:deploy
echo.
echo Building and publishing to gh-pages...
call npm run deploy
if errorlevel 1 goto :fail

echo.
echo Done. Your site should update at:
echo https://robert-billings.com/
echo.
echo If GitHub Pages shows a DNS/HTTPS warning, wait a few minutes and click Check again.
pause
exit /b 0

:fail
echo.
echo Something failed. Scroll up and copy the first red/error section.
pause
exit /b 1
