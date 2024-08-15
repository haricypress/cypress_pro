describe("fixtures", () => {

    var student = [
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

    student.forEach(files => {

        describe(files.filename, () => {
            it("fixture data driven testing", () => {

                cy.fixture(files.filename).then(testdata => {
                    cy.log(testdata.username)
                    cy.log(testdata.password)
                })
            })
        })
    })

})