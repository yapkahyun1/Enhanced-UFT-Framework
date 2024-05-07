
Reporter.Filter = rfEnableErrorsOnly

LoadFunctionLibrary "C:\Users\HP\OneDrive\Desktop\UFT Framework Experiment\UFT_Framework_v0.1\Reusable Library\LoadDependencies.qfl"
LoadDependencies "ScenarioRegister_01.qfl", "[Register]_Web_Registration_User_Profile.xlsx", "AOS_Web_Register_01"



LaunchAOSWeb()


RegisterUserProfile()



CloseBrowser()




