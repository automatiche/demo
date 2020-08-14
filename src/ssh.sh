#!/usr/bin/expect -f
# 自动登录输入密码后interact，当前服务器Connection to 114.116.227.233 closed. 可能是spawn进程中断？
# 自动输入用户名后interact，手动输入密码可正常登录

# -t -t
# set ip [lindex $argv 0 ]  
# set password [lindex $argv 1 ]
# set passwd [lindex $argv 0]
# set host [lindex $argv 1]
set timeout 20   
spawn ssh -p 2222 bdyx01@114.116.227.233
# spawn ssh -p 2222 -o ServerAliveInterval=60 bdyx01@114.116.227.233
expect "*Password:"
send "Bdyx@2019\r"


# expect ">" 
# foreach  i  5  {
#   send "$i"
#   # send "$i"
#   send "\r"
# }

expect "*操作命令:" {send "5"
 send "\r"}

# expect "*账户:" 
# foreach  j  root  {
#   send "$j"
#   # puts "\n"
#   # send "$i"
#   send "\r"
# }

expect "*账户:" {send "r"} 
expect "r" {send "o"} 
expect "o" {send "o"} 
expect "o" {send "t"} 
expect "t" {send "\r"} 


 
# set timeout 30
# expect "root"
# send "\r"
# set timeout 30

expect "*资源'root'密码:"
# -----跑一半，最后密码和后续自己敲
# XUANWUyy0805
# cd projects/hospital-management/
# git pull origin xuanwu_dev
# npm run build && pm2 restart 10


# ----------- begin 完整打开：但链接close; （此处密码无法黏贴，有关？）
# foreach  i  XUANWUyy0805  {
#     # send "$i"
#     puts "$i"
#     # send "$i"
#     # send "\r"
# }
# send "\r"

# ------------ end
# expect eof

# cd projects/hospital-management/
interact
# expect "XUANWUyy0805" 
#  send "\r"
# foreach  i  XUANWUyy0805  {
#     # send "\r"
#     puts "\r"
# }


# expect "验证成功!"

# cd projects/hospital-management/

# interact
echo done!



# {
#   for i in r o o t
#   do
#     # echo $i
#     expect "*账户:" 
#     send $i
#   done

# }