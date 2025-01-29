// Type effect for student1
// Array of texts to type sequentially
const texts = [
    "Full-Stack Developer!",
  ];
  let textIndex = 0;
  let charIndex = 0;
  
  function typeEffect() {
    if (textIndex < texts.length) {
      // Get the current text
      const currentText = texts[textIndex];
      
      // Add characters one by one
      if (charIndex < currentText.length) {
        document.getElementById("typingEffect").innerHTML += currentText.charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
      } else {
    
        textIndex++;
        charIndex = 0;
        setTimeout(typeEffect, 1000);
      }
    }
  }
  
  // Type effect for student2
  // Start typing effect on page load
  window.onload = typeEffect;

  function typeEffect(id, text, speed = 100, i = 0) {
    if (i < text.length) {
      document.getElementById(id).textContent += text[i];
      setTimeout(() => typeEffect(id, text, speed, i + 1), speed);
    }
  }
  
  // JavaScript:
  typeEffect("typewriter", "AI Enthusiast!", 150);
  