// assets/js/animations.js - All animations and interactions

// Initialize all animations
function initializeAnimations() {
    setupProcessAccordion();
    setupScrollAnimations();
    setupAboutSectionAnimations();
    setupValuesVisibilityFix(); // New function for values
    
    console.log('✨ Animations initialized');
}

// COMPLETELY FIXED Process section accordion functionality with SCROLLBAR SUPPORT
function setupProcessAccordion() {
    console.log('🔧 Setting up process accordion...');
    
    // Wait for DOM to be ready
    setTimeout(() => {
        const processSteps = document.querySelectorAll(".border2");
        const servicesContainer = document.querySelector(".services");
        
        console.log(`🔍 Found ${processSteps.length} process steps`);
        console.log('📦 Services container:', servicesContainer);
        
        if (processSteps.length === 0) {
            console.warn('⚠️ No process steps found, retrying...');
            setTimeout(setupProcessAccordion, 500);
            return;
        }
        
        processSteps.forEach((step, index) => {
            console.log(`🎯 Setting up step ${index + 1}`);
            
            // Remove any existing event listeners by cloning
            const newStep = step.cloneNode(true);
            step.parentNode.replaceChild(newStep, step);
            
            // Get the updated reference
            const currentStep = document.querySelectorAll(".border2")[index];
            const content = currentStep.querySelector(".what-its-crafting");
            
            if (!content) {
                console.warn(`⚠️ No content found for step ${index + 1}`);
                return;
            }

            // CRITICAL: Set initial state properly
            content.style.display = "none";
            content.style.height = "0px";
            content.style.opacity = "0";
            content.style.overflow = "hidden";
            content.style.transition = "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
            content.style.maxHeight = "none";
            content.style.minHeight = "auto";
            
            // Add click event listener
            currentStep.addEventListener("click", function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                console.log(`🖱️ Clicked step ${index + 1}`);
                
                const isActive = this.classList.contains("active");
                const stepContent = this.querySelector(".what-its-crafting");
                
                if (!stepContent) {
                    console.warn('⚠️ No content found for this step');
                    return;
                }

                // Close all other steps first
                processSteps.forEach((otherStep, otherIndex) => {
                    if (otherStep !== this) {
                        const otherContent = otherStep.querySelector(".what-its-crafting");
                        if (otherContent && otherStep.classList.contains("active")) {
                            console.log(`🔄 Closing step ${otherIndex + 1}`);
                            otherStep.classList.remove("active");
                            
                            // CRITICAL: Proper close animation
                            otherContent.style.height = otherContent.scrollHeight + "px";
                            otherContent.style.maxHeight = "none";
                            
                            requestAnimationFrame(() => {
                                otherContent.style.height = "0px";
                                otherContent.style.opacity = "0";
                                otherContent.style.maxHeight = "0px";
                            });
                            
                            setTimeout(() => {
                                otherContent.style.display = "none";
                            }, 400);
                        }
                    }
                });

                if (isActive) {
                    // Collapse current step
                    console.log(`📤 Collapsing step ${index + 1}`);
                    this.classList.remove("active");
                    
                    // CRITICAL: Proper collapse animation
                    stepContent.style.height = stepContent.scrollHeight + "px";
                    stepContent.style.maxHeight = "none";
                    
                    requestAnimationFrame(() => {
                        stepContent.style.height = "0px";
                        stepContent.style.opacity = "0";
                        stepContent.style.maxHeight = "0px";
                    });
                    
                    setTimeout(() => {
                        stepContent.style.display = "none";
                    }, 400);
                } else {
                    // Expand current step
                    console.log(`📥 Expanding step ${index + 1}`);
                    this.classList.add("active");
                    
                    // CRITICAL: Proper expand animation
                    stepContent.style.display = "block";
                    stepContent.style.height = "0px";
                    stepContent.style.opacity = "0";
                    stepContent.style.maxHeight = "0px";
                    stepContent.style.overflow = "hidden";
                    
                    // Force reflow
                    stepContent.offsetHeight;
                    
                    requestAnimationFrame(() => {
                        const targetHeight = stepContent.scrollHeight;
                        console.log(`📏 Target height: ${targetHeight}px`);
                        
                        stepContent.style.height = targetHeight + "px";
                        stepContent.style.opacity = "1";
                        stepContent.style.maxHeight = "none";
                    });
                    
                    // Clean up after animation and SCROLL TO KEEP IN VIEW
                    setTimeout(() => {
                        stepContent.style.height = "auto";
                        stepContent.style.maxHeight = "none";
                        stepContent.style.overflow = "visible";
                        console.log(`✅ Step ${index + 1} fully expanded`);
                        
                        // CRITICAL: Scroll the expanded step into view within the services container
                        if (servicesContainer) {
                            const stepRect = this.getBoundingClientRect();
                            const containerRect = servicesContainer.getBoundingClientRect();
                            const stepTop = this.offsetTop;
                            const stepHeight = this.offsetHeight;
                            const containerHeight = servicesContainer.clientHeight;
                            const scrollTop = servicesContainer.scrollTop;
                            
                            // Calculate if step is fully visible
                            const stepVisibleTop = stepTop - scrollTop;
                            const stepVisibleBottom = stepVisibleTop + stepHeight;
                            
                            console.log(`📍 Step position: top=${stepTop}, height=${stepHeight}`);
                            console.log(`📦 Container: height=${containerHeight}, scrollTop=${scrollTop}`);
                            console.log(`👁️ Visible: top=${stepVisibleTop}, bottom=${stepVisibleBottom}`);
                            
                            // Scroll to keep the expanded step in view
                            if (stepVisibleBottom > containerHeight || stepVisibleTop < 0) {
                                const targetScroll = stepTop - (containerHeight / 4); // Keep some padding
                                console.log(`🎯 Scrolling to: ${targetScroll}`);
                                
                                servicesContainer.scrollTo({
                                    top: Math.max(0, targetScroll),
                                    behavior: 'smooth'
                                });
                            }
                        }
                    }, 400);
                }
            });
            
            // Add keyboard support
            currentStep.addEventListener("keydown", function(e) {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    this.click();
                }
            });
            
            // Make it focusable and accessible
            currentStep.setAttribute("tabindex", "0");
            currentStep.setAttribute("role", "button");
            currentStep.setAttribute("aria-expanded", "false");
            currentStep.style.cursor = "pointer";
            
            // Update aria-expanded when state changes
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                        const isActive = currentStep.classList.contains('active');
                        currentStep.setAttribute('aria-expanded', isActive.toString());
                    }
                });
            });
            
            observer.observe(currentStep, {
                attributes: true,
                attributeFilter: ['class']
            });
        });
        
        console.log('✅ Process accordion setup complete with scrollbar support');
    }, 100);
}

// NEW: Values section visibility fix - pure visibility approach
function setupValuesVisibilityFix() {
    console.log('🎨 Setting up values visibility fix...');
    
    // Function to make values visible
    const makeValuesVisible = () => {
        const valuesCards = document.querySelectorAll('.card9');
        const valuesHeader = document.querySelector('.header3');
        const valuesSection = document.querySelector('.content-frame');
        
        console.log(`🔍 Values visibility check: ${valuesCards.length} cards found`);
        
        if (valuesCards.length > 0) {
            // Ensure the section is visible
            if (valuesSection) {
                valuesSection.style.opacity = '1';
                valuesSection.style.visibility = 'visible';
                valuesSection.style.display = 'flex';
            }
            
            // Make header visible
            if (valuesHeader) {
                valuesHeader.style.opacity = '1';
                valuesHeader.style.visibility = 'visible';
                valuesHeader.style.transform = 'translateX(0)';
            }
            
            // Make cards visible with staggered animation
            valuesCards.forEach((card, index) => {
                // Reset any hidden states
                card.style.opacity = '0';
                card.style.visibility = 'visible';
                card.style.transform = 'translateY(30px)';
                
                // Animate in with delay
                setTimeout(() => {
                    card.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                    
                    console.log(`✨ Made visible: ${card.querySelector('.heading-310')?.textContent || `Card ${index + 1}`}`);
                }, index * 200);
            });
            
            console.log('🎉 Values section made visible successfully');
            return true;
        }
        return false;
    };
    
    // Try immediately
    if (!makeValuesVisible()) {
        // If not found, set up observer to try when section appears
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('👁️ Values section intersecting, making visible...');
                    makeValuesVisible();
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });
        
        // Try to observe the values section
        const checkForValuesSection = () => {
            const valuesSection = document.querySelector('.content-frame');
            if (valuesSection) {
                observer.observe(valuesSection);
                console.log('👁️ Values section observer attached');
                return true;
            }
            return false;
        };
        
        // Try multiple times to find the section
        if (!checkForValuesSection()) {
            setTimeout(() => {
                if (!checkForValuesSection()) {
                    setTimeout(() => {
                        checkForValuesSection();
                    }, 1000);
                }
            }, 500);
        }
    }
    
    // Also try when page is fully loaded
    window.addEventListener('load', () => {
        setTimeout(makeValuesVisible, 500);
    });
    
    // Expose function globally for manual triggering
    window.makeValuesVisible = makeValuesVisible;
}

// Main scroll animations with intersection observer
function setupScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3
    };

    const animatedElements = [
        '.success-story-content',
        '.description',
        '.content1',
        '.mission',
        '.content7',
        '.development',
        '.transform-container',
        '.card-parent',
        '.cards'
    ];

    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add slide-up animation class
                entry.target.classList.add("slide-up");
                
                // Special handling for card parents
                if (entry.target.classList.contains('card-parent')) {
                    // Add staggered animation to cards
                    const cards = entry.target.querySelectorAll('.card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('slide-up-card');
                        }, index * 200); // 200ms delay between cards
                    });
                }
                
                // Special handling for process section
                if (entry.target.classList.contains('development')) {
                    const processSteps = entry.target.querySelectorAll('.border2');
                    processSteps.forEach((step, index) => {
                        setTimeout(() => {
                            step.classList.add('visible');
                        }, index * 150);
                    });
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all animated elements
    animatedElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => observer.observe(element));
    });
}

// About section specific animations
function setupAboutSectionAnimations() {
    const lightTrails = document.querySelector(".light-trails-buildings-icon");
    const frameContainer = document.querySelector(".frame-container");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target === lightTrails) {
                    lightTrails.classList.add("visible");
                }
                if (entry.target === frameContainer) {
                    frameContainer.classList.add("visible");
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe elements if they exist
    if (lightTrails) observer.observe(lightTrails);
    if (frameContainer) observer.observe(frameContainer);
}

// Utility function for staggered animations
function addStaggeredAnimation(elements, className, delay = 200) {
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add(className);
        }, index * delay);
    });
}

// Parallax effect for hero section
function setupParallaxEffect() {
    const hero = document.querySelector('.hero');
    const backgroundVideo = document.querySelector('.background-video');
    
    if (hero && backgroundVideo) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            if (scrolled < window.innerHeight) {
                backgroundVideo.style.transform = `translateY(${rate}px)`;
            }
        });
    }
}

// Smooth reveal animation for sections
function setupSectionReveal() {
    const sections = document.querySelectorAll('section');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, revealOptions);
    
    sections.forEach(section => {
        section.classList.add('reveal');
        revealOnScroll.observe(section);
    });
}

// Initialize advanced animations after page load
window.addEventListener('load', () => {
    setupParallaxEffect();
    setupSectionReveal();
});

// Scroll progress indicator
function setupScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Loading animation
function showLoadingAnimation() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = '<div class="loader-spinner"></div>';
    document.body.appendChild(loader);
    
    window.addEventListener('load', () => {
        loader.classList.add('fade-out');
        setTimeout(() => {
            loader.remove();
        }, 500);
    });
}

// Global toggle function for backward compatibility
window.toggleCollapse = function(element) {
    console.log('🔄 Legacy toggleCollapse called');
    if (element && element.click) {
        element.click();
    }
};

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
    // Any scroll-based animations can be added here
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);

// Debug function for process section
window.debugProcess = function() {
    const processSection = document.querySelector('.development');
    const processSteps = document.querySelectorAll('.border2');
    const servicesContainer = document.querySelector('.services');
    
    console.log('🔍 Process Debug Info:');
    console.log('Process Section:', processSection);
    console.log('Process Steps:', processSteps.length);
    console.log('Services Container:', servicesContainer);
    console.log('Container scroll height:', servicesContainer?.scrollHeight);
    console.log('Container client height:', servicesContainer?.clientHeight);
    console.log('Container scroll top:', servicesContainer?.scrollTop);
    
    processSteps.forEach((step, index) => {
        const content = step.querySelector('.what-its-crafting');
        const title = step.querySelector('.digital-marketing2');
        console.log(`Step ${index + 1}:`, {
            element: step,
            title: title?.textContent,
            content: content,
            hasContent: !!content,
            isActive: step.classList.contains('active'),
            contentHeight: content?.scrollHeight,
            contentDisplay: content?.style.display,
            offsetTop: step.offsetTop,
            offsetHeight: step.offsetHeight
        });
    });
    
    if (processSteps.length === 0) {
        console.error('❌ No process steps found!');
        console.log('🔧 Attempting to reinitialize...');
        setupProcessAccordion();
    }
};

// Debug function for values section
window.debugValues = function() {
    const valuesSection = document.querySelector('.content-frame');
    const valuesCards = document.querySelectorAll('.card9');
    const valuesComponent = document.getElementById('values-component');
    
    console.log('🔍 Values Debug Info:');
    console.log('Values Section:', valuesSection);
    console.log('Values Cards:', valuesCards.length);
    console.log('Values Component Container:', valuesComponent);
    
    if (valuesCards.length === 0) {
        console.error('❌ No values cards found!');
    } else {
        console.log('✅ Values cards found, making them visible...');
        if (window.makeValuesVisible) {
            window.makeValuesVisible();
        }
    }
};

// Manual process accordion trigger
window.triggerProcessAccordion = function() {
    console.log('🔧 Manual process accordion trigger');
    setupProcessAccordion();
};

// Manual scroll test for services container
window.testServicesScroll = function() {
    const servicesContainer = document.querySelector('.services');
    if (servicesContainer) {
        console.log('📦 Testing services container scroll...');
        servicesContainer.scrollTo({
            top: servicesContainer.scrollHeight / 2,
            behavior: 'smooth'
        });
        
        setTimeout(() => {
            console.log('📍 Current scroll position:', servicesContainer.scrollTop);
        }, 1000);
    } else {
        console.error('❌ Services container not found!');
    }
};