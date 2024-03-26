DIFF_ARGS = --strip-trailing-cr

now:
	echo "Empty.  Use me."
push:
	git commit -a
	git push

clean:
# For MacOS
	-rm .DS_Store
	-rm -r __pycache__
# For all OSes
	-rm Drivers/out.*

test:
	@echo "*** If all 20 tests complete, then program is correct."
	@echo "***   Only errors are reported and testing stops."
	make biased
	make histo

histo:
	python3 Drivers/test11.py > Drivers/out.11
	diff $(DIFF_ARGS) Drivers/out.11 Expected/test11.txt
#
	python3 Drivers/test12.py > Drivers/out.12
	diff $(DIFF_ARGS) Drivers/out.12 Expected/test12.txt
#
	python3 Drivers/test13.py > Drivers/out.13
	diff $(DIFF_ARGS) Drivers/out.13 Expected/test13.txt
#
	python3 Drivers/test14.py > Drivers/out.14
	diff $(DIFF_ARGS) Drivers/out.14 Expected/test14.txt
#
	python3 Drivers/test15.py > Drivers/out.15
	diff $(DIFF_ARGS) Drivers/out.15 Expected/test15.txt
#
	python3 Drivers/test16.py > Drivers/out.16
	diff $(DIFF_ARGS) Drivers/out.16 Expected/test16.txt
#
	python3 Drivers/test17.py > Drivers/out.17
	diff $(DIFF_ARGS) Drivers/out.17 Expected/test17.txt
#
	python3 Drivers/test18.py > Drivers/out.18
	diff $(DIFF_ARGS) Drivers/out.18 Expected/test18.txt
#
	python3 Drivers/test19.py > Drivers/out.19
	diff $(DIFF_ARGS) Drivers/out.19 Expected/test19.txt
#
	python3 Drivers/test20.py > Drivers/out.20
	diff $(DIFF_ARGS) Drivers/out.20 Expected/test20.txt

biased:
	python3 Drivers/test01.py > Drivers/out.01
	diff $(DIFF_ARGS) Drivers/out.01 Expected/test01.txt
#
	python3 Drivers/test02.py > Drivers/out.02
	diff $(DIFF_ARGS) Drivers/out.02 Expected/test02.txt
#
	python3 Drivers/test03.py > Drivers/out.03
	diff $(DIFF_ARGS) Drivers/out.03 Expected/test03.txt
#
	python3 Drivers/test04.py > Drivers/out.04
	diff $(DIFF_ARGS) Drivers/out.04 Expected/test04.txt
#
	python3 Drivers/test05.py > Drivers/out.05
	diff $(DIFF_ARGS) Drivers/out.05 Expected/test05.txt
#
	python3 Drivers/test06.py > Drivers/out.06
	diff $(DIFF_ARGS) Drivers/out.06 Expected/test06.txt
#
	python3 Drivers/test07.py > Drivers/out.07
	diff $(DIFF_ARGS) Drivers/out.07 Expected/test07.txt
#
	python3 Drivers/test08.py > Drivers/out.08
	diff $(DIFF_ARGS) Drivers/out.08 Expected/test08.txt
#
	python3 Drivers/test09.py > Drivers/out.09
	diff $(DIFF_ARGS) Drivers/out.09 Expected/test09.txt
#
	python3 Drivers/test10.py > Drivers/out.10
	diff $(DIFF_ARGS) Drivers/out.10 Expected/test10.txt
