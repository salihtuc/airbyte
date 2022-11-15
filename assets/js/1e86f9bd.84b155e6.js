"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[8611],{73800:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(83117),n=(a(67294),a(3905));const i={},l="Amazon S3",o={unversionedId:"integrations/sources/s3",id:"integrations/sources/s3",title:"Amazon S3",description:"This page contains the setup guide and reference information for the Amazon S3 source connector.",source:"@site/../docs/integrations/sources/s3.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/s3",permalink:"/integrations/sources/s3",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/s3.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"RSS",permalink:"/integrations/sources/rss"},next:{title:"Salesforce",permalink:"/integrations/sources/salesforce"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Set up Amazon S3",id:"step-1-set-up-amazon-s3",level:3},{value:"Step 2: Set up the Amazon S3 connector in Airbyte",id:"step-2-set-up-the-amazon-s3-connector-in-airbyte",level:2},{value:"For Airbyte Cloud:",id:"for-airbyte-cloud",level:3},{value:"For Airbyte Open Source:",id:"for-airbyte-open-source",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"File Compressions",id:"file-compressions",level:2},{value:"Path Patterns",id:"path-patterns",level:2},{value:"User Schema",id:"user-schema",level:2},{value:"S3 Provider Settings",id:"s3-provider-settings",level:2},{value:"CSV",id:"csv",level:3},{value:"Parquet",id:"parquet",level:3},{value:"Avro",id:"avro",level:3},{value:"Jsonl",id:"jsonl",level:3},{value:"Changelog",id:"changelog",level:2}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"amazon-s3"},"Amazon S3"),(0,n.kt)("p",null,"This page contains the setup guide and reference information for the Amazon S3 source connector."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Define file pattern, see the ",(0,n.kt)("a",{parentName:"p",href:"/integrations/sources/s3#path-patterns"},"Path Patterns section")),(0,n.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,n.kt)("h3",{id:"step-1-set-up-amazon-s3"},"Step 1: Set up Amazon S3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If syncing from a private bucket, the credentials you use for the connection must have have both ",(0,n.kt)("inlineCode",{parentName:"li"},"read")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"list")," access on the S3 bucket. ",(0,n.kt)("inlineCode",{parentName:"li"},"list")," is required to discover files based on the provided pattern","(","s",")",".")),(0,n.kt)("h2",{id:"step-2-set-up-the-amazon-s3-connector-in-airbyte"},"Step 2: Set up the Amazon S3 connector in Airbyte"),(0,n.kt)("h3",{id:"for-airbyte-cloud"},"For Airbyte Cloud:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Log into your Airbyte Cloud")," account."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"<Sources/Destinations>"),". In the top-right corner, click ",(0,n.kt)("strong",{parentName:"li"},"+new source/destination"),"."),(0,n.kt)("li",{parentName:"ol"},"On the Set up the source/destination page, enter the name for the ",(0,n.kt)("inlineCode",{parentName:"li"},"connector name")," connector and select ",(0,n.kt)("strong",{parentName:"li"},"connector name")," from the ",(0,n.kt)("inlineCode",{parentName:"li"},"Source/Destination")," type dropdown."),(0,n.kt)("li",{parentName:"ol"},"Set ",(0,n.kt)("inlineCode",{parentName:"li"},"dataset")," appropriately. This will be the name of the table in the destination."),(0,n.kt)("li",{parentName:"ol"},"If your bucket contains ",(0,n.kt)("em",{parentName:"li"},"only")," files containing data for this table, use ",(0,n.kt)("inlineCode",{parentName:"li"},"**")," as path","_","pattern. See the ",(0,n.kt)("a",{parentName:"li",href:"/integrations/sources/s3#path-patterns"},"Path Patterns section")," for more specific pattern matching."),(0,n.kt)("li",{parentName:"ol"},"Leave schema as ",(0,n.kt)("inlineCode",{parentName:"li"},"{}")," to automatically infer it from the file","(","s",")",". For details on providing a schema, see the ",(0,n.kt)("a",{parentName:"li",href:"/integrations/sources/s3#user-schema"},"User Schema section"),"."),(0,n.kt)("li",{parentName:"ol"},"Fill in the fields within the provider box appropriately. If your bucket is not public, add ",(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys"},"credentials")," with sufficient permissions under ",(0,n.kt)("inlineCode",{parentName:"li"},"aws_access_key_id")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"aws_secret_access_key"),"."),(0,n.kt)("li",{parentName:"ol"},"Choose the format corresponding to the format of your files and fill in fields as required. If unsure about values, try out the defaults and come back if needed. Find details on these settings ",(0,n.kt)("a",{parentName:"li",href:"/integrations/sources/s3#file-format-settings"},"here"),".")),(0,n.kt)("h3",{id:"for-airbyte-open-source"},"For Airbyte Open Source:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a new S3 source with a suitable name. Since each S3 source maps to just a single table, it may be worth including that in the name."),(0,n.kt)("li",{parentName:"ol"},"Set ",(0,n.kt)("inlineCode",{parentName:"li"},"dataset")," appropriately. This will be the name of the table in the destination."),(0,n.kt)("li",{parentName:"ol"},"If your bucket contains ",(0,n.kt)("em",{parentName:"li"},"only")," files containing data for this table, use ",(0,n.kt)("inlineCode",{parentName:"li"},"**")," as path","_","pattern. See the ",(0,n.kt)("a",{parentName:"li",href:"/integrations/sources/s3#path-patterns"},"Path Patterns section")," for more specific pattern matching."),(0,n.kt)("li",{parentName:"ol"},"Leave schema as ",(0,n.kt)("inlineCode",{parentName:"li"},"{}")," to automatically infer it from the file","(","s",")",". For details on providing a schema, see the ",(0,n.kt)("a",{parentName:"li",href:"/integrations/sources/s3#user-schema"},"User Schema section"),"."),(0,n.kt)("li",{parentName:"ol"},"Fill in the fields within the provider box appropriately. If your bucket is not public, add ",(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys"},"credentials")," with sufficient permissions under ",(0,n.kt)("inlineCode",{parentName:"li"},"aws_access_key_id")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"aws_secret_access_key"),"."),(0,n.kt)("li",{parentName:"ol"},"Choose the format corresponding to the format of your files and fill in fields as required. If unsure about values, try out the defaults and come back if needed. Find details on these settings ",(0,n.kt)("a",{parentName:"li",href:"/integrations/sources/s3#file-format-settings"},"here"),".")),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The Amazon S3 source connector supports the following ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Replicate Incremental Deletes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Replicate Multiple Files ","(","pattern matching",")"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Replicate Multiple Streams ","(","distinct tables",")"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,n.kt)("h2",{id:"file-compressions"},"File Compressions"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Compression"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Gzip"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Zip"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Bzip2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Lzma"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Xz"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Snappy"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,n.kt)("p",null,"Please let us know any specific compressions you'd like to see support for next!"),(0,n.kt)("h2",{id:"path-patterns"},"Path Patterns"),(0,n.kt)("p",null,"(","tl;dr -",">"," path pattern syntax using ",(0,n.kt)("a",{parentName:"p",href:"https://facelessuser.github.io/wcmatch/glob/"},"wcmatch.glob"),". GLOBSTAR and SPLIT flags are enabled.",")"),(0,n.kt)("p",null,"This connector can sync multiple files by using glob-style patterns, rather than requiring a specific path for every file. This enables:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Referencing many files with just one pattern, e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"**")," would indicate every file in the bucket."),(0,n.kt)("li",{parentName:"ul"},"Referencing future files that don't exist yet ","(","and therefore don't have a specific path",")",".")),(0,n.kt)("p",null,"You must provide a path pattern. You can also provide many patterns split with ","|"," for more complex directory layouts."),(0,n.kt)("p",null,"Each path pattern is a reference from the ",(0,n.kt)("em",{parentName:"p"},"root")," of the bucket, so don't include the bucket name in the pattern","(","s",")","."),(0,n.kt)("p",null,"Some example patterns:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"**")," : match everything."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"**/*.csv")," : match all files with specific extension."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"myFolder/**/*.csv")," : match all csv files anywhere under myFolder."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"*/**")," : match everything at least one folder deep."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"*/*/*/**")," : match everything at least three folders deep."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"**/file.*|**/file"),' : match every file called "file" with any extension ',"(","or no extension",")","."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"x/*/y/*")," : match all files that sit in folder x -",">"," any folder -",">"," folder y."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"**/prefix*.csv")," : match all csv files with specific prefix."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"**/prefix*.parquet")," : match all parquet files with specific prefix.")),(0,n.kt)("p",null,"Let's look at a specific example, matching the following bucket layout:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"myBucket\n    -> log_files\n    -> some_table_files\n        -> part1.csv\n        -> part2.csv\n    -> images\n    -> more_table_files\n        -> part3.csv\n    -> extras\n        -> misc\n            -> another_part1.csv\n")),(0,n.kt)("p",null,"We want to pick up part1.csv, part2.csv and part3.csv ","(","excluding another","_","part1.csv for now",")",". We could do this a few different ways:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'We could pick up every csv file called "partX" with the single pattern ',(0,n.kt)("inlineCode",{parentName:"li"},"**/part*.csv"),"."),(0,n.kt)("li",{parentName:"ul"},"To be a bit more robust, we could use the dual pattern ",(0,n.kt)("inlineCode",{parentName:"li"},"some_table_files/*.csv|more_table_files/*.csv")," to pick up relevant files only from those exact folders."),(0,n.kt)("li",{parentName:"ul"},"We could achieve the above in a single pattern by using the pattern ",(0,n.kt)("inlineCode",{parentName:"li"},"*table_files/*.csv"),". This could however cause problems in the future if new unexpected folders started being created."),(0,n.kt)("li",{parentName:"ul"},"We can also recursively wildcard, so adding the pattern ",(0,n.kt)("inlineCode",{parentName:"li"},"extras/**/*.csv"),' would pick up any csv files nested in folders below "extras", such as "extras/misc/another',"_",'part1.csv".')),(0,n.kt)("p",null,"As you can probably tell, there are many ways to achieve the same goal with path patterns. We recommend using a pattern that ensures clarity and is robust against future additions to the directory structure."),(0,n.kt)("h2",{id:"user-schema"},"User Schema"),(0,n.kt)("p",null,"Providing a schema allows for more control over the output of this stream. Without a provided schema, columns and datatypes will be inferred from each file and a superset schema created. This will probably be fine in most cases but there may be situations you want to enforce a schema instead, e.g.:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You only care about a specific known subset of the columns. The other columns would all still be included, but packed into the ",(0,n.kt)("inlineCode",{parentName:"li"},"_ab_additional_properties")," map."),(0,n.kt)("li",{parentName:"ul"},"Your initial dataset is quite small ","(","in terms of number of records",")",", and you think the automatic type inference from this sample might not be representative of the data in the future."),(0,n.kt)("li",{parentName:"ul"},"You want to purposely define types for every column."),(0,n.kt)("li",{parentName:"ul"},"You know the names of columns that will be added to future data and want to include these in the core schema as columns rather than have them appear in the ",(0,n.kt)("inlineCode",{parentName:"li"},"_ab_additional_properties")," map.")),(0,n.kt)("p",null,"Or any other reason! The schema must be provided as valid JSON as a map of ",(0,n.kt)("inlineCode",{parentName:"p"},'{"column": "datatype"}')," where each datatype is one of:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"string"),(0,n.kt)("li",{parentName:"ul"},"number"),(0,n.kt)("li",{parentName:"ul"},"integer"),(0,n.kt)("li",{parentName:"ul"},"object"),(0,n.kt)("li",{parentName:"ul"},"array"),(0,n.kt)("li",{parentName:"ul"},"boolean"),(0,n.kt)("li",{parentName:"ul"},"null")),(0,n.kt)("p",null,"For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'{"id": "integer", "location": "string", "longitude": "number", "latitude": "number"}'),(0,n.kt)("li",{parentName:"ul"},'{"username": "string", "friends": "array", "information": "object"}')),(0,n.kt)("h2",{id:"s3-provider-settings"},"S3 Provider Settings"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"bucket")," : name of the bucket your files are in")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"aws_access_key_id")," : one half of the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys"},"required credentials")," for accessing a private bucket.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"aws_secret_access_key")," : other half of the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys"},"required credentials")," for accessing a private bucket.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"path_prefix")," : an optional string that limits the files returned by AWS when listing files to only that those starting with this prefix. This is different to path","_","pattern as it gets pushed down to the API call made to S3 rather than filtered in Airbyte and it does not accept pattern-style symbols ","(","like wildcards ",(0,n.kt)("inlineCode",{parentName:"p"},"*"),")",". We recommend using this if your bucket has many folders and files that are unrelated to this stream and all the relevant files will always sit under this chosen prefix."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Together with ",(0,n.kt)("inlineCode",{parentName:"li"},"path_pattern"),", there are multiple ways to specify the files to sync. For example, all the following configs are equivalent:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"path_prefix")," = ",(0,n.kt)("inlineCode",{parentName:"li"},"<empty>"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"path_pattern")," = ",(0,n.kt)("inlineCode",{parentName:"li"},"path1/path2/myFolder/**/*"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"path_prefix")," = ",(0,n.kt)("inlineCode",{parentName:"li"},"path1/"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"path_pattern")," = ",(0,n.kt)("inlineCode",{parentName:"li"},"path2/myFolder/**/*.csv"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"path_prefix")," = ",(0,n.kt)("inlineCode",{parentName:"li"},"path1/path2/")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"path_pattern")," = ",(0,n.kt)("inlineCode",{parentName:"li"},"myFolder/**/*.csv")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"path_prefix")," = ",(0,n.kt)("inlineCode",{parentName:"li"},"path1/path2/myFolder/"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"path_pattern")," = ",(0,n.kt)("inlineCode",{parentName:"li"},"**/*.csv"),". This is the most efficient one because the directories are filtered earlier in the S3 API call. However, the difference in efficiency is usually negligible."))),(0,n.kt)("li",{parentName:"ul"},"The rationale of having both ",(0,n.kt)("inlineCode",{parentName:"li"},"path_prefix")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"path_pattern")," is to accommodate as many use cases as possible. If you found them confusing, feel free to ignore ",(0,n.kt)("inlineCode",{parentName:"li"},"path_prefix")," and just set the ",(0,n.kt)("inlineCode",{parentName:"li"},"path_pattern"),"."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"endpoint")," : optional parameter that allow using of non Amazon S3 compatible services. Leave it blank for using default Amazon serivce.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"use_ssl")," : Allows using custom servers that configured to use plain http. Ignored in case of using Amazon service.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"verify_ssl_cert")," : Skip ssl validity check in case of using custom servers with self signed certificates. Ignored in case of using Amazon service."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"File Format Settings")),(0,n.kt)("p",{parentName:"li"},"The Reader in charge of loading the file format is currently based on ",(0,n.kt)("a",{parentName:"p",href:"https://arrow.apache.org/docs/python/generated/pyarrow.csv.open_csv.html"},"PyArrow")," ","(","Apache Arrow",")",". "),(0,n.kt)("p",{parentName:"li"},"Note that all files within one stream must adhere to the same read options for every provided format."))),(0,n.kt)("h3",{id:"csv"},"CSV"),(0,n.kt)("p",null,"Since CSV files are effectively plain text, providing specific reader options is often required for correct parsing of the files. These settings are applied when a CSV is created or exported so please ensure that this process happens consistently over time."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"delimiter")," : Even though CSV is an acronymn for Comma Separated Values, it is used more generally as a term for flat file data that may or may not be comma separated. The delimiter field lets you specify which character acts as the separator.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"quote_char")," : In some cases, data values may contain instances of reserved characters ","(","like a comma, if that's the delimiter",")",". CSVs can allow this behaviour by wrapping a value in defined quote characters so that on read it can parse it correctly.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"escape_char")," : An escape character can be used to prefix a reserved character and allow correct parsing.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"encoding")," : Some data may use a different character set ","(","typically when different alphabets are involved",")",". See the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/codecs.html#standard-encodings"},"list of allowable encodings here"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"double_quote")," : Whether two quotes in a quoted CSV value denote a single quote in the data.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"newlines_in_values")," : Sometimes referred to as ",(0,n.kt)("inlineCode",{parentName:"p"},"multiline"),". In most cases, newline characters signal the end of a row in a CSV, however text data may contain newline characters within it. Setting this to True allows correct parsing in this case.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"block_size")," : This is the number of bytes to process in memory at a time while reading files. The default value here is usually fine but if your table is particularly wide ","(","lots of columns / data in fields is large",")"," then raising this might solve failures on detecting schema. Since this defines how much data to read into memory, raising this too high could cause Out Of Memory issues so use with caution.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"additional_reader_options")," : This allows for editing the less commonly required CSV ",(0,n.kt)("a",{parentName:"p",href:"https://arrow.apache.org/docs/python/generated/pyarrow.csv.ConvertOptions.html#pyarrow.csv.ConvertOptions"},"ConvertOptions"),". The value must be a valid JSON string, e.g.:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-text"},'{"timestamp_parsers": ["%m/%d/%Y %H:%M", "%Y/%m/%d %H:%M"], "strings_can_be_null": true, "null_values": ["NA", "NULL"]}\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"advanced_options")," : This allows for editing the less commonly required CSV ",(0,n.kt)("a",{parentName:"p",href:"https://arrow.apache.org/docs/python/generated/pyarrow.csv.ReadOptions.html#pyarrow.csv.ReadOptions"},"ReadOptions"),". The value must be a valid JSON string. One use case for this is when your CSV has no header, or you want to use custom column names, you can specify ",(0,n.kt)("inlineCode",{parentName:"p"},"column_names")," using this option."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-test"},'{"column_names": ["column1", "column2", "column3"]}\n')))),(0,n.kt)("h3",{id:"parquet"},"Parquet"),(0,n.kt)("p",null,"Apache Parquet file is a column-oriented data storage format of the Apache Hadoop ecosystem. It provides efficient data compression and encoding schemes with enhanced performance to handle complex data in bulk. For now, the solution involves iterating through individual files at the abstract level thus partitioned parquet datasets are unsupported. The following settings are available:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"buffer_size")," : If positive, perform read buffering when deserializing individual column chunks. Otherwise IO calls are unbuffered."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"columns")," : If not None, only these columns will be read from the file."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"batch_size")," : Maximum number of records per batch. Batches may be smaller if there aren\u2019t enough rows in the file.")),(0,n.kt)("p",null,"You can find details on ",(0,n.kt)("a",{parentName:"p",href:"https://arrow.apache.org/docs/python/generated/pyarrow.parquet.ParquetFile.html#pyarrow.parquet.ParquetFile.iter_batches"},"here"),"."),(0,n.kt)("h3",{id:"avro"},"Avro"),(0,n.kt)("p",null,"The avro parser uses ",(0,n.kt)("a",{parentName:"p",href:"https://fastavro.readthedocs.io/en/latest/"},"fastavro"),". Currently, no additional options are supported."),(0,n.kt)("h3",{id:"jsonl"},"Jsonl"),(0,n.kt)("p",null,"The Jsonl parser uses pyarrow hence,only the line-delimited JSON format is supported.For more detailed info, please refer to the ","[docs]"," (",(0,n.kt)("a",{parentName:"p",href:"https://arrow.apache.org/docs/python/generated/pyarrow.json.read_json.html"},"https://arrow.apache.org/docs/python/generated/pyarrow.json.read_json.html"),")"),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.26"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/19006"},"19006")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add virtual-hosted-style option")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.24"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18602"},"18602")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Wrap errors into AirbyteTracedException pointing to a problem file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.23"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-10"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17991"},"17991")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix pyarrow to JSON schema type conversion for arrays")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.23"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-10"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17800"},"17800")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Deleted ",(0,n.kt)("inlineCode",{parentName:"td"},"use_ssl")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"verify_ssl_cert")," flags and hardcoded to ",(0,n.kt)("inlineCode",{parentName:"td"},"True"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.22"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17304"},"17304")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Migrate to per-stream state")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.21"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-20"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16921"},"16921")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Upgrade pyarrow")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.20"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-12"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16607"},"16607")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix for reading jsonl files containing nested structures")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.19"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-13"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16631"},"16631")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Adjust column type to a broadest one when merging two or more json schemas")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.18"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-01"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14213"},"14213")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add support for jsonl format files.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.17"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-07-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14911"},"14911")),(0,n.kt)("td",{parentName:"tr",align:"left"},'"decimal" type added for parquet')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.16"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-07-13"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14669"},"14669")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed bug when extra columns apeared to be non-present in master schema")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.15"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-31"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12568"},"12568")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed possible case of files being missed during incremental syncs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.14"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-23"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11967"},"11967")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Increase unit test coverage up to 90%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.13"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-11"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12730"},"12730")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed empty options issue")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.12"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-11"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12602"},"12602")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added support for Avro file format")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.11"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12500"},"12500")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Improve input configuration copy")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8252"},"8252")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Refactoring of files' metadata")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9163"},"9163")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Work-around for web-UI, ",(0,n.kt)("inlineCode",{parentName:"td"},"backslash - t")," converts to ",(0,n.kt)("inlineCode",{parentName:"td"},"tab")," for ",(0,n.kt)("inlineCode",{parentName:"td"},"format.delimiter")," field.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7499"},"7499")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remove base-python dependencies")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-15"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6615"},"6615")," & ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7058"},"7058")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Memory and performance optimisation. Advanced options for CSV parsing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-24"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6398"},"6398")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Support custom non Amazon S3 services")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-08-13"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5305"},"5305")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Support of Parquet format")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-08-04"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5197"},"5197")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed bug where sync could hang indefinitely on schema inference")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-08-02"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5135"},"5135")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed bug in spec so it displays in UI correctly")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-07-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4990/commits/ff5f70662c5f84eabc03526cddfcc9d73c58c0f4"},"4990")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed documentation url in source definition")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-07-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4990"},"4990")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Created S3 source connector")))))}d.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),u=n,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return a?r.createElement(h,l(l({ref:t},m),{},{components:a})):r.createElement(h,l({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);