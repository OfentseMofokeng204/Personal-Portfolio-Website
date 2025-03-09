document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            event.preventDefault(); // Stops form submission
        } else if (!email.includes('@')) {
            alert('Please enter a valid email address.');
            event.preventDefault();
        } else {
            alert('Message sent successfully!');
        }
    });
});

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Interactive Portfolio Filter
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.dataset.filter;
      projects.forEach(project => {
        if (project.classList.contains(filter) || filter === 'all') {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      });
    });
  });

  // Form Validation
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function(e) {
    const email = document.getElementById('email');
    if (!email.value.includes('@')) {
      alert('Please enter a valid email address.');
      e.preventDefault();
    }
  });

  // Scroll Animations (using AOS)
  AOS.init({
    offset: 200,  
    duration: 1000  
  });

  // Dark Mode Toggle
  const toggleButton = document.getElementById('toggle-theme');
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  // Dynamic Date/Time
  const dateElement = document.getElementById('current-date');
  const currentDate = new Date();
  dateElement.textContent = currentDate.toLocaleDateString();

  // Image Slideshow/Carousel
  let currentIndex = 0;
  const images = document.querySelectorAll('.carousel-image');

  function showImage(index) {
    images.forEach((img, i) => {
      img.style.display = i === index ? 'block' : 'none';
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  setInterval(nextImage, 3000); // Change image every 3 seconds

  // Progress Bar for Page Load
  window.addEventListener('load', () => {
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = '100%';
    setTimeout(() => progressBar.style.display = 'none', 500);
  });

  // Typing Animation (for introduction)
  const textElement = document.getElementById('intro-text');
  const textToType = 'Welcome to my Portfolio!';
  let index = 0;

  function typeText() {
    if (index < textToType.length) {
      textElement.textContent += textToType.charAt(index);
      index++;
      setTimeout(typeText, 100);
    }
  }
document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    console.log("Dark mode button clicked");
});
document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
const toggle = document.getElementById("dark-mode-toggle");
const body = document.body;

// Check localStorage
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
}

toggle.addEventListener("click", function() {
    body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", body.classList.contains("dark-mode") ? "enabled" : "disabled");
});

// animatypeText(); // Start the typing animation

});
