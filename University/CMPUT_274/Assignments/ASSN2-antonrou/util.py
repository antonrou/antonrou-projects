import bitio
import huffman
import pickle


def read_tree(tree_stream):
    '''Read a description of a Huffman tree from the given compressed
    tree stream, and use the pickle module to construct the tree object.
    Then, return the root node of the tree itself.

    Args:
      tree_stream: The compressed stream to read the tree from.

    Returns:
      A Huffman tree root constructed according to the given description.
    '''

    try:
        tree_root = pickle.load(tree_stream)
        return tree_root
    except pickle.UnpicklingError as e:
        return None


def decode_byte(tree, bitreader):
    """
    Reads bits from the bit reader and traverses the tree from
    the root to a leaf. Once a leaf is reached, bits are no longer read
    and the value of that leaf is returned.

    Args:
      bitreader: An instance of bitio.BitReader to read the tree from.
      tree: A Huffman tree.

    Returns:
      Next byte of the compressed bit stream.
"""

    node = tree
    while True:
      bit = bitreader.readbit()
      if bit == 0:
        node = node.getLeft()
      elif bit == 1:
        node = node.getRight()
      if isinstance(node, huffman.TreeLeaf):
          return node.getValue()

def decompress(compressed, uncompressed):
  '''First, read a Huffman tree from the 'compressed' stream using your
  read_tree function. Then use that tree to decode the rest of the
  stream and write the resulting symbols to the 'uncompressed'
  stream.

  Args:
    compressed: A file stream from which compressed input is read.
    uncompressed: A writable file stream to which the uncompressed
        output is written.
  '''
  tree = read_tree(compressed)
  bitreader = bitio.BitReader(compressed)
  end_of_file = False

  while not end_of_file:
    character = decode_byte(tree, bitreader)
    if character is None:
       end_of_file = True
    else:
      character = character.to_bytes(1, 'big')
      uncompressed.write(character)
      

def write_tree(tree, tree_stream):
    pickle.dump(tree,tree_stream,protocol=4)
    return None


def compress(tree, uncompressed, compressed):
  write_tree(tree, compressed)
  bitwriter = bitio.BitWriter(compressed)
  bitreader = bitio.BitReader(uncompressed)
  encodingtable = huffman.make_encoding_table(tree)

  while True:
    try:
      byte = bitreader.readbits(8)
      for bit in encodingtable[byte]:
        bitwriter.writebit(bit)
    except EOFError:
       for bit in encodingtable[None]:
        bitwriter.writebit(bit)
       break
      
  bitwriter.flush()
  


  '''First write the given tree to the stream 'compressed' using the
    write_tree function. Then use the same tree to encode the data
    from the input stream 'uncompressed' and write it to 'compressed'.
    If there are any partially-written bytes remaining at the end,
    write 0 bits to form a complete byte.

    Flush the bitwriter after writing the entire compressed file.

    Args:
      tree: A Huffman tree.
      uncompressed: A file stream from which you can read the input.
      compressed: A file stream that will receive the tree description
          and the coded input data.
    '''
  pass
