console.log('------------------------------------SOAL 1--------------------------------------------')
var rows1 = 5

for(let i=1; i<=rows1; i++)
{
    console.log('*')
}

console.log('------------------------------------SOAL 2--------------------------------------------')
var rows2 = 5
var temp = ''

for(let i=1; i<=rows2; i++)
{
    for(let j=1; j<=rows2; j++)
    {
        temp += '*'
    }
    temp +='\n'
}
console.log(`${temp}`)

console.log('------------------------------------SOAL 3--------------------------------------------')
var rows3 = 5
var temp2 = ''

for(let i=1; i<=rows3; i++)
{
    for(let j=1; j<=rows3; j++)
    {
        temp2 += '*'
        if(j===i)
        {
            break
        }
    }
    console.log(`${temp2}`)
    temp2=''
}