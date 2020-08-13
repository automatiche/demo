#!/bin/bash


# 三院
/usr/bin/expect << EOF
# -t -t
set ip [lindex $argv 0 ]  
set password [lindex $argv 1 ]
# set passwd [lindex $argv 0]
# set host [lindex $argv 1]
set timeout 20   
spawn ssh -p 3000 hospital@106.38.159.214
# spawn ssh -p 3000 hospital@$ip
# spawn ssh -p 2222 -o ServerAliveInterval=60 bdyx01@114.116.227.233

# expect {
# "password:" 
#   { send "Bysy_6606" }
# }
# expect "password1:" {
#   send "B"
# }
expect {
        "password:" {send "$Bysy_6606\r"}
}

# interact
# expect "password:"
# send "Bysy_6606\r"
# cd projects/hospital-management

# echo done!
interact
expect eof
EOF