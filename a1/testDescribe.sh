#!/bin/bash
if [ "$#" -ne  1 ]; then
  echo "Invalid number of command line arguments" >&2
elif [ -f "$1" ]; then
  TestSet=()
  while IFS= read -r line; do #iterate through each line of file: credit to ChatGPT
        for word in $line; do #iterate through each string in line
            TestSet+=("$word")
        done
  done < "$1" #input redirect file into while loop 
  for i in "${TestSet[@]}"; do
    if [ -f "$i.desc" ]; then
      cat "$i.desc"
    else
      echo "$i No test description"
    fi
  done
fi