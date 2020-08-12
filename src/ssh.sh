#!/usr/bin/expect -f
# -t -t
# set ip [lindex $argv 0 ]  
# set password [lindex $argv 1 ]
set timeout 20   
# spawn ssh -p 2222 bdyx01@114.116.227.233
spawn ssh -p 2222 -o ServerAliveInterval=60 bdyx01@114.116.227.233
expect "*Password:"
send "Bdyx@2019\r"
# interact
# expect "操作命令:"
# interact
expect "SSH资源(6) :"
send "5\r"
# expect "资源'[Empty]'账户: "
# send "root\r"
# expect "资源'root'密码:"
# send "XUANWUyy0805\r"
interact
cd projects/hospital-management/
echo done!