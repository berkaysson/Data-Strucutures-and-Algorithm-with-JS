function accum(s) {
	let arr = s.split("");
    let str = "";
    for(let i = 0; i < arr.length; i++){
        for(let j = 0 ; j <= i ; j++) {
            if(j===0) str += arr[i].toUpperCase()
            else str += arr[i].toLowerCase()
        }   
        str += "-"
    }
    return str.substring(0, str.length - 1);
}
console.log(accum("HbideVbxncC"));