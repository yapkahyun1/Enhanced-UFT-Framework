Reporter.Filter = rfErrorsOnly

LoadFunctionLibrary "C:\Users\HP\OneDrive\Desktop\UFT Framework Enhanced\Enhanced-UFT-Framework\Reusable Library\LoadDependencies.qfl"

LoadDependencies "Select_Destination.qfl", "[Book Flights]_WinApp_Select_Destination.xlsx", "WinApp_Select_Destination_01"


LaunchWinApp()


SelectDestination()


CloseWinApp()



