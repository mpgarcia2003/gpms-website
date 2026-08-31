Set-Location 'C:\Users\mpgar\Projects\gpms-website'
git add src/app/schedule/page.jsx
git commit -m "Schedule embed: taller iframe for three booking offerings" -m "Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>" -m "Claude-Session: https://claude.ai/code/session_01MKtdwC8L433ap7nwyBbsYa"
git pull --rebase --autostash
git push
git log --oneline -1
Write-Output COMMIT-DONE
