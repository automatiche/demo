
#!/bin/bash
# $1 port
# $2 可配置为项目名
echo "执行的文件名：$0";
echo "第一个参数为：$1"; 
echo "第二个参数为：$2";
the_path="hospital-management"
port=""

echo '输入 :
1 hospital-management
2 hospital-management-xuan
3 hospital-management-sy
4 hospital-management-haiyou
5 hospital-patient-wechat
6 hospital-patient-wechat-6
7 hospital-patient-wechat-haiyou
8 gjwechat
9 CRM-wechat
10 hospital-management-ly
'
echo '你输入的数字为:'
read aNum
case $aNum in
    1)  echo '你选择了 1 hospital-management' ;the_path='hospital-management'
    ;;
    2)  echo '你选择了 2 hospital-management-xuan';the_path='hospital-management-xuan';
    port='3002'
    ;;
    3)  echo '你选择了 3 hospital-management-sy';the_path='hospital-management-sy';
    port='3003'
    ;;
    4)  echo '你选择了 4 hospital-management-haiyou';the_path='hospital-management-haiyou';
    port='3004'
    ;;
    5)  echo '你选择了 5 hospital-patient-wechat';the_path='hospital-patient-wechat';
    port='3001'
    ;;
    6)  echo '你选择了 5 hospital-patient-wechat-6';the_path='hospital-patient-wechat-6';
    port='3006'
    ;;
    7)  echo '你选择了 5 hospital-patient-wechat-haiyou';the_path='hospital-patient-wechat-haiyou';
    port='3005'
    ;;
    8)  echo '你选择了 8 gjwechat';the_path='gjwechat'
    ;;
    9)  echo '你选择了 9 CRM-wechat';the_path='CRM-wechat'
    ;;
    10)  echo '你选择了 10 hospital-management-ly';the_path='hospital-management-ly';
    port='3066'
    ;;
    *)  echo '输入错误'
    ;;
esac
path=/Users/'lida 1'/BRICKS/${the_path}
cmd_line="npm run dev"

# port
if [  ! -n "$1" ]
then
  if [  -n "$port" ]
  then
  cmd_line="${cmd_line} -- -p ${port}"
  fi
else
port=$1
cmd_line="${cmd_line} -- -p ${port}"
fi

echo "---port---
${port}"
echo "---cmd_line---
${cmd_line}"
echo /Users/lida\ 1/BRICKS/hospital-management-xuan
cd /Users/'lida 1'/BRICKS/${the_path}
# ls
git status
# ${cmd_line}
