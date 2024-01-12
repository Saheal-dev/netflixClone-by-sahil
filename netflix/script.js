
console.log("heloo")

document.getElementById('inputText').addEventListener('keyup', function(event) {
    // Check if the Enter key is pressed
    if (event.key === 'Enter') {
      // Get the input value
      var inputValue = this.value.toLowerCase();
  
      // Check if the input matches the desired string
      if (inputValue === 'who is developer') {
        // Open a new tab with the image
        window.open('assets/images/sahil-.png', '_blank');
      }
  
      // Clear the input field
      this.value = '';
    }
  });