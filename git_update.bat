@echo off
setlocal

REM Verifie que le script est execute dans un depot Git
if not exist ".git" (
    echo ERREUR : Ce script doit etre execute depuis la racine du depot Git.
    pause
    exit /b 1
)

echo.
echo ==========================================
echo Mise a jour de la liste RAMQ
echo ==========================================
echo.

set /p DATE_RAMQ=Date de publication de la liste RAMQ (ex: 28 mai 2026) :

echo.
echo ==========================================
echo Git Pull
echo ==========================================
git pull

if errorlevel 1 (
    echo.
    echo ERREUR lors du git pull.
    pause
    exit /b 1
)

echo.
echo ==========================================
echo Git Add
echo ==========================================
git add .

if errorlevel 1 (
    echo.
    echo ERREUR lors du git add.
    pause
    exit /b 1
)

echo.
echo ==========================================
echo Git Commit
echo ==========================================
git commit -m "update liste ramq %DATE_RAMQ%"

if errorlevel 1 (
    echo.
    echo ATTENTION : Aucun changement a committer ou erreur de commit.
)

echo.
echo ==========================================
echo Git Push
echo ==========================================
git push

if errorlevel 1 (
    echo.
    echo ERREUR lors du git push.
    pause
    exit /b 1
)

echo.
echo ==========================================
echo Operation terminee avec succes
echo ==========================================

pause