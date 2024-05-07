
Reporter.Filter = rfDisableAll

LoadFunctionLibrary "C:\Users\HP\OneDrive\Desktop\UFT Framework Experiment\UFT_Framework_v0.1\Reusable Library\LoadDependencies.qfl"

LoadDependencies "ScenarioPurchaseItemIOS.qfl", "[Purchase]_IOS_PurchaseItems.xlsx", "AOS_IOS_PurchaseItem_01"




LaunchAOSMobile()




PurchaseItems()



