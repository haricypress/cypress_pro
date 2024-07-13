
class CSSBasics {

    url() {
        cy.visit('https://register.rediff.com/register/register.php')
    }
    url2() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    //=============================================================================================================

    // 1) basic syntax - CSS
    CSSbasicSyntax() {
        // "input - tag name,  id - attibute name, reg_username   - "id" value"
        return cy.get('input[name="username"]').clear().type("cypress")

    }

    //=============================================================================================================

    andLogic() {
        // 3) username and password text boxes
        return cy.get('input[type="text"][maxlength="100"]').type('Admin')
    }
    //=============================================================================================================

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