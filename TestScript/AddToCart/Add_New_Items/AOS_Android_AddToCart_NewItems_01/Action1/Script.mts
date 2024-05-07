
Reporter.Filter = rfErrorsOnly

LoadFunctionLibrary "C:\Users\HP\OneDrive\Desktop\UFT Framework Experiment\UFT_Framework_v0.1\Reusable Library\LoadDependencies.qfl"

LoadDependencies "ScenarioAndroidAddToCart01.qfl", "[AddToCart]_Android_AddToCart_NewItems.xlsx", "AOS_Android_AddToCart_NewItems"






'Print("Currently Executing: " & Environment.Value("TestName"))

LaunchAOSMobile()




AddToCart()



 @@ script infofile_;_ZIP::ssf1.xml_;_



