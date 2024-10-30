#!/bin/bash
if [ "$#" -ne  2 ]; then #check for valid number of command line arguments
  echo "Invalid number of command line arguments" >&2
elif [ -f "$2" ]; then
  TestSet=()
  FailedTestSet=()
  while IFS= read -r line; do #iterate through each line of file : credit to ChatGPT for for loop
        for word in $line; do #iterate through each string in line
            TestSet+=("$word")
        done
  done < "$2" #input redirect file into while loop 
  for i in "${TestSet[@]}"; do #compare expected vs actual outputs for each file
    if [ -f "$i.in" ]; then
      temp_out=$(mktemp)
      $1 < "$i.in" > "$temp_out"
      if diff "$temp_out" "$i.out" > /dev/null; then
        echo "Test $i passed"
      else
        echo "Test $i failed"
        echo "Expected output:"
        cat "$i.out"
        echo "Actual output:"
        cat "$temp_out"
      fi
      rm "$temp_out"  
    fi
  done

else #error catch in case file name command line argument is not a file
  echo "Not a file"
fi