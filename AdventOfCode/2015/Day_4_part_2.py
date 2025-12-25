# --- Part Two ---
# Now find one that starts with six zeroes.

import hashlib

input = 'yzbqklnj'

res = hashlib.md5(bytes(input, encoding='utf-8'))
print(res.hexdigest())

i = 0

while True:

    val = bytes(f'{input}{i}', encoding='utf-8')
    hash = hashlib.md5(val)
    hexdigest = hash.hexdigest()
    if hexdigest[0:6] == '000000':
        break
    i += 1
    if(i % 100000 == 0):
        print(i)

print(i)