/*
**************** JAVASCRIPT EXECUTION CONTEXT****************
*/
let val1 = 10
let val2 = 5

function addNum(num1, num2) {
    let total = num1+num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10,2)

/*
STEP1: global execution -> this

STEP2: creation phase -> variables are stored
        val1 -> undefined
        val2 -> undefined
        addNum -> defination of function
        result1 -> undefined
        result2 -> undefined

STEP3: execution phase 
        val1 -> 10
        val2 -> 5

        **** function is not executed ****
        **** move to line no 11 ****
        **** line 11 calls addNum and creates another execution context ****
        
        addNum -------------->  new variable environment + exection thread
                                1.) memory phase
                                    val1 -> undefined
                                    val2 -> undefined
                                    total -> undefined

                                2.) excution phase
                                    num1 -> 10
                                    num2 -> 5
                                    total -> 15
                                    returns total to global execution context

                                deleted new variable environment

        result1 -> 15

        again a new vaiable environment + exection thread (same as above with different value)
        
        result2 -> 12
*/
                   