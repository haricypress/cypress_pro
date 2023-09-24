
Feature : verifying orangeHRM
    verifying  orangeHRM

scenario: verifying add employee

Given user launch application
when user enter usernam as "Admin"
when user enter password as "admin123"
and user click on login button
then user should navigate to dashboard page
when user click on PIM menu
and user click on add employee
and user enter firstname as "hari"
and user enter lastname as "kishore"
and user click on save button
then user should get successfull message



scenario: verifying add employee mandatory details

Given user launch application
when user enter usernam as "Admin"
when user enter password as "admin123"
and user click on login button
then user should navigate to dashboard page
when user click on PIM menu
and user click on add employee
and user click on save button
then user should get Error message