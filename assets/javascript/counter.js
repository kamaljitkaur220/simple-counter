// The best-practice is to pull all the elements into variables, in order to avoid
// searching the HTML tree for these elements more than once:
let incrementButton = document.querySelector("#increment"); 
let decrementButton = document.querySelector("#decrement"); 
let counter = document.querySelector("#counter"); 




  
incrementButton.addEventListener("click", function() {
    console.log("+ button clicked");
    // Calculate the new value for our counter:
    let newCounterValue = Number(counter.innerHTML) + 1;

    // If the counter is >= 10 then change the text color to red:
  if(newCounterValue >= 10) {         // WHAT IS THIS? Check out "IF Statements" in the Useful Resources section.
  counter.style.color = "red";
}
    counter.innerHTML = newCounterValue;
})



// This is the "event listener" for clicking the button.
// Use the console.log function to display some text in the console when the button is clicked:
decrementButton.addEventListener("click", function() {
    console.log("- button clicked");

    let newCounterValue = Number(counter.innerHTML) - 1;
    if(newCounterValue < 10){
        counter.style.color = "black";
      }
    if (counter.innerHTML > 0) {
        counter.innerHTML = newCounterValue;
      }
     // Update the counter in the HTML tree:
  counter.innerHTML = newCounterValue;
  })