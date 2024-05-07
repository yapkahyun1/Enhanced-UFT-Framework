
Reporter.Filter = rfDisableAll

LoadFunctionLibrary "C:\Users\HP\OneDrive\Desktop\UFT Framework Experiment\UFT_Framework_v0.1\Reusable Library\LoadDependencies.qfl"

LoadDependencies "ScenarioLoginAndroid01.qfl", "[Login]_Android_Login_Existing_UserProfile.xlsx", "AOS_Android_Login_01"


'Load Func Lib from other modules
LoadAdditionalFunctionLibrary "Checkout", "Add_to_Cart_And_Checkout", "ScenarioCheckout01.qfl"



LaunchAOSMobile()

LoginAOS()





 
 
 
 

