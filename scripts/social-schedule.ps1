# Registers (or re-registers) the "TTL Social Drafts" scheduled task for the current user.
# Usage: powershell -ExecutionPolicy Bypass -File scripts\social-schedule.ps1 [-Remove]
#
# Timing: Monday 19:00 LOCAL time. This machine is Asia/Karachi (UTC+5, no DST).
# 19:00 PKT = 14:00 UTC = 8:00am CST (winter) / 9:00am CDT (summer),
# so the drafts are ready by 9am US Central all year round.
# StartWhenAvailable makes the task run when the PC next starts if it was off at 19:00.
param([switch]$Remove)

$ErrorActionPreference = 'Stop'
$TaskName = 'TTL Social Drafts'

if ($Remove) {
    if (Get-ScheduledTask -TaskName $TaskName -ErrorAction SilentlyContinue) {
        Unregister-ScheduledTask -TaskName $TaskName -Confirm:$false
        Write-Host "Removed scheduled task '$TaskName'."
    } else {
        Write-Host "Scheduled task '$TaskName' not found."
    }
    exit 0
}

$RepoRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$node = (Get-Command node -ErrorAction Stop).Source

$action = New-ScheduledTaskAction -Execute $node -Argument 'scripts\social-drafts.mjs' -WorkingDirectory $RepoRoot
$trigger = New-ScheduledTaskTrigger -Weekly -DaysOfWeek Monday -At '19:00'
$settings = New-ScheduledTaskSettingsSet -StartWhenAvailable -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -ExecutionTimeLimit (New-TimeSpan -Minutes 30)
$principal = New-ScheduledTaskPrincipal -UserId ([System.Security.Principal.WindowsIdentity]::GetCurrent().Name) -LogonType Interactive -RunLevel Limited

Register-ScheduledTask -TaskName $TaskName -Action $action -Trigger $trigger -Settings $settings -Principal $principal -Force | Out-Null
Write-Host "Registered '$TaskName': Mondays 19:00 local, node=$node, cwd=$RepoRoot"
