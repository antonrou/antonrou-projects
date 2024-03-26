# By Ali Gharari, Paul Lu
# Assumes unfairDice.py, or symbolic link is in current working directory

import unfairDice
import sys

if __name__ == "__main__":
    print("*************************************************", file=sys.stderr)
    print("test10", file=sys.stderr)
    prob_list = [1/2, 1/4, 1/8, 1/16, 1/32, 1/64, 1/64]
    seed = 42*42
    n = 10000
    print(unfairDice.biased_rolls(prob_list, seed, n))
