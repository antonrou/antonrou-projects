#!/bin/bash
if [ "$#" -ne  2 ]; then
  echo "Invalid number of command line arguments" >&2
elif [ -f "$2" ]; then
  TestSet=()
  FailedTestSet=()
  
  while IFS= read -r line; do #iterate through each line of file : credit to ChatGPT
        for word in $line; do #iterate through each string in line
            TestSet+=("$word")
        done
  done < "$2" #input redirect file into while loop 
  for i in "${TestSet[@]}"; do
    if [ -f "$i.in"  ] && [ -f "$i.args" ]; then
    #iterate through arguments file
      argSet=()
      while IFS= read -r line; do #iterate through each line of file : credit to ChatGPT
          for word in $line; do #iterate through each string in line
              argSet+=("$word")
          done
      done < "$i.args" #input redirect file into while loop
    #finish iterating through arguments
      temp_out=$(mktemp)
      $1 ${argSet[@]} < "$i.in" > "$temp_out"
      if diff "$temp_out" "$i.out" > /dev/null; then
        echo "Test $i passed"
      else
        echo "Test $i failed"
        FailedTestSet+=("$i")
      fi
      rm "$temp_out"   
    fi
  done

  for i in "${FailedTestSet[@]}"; do #print expected vs actual outputs for each file
    temp_out=$(mktemp)
    $1 ${argSet[@]} < "$i.in" > "$temp_out"
    echo "Expected output:"
    cat "$i.out"
    echo "Actual output:"
    cat "$temp_out"
    rm "$temp_out"
  done
else #error catch in case file name command line argument is not a file
  echo "Not a file"
fi