'Reporter.Filter = rfErrorsOnly
 @@ script infofile_;_ZIP::ssf2.xml_;_
'
'LoadFunctionLibrary "C:\Users\HP\OneDrive\Desktop\UFT Framework Enhanced\Enhanced-UFT-Framework\Reusable Library\LoadDependencies.qfl"
'
'LoadDependencies "Select_Destination.qfl", "[Book Flights]_WinApp_Select_Destination.xlsx", "WinApp_Select_Destination_01"
'
'
'LaunchWinApp()
'
'
'SelectDestination()
''
''
''CloseWinApp()
''
''
''
'WpfWindow("Micro Focus MyFlight Sample").Activate
'WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 
'
'
'LaunchWinApp()
'
'
'wait 2
'
'WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "John"
'
'WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").Set "HP"
'
'WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click
'
'
'wait 2
'WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click

'
'Environment.LoadFromFile "C:\Users\HP\OneDrive\Desktop\UFT Framework Enhanced\Enhanced-UFT-Framework\testConfig.xml"
'
'Print("Environment Value: "& Environment("BrowserTest"))
'
'
'Print("Environment 2nd Value: "& Environment("Test"))
'
'
'



'UIAWindow("Micro Focus MyFlight Sample").UIATable("flightsDataGrid").UIAObject("FlightsGUI.Logic.GuiFlight").UIAObject("Item: FlightsGUI.Logic.GuiFlig").Click



'UIAWindow("name:=Micro Focus MyFlight Sample Application").UIATable("automationid:=flightsDataGrid")






Print(UIAWindow("Micro Focus MyFlight Sample").UIATable("flightsDataGrid").GetCellValue(2, 5))









