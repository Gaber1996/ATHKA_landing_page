// Simple Language Switching System - INSTANT Translation

// Language content data
const languageContent = {
    en: {
        // Navigation
        navHome: "Home",
        navAbout: "About Us", 
        navServices: "Our Services",
        navMission: "Our Mission",
        navAchievements: "Our Achievements",
        navProcess: "Our Process",
        navContact: "Contact",
        navLanguage: "العربية",
        navLogo:'<img class="testpng-icon" loading="lazy" alt="" src="assets/images/eng logo.png" />',
        // Hero Section
        heroTitle: 'AthkaDO <span class="highlight">Leading Software Company</span> in Saudi Arabia',
        heroSubtitle: "Turning Ideas into Impactful Software & Data Solutions",
        heroCta: "Get In Touch",
        
        // About Section
        aboutTitle: "ABOUT Company",
        aboutHeading: `<span>
            <span class="turning">
                <span>Turning</span>
                <span class="span"> </span>
            </span>
            <span class="span">
                <span class="ideas1">Ideas</span>
            </span>
            <span class="turning"> into Impactful Software & Data</span>
        </span>`,
        aboutDescription: "AthkaDo, based in Saudi Arabia, empowers Gulf businesses with tailored software and data solutions. With local expertise and a passion for innovation, we turn your ideas into impactful, fully functional tech solutions—built to fit your needs from start to finish.",
        aboutCta: "Get In Touch",
        
        // Services Section
        servicesTitle: "Our Services",
        servicesHeading: `<span class="turning">Your Success Story Begins With</span>
        <span class="ideas1"> AthkaDo</span>`,
        servicesDescription: "Our digital services empower brands with innovative strategies and solutions for sustainable growth and engagement.",
        servicesCta: "Get In Touch",
        
        // Service Cards
        serviceCard1Title: "Web & Mobile Development",
        serviceCard1Desc: "Responsive, engaging apps that connect you with your audience across any device",
        serviceCard2Title: "UI/UX Design", 
        serviceCard2Desc: "Intuitive, beautiful interfaces that make every interaction with your brand enjoyable",
        serviceCard3Title: "Data Analytics & Insights",
        serviceCard3Desc: "We transform raw data into insights you can act on: Data Scraping-Data Cleaning-Machine Learning & Predictive Modeling-Statistical Analysis",
        serviceCard4Title: "Automation Solutions",
        serviceCard4Desc: "Streamlining repetitive tasks—including fuel station automation—so you can focus on growth.",
        serviceCard5Title: "Market Research & Business Analysis",
        serviceCard5Desc: "In-depth analysis of industry trends and market insights to refine your strategies and keep you competitive.",
        serviceCard6Title: "Software Consulting & QA",
        serviceCard6Desc: "Your tech partner for strategic guidance and rigorous testing, ensuring smooth, reliable performance.",
        
        // Special Service Cards
        specialCard1Title: "Smart Cities & IoT Solutions",
        specialCard1Desc: "We're helping shape the future of connected cities with IoT solutions that optimize operations, enhance connectivity, and drive smarter, more sustainable urban environments.",
        specialCard2Title: "AR and VR Development",
        specialCard2Desc: "Bringing your ideas to life in immersive digital experiences that captivate users.",
        
        // Achievements Section
        achievementsTitle: "Our Achievements",
        achievementsHeading: `<span class="turning">Our</span>
        <span class="ideas1"> Impact Achievements</span>
        <span class="turning"> in Driving Progress</span>`,
        achievementsDescription: "Driving progress and change across industries and communities with measurable impact and lasting results.",
        achievement1Title: "Global Clients",
        achievement1Desc: "Successfully partnered with businesses across various industries, delivering solutions that meet diverse digital needs and drive meaningful growth worldwide.",
        achievement2Title: "Talented Specialists", 
        achievement2Desc: "A team of dedicated experts who bring depth of knowledge and specialized skills to every project, ensuring excellence in every solution we deliver.",
        achievement3Title: "Regions Served",
        achievement3Desc: "Expanding our reach across multiple regions, fostering innovation and delivering solutions with lasting impact that transform businesses and communities.",
        
        // Mission Section
        missionTitle: "Our Mission",
        missionHeading: `<span class="turning">At AthkaDo, </span>
        <b class="span">Our mission</b>
        <span class="turning"> is simple</span>`,
        missionDescription: "to be your trusted partner in digital transformation, delivering data-driven solutions and custom software to help your business thrive. We're with you every step of the way.",
        
        // Values Section
        valuesTitle: "Our Values",
        valuesHeading: `<span>
            <span class="turning">Your </span>
            <b class="ideas1">Success Story</b>
            <span class="turning"> Begins With AthkaDo</span>
        </span>`,
        value1Title: "Accuracy",
        value1Desc: "attention to detail that ensures precision and reliability in every task.",
        value2Title: "Excellence",
        value2Desc: "From start to finish, we give our best.",
        value3Title: "Integrity", 
        value3Desc: "Honest, transparent, and committed to what's right.",
        value4Title: "Innovation",
        value4Desc: "Fresh ideas and technologies to keep you ahead.",
        value5Title: "Customer-Centricity",
        value5Desc: "Your success is our priority, always.",
        
        // Process Section
        processTitle: "Our Process",
        processHeading: `<span class="turning">Our </span>
        <span class="agile">Agile</span>
        <span class="turning"> & </span>
        <span class="agile">Data-Driven</span>
        <span class="turning"> Approach</span>`,
        processDescription: "Combining Agile development principles with a commitment to data accuracy, our process is designed to adapt to your business needs while maintaining a clear focus on quality.",
        process1Title: "Consultation & Analysis",
        process1Desc: "We begin by understanding your unique goals, challenges, and vision. Through comprehensive analysis and strategic consultation, we define clear pathways for software development or data solutions that align perfectly with your business objectives and market requirements.",
        process2Title: "User-Centered Design",
        process2Desc: "Creating intuitive interfaces and user experiences that prioritize usability and engagement. We design with your users in mind, ensuring every interaction feels natural and purposeful while maintaining aesthetic excellence and functional clarity.",
        process3Title: "Development & Data Integration",
        process3Desc: "Building robust, scalable software solutions while seamlessly integrating accurate data systems. Our development process combines cutting-edge technology with proven methodologies to deliver powerful insights and reliable performance.",
        process4Title: "Quality Assurance",
        process4Desc: "Rigorous testing and verification processes ensure software reliability and data accuracy. We implement comprehensive quality assurance protocols to guarantee optimal performance, security, and user satisfaction across all platforms and use cases.",
        process5Title: "Deployment & Support",
        process5Desc: "Seamless deployment of solutions with comprehensive ongoing support. We ensure smooth transitions, provide thorough training, and maintain continuous support to guarantee your continued success and system optimization.",
        
        // CTA Section
        ctaHeading: `<span>
            <span>Let's Transform Your </span>
            <span class="span">Business</span>
            <span> Together!</span>
        </span>`,
        ctaDescription: "Let's connect and explore how AthkaDo can help you achieve your digital goals with solutions designed for the Gulf market. We're here to support your vision every step of the way!",
        ctaButton: "Get In Touch",
        
        // Footer Section
        footerDescription: "Let's connect and explore how AthkaDo can help you achieve your digital goals with solutions designed for the Gulf market. We're here to support your vision every step of the way!",
        footerLinkedin: "Join Us On Linked In",
        footerInstagram: "Follow On Instagram", 
        footerTwitter: "Follow Us On Twitter",
        footerEmail: "Email",
        footerPhone: "Phone",
        footerOffice: "Office",
        footerOfficeAddress: "Al-Khaleej St, Al-Zuhur, Dammam, Saudi Arabia",
        footerCopyright: "© 2024 ATHKA IT Solutions. All rights reserved."
    },
    
    ar: {
        // Navigation
        navHome: "الرئيسية",
        navAbout: "من نحن",
        navServices: "خدماتنا", 
        navMission: "مهمتنا",
        navAchievements: "إنجازاتنا",
        navProcess: "منهجيتنا",
        navContact: "تواصل معنا",
        navLanguage: "English",
        navLogo:'<img class="testpng-icon" loading="lazy" alt="" src="assets/images/ar logo.png" />',
        
        // Hero Section
        heroTitle: 'أذكى التطويرية <span class="highlight">الشركة الرائدة في البرمجيات</span> في المملكة العربية السعودية',
        heroSubtitle: "تحويل الأفكار إلى حلول برمجية وبيانات مؤثرة",
        heroCta: "تواصل معنا",
        
        // About Section
        aboutTitle: "عن الشركة",
        aboutHeading: `<span>
            <span class="turning">
                <span>تحويل</span>
                <span class="span"> </span>
            </span>
            <span class="span">
                <span class="ideas1">الأفكار</span>
            </span>
            <span class="turning"> إلى برمجيات وبيانات مؤثرة</span>
        </span>`,
        aboutDescription: "أذكى التطويرية، ومقرها المملكة العربية السعودية، تمكّن الشركات الخليجية بحلول برمجية وبيانات مخصصة. بخبرتنا المحلية وشغفنا بالابتكار، نحول أفكارك إلى حلول تقنية مؤثرة وعملية - مصممة لتناسب احتياجاتك من البداية إلى النهاية.",
        aboutCta: "تواصل معنا",
        
        // Services Section
        servicesTitle: "خدماتنا",
        servicesHeading: `<span class="turning">قصة نجاحك تبدأ مع</span>
        <span class="ideas1"> أذكى التطويرية</span>`,
        servicesDescription: "خدماتنا الرقمية تمكّن العلامات التجارية باستراتيجيات وحلول مبتكرة للنمو المستدام والتفاعل.",
        servicesCta: "تواصل معنا",
        
        // Service Cards
        serviceCard1Title: "تطوير الويب والجوال",
        serviceCard1Desc: "تطبيقات متجاوبة وجذابة تربطك بجمهورك عبر أي جهاز",
        serviceCard2Title: "تصميم واجهة المستخدم",
        serviceCard2Desc: "واجهات بديهية وجميلة تجعل كل تفاعل مع علامتك التجارية ممتعًا",
        serviceCard3Title: "تحليل البيانات والرؤى",
        serviceCard3Desc: "نحول البيانات الخام إلى رؤى يمكنك التصرف بناءً عليها: استخراج البيانات - تنظيف البيانات - التعلم الآلي والنمذجة التنبؤية - التحليل الإحصائي",
        serviceCard4Title: "حلول الأتمتة",
        serviceCard4Desc: "تبسيط المهام المتكررة - بما في ذلك أتمتة محطات الوقود - حتى تتمكن من التركيز على النمو.",
        serviceCard5Title: "أبحاث السوق وتحليل الأعمال",
        serviceCard5Desc: "تحليل متعمق لاتجاهات الصناعة ورؤى السوق لتحسين استراتيجياتك والحفاظ على تنافسيتك.",
        serviceCard6Title: "استشارات البرمجيات وضمان الجودة",
        serviceCard6Desc: "شريكك التقني للتوجيه الاستراتيجي والاختبار الدقيق، مما يضمن أداءً سلسًا وموثوقًا.",
        
        // Special Service Cards
        specialCard1Title: "حلول المدن الذكية وإنترنت الأشياء",
        specialCard1Desc: "نحن نساعد في تشكيل مستقبل المدن المتصلة بحلول إنترنت الأشياء التي تحسن العمليات، وتعزز الاتصال، وتدفع بيئات حضرية أكثر ذكاءً واستدامة.",
        specialCard2Title: "تطوير الواقع المعزز والواقع الافتراضي",
        specialCard2Desc: "إحياء أفكارك في تجارب رقمية غامرة تأسر المستخدمين.",
        
        // Achievements Section
        achievementsTitle: "إنجازاتنا",
        achievementsHeading: `<span class="turning">إنجازات</span>
        <span class="ideas1"> تأثيرنا في</span>
        <span class="turning"> دفع التقدم</span>`,
        achievementsDescription: "دفع التقدم والتغيير عبر الصناعات والمجتمعات بتأثير قابل للقياس ونتائج دائمة.",
        achievement1Title: "عملاء عالميين",
        achievement1Desc: "شراكة ناجحة مع شركات عبر مختلف الصناعات، وتقديم حلول تلبي الاحتياجات الرقمية المتنوعة وتدفع النمو الهادف في جميع أنحاء العالم.",
        achievement2Title: "متخصصين موهوبين",
        achievement2Desc: "فريق من الخبراء المتفانين الذين يجلبون عمق المعرفة والمهارات المتخصصة لكل مشروع، مما يضمن التميز في كل حل نقدمه.",
        achievement3Title: "مناطق مخدومة",
        achievement3Desc: "توسيع نطاق وصولنا عبر مناطق متعددة، وتعزيز الابتكار وتقديم حلول ذات تأثير دائم تحول الشركات والمجتمعات.",
        
        // Mission Section
        missionTitle: "مهمتنا",
        missionHeading: `<span class="turning">في أذكى التطويرية، </span>
        <b class="span">مهمتنا</b>
        <span class="turning"> بسيطة</span>`,
        missionDescription: "أن نكون شريكك الموثوق في التحول الرقمي، وتقديم حلول قائمة على البيانات وبرمجيات مخصصة لمساعدة عملك على الازدهار. نحن معك في كل خطوة من الطريق.",
        
        // Values Section
        valuesTitle: "قيمنا",
        valuesHeading: `<span>
            <span class="turning">قصة </span>
            <b class="ideas1">نجاحك</b>
            <span class="turning"> تبدأ مع أذكى التطويرية</span>
        </span>`,
        value1Title: "الدقة",
        value1Desc: "الاهتمام بالتفاصيل التي تضمن الدقة والموثوقية في كل مهمة.",
        value2Title: "التميز",
        value2Desc: "من البداية إلى النهاية، نقدم أفضل ما لدينا.",
        value3Title: "النزاهة",
        value3Desc: "صادقون، شفافون، وملتزمون بما هو صحيح.",
        value4Title: "الابتكار",
        value4Desc: "أفكار وتقنيات جديدة للحفاظ على تقدمك.",
        value5Title: "التركيز على العميل",
        value5Desc: "نجاحك هو أولويتنا، دائمًا.",
        
        // Process Section
        processTitle: "منهجيتنا",
        processHeading: `<span class="turning">نهجنا </span>
        <span class="agile">المرن</span>
        <span class="turning"> و</span>
        <span class="agile">القائم على البيانات</span>`,
        processDescription: "الجمع بين مبادئ التطوير المرن والالتزام بدقة البيانات، تم تصميم عمليتنا للتكيف مع احتياجات عملك مع الحفاظ على التركيز الواضح على الجودة.",
        process1Title: "الاستشارة والتحليل",
        process1Desc: "نبدأ بفهم أهدافك وتحدياتك ورؤيتك الفريدة. من خلال التحليل الشامل والاستشارات الاستراتيجية، نحدد مسارات واضحة لتطوير البرمجيات أو حلول البيانات التي تتوافق تمامًا مع أهداف عملك ومتطلبات السوق.",
        process2Title: "تصميم يركز على المستخدم",
        process2Desc: "إنشاء واجهات وتجارب مستخدم بديهية تعطي الأولوية لسهولة الاستخدام والمشاركة. نحن نصمم مع وضع مستخدميك في الاعتبار، مما يضمن أن كل تفاعل يشعر بأنه طبيعي وهادف مع الحفاظ على التميز الجمالي والوضوح الوظيفي.",
        process3Title: "التطوير وتكامل البيانات",
        process3Desc: "بناء حلول برمجية قوية وقابلة للتوسع مع دمج أنظمة بيانات دقيقة بسلاسة. تجمع عملية التطوير لدينا بين أحدث التقنيات والمنهجيات المثبتة لتقديم رؤى قوية وأداء موثوق.",
        process4Title: "ضمان الجودة",
        process4Desc: "عمليات اختبار وتحقق صارمة تضمن موثوقية البرمجيات ودقة البيانات. نحن ننفذ بروتوكولات شاملة لضمان الجودة لضمان الأداء الأمثل والأمان ورضا المستخدم عبر جميع المنصات وحالات الاستخدام.",
        process5Title: "النشر والدعم",
        process5Desc: "نشر سلس للحلول مع دعم شامل مستمر. نحن نضمن انتقالات سلسة، ونقدم تدريبًا شاملاً، ونحافظ على الدعم المستمر لضمان نجاحك المستمر وتحسين النظام.",
        
        // CTA Section
        ctaHeading: `<span>
            <span>دعنا نحول </span>
            <span class="span">عملك</span>
            <span> معًا!</span>
        </span>`,
        ctaDescription: "دعنا نتواصل ونستكشف كيف يمكن لـ أذكى التطويرية أن تساعدك في تحقيق أهدافك الرقمية من خلال حلول تقنية مصممة خصيصًا لاحتياجاتك. نحن هنا لدعم رؤيتك في كل خطوة على الطريق!",
        ctaButton: "تواصل معنا",
        
        // Footer Section
        footerDescription: "دعنا نتواصل ونستكشف كيف يمكن لأذكى التطويرية أن تساعدك في تحقيق أهدافك الرقمية بحلول مصممة للسوق الخليجي. نحن هنا لدعم رؤيتك في كل خطوة من الطريق!",
        footerLinkedin: "انضم إلينا على لينكد إن",
        footerInstagram: "تابعنا على انستغرام",
        footerTwitter: "تابعنا على تويتر",
        footerEmail: "البريد الإلكتروني",
        footerPhone: "الهاتف",
        footerOffice: "المكتب",
        footerOfficeAddress: "شارع الخليج، الزهور، الدمام، المملكة العربية السعودية",
        footerCopyright: "© 2024 حلول أذكى التطويرية لتقنية المعلومات. جميع الحقوق محفوظة."
    }
};

// Current language
let currentLang = 'en';

// Function to detect current page language
function detectLanguage() {
    const isArabicPage = window.location.pathname.includes('arabic.html');
    return isArabicPage ? 'ar' : 'en';
}

// Function to set page direction and class - SIMPLIFIED
function setPageDirection(lang) {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.body.classList.remove('lang-en', 'lang-ar');
    document.body.classList.add(`lang-${lang}`);
}

// Function to update a single element safely
function updateElement(selector, content, isHTML = false) {
    const element = document.querySelector(selector);
    if (element) {
        if (isHTML) {
            element.innerHTML = content;
        } else {
            element.textContent = content;
        }
        return true;
    }
    return false;
}

// Function to update multiple elements
function updateElements(selector, content, isHTML = false) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        if (isHTML) {
            element.innerHTML = content;
        } else {
            element.textContent = content;
        }
    });
    return elements.length > 0;
}

// Main translation function - INSTANT VERSION - SIMPLIFIED
function applyTranslations(lang) {
    console.log(`🌐 Applying ${lang} translations INSTANTLY...`);
    
    const content = languageContent[lang];
    if (!content) {
        console.error(`❌ No content found for language: ${lang}`);
        return;
    }
    
    currentLang = lang;
    setPageDirection(lang);
    
    // INSTANT: Update Navigation
    const navLinks = document.querySelectorAll('.nav-link');
    if (navLinks.length >= 7) {
        navLinks[0].textContent = content.navHome;
        navLinks[1].textContent = content.navAbout;
        navLinks[2].textContent = content.navServices;
        navLinks[3].textContent = content.navMission;
        navLinks[4].textContent = content.navAchievements;
        navLinks[5].textContent = content.navProcess;
        
        // Update language link
        navLinks[6].textContent = content.navLanguage;
        navLinks[6].href = lang === 'en' ? 'arabic.html' : 'index.html';
    }
    
    // INSTANT: Update Mobile Navigation
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    if (mobileNavLinks.length >= 7) {
        mobileNavLinks[0].textContent = content.navHome;
        mobileNavLinks[1].textContent = content.navAbout;
        mobileNavLinks[2].textContent = content.navServices;
        mobileNavLinks[3].textContent = content.navMission;
        mobileNavLinks[4].textContent = content.navAchievements;
        mobileNavLinks[5].textContent = content.navProcess;
        
        // Update language link
        mobileNavLinks[6].textContent = content.navLanguage;
        mobileNavLinks[6].href = lang === 'en' ? 'arabic.html' : 'index.html';
    }
    updateElement('#athkado-logo', content.navLogo, true);
    // INSTANT: Update Contact Button
    updateElement('.lets-talk', content.navContact);
    
    // INSTANT: Update Hero Section
    updateElement('#herosec', content.heroTitle, true);
    updateElement('#herosecwords', content.heroSubtitle);
    updateElement('.hero-cta-button b', content.heroCta);
    
    // INSTANT: Update About Section
    updateElement('#about-title', content.aboutTitle);
    updateElement('.turning-ideas-into-container', content.aboutHeading, true);
    updateElement('.athkado-based-in', content.aboutDescription);
    updateElement('.frame-container .get-in-touch', content.aboutCta);
    
    // INSTANT: Update Services Section
    updateElement('#services-title', content.servicesTitle);
    updateElement('.your-success-story-container', content.servicesHeading, true);
    updateElement('.our-digital-services', content.servicesDescription);
    updateElement('#our-services-sec .get-in-touch', content.servicesCta);
    
    // ENHANCED: Update Service Cards with better targeting
    const serviceCards = document.querySelectorAll('.card');
    const serviceCardData = [
        { title: content.serviceCard1Title, desc: content.serviceCard1Desc },
        { title: content.serviceCard2Title, desc: content.serviceCard2Desc },
        { title: content.serviceCard3Title, desc: content.serviceCard3Desc },
        { title: content.serviceCard4Title, desc: content.serviceCard4Desc },
        { title: content.serviceCard5Title, desc: content.serviceCard5Desc },
        { title: content.serviceCard6Title, desc: content.serviceCard6Desc }
    ];
    
    serviceCards.forEach((card, index) => {
        if (index < serviceCardData.length) {
            const titleElement = card.querySelector('.heading-3-container');
            const descElement = card.querySelector('.responsive-engaging-apps-container');
            
            if (titleElement) {
                titleElement.textContent = serviceCardData[index].title;
            }
            
            if (descElement) {
                // Handle both direct text and nested .our-digital-services
                const textElement = descElement.querySelector('.our-digital-services') || descElement;
                textElement.textContent = serviceCardData[index].desc;
            }
        }
    });
    
    // ENHANCED: Update Special Service Cards with better targeting
    const specialCards = document.querySelectorAll('.cards .card6, .cards .card7');
    const specialCardData = [
        { title: content.specialCard1Title, desc: content.specialCard1Desc },
        { title: content.specialCard2Title, desc: content.specialCard2Desc }
    ];
    
    specialCards.forEach((card, index) => {
        if (index < specialCardData.length) {
            const titleElement = card.querySelector('.heading-35');
            const descElement = card.querySelector('.bringing-your-ideas');
            
            if (titleElement) {
                titleElement.textContent = specialCardData[index].title;
            }
            
            if (descElement) {
                // Handle both direct text and nested .our-digital-services
                const textElement = descElement.querySelector('.our-digital-services') || descElement;
                textElement.textContent = specialCardData[index].desc;
            }
        }
    });
    
    // INSTANT: Update Achievements Section
    updateElement('#our-achievment-sec .heading-26', content.achievementsTitle);
    updateElement('#our-achievment-sec .your-success-story-container', content.achievementsHeading, true);
    updateElement('#our-achievment-sec .our-digital-services', content.achievementsDescription);
    
    const achievementTitles = document.querySelectorAll('.timeline-heading');
    const achievementDescs = document.querySelectorAll('.timeline-description');
    
    const achievements = [
        { title: content.achievement1Title, desc: content.achievement1Desc },
        { title: content.achievement2Title, desc: content.achievement2Desc },
        { title: content.achievement3Title, desc: content.achievement3Desc }
    ];
    
    achievements.forEach((achievement, index) => {
        if (achievementTitles[index]) achievementTitles[index].textContent = achievement.title;
        if (achievementDescs[index]) achievementDescs[index].textContent = achievement.desc;
    });
    
    // INSTANT: Update Mission Section
    updateElement('#our-mission-sec .heading-26', content.missionTitle);
    updateElement('.at-athkado-our-container', content.missionHeading, true);
    updateElement('.to-be-your-container .our-digital-services', content.missionDescription);
    
    // INSTANT: Update Values Section
    updateElement('.header3 .heading-26', content.valuesTitle);
    updateElement('.your-success-story-container1', content.valuesHeading, true);
    
    const valuesTitles = document.querySelectorAll('.card9 .heading-310');
    const valuesDescs = document.querySelectorAll('.card9 .expanding-our-reach1, .card9 .expanding-our-reach2, .card9 .expanding-our-reach4');
    
    const values = [
        { title: content.value1Title, desc: content.value1Desc },
        { title: content.value2Title, desc: content.value2Desc },
        { title: content.value3Title, desc: content.value3Desc },
        { title: content.value4Title, desc: content.value4Desc },
        { title: content.value5Title, desc: content.value5Desc }
    ];
    
    values.forEach((value, index) => {
        if (valuesTitles[index]) valuesTitles[index].textContent = value.title;
        if (valuesDescs[index]) valuesDescs[index].textContent = value.desc;
    });
    
    // INSTANT: Update Process Section
    updateElement('#process-sec', content.processTitle);
    updateElement('.mission-style-process .heading-26', content.processTitle);
    updateElement('.our-agile-container .our-digital-services-container1', content.processHeading, true);
    updateElement('.combining-agile-development', content.processDescription);
    updateElement('.mission-style-process .at-athkado-our-container', content.processHeading, true);
    updateElement('.mission-style-process .our-digital-services', content.processDescription);
    
    const processTitles = document.querySelectorAll('.digital-marketing2');
    const processDescs = document.querySelectorAll('.what-its-crafting');
    
    const processes = [
        { title: content.process1Title, desc: content.process1Desc },
        { title: content.process2Title, desc: content.process2Desc },
        { title: content.process3Title, desc: content.process3Desc },
        { title: content.process4Title, desc: content.process4Desc },
        { title: content.process5Title, desc: content.process5Desc }
    ];
    
    processes.forEach((process, index) => {
        if (processTitles[index]) processTitles[index].textContent = process.title;
        if (processDescs[index]) processDescs[index].textContent = process.desc;
    });
    
    // INSTANT: Update CTA Section
    updateElement('.lets-transform-your-container', content.ctaHeading, true);
    updateElement('.transform .lets-connect-and', content.ctaDescription);
    updateElement('.transform .get-in-touch', content.ctaButton);
    
    // INSTANT: Update Footer Section
    updateElement('.footer-description .lets-connect-and1', content.footerDescription);
    
    const socialTitles = document.querySelectorAll('.heading-315');
    if (socialTitles.length >= 3) {
        socialTitles[0].textContent = content.footerLinkedin;
        socialTitles[1].textContent = content.footerInstagram;
        socialTitles[2].textContent = content.footerTwitter;
    }
    
    const contactLabels = document.querySelectorAll('.email-infoathkadocom-container span:first-child, .phone-966-container span:first-child');
    if (contactLabels.length >= 3) {
        contactLabels[0].textContent = content.footerEmail;
        contactLabels[1].textContent = content.footerPhone;
        contactLabels[2].textContent = content.footerOffice;
    }
    
    // ENHANCED: Update office address with proper RTL handling
    const officeAddressElement = document.querySelector('.office-address');
    if (officeAddressElement) {
        officeAddressElement.textContent = `: ${content.footerOfficeAddress}`;
    }
    
    updateElement('.athka-it-solutions', content.footerCopyright);
    
    // INSTANT: Update all Get In Touch buttons
    updateElements('.get-in-touch', lang === 'ar' ? 'تواصل معنا' : 'Get In Touch');
    
    console.log(`✅ ${lang} translations applied INSTANTLY!`);
}

// INSTANT: Initialize language system with multiple attempts
function initializeLanguage() {
    console.log('🌐 Initializing INSTANT language system...');
    
    const targetLang = detectLanguage();
    console.log(`📍 Detected language: ${targetLang}`);
    
    // INSTANT: Apply translations immediately
    applyTranslations(targetLang);
    
    // BACKUP: Try again after a short delay to catch any late-loading elements
    setTimeout(() => {
        console.log('🔄 Backup translation attempt...');
        applyTranslations(targetLang);
    }, 500);
    
    // FINAL BACKUP: One more attempt after components are definitely loaded
    setTimeout(() => {
        console.log('🔄 Final translation attempt...');
        applyTranslations(targetLang);
    }, 2000);
}

// INSTANT: Apply translations as soon as possible
function applyInstantTranslations() {
    const targetLang = detectLanguage();
    console.log(`⚡ INSTANT translation for: ${targetLang}`);
    applyTranslations(targetLang);
}

// Export for global use
window.simpleI18n = {
    initialize: initializeLanguage,
    applyTranslations: applyTranslations,
    getCurrentLanguage: () => currentLang,
    instant: applyInstantTranslations
};

// INSTANT: Apply translations immediately when script loads
applyInstantTranslations();

// INSTANT: Apply again when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('🌐 Simple i18n loaded - applying instant translations');
    applyInstantTranslations();
    
    // Set up a backup system
    setTimeout(initializeLanguage, 100);
});

// INSTANT: Apply when page is fully loaded
window.addEventListener('load', function() {
    console.log('🌐 Page fully loaded - final translation check');
    applyInstantTranslations();
});