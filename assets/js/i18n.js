// i18n.js - Simplified Internationalization utilities

// Default language
let currentLanguage = 'en';

// Cache for loaded translations
const translationsCache = {};

// Load translations for a specific language
async function loadTranslations(lang) {
    if (translationsCache[lang]) {
        return translationsCache[lang];
    }
    
    try {
        const response = await fetch(`assets/js/i18n/${lang}.json`);
        if (!response.ok) {
            console.error(`Failed to load translations for ${lang}: HTTP ${response.status}`);
            return null;
        }
        
        const translations = await response.json();
        translationsCache[lang] = translations;
        return translations;
    } catch (error) {
        console.error(`Error loading translations for ${lang}:`, error);
        return null;
    }
}

// Set the page direction based on language
function setPageDirection(lang) {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // Add language-specific class to body
    document.body.classList.remove('lang-en', 'lang-ar');
    document.body.classList.add(`lang-${lang}`);
}

// Apply translations to the page
async function applyTranslations(lang) {
    console.log(`🌐 Applying translations for language: ${lang}`);
    
    const translations = await loadTranslations(lang);
    if (!translations) {
        console.error(`❌ Failed to load translations for ${lang}`);
        return false;
    }
    
    currentLanguage = lang;
    setPageDirection(lang);
    
    // Store the language preference
    localStorage.setItem('preferredLanguage', lang);
    
    // Apply translations to navigation
    updateNavigation(translations.navigation);
    
    // Apply translations to each section
    updateHeroSection(translations.hero);
    updateAboutSection(translations.about);
    updateServicesSection(translations.services);
    updateAchievementsSection(translations.achievements);
    updateMissionSection(translations.mission);
    updateValuesSection(translations.values);
    updateProcessSection(translations.process);
    updateCTASection(translations.cta);
    updateFooterSection(translations.footer);
    
    console.log(`✅ Successfully applied translations for ${lang}`);
    return true;
}

// Update navigation elements
function updateNavigation(navTranslations) {
    // Update desktop navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    if (navLinks.length >= 7) {
        navLinks[0].textContent = navTranslations.home;
        navLinks[1].textContent = navTranslations.aboutUs;
        navLinks[2].textContent = navTranslations.ourServices;
        navLinks[3].textContent = navTranslations.ourMission;
        navLinks[4].textContent = navTranslations.ourAchievements;
        navLinks[5].textContent = navTranslations.ourProcess;
        
        // Language toggle - update text and href
        const langLink = navLinks[6];
        if (langLink) {
            if (currentLanguage === 'en') {
                langLink.textContent = 'العربية';
                langLink.href = 'arabic.html';
            } else {
                langLink.textContent = 'English';
                langLink.href = 'index.html';
            }
        }
    }
    
    // Update mobile navigation
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    if (mobileNavLinks.length >= 7) {
        mobileNavLinks[0].textContent = navTranslations.home;
        mobileNavLinks[1].textContent = navTranslations.aboutUs;
        mobileNavLinks[2].textContent = navTranslations.ourServices;
        mobileNavLinks[3].textContent = navTranslations.ourMission;
        mobileNavLinks[4].textContent = navTranslations.ourAchievements;
        mobileNavLinks[5].textContent = navTranslations.ourProcess;
        
        // Language toggle - update text and href
        const langLink = mobileNavLinks[6];
        if (langLink) {
            if (currentLanguage === 'en') {
                langLink.textContent = 'العربية';
                langLink.href = 'arabic.html';
            } else {
                langLink.textContent = 'English';
                langLink.href = 'index.html';
            }
        }
    }
    
    // Update contact button
    const contactButton = document.querySelector('.lets-talk');
    if (contactButton) {
        contactButton.textContent = navTranslations.contact;
    }
}

// Update hero section
function updateHeroSection(heroTranslations) {
    const heroTitle = document.getElementById('herosec');
    const heroSubtitle = document.getElementById('herosecwords');
    const heroCta = document.querySelector('.hero-cta-button b');
    
    if (heroTitle) {
        if (currentLanguage === 'ar') {
            heroTitle.innerHTML = 'شركة حلول رقمية في <span class="highlight">المملكة العربية السعودية</span>';
        } else {
            heroTitle.innerHTML = 'Digital Solution <span class="highlight">Company</span> in Saudi Arabia';
        }
    }
    if (heroSubtitle) heroSubtitle.textContent = heroTranslations.subtitle;
    if (heroCta) heroCta.textContent = heroTranslations.cta;
}

// Update about section
function updateAboutSection(aboutTranslations) {
    const aboutTitle = document.querySelector('.heading-2');
    const aboutHeading = document.querySelector('.turning-ideas-into-container');
    const aboutDescription = document.querySelector('.athkado-based-in');
    const aboutCta = document.querySelector('.frame-container .get-in-touch');
    
    if (aboutTitle) aboutTitle.textContent = aboutTranslations.title;
    
    if (aboutHeading) {
        if (currentLanguage === 'ar') {
            aboutHeading.innerHTML = `
                <span>
                    <span class="turning">
                        <span>تحويل</span>
                        <span class="span"> </span>
                    </span>
                    <span class="span">
                        <span class="ideas1">الأفكار</span>
                    </span>
                    <span class="turning"> إلى برمجيات وبيانات مؤثرة</span>
                </span>
            `;
        } else {
            aboutHeading.innerHTML = `
                <span>
                    <span class="turning">
                        <span>Turning</span>
                        <span class="span"> </span>
                    </span>
                    <span class="span">
                        <span class="ideas1">Ideas</span>
                    </span>
                    <span class="turning"> into Impactful Software & Data</span>
                </span>
            `;
        }
    }
    
    if (aboutDescription) aboutDescription.textContent = aboutTranslations.description;
    if (aboutCta) aboutCta.textContent = aboutTranslations.cta;
}

// Update services section
function updateServicesSection(servicesTranslations) {
    const servicesTitle = document.querySelector('.success-story-heading .heading-21');
    const servicesHeading = document.querySelector('.your-success-story-container');
    const servicesDescription = document.querySelector('.our-digital-services');
    const servicesCta = document.querySelector('#our-services-sec .get-in-touch');
    
    if (servicesTitle) servicesTitle.textContent = servicesTranslations.title;
    
    if (servicesHeading) {
        if (currentLanguage === 'ar') {
            servicesHeading.innerHTML = `
                <span class="turning">قصة نجاحك تبدأ مع</span>
                <span class="ideas1"> أذكي التطويرية</span>
            `;
        } else {
            servicesHeading.innerHTML = `
                <span class="turning">Your Success Story Begins With</span>
                <span class="ideas1"> AthkaDo</span>
            `;
        }
    }
    
    if (servicesDescription) servicesDescription.textContent = servicesTranslations.description;
    if (servicesCta) servicesCta.textContent = servicesTranslations.cta;
    
    // Update service cards
    const serviceCards = document.querySelectorAll('.card .heading-3-container');
    const serviceDescriptions = document.querySelectorAll('.card .responsive-engaging-apps-container .our-digital-services');
    
    if (servicesTranslations.cards) {
        serviceCards.forEach((card, index) => {
            if (index < servicesTranslations.cards.length) {
                card.textContent = servicesTranslations.cards[index].title;
            }
        });
        
        serviceDescriptions.forEach((desc, index) => {
            if (index < servicesTranslations.cards.length) {
                desc.textContent = servicesTranslations.cards[index].description;
            }
        });
    }
    
    // Update special service cards
    const specialCardTitles = document.querySelectorAll('.cards .heading-35');
    const specialCardDescriptions = document.querySelectorAll('.cards .bringing-your-ideas');
    
    if (servicesTranslations.specialCards) {
        specialCardTitles.forEach((title, index) => {
            if (index < servicesTranslations.specialCards.length) {
                title.textContent = servicesTranslations.specialCards[index].title;
            }
        });
        
        specialCardDescriptions.forEach((desc, index) => {
            if (index < servicesTranslations.specialCards.length) {
                const textElement = desc.querySelector('.our-digital-services') || desc;
                textElement.textContent = servicesTranslations.specialCards[index].description;
            }
        });
    }
}

// Update achievements section
function updateAchievementsSection(achievementsTranslations) {
    const achievementsTitle = document.querySelector('#our-achievment-sec .heading-21');
    const achievementsHeading = document.querySelector('#our-achievment-sec .your-success-story-container');
    const achievementsDescription = document.querySelector('#our-achievment-sec .our-digital-services');
    
    if (achievementsTitle) achievementsTitle.textContent = achievementsTranslations.title;
    
    if (achievementsHeading) {
        if (currentLanguage === 'ar') {
            achievementsHeading.innerHTML = `
                <span class="turning">إنجازات</span>
                <span class="ideas1"> تأثيرنا في</span>
                <span class="turning"> دفع التقدم</span>
            `;
        } else {
            achievementsHeading.innerHTML = `
                <span class="turning">Our</span>
                <span class="ideas1"> Impact Achievements</span>
                <span class="turning"> in Driving Progress</span>
            `;
        }
    }
    
    if (achievementsDescription) achievementsDescription.textContent = achievementsTranslations.description;
    
    // Update achievement items
    const achievementTitles = document.querySelectorAll('.timeline-heading');
    const achievementDescriptions = document.querySelectorAll('.timeline-description');
    
    if (achievementsTranslations.items) {
        achievementTitles.forEach((title, index) => {
            if (index < achievementsTranslations.items.length) {
                title.textContent = achievementsTranslations.items[index].title;
            }
        });
        
        achievementDescriptions.forEach((desc, index) => {
            if (index < achievementsTranslations.items.length) {
                desc.textContent = achievementsTranslations.items[index].description;
            }
        });
    }
}

// Update mission section
function updateMissionSection(missionTranslations) {
    const missionTitle = document.querySelector('#our-mission-sec .heading-21');
    const missionHeading = document.querySelector('.at-athkado-our-container');
    const missionDescription = document.querySelector('.to-be-your-container .our-digital-services');
    
    if (missionTitle) missionTitle.textContent = missionTranslations.title;
    
    if (missionHeading) {
        if (currentLanguage === 'ar') {
            missionHeading.innerHTML = `
                <span class="turning">في أذكي التطويرية، </span>
                <b class="span">مهمتنا</b>
                <span class="turning"> بسيطة</span>
            `;
        } else {
            missionHeading.innerHTML = `
                <span class="turning">At AthkaDo, </span>
                <b class="span">Our mission</b>
                <span class="turning"> is simple</span>
            `;
        }
    }
    
    if (missionDescription) missionDescription.textContent = missionTranslations.description;
}

// Update values section
function updateValuesSection(valuesTranslations) {
    const valuesTitle = document.querySelector('.header3 .heading-27');
    const valuesHeading = document.querySelector('.your-success-story-container1');
    
    if (valuesTitle) valuesTitle.textContent = valuesTranslations.title;
    
    if (valuesHeading) {
        if (currentLanguage === 'ar') {
            valuesHeading.innerHTML = `
                <span>
                    <span class="turning">قصة </span>
                    <b class="ideas1">نجاحك</b>
                    <span class="turning"> تبدأ مع أذكي التطويرية</span>
                </span>
            `;
        } else {
            valuesHeading.innerHTML = `
                <span>
                    <span class="turning">Your </span>
                    <b class="ideas1">Success Story</b>
                    <span class="turning"> Begins With AthkaDo</span>
                </span>
            `;
        }
    }
    
    // Update values cards
    const valuesTitles = document.querySelectorAll('.card9 .heading-310');
    const valuesDescriptions = document.querySelectorAll('.card9 .expanding-our-reach1, .card9 .expanding-our-reach2, .card9 .expanding-our-reach4');
    
    if (valuesTranslations.cards) {
        valuesTitles.forEach((title, index) => {
            if (index < valuesTranslations.cards.length) {
                title.textContent = valuesTranslations.cards[index].title;
            }
        });
        
        valuesDescriptions.forEach((desc, index) => {
            if (index < valuesTranslations.cards.length) {
                desc.textContent = valuesTranslations.cards[index].description;
            }
        });
    }
}

// Update process section
function updateProcessSection(processTranslations) {
    const processTitle = document.querySelector('#process-sec');
    const processHeading = document.querySelector('.our-agile-container .our-digital-services-container1');
    const processDescription = document.querySelector('.combining-agile-development');
    
    if (processTitle) processTitle.textContent = processTranslations.title;
    
    if (processHeading) {
        if (currentLanguage === 'ar') {
            processHeading.innerHTML = `
                <span class="turning">نهجنا </span>
                <span class="agile">المرن</span>
                <span class="turning"> و</span>
                <span class="agile">القائم على البيانات</span>
            `;
        } else {
            processHeading.innerHTML = `
                <span class="turning">Our </span>
                <span class="agile">Agile</span>
                <span class="turning"> & </span>
                <span class="agile">Data-Driven</span>
                <span class="turning"> Approach</span>
            `;
        }
    }
    
    if (processDescription) processDescription.textContent = processTranslations.description;
    
    // Update process steps
    const processStepTitles = document.querySelectorAll('.digital-marketing2');
    const processStepDescriptions = document.querySelectorAll('.what-its-crafting');
    
    if (processTranslations.steps) {
        processStepTitles.forEach((title, index) => {
            if (index < processTranslations.steps.length) {
                title.textContent = processTranslations.steps[index].title;
            }
        });
        
        processStepDescriptions.forEach((desc, index) => {
            if (index < processTranslations.steps.length) {
                desc.textContent = processTranslations.steps[index].description;
            }
        });
    }
}

// Update CTA section
function updateCTASection(ctaTranslations) {
    const ctaHeading = document.querySelector('.lets-transform-your-container');
    const ctaDescription = document.querySelector('.transform .lets-connect-and');
    const ctaButton = document.querySelector('.transform .get-in-touch');
    
    if (ctaHeading) {
        if (currentLanguage === 'ar') {
            ctaHeading.innerHTML = `
                <span>
                    <span>دعنا نحول </span>
                    <span class="span">عملك</span>
                    <span> معًا!</span>
                </span>
            `;
        } else {
            ctaHeading.innerHTML = `
                <span>
                    <span>Let's Transform Your </span>
                    <span class="span">Business</span>
                    <span> Together!</span>
                </span>
            `;
        }
    }
    
    if (ctaDescription) ctaDescription.textContent = ctaTranslations.description;
    if (ctaButton) ctaButton.textContent = ctaTranslations.button;
}

// Update footer section
function updateFooterSection(footerTranslations) {
    const footerDescription = document.querySelector('.footer-description .lets-connect-and1');
    
    if (footerDescription) footerDescription.textContent = footerTranslations.description;
    
    // Update social links
    const socialTitles = document.querySelectorAll('.heading-315');
    if (socialTitles.length >= 3) {
        socialTitles[0].textContent = footerTranslations.social.linkedin;
        socialTitles[1].textContent = footerTranslations.social.instagram;
        socialTitles[2].textContent = footerTranslations.social.twitter;
    }
    
    // Update contact information labels
    const contactLabels = document.querySelectorAll('.email-infoathkadocom-container span:first-child, .phone-966-container span:first-child');
    if (contactLabels.length >= 3) {
        contactLabels[0].textContent = footerTranslations.contact.email;
        contactLabels[1].textContent = footerTranslations.contact.phone;
        contactLabels[2].textContent = footerTranslations.contact.office;
    }
    
    // Update copyright
    const copyright = document.querySelector('.athka-it-solutions');
    if (copyright) copyright.textContent = footerTranslations.copyright;
}

// Initialize language based on current page
async function initializeLanguage() {
    console.log('🌐 Initializing language...');
    
    // Wait for components to load
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Determine which language to use based on the current page
    const isArabicPage = window.location.pathname.includes('arabic.html');
    const targetLang = isArabicPage ? 'ar' : 'en';
    
    console.log(`📍 Current page indicates language: ${targetLang}`);
    
    // Apply the selected language
    await applyTranslations(targetLang);
}

// Export functions for use in other scripts
window.i18n = {
    initialize: initializeLanguage,
    getCurrentLanguage: () => currentLanguage
};

// Auto-initialize when the script loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('🌐 i18n.js loaded, waiting for components...');
    
    // Wait for components to load before initializing language
    setTimeout(initializeLanguage, 3000);
});