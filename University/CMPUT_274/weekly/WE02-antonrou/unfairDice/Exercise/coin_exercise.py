# A SIMPLE EXAMPLE FOR THE SECOND WEEKLY EXERCISE
# By Veronica Salm

import random

# a global seed constant for the random function
my_seed = 2**32-1


def unfair_coin_flip(prob_heads, prob_tails):
    """ Takes two floating point values, the probabilities of 
    heads and tails respectively, and returns a single weighted 
    coin flip.

    Note that it is guaranteed that prob_heads + prob_tails = 1

    Arguments:
        prob_heads (float): the probability of heads from 0 to 1
        prob_tails (float): the probability of tails from 0 to 1

    Returns:
        "HEADS" or "TAILS" based on the result of the coin flip

    """
    pass

if __name__ == "__main__":
    # begin by seeding the random module

    # show that if we re-seed the random module
    # we get the same result
