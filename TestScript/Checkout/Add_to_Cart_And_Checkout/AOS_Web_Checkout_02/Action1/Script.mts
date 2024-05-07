
Reporter.Filter = rfEnableErrorsOnly

LoadFunctionLibrary "C:\Users\HP\OneDrive\Desktop\UFT Framework Experiment\UFT_Framework_v0.1\Reusable Library\LoadDependencies.qfl"
LoadDependencies "ScenarioCheckout01.qfl", "[Checkout]_Web_Item_Checkout.xlsx", "AOS_Web_Checkout_02"



LaunchAOSWeb()


CheckPriceFilter()


CloseBrowser()



