let input = document.querySelector('input');
 
 
button.addEventListener('click', () =>{
  if(input.value == ""){
     alert("Type eerst een numerieke leeftijd in!");
    } else if(isNaN(input.value) === true){
      alert("Type eerst een numerieke leeftijd in!");
    }  else if(input.value >= 0 && input.value < 18) {   
      alert("Jij bent niet volwassen");
    } else if(input.value >=18 && input.value < 40) {
      alert("Jij bent volwassen");
    } else if(input.value >= 40 && input.value <= 50){
      alert("Jij bent tussen 40/50");
    } else if(input.value > 50){
      alert("Jij bent 51+");
    }
                
});