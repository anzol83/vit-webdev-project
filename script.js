function typeEffect(elementId, text, speed) {
  let i = 0;
  const element = document.getElementById(elementId);

  if (!element) return;  // Exit if the element is not found

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

window.onload = function() {
  // Typing effect for student1
  typeEffect("typingEffect", "Full-Stack Developer!", 150);

  // Typing effect for student2
  typeEffect("typewriter", "AI Enthusiast!", 150);
};
