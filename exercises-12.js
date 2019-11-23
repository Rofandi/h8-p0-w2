function konversiMenit(menit) {
    if(menit%60 < 10)
    {
        return Math.floor(menit/60) + ':0' + menit%60    
    }
    else return Math.floor(menit/60) + ':' + menit%60    
}

console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(120));