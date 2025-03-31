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
    const slider = document.querySelector('.testimonial-items');
    const items = document.querySelectorAll('.testimonial-item');
    const dots = document.querySelectorAll('.nav-dot');
    let currentSlide = 0;
    let startX, moveX;
    let isDragging = false;
    let autoSlideInterval;

    // Mouse events
    slider.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        slider.style.cursor = 'grabbing';
        clearInterval(autoSlideInterval);
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        moveX = e.clientX;
        const diff = moveX - startX;
        slider.style.transform = `translateX(calc(-${currentSlide * 100}% + ${diff}px))`;
        e.preventDefault();
    });

    slider.addEventListener('mouseup', handleDragEnd);
    slider.addEventListener('mouseleave', handleDragEnd);

    // Touch events
    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        clearInterval(autoSlideInterval);
    });

    slider.addEventListener('touchmove', (e) => {
        if (!startX) return;
        moveX = e.touches[0].clientX;
        const diff = moveX - startX;
        slider.style.transform = `translateX(calc(-${currentSlide * 100}% + ${diff}px))`;
        e.preventDefault();
    });

    slider.addEventListener('touchend', handleDragEnd);

    function handleDragEnd() {
        if (!startX || !moveX) return;
        
        const diff = moveX - startX;
        const threshold = window.innerWidth * 0.2;

        if (Math.abs(diff) > threshold) {
            if (diff > 0 && currentSlide > 0) {
                showSlide(currentSlide - 1);
            } else if (diff < 0 && currentSlide < items.length - 1) {
                showSlide(currentSlide + 1);
            } else {
                showSlide(currentSlide);
            }
        } else {
            showSlide(currentSlide);
        }

        startX = null;
        moveX = null;
        isDragging = false;
        slider.style.cursor = 'grab';
        startAutoSlide();
    }

    // Show first slide
    items[0].classList.add('active');
    slider.style.cursor = 'grab';

    // Handle dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            clearInterval(autoSlideInterval);
            startAutoSlide();
        });
    });

    function showSlide(index) {
        items[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');

        currentSlide = index;
        items[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');

        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            let nextSlide = (currentSlide + 1) % items.length;
            showSlide(nextSlide);
        }, 5000);
    }

    // Start auto-sliding
    startAutoSlide();
});

console.log("Grid Folio");
