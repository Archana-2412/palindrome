var num;
var res=0;
function palindrome(){
    num=parseInt(document.getElementById('palin').value);
    var copynum=num;
    while(num!=0){
        res=(res*10)+(num%10);
        num=parseInt(num/10);
    }
    if (copynum==res) {
        console.log('given number is palindrome')
        document.getElementById('result').innerHTML='palindrome number';
        
    } else {
        console.log('given number is not palindrome')
        document.getElementById('result').innerHTML=' not palindrome number'; 
    }
        
    return false
}