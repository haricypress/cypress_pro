
var xlsx = require('xlsx')  // loading external plugin, "xlsx"

var fs = require('fs')  // loading cypress built-in plugin, "fs"

var Excel_file = xlsx.readFile('cypress/fixtures/Book.xlsx') // loading Excel file
var Excel_sheet = Excel_file.Sheets['Sheet1'] // "sheet1" must be same as of excel file sheet
var user_data = xlsx.utils.sheet_to_json(Excel_sheet)


// //or can use above 3 statements as below
// var Excel_file_sheet = xlsx.readFile('cypress/fixtures/Book.xlsx').Sheets['Sheet1']  // "sheet1" must be same as of excel file sheet
// var user_data = xlsx.utils.sheet_to_json(Excel_file_sheet)



console.log(user_data) //data in excel file sheet is displaying in CMD terminal


fs.writeFile('cypress/fixtures/output/jobTitleDetails.json', JSON.stringify(user_data), err => {
    if (err) {
    console.log(err)
    return
  }
})



/*
====================================================================================
before run this script, need to create folder structure like below   :

          cypress/fixtures/

          bcoz, "fs" can't create folders but files.

run this "js" script with below CMD command  :  

          node 'cypress\e2e\023_\4_excelToJson.js'


          here,   cypress\e2e\023_     is location and  ( "023_"  is also folder name )

                  4_excelToJson.js     is file name ( ".js"   is extension )

====================================================================================
*/

