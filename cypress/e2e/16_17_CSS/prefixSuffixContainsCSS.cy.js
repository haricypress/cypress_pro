import objCSSPrefixSuffix from "../../pageObjectModels/prefixSuffixContainsCSS.po"

describe('rediff', () => {

  it('rediff ', () => {
    objCSSPrefixSuffix.url()
    objCSSPrefixSuffix.prefix()
    objCSSPrefixSuffix.suffix()
    objCSSPrefixSuffix.contains()

  })

})