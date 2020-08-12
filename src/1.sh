#! /bin/bash -f
x=21
m=10
echo $m
for i in `seq 0 14`; do
 j=$[2**$i]
 m=$[$m+$x]
 echo $m
 x=$[$x+$j]
done