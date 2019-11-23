console.log('------------------------------------SOAL 1--------------------------------------------')

var Text1 = 'I love coding'
var Text2 = 'I will become fullstack developer'
let max1 = 20
let min1 = 2

console.log('LOOPING PERTAMA')
while(min1 <= 20)
{
    console.log(`${min1} - ${Text1}`)
    min1 += 2
}

console.log('LOOPING KEDUA')
while(max1 >= 2)
{
    console.log(`${max1} - ${Text2}`)
    max1 -= 2
}

console.log('------------------------------------SOAL 2--------------------------------------------')

console.log('LOOPING PERTAMA')
for(let i=1; i<=20; i++)
{
    console.log(`${i} - ${Text1}`)
}

console.log('LOOPING PERTAMA')
for(let i=20 ; i>=1 ; i--)
{
    console.log(`${i} - ${Text2}`)
}

console.log('------------------------------------SOAL 3 PART 1--------------------------------------------')
for(let i=1; i<=100; i++)
{
    console.log(`counter sekarang = ${i},`)
    if(i%2===0)
    {
        console.log('"GENAP"')
    }
    else console.log('"GANJIL"')
}

console.log('------------------------------------SOAL 3 PART 2 PART 1--------------------------------------------')
for(let i=2; i<=100; i+=2)
{
    if(i%3===0)
    {
        console.log(`counter sekarang = ${i},`)
        console.log(`${i} kelipatan 3`)
    }
}

console.log('------------------------------------SOAL 3 PART 2 PART 2--------------------------------------------')
for(let i=5; i<=100; i+=5)
{
    if(i%6===0)
    {
        console.log(`counter sekarang = ${i},`)
        console.log(`${i} kelipatan 6`)
    }
}


console.log('------------------------------------SOAL 3 PART 2 PART 3--------------------------------------------')
for(let i=9; i<=100; i+=9)
{
    if(i%10===0)
    {
        console.log(`counter sekarang = ${i},`)
        console.log(`${i} kelipatan 10`)
    }
}