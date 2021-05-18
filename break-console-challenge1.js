let d1 = new Date(2021, 05, 16)
let d2 = new Date(2021, 05, 15)
let msPerSec = 1000
let secPerMin = 60

function dateFunction(d1, d2){
    if (d1 instanceof Date && d2 instanceof Date){
        let minutes1 = d1.getTime() / msPerSec / secPerMin
        let minutes2 = d2.getTime() / msPerSec / secPerMin
        return Math.abs(minutes1 - minutes2)
    } else {
        return "this is not a date"
    }
}
console.log(dateFunction(d1, d2));


