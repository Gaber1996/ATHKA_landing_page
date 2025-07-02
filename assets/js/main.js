// assets/js/main.js - Enhanced component loading with INSTANT language switching

document.addEventListener('DOMContentLoaded', async function() {
    console.log('🔄 DOM Content Loaded - Starting initialization...');
    
    // INSTANT: Apply translations immediately
    if (window.simpleI18n && window.simpleI18n.instant) {
        console.log('⚡ Applying instant translations...');
        window.simpleI18n.instant();
    }
    
    // Load all components for the landing page
    await loadAllComponents();
    
    // Initialize functionality after components are loaded
    initializeWebsite();
});

// Enhanced component loader with retry mechanism
async function loadComponent(elementId, componentPath) {
    const maxRetries = 3;
    let retryCount = 0;
    
    while (retryCount < maxRetries) {
        try {
            console.log(`🔄 Loading component: ${componentPath} (attempt ${retryCount + 1})`);
            
            const response = await fetch(componentPath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const html = await response.text();
            const element = document.getElementById(elementId);
            
            if (element) {
                element.innerHTML = html;
                console.log(`✅ Successfully loaded: ${componentPath}`);
                
                // INSTANT: Apply translations after each component loads
                if (window.simpleI18n && window.simpleI18n.instant) {
                    window.simpleI18n.instant();
                }
                
                // Special handling for process component
                if (elementId === 'process-component') {
                    console.log('🎯 Process component loaded, checking content...');
                    await new Promise(resolve => setTimeout(resolve, 200)); // Longer delay for process
                    
                    const processSteps = element.querySelectorAll('.border2');
                    console.log(`🔍 Found ${processSteps.length} process steps in loaded component`);
                    
                    if (processSteps.length > 0) {
                        console.log('✅ Process steps found, triggering setup');
                        // Force re-setup of process accordion
                        setTimeout(() => {
                            setupProcessAccordion();
                        }, 300);
                    } else {
                        console.warn('⚠️ No process steps found after loading');
                    }
                }
                
                // Special handling for values component
                if (elementId === 'values-component') {
                    console.log('🎯 Values component loaded, checking content...');
                    await new Promise(resolve => setTimeout(resolve, 100)); // Small delay
                    
                    const valuesCards = element.querySelectorAll('.card9');
                    console.log(`🔍 Found ${valuesCards.length} values cards in loaded component`);
                    
                    if (valuesCards.length > 0) {
                        console.log('✅ Values cards found, triggering visibility');
                        triggerValuesVisibility();
                    } else {
                        console.warn('⚠️ No values cards found after loading');
                    }
                }
                
                return true;
            } else {
                console.warn(`⚠️ Element not found: ${elementId}`);
                return false;
            }
        } catch (error) {
            console.error(`❌ Error loading component ${componentPath} (attempt ${retryCount + 1}):`, error);
            retryCount++;
            
            if (retryCount < maxRetries) {
                console.log(`🔄 Retrying in 500ms...`);
                await new Promise(resolve => setTimeout(resolve, 500));
            }
        }
    }
    
    console.error(`❌ Failed to load ${componentPath} after ${maxRetries} attempts`);
    return false;
}

// Load all components with enhanced error handling
async function loadAllComponents() {
    const components = [
        { id: 'hero-component', path: 'components/hero.html' },
        { id: 'about-component', path: 'components/about.html' },
        { id: 'services-component', path: 'components/services.html' },
        { id: 'achievements-component', path: 'components/achievements.html' },
        { id: 'mission-component', path: 'components/mission.html' },
        { id: 'values-component', path: 'components/values.html' },
        { id: 'process-component', path: 'components/process.html' },
        { id: 'cta-component', path: 'components/cta.html' },
        { id: 'footer-component', path: 'components/footer.html' },
        { id: 'copyright-component', path: 'components/copyright.html' }
    ];
    
    console.log('🔄 Starting component loading...');
    
    // Load components sequentially to avoid race conditions
    for (const component of components) {
        const success = await loadComponent(component.id, component.path);
        if (!success) {
            console.error(`❌ Critical: Failed to load ${component.path}`);
        }
    }
    
    console.log('✅ All components loading completed');
    
    // INSTANT: Apply translations after all components are loaded
    if (window.simpleI18n && window.simpleI18n.instant) {
        console.log('⚡ Final instant translation after all components loaded...');
        window.simpleI18n.instant();
    }
    
    // Additional delay to ensure DOM is fully updated
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Force check for process section
    forceProcessCheck();
    
    // Force check for values section
    forceValuesCheck();
}

// ENHANCED: Setup Process Accordion with Scrollbar Control
function setupProcessAccordion() {
    console.log('🎮 Setting up process accordion with scrollbar control...');
    
    const servicesContainer = document.querySelector('.services');
    const dropdownCards = document.querySelectorAll('.border2');
    
    if (!servicesContainer || dropdownCards.length === 0) {
        console.warn('⚠️ Process accordion elements not found');
        return;
    }
    
    console.log(`🔍 Found ${dropdownCards.length} process steps for accordion setup`);
    
    // Function to check if any dropdown is active and toggle scrollbar
    function toggleScrollbar() {
        const hasActiveDropdown = document.querySelector('.border2.active');
        
        if (hasActiveDropdown) {
            servicesContainer.classList.add('has-active-dropdown');
            servicesContainer.style.overflowY = 'auto'; // Force scrollbar
            console.log('📜 Scrollbar enabled - dropdown is active');
        } else {
            servicesContainer.classList.remove('has-active-dropdown');
            servicesContainer.style.overflowY = 'hidden'; // Hide scrollbar
            console.log('📜 Scrollbar hidden - no active dropdowns');
        }
    }
    
    // Remove existing event listeners and set up new ones
    dropdownCards.forEach((card, index) => {
        // Clone to remove existing listeners
        const newCard = card.cloneNode(true);
        card.parentNode.replaceChild(newCard, card);
        
        newCard.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log(`🖱️ Clicked on process step ${index + 1}`);
            
            // Toggle active class on clicked card
            const isCurrentlyActive = this.classList.contains('active');
            
            // Close all other dropdowns
            document.querySelectorAll('.border2').forEach(otherCard => {
                if (otherCard !== this) {
                    otherCard.classList.remove('active');
                    otherCard.setAttribute('aria-expanded', 'false');
                }
            });
            
            // Toggle current dropdown
            if (isCurrentlyActive) {
                this.classList.remove('active');
                this.setAttribute('aria-expanded', 'false');
                console.log(`📁 Closed process step ${index + 1}`);
            } else {
                this.classList.add('active');
                this.setAttribute('aria-expanded', 'true');
                console.log(`📂 Opened process step ${index + 1}`);
                
                // Smooth scroll to make sure the active item is visible
                setTimeout(() => {
                    this.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest'
                    });
                }, 200);
            }
            
            // Update scrollbar visibility with delay for smooth transition
            setTimeout(toggleScrollbar, 100);
        });
        
        // Add keyboard accessibility
        newCard.setAttribute('tabindex', '0');
        newCard.setAttribute('role', 'button');
        newCard.setAttribute('aria-expanded', 'false');
        
        newCard.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Optional: Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.border2') && !event.target.closest('.services')) {
            const wasActive = document.querySelector('.border2.active');
            document.querySelectorAll('.border2').forEach(card => {
                card.classList.remove('active');
                card.setAttribute('aria-expanded', 'false');
            });
            if (wasActive) {
                console.log('🖱️ Closed all dropdowns - clicked outside');
                setTimeout(toggleScrollbar, 50);
            }
        }
    });
    
    // Initial check and setup
    toggleScrollbar();
    
    // Add visibility animations for process steps
    setTimeout(() => {
        document.querySelectorAll('.border2').forEach((card, index) => {
            card.classList.add('visible');
        });
    }, 100);
    
    console.log('✅ Process accordion setup complete with scrollbar control');
}

// Force check and fix for process section
function forceProcessCheck() {
    console.log('🔍 Force checking process section...');
    
    const processComponent = document.getElementById('process-component');
    const processSection = document.querySelector('.development');
    const processSteps = document.querySelectorAll('.border2');
    
    console.log('Process Component Container:', processComponent);
    console.log('Process Section:', processSection);
    console.log('Process Steps Found:', processSteps.length);
    
    if (processComponent && processComponent.innerHTML.trim() === '') {
        console.error('❌ Process component is empty! Attempting direct injection...');
        injectProcessDirectly();
    } else if (processSteps.length === 0) {
        console.warn('⚠️ Process steps not found, attempting direct injection...');
        injectProcessDirectly();
    } else {
        console.log('✅ Process section appears to be loaded correctly');
        // Ensure accordion is set up
        setTimeout(() => {
            setupProcessAccordion();
        }, 100);
    }
}

// Direct injection of process content as fallback
function injectProcessDirectly() {
    console.log('🔧 Attempting direct process injection...');
    
    const processComponent = document.getElementById('process-component');
    if (!processComponent) {
        console.error('❌ Process component container not found');
        return;
    }
    
    const processHTML = `
    <!-- Modern Process Section -->
    <section class="development">
        <div class="development-container">
            <div class="development-content">
                <div class="development-header">
                    <img class="mask-group-icon" alt="" src="assets/images/mask-group-1.svg" />
                    <a class="heading-28" id="process-sec">Our Process</a>
                </div>
                
                <div class="development-paragraph">
                    <div class="development-approach">
                        <h1 class="our-agile-container">
                            <span class="our-digital-services-container1">
                                <span class="turning">Our </span>
                                <span class="agile">Agile</span>
                                <span class="turning"> & </span>
                                <span class="agile">Data-Driven</span>
                                <span class="turning"> Approach</span>
                            </span>
                        </h1>
                        
                        <div class="combining-agile-development">
                            Combining Agile development principles with a commitment to
                            data accuracy, our process is designed to adapt to your
                            business needs while maintaining a clear focus on quality.
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="services">
                <!-- Process Step 1 -->
                <div class="border2">
                    <div class="heading-2-button1">
                        <div class="empty-service-name">01</div>
                        <div class="rectangle1"></div>
                        <div class="empty-service-description">
                            <div class="digital-marketing-parent">
                                <h2 class="digital-marketing2">Consultation & Analysis</h2>
                            </div>
                        </div>
                    </div>
                    <div class="what-its-crafting">
                        We begin by understanding your unique goals, challenges, and vision. Through comprehensive analysis and strategic consultation, we define clear pathways for software development or data solutions that align perfectly with your business objectives and market requirements.
                    </div>
                </div>
                
                <!-- Process Step 2 -->
                <div class="border2">
                    <div class="heading-2-button1">
                        <div class="empty-service-name">02</div>
                        <div class="rectangle1"></div>
                        <div class="empty-service-description">
                            <div class="digital-marketing-parent">
                                <h2 class="digital-marketing2">User-Centered Design</h2>
                            </div>
                        </div>
                    </div>
                    <div class="what-its-crafting">
                        Creating intuitive interfaces and user experiences that prioritize usability and engagement. We design with your users in mind, ensuring every interaction feels natural and purposeful while maintaining aesthetic excellence and functional clarity.
                    </div>
                </div>
                
                <!-- Process Step 3 -->
                <div class="border2">
                    <div class="heading-2-button1">
                        <div class="empty-service-name">03</div>
                        <div class="rectangle1"></div>
                        <div class="empty-service-description">
                            <div class="digital-marketing-parent">
                                <h2 class="digital-marketing2">Development & Data Integration</h2>
                            </div>
                        </div>
                    </div>
                    <div class="what-its-crafting">
                        Building robust, scalable software solutions while seamlessly integrating accurate data systems. Our development process combines cutting-edge technology with proven methodologies to deliver powerful insights and reliable performance.
                    </div>
                </div>
                
                <!-- Process Step 4 -->
                <div class="border2">
                    <div class="heading-2-button1">
                        <div class="empty-service-name">04</div>
                        <div class="rectangle1"></div>
                        <div class="empty-service-description">
                            <div class="digital-marketing-parent">
                                <h2 class="digital-marketing2">Quality Assurance</h2>
                            </div>
                        </div>
                    </div>
                    <div class="what-its-crafting">
                        Rigorous testing and verification processes ensure software reliability and data accuracy. We implement comprehensive quality assurance protocols to guarantee optimal performance, security, and user satisfaction across all platforms and use cases.
                    </div>
                </div>
                
                <!-- Process Step 5 -->
                <div class="border2">
                    <div class="heading-2-button1">
                        <div class="empty-service-name">05</div>
                        <div class="rectangle1"></div>
                        <div class="empty-service-description">
                            <div class="digital-marketing-parent">
                                <h2 class="digital-marketing2">Deployment & Support</h2>
                            </div>
                        </div>
                    </div>
                    <div class="what-its-crafting">
                        Seamless deployment of solutions with comprehensive ongoing support. We ensure smooth transitions, provide thorough training, and maintain continuous support to guarantee your continued success and system optimization.
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
    
    processComponent.innerHTML = processHTML;
    console.log('✅ Process content injected directly');
    
    // INSTANT: Apply translations after injection
    if (window.simpleI18n && window.simpleI18n.instant) {
        window.simpleI18n.instant();
    }
    
    // Setup accordion after injection
    setTimeout(() => {
        setupProcessAccordion();
    }, 200);
}

// Force check and fix for values section
function forceValuesCheck() {
    console.log('🔍 Force checking values section...');
    
    const valuesComponent = document.getElementById('values-component');
    const valuesSection = document.querySelector('.content-frame');
    const valuesCards = document.querySelectorAll('.card9');
    
    console.log('Values Component Container:', valuesComponent);
    console.log('Values Section:', valuesSection);
    console.log('Values Cards Found:', valuesCards.length);
    
    if (valuesComponent && valuesComponent.innerHTML.trim() === '') {
        console.error('❌ Values component is empty! Attempting direct injection...');
        injectValuesDirectly();
    } else if (valuesCards.length === 0) {
        console.warn('⚠️ Values cards not found, attempting direct injection...');
        injectValuesDirectly();
    } else {
        console.log('✅ Values section appears to be loaded correctly');
        triggerValuesVisibility();
    }
}

// Direct injection of values content as fallback
function injectValuesDirectly() {
    console.log('🔧 Attempting direct values injection...');
    
    const valuesComponent = document.getElementById('values-component');
    if (!valuesComponent) {
        console.error('❌ Values component container not found');
        return;
    }
    
    const valuesHTML = `
    <!-- Values Section -->
    <section class="content-frame">
        <div class="content6">
            <div class="content7">
                <!-- Header and Image - Left Side -->
                <div class="header3">
                    <div class="title2">
                        <div class="heading-27">Our Values</div>
                    </div>
                    <h1 class="your-success-story-container1">
                        <span>
                            <span class="turning">Your </span>
                            <b class="ideas1">Success Story</b>
                            <span class="turning"> Begins With AthkaDo</span>
                        </span>
                    </h1>
                    <img class="instance-icon" loading="lazy" alt="Rotating Image" src="assets/images/fire.jpeg" />
                </div>
                
                <!-- Cards Container - Right Side -->
                <div class="cards-container">
                    <div class="container1">
                        <!-- Accuracy Card -->
                        <div class="card9">
                            <div class="service-bgsvg-fill2">
                                <div class="service-bgsvg-fill-inner">
                                    <div class="component-7svg-parent">
                                        <img class="component-7container-icon" loading="lazy" alt="" src="assets/images/component-7container.svg" />
                                        <div class="heading-3-creative-content-p-parent">
                                            <h2 class="heading-310">Accuracy</h2>
                                            <div class="expanding-our-reach1">
                                                attention to detail that ensures precision and
                                                reliability in every task.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="backgroundborder15"></div>
                            </div>
                        </div>
                        
                        <!-- Excellence Card -->
                        <div class="card9">
                            <div class="service-bgsvg-fill2">
                                <div class="service-bgsvg-fill-inner">
                                    <div class="component-7svg-parent">
                                        <img class="component-7container-icon" loading="lazy" alt="" src="assets/images/component-7svg.svg" />
                                        <div class="heading-3-creative-content-p-parent">
                                            <h2 class="heading-310">Excellence</h2>
                                            <div class="expanding-our-reach2">
                                                From start to finish, we give our best.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="backgroundborder15"></div>
                            </div>
                        </div>
                        
                        <!-- Integrity Card -->
                        <div class="card9">
                            <div class="service-bgsvg-fill2">
                                <div class="service-bgsvg-fill-inner">
                                    <div class="component-7svg-parent">
                                        <img class="component-7container-icon" loading="lazy" alt="" src="assets/images/arcticonsplayintegrityapichecker.svg" />
                                        <div class="heading-3-creative-content-p-parent">
                                            <h2 class="heading-310">Integrity</h2>
                                            <div class="expanding-our-reach1">
                                                Honest, transparent, and committed to what's right.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="backgroundborder15"></div>
                            </div>
                        </div>
                        
                        <!-- Innovation Card -->
                        <div class="card9">
                            <div class="service-bgsvg-fill2">
                                <div class="service-bgsvg-fill-inner">
                                    <div class="component-7svg-parent">
                                        <img class="component-7container-icon" loading="lazy" alt="" src="assets/images/component-7container-1.svg" />
                                        <div class="heading-3-creative-content-p-parent">
                                            <h2 class="heading-310">Innovation</h2>
                                            <div class="expanding-our-reach4">
                                                Fresh ideas and technologies to keep you ahead.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="backgroundborder15"></div>
                            </div>
                        </div>
                        
                        <!-- Customer-Centricity Card -->
                        <div class="card9">
                            <div class="service-bgsvg-fill2">
                                <div class="service-bgsvg-fill-inner">
                                    <div class="component-7svg-parent">
                                        <img class="component-7container-icon" loading="lazy" alt="" src="assets/images/component-7container-2.svg" />
                                        <div class="heading-3-creative-content-p-parent">
                                            <h2 class="heading-310">Customer-Centricity</h2>
                                            <div class="expanding-our-reach4">
                                                Your success is our priority, always.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="backgroundborder15"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
    
    valuesComponent.innerHTML = valuesHTML;
    console.log('✅ Values content injected directly');
    
    // INSTANT: Apply translations after injection
    if (window.simpleI18n && window.simpleI18n.instant) {
        window.simpleI18n.instant();
    }
    
    // Trigger visibility after injection
    setTimeout(() => {
        triggerValuesVisibility();
    }, 100);
}

// Trigger values visibility with enhanced checking
function triggerValuesVisibility() {
    console.log('🎨 Triggering values visibility...');
    
    const valuesCards = document.querySelectorAll('.card9');
    const valuesHeader = document.querySelector('.header3');
    
    console.log(`🔍 Found ${valuesCards.length} values cards for animation`);
    
    if (valuesCards.length > 0) {
        // Add visible class to header
        if (valuesHeader) {
            valuesHeader.classList.add('visible');
            console.log('✅ Header visibility triggered');
        }
        
        // Add visible class to cards with staggered delay
        valuesCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
                console.log(`✨ Animated values card ${index + 1}: ${card.querySelector('.heading-310')?.textContent || 'Unknown'}`);
            }, index * 200);
        });
        
        console.log('🎉 Values animation sequence started');
    } else {
        console.error('❌ No values cards found for animation');
    }
}

// Initialize website functionality after components are loaded
function initializeWebsite() {
    console.log('🚀 Initializing website functionality...');
    
    // Initialize navigation
    if (typeof initializeNavigation === 'function') {
        initializeNavigation();
    }
    
    // Initialize animations
    if (typeof initializeAnimations === 'function') {
        initializeAnimations();
    }
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Setup intersection observer for values section
    setupValuesObserver();
    
    // Setup process accordion (this is new)
    setTimeout(() => {
        setupProcessAccordion();
    }, 500);
    
    console.log('🚀 Website initialized successfully');
}

// Setup intersection observer for values section
function setupValuesObserver() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('👁️ Values section is visible, triggering animations');
                triggerValuesVisibility();
                // Keep observing in case we need to retrigger
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Try to observe the values section
    const checkAndObserve = () => {
        const valuesSection = document.querySelector('.content-frame');
        if (valuesSection) {
            observer.observe(valuesSection);
            console.log('👁️ Values section observer setup complete');
            return true;
        }
        return false;
    };
    
    // Try immediately, then retry if needed
    if (!checkAndObserve()) {
        setTimeout(() => {
            if (!checkAndObserve()) {
                console.warn('⚠️ Could not find values section to observe');
            }
        }, 1000);
    }
}

// Smooth scrolling for navigation links - FIXED to handle empty href
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            // Handle empty href or just "#"
            if (!href || href === '#') {
                // Scroll to top of page
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }
            
            // Handle normal anchor links
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Global configuration
window.ATHKADO_CONFIG = {
    contact: {
        email: 'info@athkado.com',
        phone: '+966552154553',
        formUrl: 'https://calendar.app.google/BZCxNQH8pKGGaHXb6'
    },
    social: {
        linkedin: 'https://sa.linkedin.com/in/athka-do-12178a336',
        instagram: 'https://www.instagram.com/athkado?igsh=ZjUxZ2s5bHljNXRo&utm_source=qr',
        twitter: 'https://x.com/athkado/status/1853427180430131596?s=46'
    },
    animations: {
        threshold: 0.3,
        rootMargin: '0px'
    }
};

// Error handling
window.addEventListener('error', function(e) {
    console.error('Website error:', e.error);
});

// Performance monitoring and final checks
window.addEventListener('load', function() {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log(`⚡ Page load time: ${loadTime}ms`);
    
    // INSTANT: Final translation check after page is fully loaded
    if (window.simpleI18n && window.simpleI18n.instant) {
        console.log('⚡ Final instant translation check...');
        window.simpleI18n.instant();
    }
    
    // Final check for process section after everything is loaded
    setTimeout(() => {
        console.log('🔍 Final process section check...');
        const processSteps = document.querySelectorAll('.border2');
        const processComponent = document.getElementById('process-component');
        
        if (processSteps.length === 0) {
            console.warn('⚠️ Process steps still not found after page load, attempting emergency fix...');
            forceProcessCheck();
        } else {
            console.log(`✅ Final check passed: ${processSteps.length} process steps found`);
            // Ensure accordion is working
            setTimeout(() => {
                setupProcessAccordion();
            }, 100);
        }
        
        // Log component status
        if (processComponent) {
            console.log('Process component HTML length:', processComponent.innerHTML.length);
        }
    }, 1000);
    
    // Final check for values section after everything is loaded
    setTimeout(() => {
        console.log('🔍 Final values section check...');
        const valuesCards = document.querySelectorAll('.card9');
        const valuesComponent = document.getElementById('values-component');
        
        if (valuesCards.length === 0) {
            console.warn('⚠️ Values cards still not found after page load, attempting emergency fix...');
            forceValuesCheck();
        } else {
            console.log(`✅ Final check passed: ${valuesCards.length} values cards found`);
            // Ensure they're visible
            triggerValuesVisibility();
        }
        
        // Log component status
        if (valuesComponent) {
            console.log('Values component HTML length:', valuesComponent.innerHTML.length);
        }
    }, 1200);
    
    // INSTANT: Initialize simple language system after everything is loaded - REMOVED DELAY
    if (window.simpleI18n && window.simpleI18n.initialize) {
        console.log('🌐 Final language system initialization...');
        window.simpleI18n.initialize();
    }
});

// ENHANCED: Debug function to manually check process section
window.debugProcess = function() {
    const processSection = document.querySelector('.development');
    const processSteps = document.querySelectorAll('.border2');
    const processComponent = document.getElementById('process-component');
    const servicesContainer = document.querySelector('.services');
    
    console.log('🔍 Process Debug Info:');
    console.log('Process Section:', processSection);
    console.log('Process Steps:', processSteps);
    console.log('Process Component Container:', processComponent);
    console.log('Services Container:', servicesContainer);
    console.log('Process Component HTML length:', processComponent?.innerHTML?.length || 0);
    console.log('Has Active Dropdown Class:', servicesContainer?.classList.contains('has-active-dropdown'));
    
    if (processComponent && processComponent.innerHTML.trim() === '') {
        console.error('❌ Process component is empty!');
        console.log('🔧 Attempting direct injection...');
        injectProcessDirectly();
    } else if (processSteps.length === 0) {
        console.warn('⚠️ Process steps not found');
        console.log('🔧 Attempting force check...');
        forceProcessCheck();
    } else {
        console.log('✅ Process section looks good');
        setupProcessAccordion();
    }
};

// Debug function to manually check values section
window.debugValues = function() {
    const valuesSection = document.querySelector('.content-frame');
    const valuesCards = document.querySelectorAll('.card9');
    const valuesComponent = document.getElementById('values-component');
    
    console.log('🔍 Values Debug Info:');
    console.log('Values Section:', valuesSection);
    console.log('Values Cards:', valuesCards);
    console.log('Values Component Container:', valuesComponent);
    console.log('Values Component HTML length:', valuesComponent?.innerHTML?.length || 0);
    
    if (valuesComponent && valuesComponent.innerHTML.trim() === '') {
        console.error('❌ Values component is empty!');
        console.log('🔧 Attempting direct injection...');
        injectValuesDirectly();
    } else if (valuesCards.length === 0) {
        console.warn('⚠️ Values cards not found');
        console.log('🔧 Attempting force check...');
        forceValuesCheck();
    } else {
        console.log('✅ Values section looks good');
        triggerValuesVisibility();
    }
};

// Manual trigger functions
window.fixProcess = function() {
    console.log('🔧 Manual process fix triggered');
    injectProcessDirectly();
};

window.fixValues = function() {
    console.log('🔧 Manual values fix triggered');
    injectValuesDirectly();
};

// ENHANCED: Manual accordion setup function
window.setupAccordion = function() {
    console.log('🔧 Manual accordion setup triggered');
    setupProcessAccordion();
};

// ENHANCED: Manual scrollbar toggle for testing
window.toggleScrollbar = function() {
    console.log('🔧 Manual scrollbar toggle triggered');
    const servicesContainer = document.querySelector('.services');
    if (servicesContainer) {
        const currentState = servicesContainer.style.overflowY;
        console.log('Current overflow-y:', currentState);
        console.log('Has class has-active-dropdown:', servicesContainer.classList.contains('has-active-dropdown'));
        
        if (servicesContainer.classList.contains('has-active-dropdown')) {
            servicesContainer.classList.remove('has-active-dropdown');
            servicesContainer.style.overflowY = 'hidden';
            console.log('📜 Scrollbar hidden (forced)');
        } else {
            servicesContainer.classList.add('has-active-dropdown');
            servicesContainer.style.overflowY = 'auto';
            console.log('📜 Scrollbar enabled (forced)');
        }
        
        // Log computed styles
        const computedStyle = window.getComputedStyle(servicesContainer);
        console.log('Computed overflow-y:', computedStyle.overflowY);
        console.log('Computed scrollbar-width:', computedStyle.scrollbarWidth);
    } else {
        console.error('❌ Services container not found');
    }
};

// ENHANCED: Test all process steps
window.testProcessSteps = function() {
    console.log('🧪 Testing all process steps...');
    const processSteps = document.querySelectorAll('.border2');
    
    if (processSteps.length === 0) {
        console.error('❌ No process steps found');
        return;
    }
    
    processSteps.forEach((step, index) => {
        setTimeout(() => {
            console.log(`🧪 Testing step ${index + 1}`);
            step.click();
            
            // Auto close after 2 seconds
            setTimeout(() => {
                step.click();
            }, 2000);
        }, index * 3000);
    });
};

// Test language switching
window.testLanguage = function() {
    console.log('🌐 Testing language switching...');
    if (window.simpleI18n) {
        const currentLang = window.simpleI18n.getCurrentLanguage();
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        console.log(`🔄 Switching from ${currentLang} to ${newLang}`);
        window.simpleI18n.applyTranslations(newLang);
    } else {
        console.error('❌ Simple i18n not available');
    }
};