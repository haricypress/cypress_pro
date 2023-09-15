class xpathDashBoardPage {

    displayDashBoardText() {
        return "Dashboard"
    }
    displaySearch() {
        return cy.xpath('//input[@placeholder="Search"] or //input[@class="oxd-input oxd-input--active"]')
    }

    searchIndex() {
        
        // syntax : (expression)[1]  or (expression)[2]   or  (expression)[last()]

        return cy.xpath('(//input[@class="oxd-input oxd-input--active"])[1]').type('admin')
        // return cy.xpath('(//input[@class="oxd-input oxd-input--active"])[last()]').type('pim')

    }
    parentToChildNode() {

        // syntax  :  (expression)/child node
        
        cy.xpath('(//span[@class="oxd-topbar-body-nav-tab-item"])[2]').click()
        return cy.xpath('(//ul[@class="oxd-dropdown-menu"])[1]/li[1]').click()
    }
    childToParent(){
        
        //   syntax  :  (expression)/..
        
        cy.contains('Admin').click()
        cy.xpath('//div[@class="oxd-main-menu --fixed"]/..')
    }

}
const objXpathDashBoardPage = new xpathDashBoardPage()
export default objXpathDashBoardPage


/*

getting locator of "name" with "c" locator :

<tr>
<td>a</td>
<td>b</td><input name = "name"></input>
<td>c</td>
<td>d</td>
<td>e</td>


        xpath steps                      locator of 

step 1) //td[text()='c']                  -   c
step 2) //td[text()='c']/..               -   <tr>
step 3) //td[text()='c']/..td[2]          -   b
step 4) //td[text()='c']/..td[2]/input    -   name

*/