// Navigation functionality - FIXED ACTIVE SECTION HIGHLIGHTING WITH VALUES
function initializeNavigation() {
    setupScrollNavigation();
    setupMobileMenu();
    setupActiveNavLink();
    
    console.log('🧭 Navigation initialized with fixed active highlighting including Values');
}

// // Handle scroll-based navigation
function setupScrollNavigation() {
    const nav = document.querySelector('.nav-bar');
    if (!nav) return;
    
    let lastScroll = 0;
    let scrollTimer = null;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove scrolled class based on scroll position
        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        // Hide/show navigation based on scroll direction
        if (currentScroll > lastScroll && currentScroll > 100) {
            nav.classList.add('hidden');
        } else {
            nav.classList.remove('hidden');
        }
        
        lastScroll = currentScroll;
        
        // Clear existing timer
        if (scrollTimer) {
            clearTimeout(scrollTimer);
        }
        
        // Set new timer to show nav after scrolling stops
        scrollTimer = setTimeout(() => {
            nav.classList.remove('hidden');
        }, 1000);
    });
}

// Mobile menu functionality
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (!hamburger || !mobileNav) return;
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
        }
    });
    
    // Close menu when clicking a link
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
        });
    });
}

// FIXED: Active link highlighting with proper section detection INCLUDING VALUES
function setupActiveNavLink() {
    console.log('🎯 Setting up active nav link detection with Values section...');
    
    // Wait for components to load
    setTimeout(() => {
        // Get all sections with IDs that correspond to navigation links
        const sections = [
            { id: 'hero-component', navId: 'home' },
            { id: 'about-component', navId: 'about-us-sec' },
            { id: 'services-component', navId: 'our-services-sec' },
            { id: 'mission-component', navId: 'our-mission-sec' },
            { id: 'values-component', navId: 'our-values-sec' },
            { id: 'achievements-component', navId: 'our-achievment-sec' },
            { id: 'process-component', navId: 'process-sec' }
        ];
        
        const navLinks = document.querySelectorAll('.nav-link');
        console.log(`🔍 Found ${navLinks.length} navigation links`);
        
        if (!navLinks.length) {
            console.warn('⚠️ No navigation links found');
            return;
        }
        
        // Function to update active link
        const updateActiveLink = (activeSection) => {
            console.log(`🎯 Updating active section to: ${activeSection}`);
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                
                // Check if this link corresponds to the active section
                const href = link.getAttribute('href');
                if (href) {
                    // Handle different href formats
                    if (href === '#' && activeSection === 'hero-component') {
                        link.classList.add('active');
                        console.log('✅ Activated Home link');
                    } else if (href.includes(activeSection)) {
                        link.classList.add('active');
                        console.log(`✅ Activated link for: ${activeSection}`);
                    } else {
                        // Check by section mapping
                        const sectionMap = sections.find(s => s.navId === activeSection);
                        if (sectionMap && href.includes(sectionMap.navId)) {
                            link.classList.add('active');
                            console.log(`✅ Activated mapped link for: ${activeSection}`);
                        }
                    }
                }
            });
        };
        
        // Enhanced intersection observer with better detection
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px', // More precise detection
            threshold: [0.1, 0.3, 0.5]
        };
        
        const observerCallback = (entries) => {
            // Find the section that's most visible
            let mostVisible = null;
            let maxRatio = 0;
            
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
                    maxRatio = entry.intersectionRatio;
                    mostVisible = entry.target;
                }
            });
            
            if (mostVisible) {
                const sectionId = mostVisible.id;
                console.log(`👁️ Most visible section: ${sectionId} (ratio: ${maxRatio.toFixed(2)})`);
                
                // Map component IDs to navigation IDs
                let navId = sectionId;
                
                // Special mappings
                if (sectionId === 'hero-component') {
                    navId = 'home';
                } else {
                    // Extract the actual section ID from within the component
                    const innerSection = mostVisible.querySelector('[id]');
                    if (innerSection) {
                        navId = innerSection.id;
                        console.log(`🔍 Found inner section ID: ${navId}`);
                    }
                }
                
                updateActiveLink(navId);
            }
        };
        
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        
        // Observe all main component containers
        sections.forEach(section => {
            const element = document.getElementById(section.id);
            if (element) {
                observer.observe(element);
                console.log(`👁️ Observing: ${section.id}`);
            } else {
                console.warn(`⚠️ Section not found: ${section.id}`);
            }
        });
        
        // Fallback: Manual scroll detection
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                const scrollPosition = window.scrollY + window.innerHeight / 3;
                
                // Check each section manually
                sections.forEach(section => {
                    const element = document.getElementById(section.id);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        const elementTop = window.scrollY + rect.top;
                        const elementBottom = elementTop + rect.height;
                        
                        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
                            console.log(`📍 Manual detection: ${section.id}`);
                            updateActiveLink(section.navId);
                        }
                    }
                });
            }, 100);
        });
        
        // Set initial active state
        updateActiveLink('home');
        
    }, 1000); // Wait for components to load
}

// Enhanced scroll-based section detection
function detectCurrentSection() {
    const sections = [
        'hero-component',
        'about-component', 
        'services-component',
        'mission-component',
        'values-component',
        'achievements-component',
        'process-component'
    ];
    
    const scrollPosition = window.scrollY + 200; // Offset for better detection
    
    for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
            const rect = section.getBoundingClientRect();
            const sectionTop = window.scrollY + rect.top;
            const sectionBottom = sectionTop + rect.height;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                return sectionId;
            }
        }
    }
    
    return 'hero-component'; // Default to hero
}

// Debug function
window.debugNavigation = function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('[id*="component"]');
    
    console.log('🔍 Navigation Debug:');
    console.log('Nav Links:', navLinks.length);
    console.log('Sections:', sections.length);
    
    navLinks.forEach((link, index) => {
        console.log(`Link ${index}:`, {
            href: link.getAttribute('href'),
            text: link.textContent,
            active: link.classList.contains('active')
        });
    });
    
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        console.log(`Section ${index}:`, {
            id: section.id,
            top: rect.top,
            height: rect.height,
            visible: rect.top < window.innerHeight && rect.bottom > 0
        });
    });
};