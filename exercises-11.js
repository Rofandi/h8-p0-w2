function balikKata(kata) {
    let temp = ''
    for(let i=kata.length-1; i>=0; i--)
    {
        temp += kata[i]
    }
    return temp
}
  
console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));