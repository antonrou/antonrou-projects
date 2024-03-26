# By Ali Gharari, Paul Lu
# Assumes unfairDice.py, or symbolic link is in current working directory

import unfairDice
import sys

if __name__ == "__main__":
    print("*************************************************", file=sys.stderr)
    print("test7", file=sys.stderr)
    prob_list = [1/2, 1/3, 1/12, 1/24, 1/24]
    seed = 1
    n = 10000
    print(unfairDice.biased_rolls(prob_list, seed, n))
