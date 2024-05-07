Reporter.Filter = rfDisableAll

LoadFunctionLibrary "C:\Users\HP\OneDrive\Desktop\UFT Framework Experiment\UFT_Framework_v0.1\Reusable Library\LoadDependencies.qfl"

LoadDependencies "ScenarioSettings01.qfl", "[Settings]_Android_SettingsCheck_01.xlsx", "AOS_Android_Settings_01"


SettingsCheck()



