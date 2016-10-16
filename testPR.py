#!/usr/bin/env python3
# Credits to @RockNeurotiko

def test(mal=[]):
    for _ in range(200):
        mal.append(len(mal))
    return mal

for _ in range(10):
    print(test())
