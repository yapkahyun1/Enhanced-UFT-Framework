﻿	
Reporter.Filter = rfDisableAll


LoadFunctionLibrary "C:\Users\HP\OneDrive\Desktop\UFT Framework Enhanced\Enhanced-UFT-Framework\Reusable Library\LoadDependencies.qfl"
LoadDependencies "ScenarioWebContactUs01.qfl", "[Contact Us]_Web_MakePurchase.xlsx", "AOS_Web_ContactUs_01"


LaunchIRakyatPortal()


''NavigateContactUs()
''
''
''CloseBrowser()
''


Environment.Value("CurrActiveScreen") = "iRakyat"
Set iRakyatBrowser = Browser("title:=iRakyat")
Set iRakyatPage = iRakyatBrowser.Page("title:=iRakyat")
wait 1

'
'
'AOSPage.Sync
'Wait 10
''
'
''

Call ExecuteTestSteps("Login Step 1: Enter Username", iRakyatPage.WebEdit("xpath:=//INPUT[@id='username']"), "Set", "Test", 1)

Call ExecuteTestSteps("Login Step 2: Click Login Button", iRakyatPage.WebButton("xpath:=//input[@value='Login']"), "Click", "", 1)

WaitObject iRakyatPage.WebButton("xpath:=//div[contains(text(), 'Is this your Secure Phrase')]//following::input[@value='Yes']"), 15



Call ExecuteTestSteps("Login Step 3: Click Yes Button", iRakyatPage.WebButton("xpath:=//div[contains(text(), 'Is this your Secure Phrase')]//following::input[@value='Yes']"), "Click", "", 1)



'Call ExecuteTestSteps(AOSPage.WebElement("xpath:=//a[@id='hrefUserIcon']"), "Click", "Step 1: Click Account Icon", "Account", 1)
'WaitObject AOSPage.WebElement("xpath:=//input[@name='username']"), 10
'Call ExecuteTestSteps(AOSPage.WebEdit("xpath:=//input[@name='username']"), "Set", "Step 2: Set Username", DataTable("Username", dtGlobalSheet), 1)
'Call ExecuteTestSteps(AOSPage.WebEdit("xpath:=//input[@name='password']"), "Set", "Step 3: Set Password", DataTable("Password", dtGlobalSheet), 1)
'wait 5
'wait 5
'Call ExecuteTestSteps(AOSPage.WebElement("xpath:=//div[@id='tabletsImg']"), "Click", "Step 5: Select Tablets", "", 1)
'WaitObject AOSPage.WebElement("xpath:=//h3[contains(text(), 'TABLETS')]/following::img[@id='16']"), 10
'wait 1
'Call ExecuteTestSteps(AOSPage.WebElement("xpath:=//a[text()='"&DataTable("Product", dtGlobalSheet)&"']"), "Click", "Step 6: Click Product"&DataTable("Product", dtGlobalSheet)&"", DataTable("Product", dtGlobalSheet), 1)
'WaitObject AOSPage.WebElement("xpath:=//button[@name='save_to_cart']"), 10
'Call ExecuteTestSteps(AOSPage.WebElement("xpath:=//button[@name='save_to_cart']"), "Click", "Step 7: Click Add To Cart Button", "", 1)
'wait 1
'Call ExecuteTestSteps(AOSPage.WebElement("xpath:=//button[@id='checkOutPopUp']"), "Click", "Step 8: Click Checkout Button", "", 1)
'WaitObject AOSPage.WebElement("xpath:=//h3[text()='ORDER PAYMENT']"), 10
'
'VerifyText AOSPage.WebElement("xpath:=//div[@id='userCart']//following::h3[text()='"&DataTable("Product", dtGlobalSheet)&"']"), DataTable("Product", dtGlobalSheet), 1, "Step 9: Verify Items in Cart"
'
'Call ExecuteTestSteps(AOSPage.WebElement("xpath:=//button[@translate='NEXT']"), "Click", "Step 10: Click Next Button", "", 1)
'WaitObject AOSPage.WebEdit("xpath:=//input[@name='safepay_username']"), 10
'
'If Not AOSPage.WebElement("xpath:=//input[@name='safepay' and @checked='checked']").Exist Then
'		AOSPage.WebElement("xpath:=//input[@name='safepay']").Click
'
'End If
'Call ExecuteTestSteps(AOSPage.WebEdit("xpath:=//input[@name='safepay_username']"), "Set", "Step 11: Set SafePay Username", DataTable("Username", dtGlobalSheet), 1)
'Call ExecuteTestSteps(AOSPage.WebEdit("xpath:=//input[@name='safepay_password']"), "Set", "Step 12: Set SafePay Password", DataTable("Password", dtGlobalSheet), 1)
'Call ExecuteTestSteps(AOSPage.WebElement("xpath:=//button[@id='pay_now_btn_SAFEPAY']"), "Click", "Step 13: Click PayNow Button", "", 1)
'
'WaitObject AOSPage.WebElement("xpath:=//span[text()='Thank you for buying with Advantage']"), 10
'
'VerifyText AOSPage.WebElement("xpath:=//span[text()='Thank you for buying with Advantage']"), "Thank you for buying with Advantage", 1, "Step 14: Verify Purchased Sucessfully"
'Call ExecuteTestSteps(AOSPage.WebElement("xpath:=//a[@id='hrefUserIcon']"), "Click", "Step 15: Click Account Button", "", 1)
'WaitObject AOSPage.WebElement("xpath:=//a[@id='hrefUserIcon']"), 10
'Call ExecuteTestSteps(AOSPage.WebElement("xpath:=//label[text()='Sign out' and @role='link']"), "Click", "Step 16: Click Sign Out Button", "", 1)
'
'
'
'




'Call ExecuteTestSteps(, "Click", , "Account", 1)
'WaitObject AOSPage.WebElement("xpath:=//input[@name='username']"), 10
'Call ExecuteTestSteps(AOSPage.WebEdit("xpath:=//input[@name='username']"), "Set", "Step 2: Set Username", DataTable("Username", dtGlobalSheet), 1)
'Call ExecuteTestSteps(AOSPage.WebEdit("xpath:=//input[@name='password']"), "Set", "Step 3: Set Password", DataTable("Password", dtGlobalSheet), 1)
'wait 2
'Browser("Advantage Shopping_2").Page("Advantage Shopping_Page_2").WebButton("XpathButton").Click

'CloseBrowser()

'JavaScriptClick AOSPage, "//span[text()='TABLETS']"





