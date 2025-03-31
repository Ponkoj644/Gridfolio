// Card Animation and Interaction Effects
document.addEventListener("DOMContentLoaded", () => {
  // Card hover effects
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      // Add subtle scale and glow effect
      card.style.transform = "scale(1.02)";
      card.style.boxShadow = "0 8px 32px 0 rgba(31, 38, 135, 0.6)";
    });

    card.addEventListener("mouseleave", () => {
      // Reset to original state
      card.style.transform = "translateY(-5px)";
      card.style.boxShadow = "0 8px 32px 0 rgba(31, 38, 135, 0.37)";
    });
  });

  // Add smooth reveal animation on page load
  setTimeout(() => {
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 100);
    });
  }, 300);

  // Add interactive elements
  const headerCard = document.querySelector(".header-card");
  if (headerCard) {
    const greeting = headerCard.querySelector("h1");
    if (greeting) {
      greeting.style.transition = "all 0.3s ease";
      greeting.addEventListener("click", () => {
        greeting.style.transform = "scale(1.1)";
        setTimeout(() => {
          greeting.style.transform = "scale(1)";
        }, 200);
      });
    }
  }
});

// Progress Bar Animation
document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        setTimeout(() => {
            bar.style.width = width + '%';
        }, 200);
    });
});

// Testimonial Slider
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.testimonial-item');
    const dots = document.querySelectorAll('.nav-dot');
    let currentSlide = 0;

    // Show first slide
    items[0].classList.add('active');

    // Handle dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    function showSlide(index) {
        // Remove active class from current
        items[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');

        // Add active class to new
        currentSlide = index;
        items[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');

        // Move slider
        const slider = document.querySelector('.testimonial-items');
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Auto slide every 5 seconds
    setInterval(() => {
        let nextSlide = (currentSlide + 1) % items.length;
        showSlide(nextSlide);
    }, 5000);
});

console.log("Grid Folio");
