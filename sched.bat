@REM adds a daily task to windows task scheduler to run our node script
@REM USAGE: ./sched.bat C:\\path\\to\\ccs-update.js

Schtasks /Create /tn CCSUpdate /tr "cmd /K node %1\ccs-update %1" /sc DAILY /st 23:00:00
