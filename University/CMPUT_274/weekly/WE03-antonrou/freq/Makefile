DIFF_ARGS = --strip-trailing-cr

now:
	make test
#	@echo "Empty.  Use me."

push:
	git commit -a
	git push

clean:
# For MacOS
	-rm .DS_Store
	-rm -r __pycache__
	-rm Tests/*.out

test:
	@echo "***************************"
	@echo "** Test: sample0"
	python3 freq.py Tests/sample0
	diff $(DIFF_ARGS) Tests/sample0.out Expected/sample0.txt
	@echo "** Passed: sample0"
#
	@echo "***************************"
	@echo "** Test: sample1"
	python3 freq.py Tests/sample1
	diff $(DIFF_ARGS) Tests/sample1.out Expected/sample1.txt
	@echo "** Passed: sample1"
#
	@echo "***************************"
	@echo "** Test: sample2"
	python3 freq.py Tests/sample2
	diff $(DIFF_ARGS) Tests/sample2.out Expected/sample2.txt
	@echo "** Passed: sample2"
#
	@echo "***************************"
	@echo "** Test: sample3"
	python3 freq.py Tests/sample3
	diff $(DIFF_ARGS) Tests/sample3.out Expected/sample3.txt
	@echo "** Passed: sample3"
#
	@echo "***************************"
	@echo "** Test: sample4"
	python3 freq.py Tests/sample4
	diff $(DIFF_ARGS) Tests/sample4.out Expected/sample4.txt
	@echo "** Passed: sample4"
#
	@echo "***************************"
	@echo "** Test: sample5"
	python3 freq.py Tests/sample5
	diff $(DIFF_ARGS) Tests/sample5.out Expected/sample5.txt
	@echo "** Passed: sample5"
