// ===================================
// Apple-Inspired Website JavaScript
// ===================================

// ===================================
// Color Theme System - 20 Beautiful Themes
// ===================================

const colorThemes = [
    {
        name: 'Warm Amber',
        primary: '#FF8A4C',
        primaryHover: '#FF9D66',
        primaryLight: '#FFF0E5',
        primaryDark: '#E67339',
        secondary: '#FFB380',
        accent: '#FF6B35'
    },
    {
        name: 'Coral Sunset',
        primary: '#FF7A59',
        primaryHover: '#FF8B6D',
        primaryLight: '#FFEBE5',
        primaryDark: '#E66847',
        secondary: '#FFB399',
        accent: '#FF9573'
    },
    {
        name: 'Golden Honey',
        primary: '#F59E0B',
        primaryHover: '#FBBF24',
        primaryLight: '#FEF3C7',
        primaryDark: '#D97706',
        secondary: '#FCD34D',
        accent: '#F59E0B'
    },
    {
        name: 'Peach Blossom',
        primary: '#FFAB91',
        primaryHover: '#FFBCA5',
        primaryLight: '#FFE8E0',
        primaryDark: '#FF8A65',
        secondary: '#FFCCBC',
        accent: '#FF7043'
    },
    {
        name: 'Terracotta',
        primary: '#E07856',
        primaryHover: '#E68B6A',
        primaryLight: '#FFEEE8',
        primaryDark: '#CC6644',
        secondary: '#F0A68F',
        accent: '#D96B4C'
    },
    {
        name: 'Apricot Dream',
        primary: '#FFAB73',
        primaryHover: '#FFBD8A',
        primaryLight: '#FFF0E5',
        primaryDark: '#FF9A5C',
        secondary: '#FFCCA3',
        accent: '#FF8F52'
    },
    {
        name: 'Burnt Sienna',
        primary: '#E97451',
        primaryHover: '#ED8766',
        primaryLight: '#FFEAE3',
        primaryDark: '#D6623F',
        secondary: '#F5A68C',
        accent: '#E25C3D'
    },
    {
        name: 'Tangerine',
        primary: '#FF9966',
        primaryHover: '#FFAA7A',
        primaryLight: '#FFF2E8',
        primaryDark: '#FF8852',
        secondary: '#FFBB99',
        accent: '#FF7744'
    },
    {
        name: 'Papaya',
        primary: '#FFAA66',
        primaryHover: '#FFBB7A',
        primaryLight: '#FFF5EB',
        primaryDark: '#FF9952',
        secondary: '#FFCC99',
        accent: '#FF8844'
    },
    {
        name: 'Mango Tango',
        primary: '#FFB347',
        primaryHover: '#FFC266',
        primaryLight: '#FFF8EB',
        primaryDark: '#FFA533',
        secondary: '#FFD699',
        accent: '#FF9E1F'
    },
    {
        name: 'Butterscotch',
        primary: '#FFAA66',
        primaryHover: '#FFBB7A',
        primaryLight: '#FFF5EB',
        primaryDark: '#FF9952',
        secondary: '#FFCC99',
        accent: '#FF8844'
    },
    {
        name: 'Cantaloupe',
        primary: '#FFAA7F',
        primaryHover: '#FFBB92',
        primaryLight: '#FFF3EB',
        primaryDark: '#FF996B',
        secondary: '#FFCCB3',
        accent: '#FF8855'
    },
    {
        name: 'Papaya Whip',
        primary: '#FFB380',
        primaryHover: '#FFC299',
        primaryLight: '#FFF5EB',
        primaryDark: '#FFA366',
        secondary: '#FFD6B8',
        accent: '#FF9A5C'
    },
    {
        name: 'Peach Melba',
        primary: '#FFAD7A',
        primaryHover: '#FFBE8E',
        primaryLight: '#FFF2E8',
        primaryDark: '#FF9C66',
        secondary: '#FFCFAD',
        accent: '#FF8B52'
    },
    {
        name: 'Apricot Nectar',
        primary: '#FFAA73',
        primaryHover: '#FFBB87',
        primaryLight: '#FFF0E5',
        primaryDark: '#FF995F',
        secondary: '#FFCCA3',
        accent: '#FF884B'
    },
    {
        name: 'Salmon Pink',
        primary: '#FF9980',
        primaryHover: '#FFAA94',
        primaryLight: '#FFF0EB',
        primaryDark: '#FF886B',
        secondary: '#FFBBA8',
        accent: '#FF7755'
    },
    {
        name: 'Caramel',
        primary: '#D4915E',
        primaryHover: '#DDA372',
        primaryLight: '#F9EDE3',
        primaryDark: '#C17F4A',
        secondary: '#E8B890',
        accent: '#C77D46'
    },
    {
        name: 'Copper Glow',
        primary: '#D4915E',
        primaryHover: '#DDA372',
        primaryLight: '#F9EDE3',
        primaryDark: '#C17F4A',
        secondary: '#E8B890',
        accent: '#C77D46'
    },
    {
        name: 'Sandstone',
        primary: '#E6A87C',
        primaryHover: '#EDB890',
        primaryLight: '#FBF0E6',
        primaryDark: '#D99768',
        secondary: '#F2C9A8',
        accent: '#DF9660'
    },
    {
        name: 'Autumn Spice',
        primary: '#E89B6D',
        primaryHover: '#EDAC81',
        primaryLight: '#FBEEE3',
        primaryDark: '#DD8A59',
        secondary: '#F3BFA0',
        accent: '#E18855'
    }
];

// Select and apply random theme on page load
function applyRandomTheme() {
    const randomIndex = Math.floor(Math.random() * colorThemes.length);
    const theme = colorThemes[randomIndex];
    
    console.log(`%c🎨 Applied Theme: ${theme.name}`, 'font-size: 14px; font-weight: bold; color: ' + theme.primary);
    
    // Create CSS custom properties
    const themeCSS = `
        :root {
            --theme-primary: ${theme.primary};
            --theme-primary-hover: ${theme.primaryHover};
            --theme-primary-light: ${theme.primaryLight};
            --theme-primary-dark: ${theme.primaryDark};
            --theme-secondary: ${theme.secondary};
            --theme-accent: ${theme.accent};
        }
        
        /* Apply theme colors to elements */
        .apple-button,
        .apple-button-large {
            background: ${theme.primary} !important;
        }
        
        .apple-button:hover,
        .apple-button-large:hover {
            background: ${theme.primaryHover} !important;
        }
        
        .apple-button-secondary-large {
            color: ${theme.primary} !important;
            border-color: ${theme.primary} !important;
        }
        
        .apple-button-secondary-large:hover {
            background: ${theme.primary} !important;
        }
        
        .apple-gradient-text {
            background: linear-gradient(90deg, ${theme.primary} 0%, ${theme.secondary} 100%) !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            background-clip: text !important;
        }
        
        .apple-link-arrow {
            color: ${theme.primary} !important;
        }
        
        .apple-link-arrow:hover {
            color: ${theme.primaryHover} !important;
        }
        
        .fa-check,
        .fa-check-circle {
            color: ${theme.primary} !important;
        }
        
        .fa-rocket {
            color: ${theme.primary} !important;
        }
        
        .text-blue-600,
        .text-purple-600,
        .text-green-600 {
            color: ${theme.primary} !important;
        }
        
        .bg-blue-600,
        .bg-purple-600,
        .bg-green-600 {
            background-color: ${theme.primary} !important;
        }
        
        .border-blue-500,
        .border-purple-500,
        .border-green-500 {
            border-color: ${theme.primary} !important;
        }
        
        .bg-blue-100,
        .bg-purple-100,
        .bg-green-100 {
            background-color: ${theme.primaryLight} !important;
        }
        
        .text-blue-700,
        .text-purple-700,
        .text-green-700 {
            color: ${theme.primaryDark} !important;
        }
        
        .from-blue-50,
        .from-purple-50,
        .from-green-50 {
            --tw-gradient-from: ${theme.primaryLight} !important;
        }
        
        .to-indigo-50,
        .to-cyan-50,
        .to-emerald-50 {
            --tw-gradient-to: ${theme.primaryLight} !important;
        }
        
        .skip-link,
        a:focus-visible,
        button:focus-visible {
            outline-color: ${theme.primary} !important;
        }
        
        input:focus,
        textarea:focus,
        select:focus {
            border-color: ${theme.primary} !important;
            box-shadow: 0 0 0 4px ${theme.primaryLight} !important;
        }
        
        #backToTop {
            background: linear-gradient(135deg, ${theme.primary}, ${theme.secondary}) !important;
        }
    `;
    
    // Inject the theme CSS
    document.getElementById('theme-styles').textContent = themeCSS;
}

// Apply theme on page load
applyRandomTheme();

// ===================================
// Rating System
// ===================================
const stars = document.querySelectorAll('.rating-star');
let rating = 0;

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        rating = index + 1;
        updateStarDisplay(index);
    });
    
    star.addEventListener('mouseenter', () => {
        updateStarDisplay(index);
    });
});

// Reset stars on mouse leave
document.querySelector('.rating')?.addEventListener('mouseleave', () => {
    updateStarDisplay(rating - 1);
});

function updateStarDisplay(index) {
    stars.forEach((s, i) => {
        s.style.color = i <= index ? '#F59E0B' : '#D1D5DB';
    });
}

// ===================================
// Form Validation & Submission
// ===================================

// Feedback Form
document.getElementById('feedbackForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const feedback = document.getElementById('feedback').value;
    
    if (!username.trim()) {
        showAlert('Please enter your name', 'error');
        return;
    }
    
    if (!validateEmail(email)) {
        showAlert('Please enter a valid email address', 'error');
        return;
    }
    
    if (!feedback.trim()) {
        showAlert('Please enter your feedback', 'error');
        return;
    }
    
    if (rating === 0) {
        showAlert('Please rate our service by clicking the stars', 'error');
        return;
    }

    showSuccessMessage('Thank you!', 'We appreciate your feedback and will use it to improve our service.');
});

// Contact Form
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('message').value;
    
    if (!name.trim()) {
        showAlert('Please enter your name', 'error');
        return;
    }
    
    if (!validateEmail(email)) {
        showAlert('Please enter a valid email address', 'error');
        return;
    }
    
    if (!message.trim()) {
        showAlert('Please enter your message', 'error');
        return;
    }

    showSuccessMessage('Message Sent!', 'Thank you for contacting us. We will get back to you within 24 hours.');
});

// Email Validation
function validateEmail(email) {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
}

// ===================================
// Success Message Modal
// ===================================

function showSuccessMessage(title, message) {
    const successMessage = document.getElementById('successMessage');
    const overlay = document.getElementById('overlay');
    
    document.querySelector('#successMessage h3').textContent = title;
    document.querySelector('#successMessage p').textContent = message;
    
    successMessage.classList.remove('hidden');
    overlay.classList.remove('hidden');
    
    // Reset forms
    document.getElementById('feedbackForm')?.reset();
    document.getElementById('contactForm')?.reset();
    
    // Reset stars
    stars.forEach(s => s.style.color = '#D1D5DB');
    rating = 0;
    
    // Add fade-in animation
    setTimeout(() => {
        successMessage.style.opacity = '1';
        successMessage.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 10);
}

function hideSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    const overlay = document.getElementById('overlay');
    
    successMessage.style.opacity = '0';
    successMessage.style.transform = 'translate(-50%, -50%) scale(0.95)';
    
    setTimeout(() => {
        successMessage.classList.add('hidden');
        overlay.classList.add('hidden');
    }, 300);
}

// ===================================
// Alert Notifications
// ===================================

function showAlert(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `fixed top-20 right-4 z-50 px-6 py-4 rounded-2xl shadow-2xl max-w-md transform transition-all duration-300 ${
        type === 'error' ? 'bg-red-50 text-red-800 border border-red-200' : 'bg-blue-50 text-blue-800 border border-blue-200'
    }`;
    alertDiv.style.opacity = '0';
    alertDiv.style.transform = 'translateX(100px)';
    alertDiv.innerHTML = `
        <div class="flex items-center">
            <i class="fas fa-${type === 'error' ? 'exclamation-circle' : 'info-circle'} mr-3 text-lg"></i>
            <span class="font-medium">${message}</span>
        </div>
    `;
    
    document.body.appendChild(alertDiv);
    
    // Trigger animation
    setTimeout(() => {
        alertDiv.style.opacity = '1';
        alertDiv.style.transform = 'translateX(0)';
    }, 10);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        alertDiv.style.opacity = '0';
        alertDiv.style.transform = 'translateX(100px)';
        setTimeout(() => alertDiv.remove(), 300);
    }, 3000);
}

// ===================================
// Mobile Menu Toggle
// ===================================

const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton?.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = mobileMenuButton.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu when clicking a link
const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        const icon = mobileMenuButton.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// ===================================
// Back to Top Button
// ===================================

const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
    } else {
        backToTopButton.classList.remove('opacity-100', 'visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
    }
    
    // Update active nav link
    updateActiveNavLink();
    
    // Scroll animations
    handleScrollAnimations();
});

backToTopButton?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// Navigation Active State
// ===================================

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('.apple-nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ===================================
// Smooth Scroll for Anchor Links
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Intersection Observer for Animations
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // For product features - use visible class instead of animation
            if (entry.target.classList.contains('apple-product-feature')) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.add('fade-in-up');
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.apple-service-card, .apple-value-card, .apple-team-card, .apple-tech-card, .apple-product-feature'
    );
    
    // Add animate-on-scroll class to product features for optional scroll animation
    document.querySelectorAll('.apple-product-feature').forEach(el => {
        // Optionally add animate-on-scroll class for scroll-triggered animation
        // Comment out the line below if you want products to be immediately visible
        // el.classList.add('animate-on-scroll');
    });
    
    animatedElements.forEach(el => observer.observe(el));
});

// ===================================
// Scroll Animations
// ===================================

function handleScrollAnimations() {
    const elements = document.querySelectorAll('.apple-service-card, .apple-team-card, .apple-tech-card');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// ===================================
// Modal Interactions
// ===================================

// Close modal when clicking overlay
document.getElementById('overlay')?.addEventListener('click', hideSuccessMessage);

// Keyboard navigation for modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const successMessage = document.getElementById('successMessage');
        if (!successMessage.classList.contains('hidden')) {
            hideSuccessMessage();
        }
    }
});

// ===================================
// Form Loading States
// ===================================

document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function() {
        const submitButton = this.querySelector('button[type="submit"]');
        if (submitButton) {
            const originalText = submitButton.innerHTML;
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';
            
            // Re-enable after 2 seconds (simulating API call)
            setTimeout(() => {
                submitButton.disabled = false;
                submitButton.innerHTML = originalText;
            }, 2000);
        }
    });
});

// ===================================
// Parallax Effect on Hero
// ===================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroDevice = document.querySelector('.apple-hero-device');
    if (heroDevice && scrolled < 800) {
        heroDevice.style.transform = `translateY(${scrolled * 0.2}px)`;
        heroDevice.style.opacity = 1 - (scrolled / 800);
    }
});

// ===================================
// Performance: Lazy Loading
// ===================================

if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ===================================
// Navigation Background on Scroll
// ===================================

window.addEventListener('scroll', () => {
    const nav = document.querySelector('.apple-nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.85)';
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.8)';
        nav.style.boxShadow = 'none';
    }
});

// ===================================
// Analytics Tracking (Placeholder)
// ===================================

function trackEvent(category, action, label) {
    console.log('Event tracked:', { category, action, label });
    // Integration with Google Analytics or other analytics service
    // gtag('event', action, { 'event_category': category, 'event_label': label });
}

// Track important interactions
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function() {
        trackEvent('Navigation', 'Click', this.getAttribute('href'));
    });
});

document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function() {
        trackEvent('Form', 'Submit', this.id);
    });
});

// ===================================
// Initialize Success Modal Styles
// ===================================

const successModal = document.getElementById('successMessage');
if (successModal) {
    successModal.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    successModal.style.opacity = '0';
    successModal.style.transform = 'translate(-50%, -50%) scale(0.95)';
}

// ===================================
// Page Load Animations
// ===================================

window.addEventListener('load', () => {
    // Fade in hero content
    const heroTitle = document.querySelector('.apple-hero-title');
    const heroSubtitle = document.querySelector('.apple-hero-subtitle');
    const heroDevice = document.querySelector('.apple-hero-device');
    
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroTitle.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 100);
    }
    
    if (heroSubtitle) {
        heroSubtitle.style.opacity = '0';
        heroSubtitle.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroSubtitle.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateY(0)';
        }, 200);
    }
    
    if (heroDevice) {
        heroDevice.style.opacity = '0';
        heroDevice.style.transform = 'translateY(30px)';
        setTimeout(() => {
            heroDevice.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
            heroDevice.style.opacity = '1';
            heroDevice.style.transform = 'translateY(0)';
        }, 400);
    }
});

// ===================================
// Console Welcome Message
// ===================================

// Get current theme for console message
const getCurrentTheme = () => {
    const themeStyles = document.getElementById('theme-styles').textContent;
    for (let theme of colorThemes) {
        if (themeStyles.includes(theme.primary)) {
            return theme;
        }
    }
    return colorThemes[0];
};

const currentTheme = getCurrentTheme();

console.log(
    '%cWelcome to Harvest Bee Limited! 🚀',
    `font-size: 20px; font-weight: bold; color: ${currentTheme.primary};`
);
console.log(
    `%cCurrent Theme: ${currentTheme.name}`,
    `font-size: 14px; color: ${currentTheme.primary}; font-weight: 600;`
);
console.log(
    '%cRefresh the page to see a different color theme!',
    'font-size: 12px; color: #666;'
);
console.log(
    '%cInterested in joining our team? Check out our careers page!',
    'font-size: 14px; color: #666;'
);
