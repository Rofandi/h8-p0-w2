function xo(str) {
    let temp = 0;
    for(let i=0; i<str.length; i++)
    {
        if(str[i]==='x')
        {
            temp++
        }
        else if(str[i]==='o')
        {
            temp--
        }
    }
    if(temp===0)
    {
        return true
    }
    else return false
}
  
console.log(xo('xoxoxo'));
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));