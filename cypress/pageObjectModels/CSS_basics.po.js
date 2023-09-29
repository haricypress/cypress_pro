
class CSSBasics {

    url() {
        cy.visit('https://shop.demoqa.com/my-account/')
    }
    url2() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    //=============================================================================================================

    // 1) basic syntax - CSS
    CSSbasicSyntax() {
        // "input - tag name,  id - attibute name, reg_username   - "id" value"
        return cy.get('input[id="reg_username"]').clear().type("cypress")

    }
    //=============================================================================================================
    // 2) text search is not available in CSS, "contains()" using, it is cypress command
    //    works for full and partial text

    CSSText() {
        // not possible in CSS, contains() - cypress method, using for this
        return cy.contains("Username")

    }
    //=============================================================================================================

    andLogic() {
        // 3) username and password text boxes
        return cy.get('input[name="username"][id="reg_username"]').type('Admin')
    }
    //=============================================================================================================

    IDAttribute() {
        // 4) #ID_name atribute using to find element
        return cy.get('input[id="reg_username"]').type('cypress')
    }

    singleClassValuedAttribue() {

        // 5) .class using, if any element has class tag in node
        return cy.get('.height-fixed')
    }

    multipleClassValuedAttribute() {
        // 6) .classvalue1.clasvalue2.classvalue3, if any element has multiple values in "class" attribute

        // Note: search in DOM can find string, selector and xpath,
        //       if search for "class" , it will search "class" in attribue as well as in string, selector, xpath

        return cy.get(".navbar.navbar-default")

    }
    parentTochild() {
        // syntax  :  parent_node  > child_node > sub_child_node  (or) tag_name
        return cy.get('div[class="oxd-form-row"] > div>div>input').first().type('admin')

    }
    childToParent() {
        // not possible in CSS, parent() - cypress method using for this
        return cy.get('div[class="orangehrm-login-form"]').parent()
    }
    siblingNode() {
        // syntax    :  current node + sibling node
        
        // Here, current node  : i[class="oxd-icon bi-person oxd-input-group__label-icon"]
        // sibling node        :  label

        return cy.get('i[class="oxd-icon bi-person oxd-input-group__label-icon"]+label')
    }
}


const objCSSBasics = new CSSBasics()
export default objCSSBasics