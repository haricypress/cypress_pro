// 5) calling same method with diff datatype parameters

class class_demo3 {

    //methods
    add(x,y) { // non-static method
        console.log('first value : ', x)  // taking "x" value as number
        console.log('second value : ' + y)  // taking "y" value as string. bcoz, "+" symbol used
        console.log('sum : ', + (x+y))  // by coersion, changing "y" value's datatype to Number then adding
    }

}

const obj = new class_demo3()  // const variable - value not changable , block-scope

obj.add(5 ,8) // calling non-static method
console.log('=============================')  // just for decoration

obj.add(5. ,8) 
console.log('=============================')

obj.add(5.0 ,8) 
console.log('=============================')

obj.add(5.1 ,8) 
console.log('=============================')

obj.add("5" ,8)
