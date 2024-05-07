

Reporter.Filter = rfDisableAll

LoadFunctionLibrary "C:\Users\HP\OneDrive\Desktop\UFT Framework Experiment\UFT_Framework_v0.1\Reusable Library\LoadDependencies.qfl"

LoadDependencies "ScenarioRegAccount01.qfl", "[Account]_IOS_Register_New_Account.xlsx", "AOS_IOS_Register_01"

LaunchAOSMobile()


RegisterNewAccount()


