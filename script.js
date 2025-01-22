const texts = ["Hello and welcome!", "Welcome to the site!"];
let index = 0;

// Function to change the text
function changeText() {
  const textDisplay = document.getElementById('textDisplay');
  textDisplay.textContent = texts[index]; // Update the text
  index = (index + 1) % texts.length; // Loop back to start
}

// Run the changeText function every 2 seconds
setInterval(changeText, 3000);


const text1 = ["Full-Stack Developer", "Java Developer"];
let index1 = 0;

// Function to change the text
function changeText1() {
     const textDisplay1 = document.getElementById('textDisplay1');
     textDisplay1.textContent = text1[index1]; // Update the text
     index1 = (index1 + 1) % text1.length; // Loop back to start
   }
   
   // Run the changeText function every 2 seconds
   setInterval(changeText1, 2000);



  


   
   