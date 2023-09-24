

/*

importing files from different locations (Page Object Model): 
*************************************************************

project folder name  :  cypress_pro

 this script name & file location :
 "cypress\e2e\15_16_page_object_models\importFromDifferentLocations.cy.js"

 
 imported file locations:

 one.js    : cypress\e2e\15_16_page_object_models\one.js
 two.js    : cypress\e2e\15_16_page_object_models\POM\two.js
 three.js  : cypress\e2e\three.js
 four.js   : cypress\four.js
 five.js   : cypress\pageObjectModels\five.js
 six.js    : six.js (this file under main project folder, i.e., cypress_pro)
 
 */


import same_folder from "./one"

import sub_folder_POM from "./POM/two"

import e2e_folder from "../three"

import cypress_folder from "../../four"

import cypress_sub_folder from "../../pageObjectModels/five"

import project_folder from "../../../six"

