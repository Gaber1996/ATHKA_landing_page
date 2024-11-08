const animatedContentHeaderList = ["Web & Mobile App Development", "UI/UX Design ","Data Analytics & Insights ","Data Scraping ","Data Cleaning ","Machine Learning & Predictive Modeling ","Statistical Analysis ","Automation Solutions "];
const element = document.getElementById("animatedText"); // The HTML element to display the text
let wordIndex = 0; // Index of the current word
let letterIndex = 0; // Index of the current letter within the word
let isDeleting = false; // Whether we're deleting or typing




function type() {
    const currentWord = animatedContentHeaderList[wordIndex];
    
    // Determine the current text to display based on typing or deleting
    let displayText = currentWord.slice(0, letterIndex);
    element.textContent = displayText;

    // Control the speed of typing and deleting
    let speed = 100; // Typing speed

    if (isDeleting) {
        speed = 50; // Faster deleting speed
        letterIndex--; // Remove a letter
    } else {
        letterIndex++; // Add a letter
    }

    // If the word is complete, start deleting after a short delay
    if (!isDeleting && letterIndex === currentWord.length) {
        isDeleting = true;
        speed = 1000; // Pause before deleting
    }
    // If the word is deleted completely, move to the next word
    else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % animatedContentHeaderList.length; // Loop to next word
    }

    // Recursively call the function with setTimeout to create the typing effect
    setTimeout(type, speed);
    
}

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.count');
    const speed = 20; // Adjust this for speed of increment

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / speed;

        const updateCount = () => {
            const currentCount = +counter.innerText;

            if (currentCount < target) {

                counter.innerText = `+${Math.ceil(currentCount + increment)}`;
                setTimeout(updateCount, 80);
            } else {
                counter.innerText = `+${target}`; // Ensure it ends exactly at the target
            }
        };

        updateCount();
    });
});



document.addEventListener("DOMContentLoaded", function() {
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // Stop observing once the animation is applied
    }
});
}, { threshold: 0.2 }); // 20% of the section should be visible to trigger animation

sections.forEach(section => {
observer.observe(section);
});
});


// Start the typewriter effect
type();







