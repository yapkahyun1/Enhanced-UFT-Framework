



'Wait for the browser to fully load



Reporter.Filter = rfEnableErrorsOnly

LoadFunctionLibrary "C:\Users\HP\OneDrive\Desktop\UFT Framework Experiment\UFT_Framework_v0.1\Reusable Library\LoadDependencies.qfl"
LoadDependencies "ScenarioCheckout01.qfl", "[Checkout]_Web_Item_Checkout.xlsx", "AOS_Web_Checkout_01"



LaunchAOSWeb()



AddToCartAndCheckout()



CloseBrowser()

'
'Function LaunchBrowser(BrowserType, URL)
'	CloseBrowser()
'	'For user to cater for spelling errors
'	Select UCase(BrowserType)
'	Case "CHROME", "GOOGLE CHROME", "GOOGLECHROME"
'	BrowserType = "chrome.exe"
'	Case "EDGE", "MSEDGE", "MS EDGE", "MICROSOFTEDGE", "MICROSOFT EDGE"
'	BrowserType = "msedge.exe"
'	End Select
'	
'	SystemUtil.Run BrowserType, "", "", "", 3
'	Browser("CreationTime:=0").Sync
'	Browser("CreationTime:=0").Maximize
'	Browser("CreationTime:=0").ClearCache
'	Browser("CreationTime:=0").Navigate URL
'	
'	'User UI Automation Add-In to check for Advance & Proceed
'	If UIAWindow(<property>).exist(0) Then
'	'Insert steps here
'	Browser("CreationTime:=0").Sync
'	End If
'End  Function


