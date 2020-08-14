#!/usr/bin/expect -f
spawn inmon.sh          expect用的不是bash所以你要用spawn去调用并执行bash脚本
expect "1"                    ：是关键字，你根据你自己的进行设置，当有：时
send "\r"                    自动输入q 回车
interact                       等待输入 结束