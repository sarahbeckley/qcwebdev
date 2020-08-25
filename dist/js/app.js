// TypeWriter class
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // current index of words
    const current = this.wordIndex % this.words.length;
    // Get fullTxt of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove character
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add character
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert text into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span> `;

    // Initial type speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set isDeleting to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Change to next word
      this.wordIndex++;
      // Pause before starting to type
      typeSpeed = 500;
    }
    setTimeout(() => this.type(), typeSpeed);
  }
}

// init on dom load
document.addEventListener("DOMContentLoaded", init);

// Get constructor class/id names
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  // Initialize new TypeWriter
  new TypeWriter(txtElement, words, wait);
}

// clear inputs after submit button is clicked
document.querySelector(".btn-contact").addEventListener("click", clearInput);

function clearInput(e) {
  document.querySelector("#name").value = "none";
  document.querySelector("#phone").value = "none";
  document.querySelector("#subject").value = "none";
  document.querySelector("#email").value = "none";
  document.querySelector("#message").value = "none";
}
