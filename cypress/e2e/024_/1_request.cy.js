describe('request demo ', () => {

    it('1. first request API test', () => {

        cy.request('GET', 'https://reqres.in/api/users?page=2').then((response) => {


            // positive tests
            expect(response.status).to.equal(200)

            //   equal() means "undefined"
            //   not.equal()  means "not undefined"

            expect(response.body.page).to.equal(2)
            expect(response.body.per_page).to.equal(6)
            expect(response.body.total).to.equal(12)
            expect(response.body.data[0].id).to.equal(7)
            expect(response.body.data[0].email).to.equal('michael.lawson@reqres.in')
            expect(response.body.data[1].id).to.equal(8)
            expect(response.body.data[3].avatar).to.equal('https://reqres.in/img/faces/10-image.jpg')
            expect(response.body.support.url).to.equal('https://reqres.in/#support-heading')



            // negetive tests

            // can pass value with !, if only ! - Error raised
            expect(response.body.data[1].id).to.not.equal(!0)   // !0 or !"" means "true"
            expect(response.body.data[1].id).to.not.equal(!7)    // any value with ! means "false"

            // can pass any wrong value
            expect(response.body.data[1].id).to.not.equal(7)


            //   test result  :  pass,  "status" always returnes some value   ( some value  != "undefined" )
            expect(response.status).to.not.equal()

            //   test result :  error ,  "status" always returnes some value  ( some value  = "undefined")
            // expect(response.status).to.equal()
            
            
            //  test result :  pass,  not available property means "undefined"    (  "undefined" = "undefined"  )
            expect(response.body.data[3].avatddddddar).to.equal()
       
            
            // test result : Error, not available property means "undefined"   ( "undefined" !=  "true"  )
            // expect(response.body.data[3].avarar).to.equal(!'')
            



        })
    })
})


/*
=====================================================================================================================


for test case   : 1. first request API test

requested webpage      :      https://reqres.in/api/users?page=2

status    :   200    (if internet available)



body  : 


{
    "page": 2,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }
    ],
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
}
=====================================================================================================================
*/



