function Run(){
    let Val = ((document.getElementById("text").value).toLowerCase()).replace(/\s+/g, '');
    let Rev = (((document.getElementById("text").value).split('').reverse().join('')).toLowerCase()).replace(/\s+/g, '');
    let Print = document.getElementById("result");

    if(Val===Rev){
      Print.innerHTML = `Yes,It is Palindrome`;
    }else{
      Print.innerHTML = `No,It is not a Palindrome`;
    }
    }
