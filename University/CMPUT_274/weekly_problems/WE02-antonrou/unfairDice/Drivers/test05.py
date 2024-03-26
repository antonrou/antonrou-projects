# By Ali Gharari, Paul Lu
# Assumes unfairDice.py, or symbolic link is in current working directory

import unfairDice
import sys

if __name__ == "__main__":
    print("*************************************************", file=sys.stderr)
    print("test5", file=sys.stderr)
    prob_list = [1/6, 1/6, 1/6, 1/6, 1/6, 1/6]
    seed = 100
    n = 10000
    print(unfairDice.biased_rolls(prob_list, seed, n))
