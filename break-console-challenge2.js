function newFunc(){
    const arr = [1, 2, 3, 6, 7, 8, 9, 15, 22]
    // const arr = [1, 2, 7, 8, 22]
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    const multipleThree = arr.filter(function(num){
        return !(num % 3)
    })
    for (var i = 0; i<arr.length; i++){
        } if ((arr.length >= 1) && (i %3 == 0)){
            return multipleThree.reduce(reducer)
        } else if ((arr.length >= 1) && (i %3 !== 0)){
            return [arr.reduce(reducer), 'No elements are multiples of three.']
        } else if (arr.length <=0){
            return ('This array is empty')
        }
}
console.log(newFunc());