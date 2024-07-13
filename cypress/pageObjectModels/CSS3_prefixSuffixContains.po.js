class CSSPrefixSuffix {


    url() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    prefix() {
        // syntax  : attribute_name^=value
        return cy.get('input[name^=usern]').type('cypress')
    }

    suffix() {

        /*
        every time when refresh web page, ending of attribute value is same

        id = jdfgjsdhname ( first time web page open)
        id = kbfskfbsname ( when refresh web page or second time open web page )

       at above, ending value of "id" attribute  is same, i.e., "name", remaining value is changing

        syntax   : attribute_name$=value
        example  :    id $=name

        */


        return cy.get('input[name$=word]').type('cypress')
    }

    contains() {
        // syntax  : attribute_name*=value
      
        return cy.get('input[name*="wor"]').clear().type("cypress")
    }
}
const ObjCSSPrefixSuffix = new CSSPrefixSuffix()
export default ObjCSSPrefixSuffix