// Initialize AOS
AOS.init({
    duration: 800,
    once: true
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

// Add active class to nav items on scroll
window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    document.querySelectorAll('section').forEach(section => {
        if (section.offsetTop <= scrollPosition + 200) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === section.getAttribute('id')) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Color animation controller
const colorAnimator = {
    colors: ['#FFC000', '#FFC100', '#FDC100', '#FEC100', '#FFC001'],
    currentIndex: 0,

    // Initialize animations
    init() {
        this.setupTextAnimations();
        this.setupCardAnimations();
        this.setupCounterAnimations();
        this.setupScrollEffects();
    },

    // Animate text elements
    setupTextAnimations() {
        const headings = document.querySelectorAll('h1, h2, h3, .display-4, .lead');
        headings.forEach(heading => {
            if (!heading.classList.contains('no-animate')) {
                heading.classList.add('animated-text');
            }
        });
    },

    // Animate cards
    setupCardAnimations() {
        const cards = document.querySelectorAll('.content-card, .feature-card, .step-card, .stat-card');
        cards.forEach(card => {
            card.classList.add('animated-card', 'animated-border');
        });
    },

    // Animate counters with golden colors
    setupCounterAnimations() {
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const target = parseInt(counter.innerText);
            let current = 0;
            const increment = target / 50;
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.innerText = Math.ceil(current).toLocaleString();
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target.toLocaleString();
                }
            };
            
            // Start animation when element is in view
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCounter();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(counter);
        });
    },

    // Add scroll-based animations
    setupScrollEffects() {
        const animatedElements = document.querySelectorAll('.animated-bg');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'all 0.5s ease';
            observer.observe(element);
        });
    },

    // Helper function to get next color in sequence
    getNextColor() {
        this.currentIndex = (this.currentIndex + 1) % this.colors.length;
        return this.colors[this.currentIndex];
    }
};

// Initialize animations when document is ready
document.addEventListener('DOMContentLoaded', () => {
    colorAnimator.init();
    
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn-custom');
    buttons.forEach(button => {
        button.classList.add('hover-golden');
    });
    
    // Add animated backgrounds to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (!section.classList.contains('no-animate')) {
            section.classList.add('animated-bg');
        }
    });
});



    var ctx = document.getElementById('growthChart').getContext('2d');
    var growthChart = new Chart(ctx, {
        type: 'line', // You can use 'line' chart for a more smooth and growing look
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Example months
            datasets: [{
                label: 'Growth Over Time',
                data: [10, 30, 50, 80, 120, 180], // Example data growing from low to high
                backgroundColor: 'rgba(40, 167, 69, 0.2)', // Light green for growth
                borderColor: 'rgba(40, 167, 69, 1)', // Dark green for the border
                borderWidth: 2,
                fill: true,
                tension: 0.4 // Smooth line effect
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 20, // Adjust tick step size as per your data range
                    }
                }
            }
        }
});


    // When the button is clicked, the PDF will automatically start downloading
    document.getElementById("download-btn").addEventListener("click", function() {
        const pdfLink = "https://drive.google.com/file/d/1kMOY-7raQ7slrkrloyU4KmZSSCLBMVZd/view?usp=sharing"; // Replace with your PDF link
        const link = document.createElement("a");
        link.href = pdfLink;
        link.download = "5billion_full_plan.pdf"; // Name of the file after download
        link.click(); // Simulate a click to start the download
    });

    
