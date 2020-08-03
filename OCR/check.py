import re
def a(s,i=[22202001]):
    print(s)

    i[0]+=1
    print(i[0])

a('1')
a('asd')
a("34")
line="5647 4567 5678 bjhbhbubjhbhbhb"
s=re.findall(r"[-+]?\d*\d+",line)
print(s)
n=87.58333333333333
print('%.2f',n)
