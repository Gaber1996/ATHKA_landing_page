// // Select the image element
// const image = document.getElementById("rotatable-image");

// // Initialize rotation degree
// let rotationDegree = 0;

// // Function to rotate the image
// function rotateImage() {
//   rotationDegree += 45; // Rotate by 45 degrees (you can adjust this value)
//   image.style.transform = `rotate(${rotationDegree}deg)`; // Apply the rotation
//   image.style.transition = "transform 0.5s ease"; // Smooth transition
// }

// // Call the function when needed
// // Example: Rotate the image every 2 seconds
// setInterval(rotateImage, 800);

document.querySelectorAll(".border2").forEach((border) => {
  border.addEventListener("click", function () {
    const content = this.querySelector(".what-its-crafting");

    if (this.classList.contains("active")) {
      // Collapse
      content.style.height = content.scrollHeight + "px"; // Set to full height first
      requestAnimationFrame(() => {
        content.style.height = "0px"; // Then collapse
        content.style.opacity = "0";
        content.style.padding = "0"; // Remove padding
        content.style.margin = "0";  // Remove margin
      });
      setTimeout(() => {
        content.style.display = "none";
      }, 300);
    } else {
      // Expand
      content.style.display = "flex";
      content.style.height = "0px"; // Start from zero height
      content.style.opacity = "0";
      content.style.padding = ""; // Restore padding
      content.style.margin = "";  // Restore margin
      requestAnimationFrame(() => {
        content.style.height = content.scrollHeight + "px"; // Expand to full height
        content.style.opacity = "1";
      });
    }

    this.classList.toggle("active");
  });
});






document.addEventListener("DOMContentLoaded", () => {
  const rectangles = document.querySelectorAll('.rectangle');
  rectangles[0].style.display = 'block'

  const butt = document.querySelectorAll('.home-parent div');
  butt[0].classList.add('active');

    const lightTrails = document.querySelector(".light-trails-buildings-icon");
    const frameContainer = document.querySelector(".frame-container");
  
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Trigger animation when 10% of the section is visible
    };
  
    const observerCallback = (entries, observer) => {
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
  
    // Observe elements
    observer.observe(lightTrails);
    observer.observe(frameContainer);
  });




document.addEventListener("DOMContentLoaded", () => {
    const successStoryContent = document.querySelector(".success-story-content");
    const ourAchievments = document.querySelector(".content1")
    const description = document.querySelector(".description");
    const values = document.querySelector(".content7");
    const process = document.querySelector(".development");
    const transform = document.querySelector(".transform-container");

    


    const cardParents = document.querySelectorAll(".card-parent");
    const missionSec = document.querySelector(".mission");

    const cards = document.querySelectorAll(".cards");
    const firstCardParent = cardParents[0];
    const secondCardParent = cardParents[1]; // Access the first card-parent element
  
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Trigger when 30% of the element is visible
    };
  
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === successStoryContent) {
            successStoryContent.classList.add("slide-up");
          }
          if (entry.target === transform) {
            transform.classList.add("slide-up");
          }
          if (entry.target === process) {
            process.classList.add("slide-up");
          }
          if (entry.target === values) {
            values.classList.add("slide-up");
          }
          if(entry.target === missionSec){
            missionSec.classList.add("slide-up")
          }
          if(entry.target === ourAchievments){
            ourAchievments.classList.add("slide-up");
          }
          
          if (entry.target === description) {
            description.classList.add("slide-up");
          }
          if (entry.target === firstCardParent) {
            entry.target.classList.add("slide-up"); // Add unique animation for the first element
          } else if (entry.target === secondCardParent) {
            entry.target.classList.add("slide-up");
          }
          if (entry.target.classList.contains("cards")) {
            entry.target.classList.add("slide-up");
          }
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    // Observe individual elements
    observer.observe(successStoryContent);
    observer.observe(description);
    observer.observe(ourAchievments);
    observer.observe(missionSec);
    observer.observe(values);
    observer.observe(process);
    observer.observe(transform);





    cardParents.forEach((cardParent) => observer.observe(cardParent));
    cards.forEach((card) => observer.observe(card));


    document.querySelectorAll('.home-parent div').forEach(item => {
      item.addEventListener('click', function () {
          // Remove active class from all items
          document.querySelectorAll('.home-parent div').forEach(div => div.classList.remove('active'));
  
          // Add active class to the clicked item
          this.classList.add('active');
  
          // Scroll to the corresponding section
          
      });
  });



  });


  function toggleRectangle(rectangleId) {
    console.log(rectangleId);
    
    // Get all rectangle elements
    const rectangles = document.querySelectorAll('.rectangle');
    
    // Hide all rectangles
    rectangles.forEach(rect => {
      rect.style.display = 'none';
    });
  
    // Show the selected rectangle
    const selectedRectangle = document.getElementById(rectangleId);
    if (selectedRectangle) {
      
      selectedRectangle.style.display = 'block';
    }
  }



  function toggleMenu() {
    let menu = document.querySelector(".mobile-nav");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

  
  

  
  
  
  


  
