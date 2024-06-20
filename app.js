

function palindrome(){
    var userInput = prompt("Enter a palindrome word");

    var palindrome = userInput.split("").reverse().join("")
    
    if(userInput == palindrome){
        Swal.fire({
          
            title:"Palindrome",
             icon: "success"
           });
    }else{
        Swal.fire({
          
            title:"Not a Palindrome",
             icon: "error"
           });
   
    }
}


   





