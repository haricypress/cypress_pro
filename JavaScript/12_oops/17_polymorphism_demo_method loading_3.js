// 17)  polymorphism demo - 3, method over loading - some methods with same name


class A{
    a = 'class A - variable a'

    show(x){
        console.log('1 :class A - show method')
        console.log(x)
    }

    show(x,y){
        console.log('2: class A - show method - sum')
        console.log(x)
        console.log(y)
        console.log('sum :', x + y)
    }

    show(x,y){
        console.log('3: class A - show method - sub')
        console.log(x)
        console.log(y)
        console.log('sub :', x - y)
    }

    
    show(x,y,z){  
        console.log('4: class A - show method - cube')
        console.log(x) 
        console.log(y)
        console.log(z)
        console.log('cube :', (x * y * z))
    }

}

const a_obj = new A()  // class A object creating

console.log(a_obj.a) 

a_obj.show(10) 
a_obj.show(10,20) 
a_obj.show(20,30) 
a_obj.show(10,20,30) 
a_obj.show("hari",20,30)  


// output :

// class A - variable a
// 4: class A - show method - cube
// 10
// undefined
// undefined
// cube : NaN
// 4: class A - show method - cube
// 10
// 20
// undefined
// cube : NaN
// 4: class A - show method - cube
// 20
// 30
// undefined
// cube : NaN
// 4: class A - show method - cube
// 10
// 20
// 30
// cube : 6000
// 4: class A - show method - cube
// hari
// 20
// 30
// cube : NaN
