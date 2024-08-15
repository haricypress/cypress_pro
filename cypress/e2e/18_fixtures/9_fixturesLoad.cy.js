
describe("fixtures", () => {

var environments = [
    {
        "filename": "devEnv.json",
        "description": "development environment credentials"

    },
    {
        "filename": "preProd.json",
        "description": "pre-production environment credentials"

    },
    {
        "filename": "tesingEnv.json",
        "description": "testing environment credentials"
    }
]


it("fixture data driven testing", () => {

    environments.forEach(files => {

        cy.log(files.filename, files.description)
        
        cy.fixture(files.filename).then(testdata => {
        
            cy.log(testdata.username)
            cy.log(testdata.password)

        })

    })
})
})