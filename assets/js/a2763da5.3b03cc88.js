"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[61129],{21767:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>p,metadata:()=>i,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const p={},l="Amazon Seller Partner",i={unversionedId:"integrations/sources/amazon-seller-partner",id:"integrations/sources/amazon-seller-partner",title:"Amazon Seller Partner",description:"This page guides you through the process of setting up the Amazon Seller Partner source connector.",source:"@site/../docs/integrations/sources/amazon-seller-partner.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/amazon-seller-partner",permalink:"/integrations/sources/amazon-seller-partner",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/amazon-seller-partner.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Amazon Ads",permalink:"/integrations/sources/amazon-ads"},next:{title:"Amazon SQS",permalink:"/integrations/sources/amazon-sqs"}},o={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Set up Amazon Seller Partner",id:"step-1-set-up-amazon-seller-partner",level:2},{value:"Step 2: Set up the source connector in Airbyte",id:"step-2-set-up-the-source-connector-in-airbyte",level:2},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Supported streams",id:"supported-streams",level:2},{value:"Report options",id:"report-options",level:2},{value:"Data type mapping",id:"data-type-mapping",level:2},{value:"Changelog",id:"changelog",level:2}],d={toc:m},s="wrapper";function k(t){let{components:e,...a}=t;return(0,n.kt)(s,(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"amazon-seller-partner"},"Amazon Seller Partner"),(0,n.kt)("p",null,"This page guides you through the process of setting up the Amazon Seller Partner source connector."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AWS Environment"),(0,n.kt)("li",{parentName:"ul"},"AWS Region"),(0,n.kt)("li",{parentName:"ul"},"AWS Access Key"),(0,n.kt)("li",{parentName:"ul"},"AWS Secret Key"),(0,n.kt)("li",{parentName:"ul"},"Role ARN"),(0,n.kt)("li",{parentName:"ul"},"LWA Client ID (LWA App ID)**"),(0,n.kt)("li",{parentName:"ul"},"LWA Client Secret**"),(0,n.kt)("li",{parentName:"ul"},"Refresh token**"),(0,n.kt)("li",{parentName:"ul"},"Replication Start Date")),(0,n.kt)("p",null,"**not required for Airbyte Cloud"),(0,n.kt)("h2",{id:"step-1-set-up-amazon-seller-partner"},"Step 1: Set up Amazon Seller Partner"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/registering-your-application"},"Register")," Amazon Seller Partner application.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The application must be published as Amazon does not allow external parties such as Airbyte to access draft applications."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html"},"Create")," IAM user.")),(0,n.kt)("h2",{id:"step-2-set-up-the-source-connector-in-airbyte"},"Step 2: Set up the source connector in Airbyte"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Cloud:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.airbyte.com/workspaces"},"Log into your Airbyte Cloud")," account. "),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,n.kt)("strong",{parentName:"li"},"+ new source"),". "),(0,n.kt)("li",{parentName:"ol"},"On the source setup page, select ",(0,n.kt)("strong",{parentName:"li"},"Amazon Seller Partner")," from the Source type dropdown and enter a name for this connector."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Authenticate your account"),"."),(0,n.kt)("li",{parentName:"ol"},"Log in and Authorize to your Amazon Seller Partner account."),(0,n.kt)("li",{parentName:"ol"},"Paste all other data to required fields using your IAM user."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Set up source"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Open Source:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Using developer application from Step 1, ",(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/self-authorization"},"generate")," refresh token. "),(0,n.kt)("li",{parentName:"ol"},"Go to local Airbyte page."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,n.kt)("strong",{parentName:"li"},"+ new source"),". "),(0,n.kt)("li",{parentName:"ol"},"On the Set up the source page, enter the name for the Amazon Seller Partner connector and select ",(0,n.kt)("strong",{parentName:"li"},"Amazon Seller Partner")," from the Source type dropdown. "),(0,n.kt)("li",{parentName:"ol"},"Paste all data to required fields using your IAM user and developer account."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Set up source"),".")),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The Amazon Seller Partner source connector supports the following ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts/#connection-sync-mode"},"sync modes"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Full Refresh"),(0,n.kt)("li",{parentName:"ul"},"Incremental")),(0,n.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"Information about rate limits you may find ",(0,n.kt)("a",{parentName:"p",href:"https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api"},"here"),"."),(0,n.kt)("h2",{id:"supported-streams"},"Supported streams"),(0,n.kt)("p",null,"This source is capable of syncing the following tables and their data:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://sellercentral.amazon.com/gp/help/200740930"},"Manage FBA Inventory Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://sellercentral.amazon.com/gp/help/help.html?itemID=200989110"},"Removal FBA Order Details Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://sellercentral.amazon.com/gp/help/help.html?itemID=200989100"},"FBA Shipments Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://sellercentral.amazon.com/help/hub/reference/200453300"},"FBA Replacements Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://sellercentral.amazon.com/help/hub/reference/G202086720"},"FBA Storage Fees Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://sellercentral.amazon.com/help/hub/reference/202105670"},"Restock Inventory Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/order-reports-attributes#get_flat_file_actionable_order_data_shipping"},"Flat File Actionable Order Data Shipping")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Flat File Open Listings Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Flat File Orders Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Flat File Orders Reports By Last Update")," ","(","incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Amazon-Fulfilled Shipments Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Merchant Listings Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/vendor-direct-fulfillment-shipping-api-v1-reference"},"Vendor Direct Fulfillment Shipping")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Vendor Inventory Health Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/orders-api-v0-reference"},"Orders")," ","(","incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Seller Feedback Report")," ","(","incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports"},"Brand Analytics Alternate Purchase Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports"},"Brand Analytics Item Comparison Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports"},"Brand Analytics Market Basket Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports"},"Brand Analytics Repeat Purchase Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports"},"Brand Analytics Search Terms Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/amzn/selling-partner-api-docs/blob/main/references/reports-api/reporttype-values.md#browse-tree-report"},"Browse tree report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/finances-api-reference#get-financesv0financialeventgroups"},"Financial Event Groups")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/finances-api-reference#get-financesv0financialevents"},"Financial Events")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"FBA Fee Preview Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"FBA Daily Inventory History Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"FBA Promotions Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"FBA Inventory Adjustments Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"FBA Received Inventory Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"FBA Inventory Event Detail Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"FBA Monthly Inventory History Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"FBA Manage Inventory")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Subscribe and Save Forecast Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Subscribe and Save Performance Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Flat File Archived Orders Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Flat File Returns Report by Return Date")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Canceled Listings Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Active Listings Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Open Listings Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Suppressed Listings Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Inactive Listings Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"FBA Stranded Inventory Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"XML Orders By Order Date Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Inventory Ledger Report - Detailed View")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"FBA Manage Inventory Health Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Inventory Ledger Report - Summary View")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://sellercentral.amazon.com/help/hub/reference/G200732720"},"FBA Reimbursements Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/order-reports-attributes#get_order_report_data_shipping"},"Order Data Shipping Report"))),(0,n.kt)("h2",{id:"report-options"},"Report options"),(0,n.kt)("p",null,"Make sure to configure the ",(0,n.kt)("a",{parentName:"p",href:"https://developer-docs.amazon.com/sp-api/docs/report-type-values"},"required parameters")," in the report options setting for the reports configured."),(0,n.kt)("p",null,"For ",(0,n.kt)("inlineCode",{parentName:"p"},"GET_AMAZON_FULFILLED_SHIPMENTS_DATA_GENERAL")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"GET_FLAT_FILE_RETURNS_DATA_BY_RETURN_DATE")," streams maximum value for ",(0,n.kt)("inlineCode",{parentName:"p"},"period_in_days")," 30 days and 60 days.\nSo, for any value that exceeds the limit, the ",(0,n.kt)("inlineCode",{parentName:"p"},"period_in_days")," will be automatically reduced to the limit for the stream."),(0,n.kt)("h2",{id:"data-type-mapping"},"Data type mapping"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"int"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"float"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"date")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"date"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"datetime")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"datetime"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"array")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"array"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"object")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"object"))))),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"1.4.0")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-07-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/27110"},"#","27110")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,n.kt)("inlineCode",{parentName:"td"},"GET_FLAT_FILE_ACTIONABLE_ORDER_DATA_SHIPPING")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"GET_ORDER_REPORT_DATA_SHIPPING")," streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"1.3.0")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-06-09"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/27110"},"#","27110")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Removed ",(0,n.kt)("inlineCode",{parentName:"td"},"app_id")," from ",(0,n.kt)("inlineCode",{parentName:"td"},"InputConfiguration"),", refactored ",(0,n.kt)("inlineCode",{parentName:"td"},"spec"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"1.2.0")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-05-23"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/22503"},"#","22503")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Enabled stream attribute customization from Source configuration")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"1.1.0")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-04-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/23605"},"#","23605")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add FBA Reimbursement Report stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"1.0.1")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-03-15"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/24098"},"#","24098")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add Belgium Marketplace")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"1.0.0")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-03-13"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/23980"},"#","23980")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Make ",(0,n.kt)("inlineCode",{parentName:"td"},"app_id")," required. Increase ",(0,n.kt)("inlineCode",{parentName:"td"},"end_date")," gap up to 5 minutes from now for Finance streams. Fix connection check failure when trying to connect to Amazon Vendor Central accounts")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.33")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-03-01"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/23606"},"#","23606")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Implement reportOptions for all missing reports and refactor")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.32")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-02-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/23300"},"#","23300")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Make AWS Access Key, AWS Secret Access and Role ARN optional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.31")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-10"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16430"},"#","16430")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Implement slicing for report streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.30")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-12-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20896"},"#","20896")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Validate connections without orders data")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.29")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-18"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/19581"},"#","19581")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Use user provided end date for GET_SALES_AND_TRAFFIC_REPORT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.28")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-20"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18283"},"#","18283")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added multiple (22) report types")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.26")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-24"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16629"},"#","16629")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Report API version to 2021-06-30, added multiple (5) report types")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.25")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-07-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15063"},"#","15063")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add Restock Inventory Report")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.24")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-07-12"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14625"},"#","14625")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add FBA Storage Fees Report")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.23")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13604"},"#","13604")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add new streams: Fullfiments returns and Settlement reports")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.22")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-15"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13633"},"#","13633")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix - handle start date for financial stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.21")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-01"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13364"},"#","13364")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add financial streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.20")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13059"},"#","13059")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add replication end date to config")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.19")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-24"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13119"},"#","13119")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add OAuth2.0 support")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.18")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12663"},"#","12663")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add GET_XML_BROWSE_TREE_DATA report")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.17")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-19"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12946"},"#","12946")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add throttling exception managing in Orders streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.16")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-04"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12523"},"#","12523")),(0,n.kt)("td",{parentName:"tr",align:"left"},"allow to use IAM user arn or IAM role")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.15")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-25"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9789"},"#","9789")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add stream FbaReplacementsReports")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.14")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-19"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9621"},"#","9621")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add GET_FLAT_FILE_ALL_ORDERS_DATA_BY_LAST_UPDATE_GENERAL report")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.13")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-18"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9581"},"#","9581")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Change createdSince parameter to dataStartTime")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.12")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-05"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9312"},"#","9312")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add all remaining brand analytics report streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.11")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-05"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9115"},"#","9115")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix reading only 100 orders")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.10")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-31"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9236"},"#","9236")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix NoAuth deprecation warning")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.9")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9212"},"#","9212")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Normalize GET_SELLER_FEEDBACK_DATA header field names")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.8")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-22"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8810"},"#","8810")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix GET_SELLER_FEEDBACK_DATA Date cursor field format")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.7")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9002"},"#","9002")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Extract REPORTS_MAX_WAIT_SECONDS to configurable parameter")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.6")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-10"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8179"},"#","8179")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add GET_BRAND_ANALYTICS_SEARCH_TERMS_REPORT report")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.5")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8425"},"#","8425")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update title, description fields in spec")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.4")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8021"},"#","8021")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added GET_SELLER_FEEDBACK_DATA report with incremental sync capability")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.3")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7828"},"#","7828")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remove datetime format from all streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.2")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7752"},"#","7752")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Change ",(0,n.kt)("inlineCode",{parentName:"td"},"check_connection")," function to use stream Orders")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.1")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-17"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5248"},"#","5248")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added ",(0,n.kt)("inlineCode",{parentName:"td"},"extra stream")," support. Updated ",(0,n.kt)("inlineCode",{parentName:"td"},"reports streams")," logics")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.0")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-08-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4863"},"#","4863")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Rebuild source with ",(0,n.kt)("inlineCode",{parentName:"td"},"airbyte-cdk"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.1.3")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-06-23"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4288"},"#","4288")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bugfix failing ",(0,n.kt)("inlineCode",{parentName:"td"},"connection check"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.1.2")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-06-15"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4108"},"#","4108")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed: Sync fails with timeout when create report is CANCELLED`")))))}k.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>N});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},p=Object.keys(t);for(r=0;r<p.length;r++)a=p[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(r=0;r<p.length;r++)a=p[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),m=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=m(t.components);return r.createElement(o.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,p=t.originalType,o=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=m(a),c=n,N=s["".concat(o,".").concat(c)]||s[c]||k[c]||p;return a?r.createElement(N,l(l({ref:e},d),{},{components:a})):r.createElement(N,l({ref:e},d))}));function N(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var p=a.length,l=new Array(p);l[0]=c;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[s]="string"==typeof t?t:n,l[1]=i;for(var m=2;m<p;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);