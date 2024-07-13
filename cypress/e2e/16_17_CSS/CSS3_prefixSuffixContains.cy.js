import objCSSPrefixSuffix from "../../pageObjectModels/CSS3_prefixSuffixContains.po"

describe('rediff', () => {

  it('rediff ', () => {
    objCSSPrefixSuffix.url()
    objCSSPrefixSuffix.prefix()
    objCSSPrefixSuffix.suffix()
    cy.wait(5000)
    objCSSPrefixSuffix.contains()

  })

})