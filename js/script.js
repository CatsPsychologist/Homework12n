// Реализовать рекурсивную функцию которая находит факториал переданного в нее числа
//
// getFactorial(3) // в данном случае должна вернуть факториал числа 3! = 3 * 2 * 1

function getFactorial(num){

    if(num === 1){
        return 1
    }

    return num * getFactorial(num - 1)

}

console.log(getFactorial(3));
console.log(getFactorial(8));

// Реализовать рекурсивную функцию которая находит возводит число в степень.
//     Число которое нужно возвести в степень передается как первый аргумент в функцию
// Степень передается как второй аргумент в функцию

function pow(num,degree){

    if (degree === 1){
        return num
    }

    // if (degree === 0){
    //     return 1
    // }

    return num * pow(num, degree - 1)


}

console.log(pow(2, 3));





