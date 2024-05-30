	
Reporter.Filter = rfDisableAll


LoadFunctionLibrary "C:\Users\HP\OneDrive\Desktop\UFT Framework Experiment\UFT_Framework_v0.1\Reusable Library\LoadDependencies.qfl"
LoadDependencies "ScenarioWebContactUs01.qfl", "[Contact Us]_Web_Customer_Contact_Us.xlsx", "AOS_Web_ContactUs_01"


LaunchAOSWeb()


NavigateContactUs()


CloseBrowser()





