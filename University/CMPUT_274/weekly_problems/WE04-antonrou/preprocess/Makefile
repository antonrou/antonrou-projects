DIFF_ARGS = --strip-trailing-cr

now:
	# Can change this
	make test

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
	@echo "** Test: case01"
	python3 preprocess.py < Tests/case01 > Tests/case01.out
	diff $(DIFF_ARGS) Tests/case01.out Expected/case01.txt
	@echo "** Passed: sample0"
#
	@echo "***************************"
	@echo "** Test: case02"
	python3 preprocess.py < Tests/case02 > Tests/case02.out
	diff $(DIFF_ARGS) Tests/case02.out Expected/case02.txt
	@echo "** Passed: case02"
#
	@echo "***************************"
	@echo "** Test: case03"
	python3 preprocess.py < Tests/case03 > Tests/case03.out
	diff $(DIFF_ARGS) Tests/case03.out Expected/case03.txt
	@echo "** Passed: case03"
#
	@echo "***************************"
	@echo "** Test: case04"
	python3 preprocess.py < Tests/case04 > Tests/case04.out
	diff $(DIFF_ARGS) Tests/case04.out Expected/case04.txt
	@echo "** Passed: case04"
#
	@echo "***************************"
	@echo "** Test: case05 ** (keep-digits)"
	python3 preprocess.py keep-digits < Tests/case05 > Tests/case05.out
	diff $(DIFF_ARGS) Tests/case05.out Expected/case05.txt
	@echo "** Passed: case05"
#
	@echo "***************************"
	@echo "** Test: case06 ** (keep-stops)"
	python3 preprocess.py keep-stops < Tests/case06 > Tests/case06.out
	diff $(DIFF_ARGS) Tests/case06.out Expected/case06.txt
	@echo "** Passed: case06"
#
	@echo "***************************"
	@echo "** Test: case07 ** (keep-symbols)"
	python3 preprocess.py keep-symbols < Tests/case07 > Tests/case07.out
	diff $(DIFF_ARGS) Tests/case07.out Expected/case07.txt
	@echo "** Passed: case07"
#
	@echo "***************************"
	@echo "** Test: case08 ** (keep-symbols)"
	python3 preprocess.py keep-symbols < Tests/case08 > Tests/case08.out
	diff $(DIFF_ARGS) Tests/case08.out Expected/case08.txt
	@echo "** Passed: case08"
#
	@echo "***************************"
	@echo "** Test: case09 ** (keep-symbols)"
	python3 preprocess.py keep-symbols < Tests/case09 > Tests/case09.out
	diff $(DIFF_ARGS) Tests/case09.out Expected/case09.txt
	@echo "** Passed: case09"
