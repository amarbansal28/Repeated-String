function repeatedString(s, n) {
    // Write your code here
    let c = (s.match(new RegExp("a", "g")) || []).length;
    let t1 = parseInt(n/s.length);
    let rem = n - s.length*t1;
    t1 = t1 * c;
    let str = s.split('');
    str.length = rem;
    for(let char in str){
        if(str[char] == 'a'){
            t1++;
        }
    }
    return t1;
}
repeatedString('aba',10)
// o/p -> 7
