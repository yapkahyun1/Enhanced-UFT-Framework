

Dim WshShell, strCurDir

Set WshShell = CreateObject("WScript.Shell")

strCurDir = WshShell.CurrentDirectory


'MsgBox strCurDir, 0,"Path" 
WScript.Sleep 2000


Dim xlApp, xlBook, xlSheet
Dim ExecuteTCTxtFile, TempTxtFileFSO
Set TempTxtFileFSO = CreateObject("Scripting.FileSystemObject")
Set ExecuteTCTxtFile = TempTxtFileFSO.CreateTextFile(strCurDir &"\" & "ExecutableTestCasesList.txt")


Set xlApp = CreateObject("Excel.Application")
Set xlBook = xlApp.Workbooks.Open(strCurDir &"\" &"Scenario_Control.xlsx")
Set xlSheet = xlBook.Worksheets(1) ' Assume First Sheet to extract the TC details

Dim lastRow, lastColumn, row, col
lastRow = xlSheet.UsedRange.Rows.Count
lastColumn = xlSheet.UsedRange.Columns.Count


row = 2 																			' Start with row 2 to skip checking the headers
Do While row <= lastRow 															'Start with row 2 and loop through until the very last row in the excel and will exit the loop until the row exceeds the lastRow
    moduleValue = xlSheet.Cells(row, 6).Value    															 				' Check if the module execution status is "YES" or the first column is not empty
    'Print("Current Outer Loop Iteration: " & row)
    If StrComp(UCase(Trim(moduleValue)), "YES", vbTextCompare) = 0 AND xlSheet.Cells(row, 1).Value <> "" Then 				'Check if the module column if its marked with "YES" in the column execution status
        ModuleRows = row 																		'Use a different variable to get the current row iteration
        ModuleCellVal = Trim(xlSheet.Cells(ModuleRows, 1).Value) 									'Get the module name from the column based on the current row iteration / row number

       
       CurrentRow = row + 1 																		'Declare a variable to hold the current row number / iteration and +1 to start checking the first row of the test case name to avoid checking the header
        CurrentCountRow = row + 1 																'Declare a variable to hold the current row number / iteration and +1 for the FOR LOOP to extract the test case ID and scenario ID

        Do while xlSheet.Cells(CurrentRow, 2).Value <> ""											'To loop and check through how many rows of data (test case ID and scenario ID are currently there regardless of YES or NO marked and to make sure its not empty
            CurrentRow = CurrentRow + 1
        Loop
        CurrentRow = CurrentRow - 1 																		'Getting the counted rows from the Do while loop and -1 to avoid counting the empty rows of data
        For innerRow = CurrentCountRow To CurrentRow 													'FOR LOOP to extract all test case ID and Scenario ID that was marked "YES" with the variable CurrentCountRow of which row to start and CurrentRow of which row it will stopped looping / last row of data
            If StrComp(UCase(Trim(xlSheet.Cells(innerRow, 6).Value)), "YES", vbTextCompare) = 0 Then 				'Check if the column execution status is marked with "YES" or not
                TCDetailsRows = innerRow 																		'Declare variable to hold the current row iteration / row number
                ScenarioName = Trim(xlSheet.Cells(TCDetailsRows, 2).Value)									'Use the previous variable to get the Scenario ID based on the row number and column ID

                
                TCName = Trim(xlSheet.Cells(TCDetailsRows, 4).Value)											'Use the previous variable to get the Scenario ID based on the row number and column ID

                ExecuteTCTxtFile.Write ModuleCellVal &"," & ScenarioName & "," & TCName & ","									'Write to txt with the delimer ','
            End If
        Next
        row = innerRow 																					' Update the FOR LOOP current iteration to the Do While loop current iteration

    Else
        NonCurrentRow = row + 1																			'If the module is marked with NO, this will execute. Same logic applied if its marked with YES, +1 to avoid checking headers

        Do while xlSheet.Cells(NonCurrentRow, 2).Value <> ""												'Same logic as the previous statement, loop through every single rows of TC ID and Scenario ID to get the total number of rows occupied
            NonCurrentRow = NonCurrentRow + 1
        Loop
         row = NonCurrentRow																				'Update the Do While Loop iteration with the row iteration count (NonCurrentRow) if the condition is false to skip checking the rows if the module is marked with No
 
    End If
    
    row = row + 1 																						' Update the Do While Loop iteration to continue to the next iteration
Loop


Set ExecuteTCTxtFile = Nothing
Set TempTxtFileFSO = Nothing
'MsgBox "Extraction Completed", 0, "Extract Excel"

WScript.Sleep 2000


xlBook.Close False
xlApp.Quit

Set xlSheet = Nothing
Set xlBook = Nothing
Set xlApp = Nothing









Set ReadExecuteTCFSO = CreateObject("Scripting.FileSystemObject")

Set OpenTCTextFile = ReadExecuteTCFSO.OpenTextFile(strCurDir &"\" & "ExecutableTestCasesList.txt")

TestCaseList = OpenTCTextFile.ReadAll()

SplittedArraysTCList = Split(Trim(TestCaseList), ",")

Dim FilterArray()
ReDim FilterArray(UBound(SplittedArraysTCList))

a = 0
For i = LBound(SplittedArraysTCList) To UBound(SplittedArraysTCList)
    If Trim(SplittedArraysTCList(i)) <> "" Then
        FilterArray(a) = Trim(SplittedArraysTCList(i))
        a = a + 1
    End If
Next
ReDim Preserve FilterArray(a - 1)


'Get the total test case to be executed
Dim TestCaseCount
For i = 2 to UBound(FilterArray) Step 3
	TestCaseCount = TestCaseCount + 1
	
Next


yesBtnVal = MsgBox("Total Test Cases To Be Executed: " & TestCaseCount & vbCrLf & "Do you wish to execute?", 4, "Test Case Count")

If yesBtnVal = "6" Then
	
		Dim SizeChunks 				
		SizeChunks = 3				'Declare the size of the variable to hold the elements inside an array list

		Dim ChunkIndex

		Dim CurrentTimeStamp, NewTestResultFolder
		CurrentTimeStamp = TimeStampNow()

		NewTestResultFolder = ResultTimeStampFolder(CurrentTimeStamp)



		For ChunkIndex = 0 To UBound(FilterArray) Step SizeChunks			'Ensure that it does not go out of bound of what the elements provided inside splitted array list of modules, scenario ID and TC ID and "reinitialize the dataArray to hold 3 instead of the original number for the next loop
			Dim BatchesArray
			ReDim BatchesArray(SizeChunks -1)								'Declare and initilize to hold elements in batches in a form of array list to 0, so every iteration the array variables are always reinitilize to 0 
			
			'Print("Chunk Index is: " & ChunkIndex)
			Dim elementIndex
			
			For elementIndex = 0 To SizeChunks - 1							'To process the elements inside the splitted array list of modules, scenario ID and TC ID and extract only 3 elements according to the value initialized to SizeChunks 
				'Print("Element Index Is: " & elementIndex)
				If ChunkIndex + elementIndex <= UBound(FilterArray) Then		'To ensure that each iteration the element we trying to extract does not go out of bound of the maximum 3 elements for the variable dataArray
					BatchesArray(elementIndex) = FilterArray(chunkIndex + elementIndex)			'It starts to process and extract element for each iteration
									
					
				End If
				
			Next
				' Process the chunk

			Set oShell = CreateObject("WScript.Shell")
			
			oShell.Run "Taskkill /F /IM uft.exe", 0, True
			
			Set oShell = Nothing
			
			'MsgBox "Successfully Closed UFT", 0, "UFT Closed"
			
			'Do not remove this, **To wait for 2 seconds after closing the UFT before launching it***
			'If removed, there will be error about the PC trying to launch UFT the instant UFT was closed by ShellScript above it.
			WScript.Sleep 2000		'Default: miliseconds
			
			
			Set qtApp = CreateObject("QuickTest.Application")
			qtApp.Launch

			
			qtApp.Visible = False
			
			
			qtApp.Options.Run.ViewResults = False
			ModuleFolder = BatchesArray(0)
			ScenarioFolder = BatchesArray(1)
			ScriptFolder = BatchesArray(2)
			
			qtApp.Open strCurDir & "\" & "TestScript" & "\" & ModuleFolder & "\" & ScenarioFolder & "\" & ScriptFolder, True
			
			Set qtTest = qtApp.Test
			
			qtTest.Settings.Run.IterationMode = "rngAll"
			qtTest.Settings.Run.OnError = "NextIteration"
			qtTest.Settings.Run.DisableSmartIdentification = True
			
			
			Set qtResultsOpt = CreateObject("QuickTest.RunResultsOptions")
			qtResultsOpt.ResultsLocation = NewTestResultFolder & "\" & ModuleFolder & "\" & ScenarioFolder & "\" & ScriptFolder
			
			qtTest.Run qtResultsOpt
			
			qtTest.Close
			
			Set qtResultsOpt = Nothing
			Set qtTest = Nothing
			
			
			
		Next




		Set qtApp = Nothing
		


		OpenTCTextFile.Close()
		Set ReadExecuteTCFSO = Nothing
		Set OpenTCTextFile = Nothing
		Set oShell = CreateObject("WScript.Shell")

		oShell.Run "Taskkill /F /IM uft.exe", 0, True

		Set oShell = Nothing

		MsgBox "Execution Done", 0, "Finished Execution"
		
	
End if


Function ResultTimeStampFolder(NowTimeStamp)
	
	Dim SummaryResultFolder
	newFolderPath = strCurDir & "\" & "TestResult" & "\" & NowTimeStamp
	
	Set FolderCreationFSO = CreateObject("Scripting.FileSystemObject")
	
	Set SummaryResultFolder = FolderCreationFSO.CreateFolder(newFolderPath)
	
	
	ResultTimeStampFolder = newFolderPath
	
	
End Function



Function TimeStampNow()
		
	Dim strDateNow

	strDateNow = Now()

	TimeStampFormat =  Year(strDateNow) & "-" &Right("00" & Month(strDateNow), 2) & "-" & Right("00" & Day(strDateNow), 2) & "_"  & Right("00" & Hour(strDateNow), 2) & Right("00" & Minute(strDateNow),2) & Right("00"& Second(strDateNow),2)


	TimeStampNow = TimeStampFormat
	
End Function



