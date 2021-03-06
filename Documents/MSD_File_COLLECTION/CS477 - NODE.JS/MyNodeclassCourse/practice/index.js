

let x = [12, 12, 14, 1, 33, 20]
let y = [1, 2, 3, 4, 5, 6, 6, 7, 7]


// function even(x)
// {

//     return x % 2 == 0 ;
// }

// function odd(x) {
//     return  x % 2 != 0 ;
// }
// let result = x.filter(even);
// console.log(result);
// result = y.filter(odd);
//  console.log(result);

Array.prototype.even = function ()
{
    let newarray = []
    for (let i = 0; i < this.length; i++)
    {
        if (this[i] % 2 == 0)
        {
            newarray.push(this[i]);
            }
    }
    return newarray
}
Array.prototype.odd = function ()
{
    let newarray = []
    for (let i = 0; i < this.length; i++)
    {
        if (this[i] % 2 != 0)
        {
            newarray.push(this[i]);
            }
    }
    return newarray
}

let xx = x.even();
let xy=x.odd();

setImmediate(function (){console.log(xx +" even newarray")})//this pushhed to check que of of libuv
setTimeout(function () {console.log(xy+ " :odd only")}, 23)// this push to timer on libuv
console.log("done")
