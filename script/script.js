// NAV--BAR STARTS
// Only apply this for screens smaller than or equal to 391px
function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  const hr = dropdown.nextElementSibling; 

  
  dropdown.classList.toggle('hidden');


  if (!dropdown.classList.contains('hidden')) {
      dropdown.appendChild(hr);
  } else {
      dropdown.parentNode.insertBefore(hr, dropdown.nextElementSibling);
  }
}
window.addEventListener('resize', function() {
  const screenWidth = window.innerWidth;
  const hrs = document.querySelectorAll('.dynamic-hr');

  hrs.forEach(hr => {
      hr.style.display = screenWidth <= 391 ? 'block' : 'none';
  });
});
       function toggleDropdown(id) {
           const dropdownToToggle = document.getElementById(id);
           if (activeDropdown && activeDropdown !== dropdownToToggle) {
               activeDropdown.classList.remove('show');
               activeDropdown.classList.add('hidden');
           }
           if (dropdownToToggle) {
               dropdownToToggle.classList.toggle('show');
               dropdownToToggle.classList.toggle('hidden');
               activeDropdown = dropdownToToggle.classList.contains('show') ? dropdownToToggle : null;
           }
       }
   
       function closeDropdown(id) {
           const dropdownToClose = document.getElementById(id);
           if (dropdownToClose) {
               dropdownToClose.classList.remove('show');
               dropdownToClose.classList.add('hidden');
               activeDropdown = null;
           }
       }
   
       document.querySelectorAll('[onclick^="toggleDropdown"]').forEach(trigger => {
           trigger.addEventListener('dblclick', () => {
               const dropdownId = trigger.getAttribute('onclick').match(/'([^']+)'/)[1];
               closeDropdown(dropdownId);
           });
       });
   
       document.addEventListener('click', (event) => {
           const dropdowns = document.querySelectorAll('.dropdown-content');
           dropdowns.forEach(dropdown => {
               if (!dropdown.contains(event.target) && !event.target.matches('[onclick^="toggleDropdown"]')) {
                   dropdown.classList.remove('show');
                   dropdown.classList.add('hidden');
               }
           });
           activeDropdown = null;
       });
   
       function toggleNavbar() {
           const sidebar = document.getElementById('sidebar');
           sidebar.classList.toggle('show');
       }
   
       document.addEventListener('click', function(event) {
           const sidebar = document.getElementById('sidebar');
           if (sidebar.classList.contains('show') && !sidebar.contains(event.target) && !document.querySelector('.hamburger').contains(event.target)) {
               sidebar.classList.remove('show');
           }
       });

//    NAV-BAR ENDS HERE

// HERO-SECTION STARTS
const transitionWords = ["Professional", "Expert", "Skilled", "Qualified"];
let transitionIndex = 0;

const transitionElement = document.querySelector('.text-transition');
transitionElement.textContent = transitionWords[transitionIndex];

function changeTransitionText() {
    transitionElement.classList.remove('active');
    setTimeout(() => {
        transitionIndex = (transitionIndex + 1) % transitionWords.length;
        transitionElement.textContent = transitionWords[transitionIndex];
        transitionElement.classList.add('active');
    }, 500);
}

setInterval(changeTransitionText, 3000);
let activeDropdown = null;

// HERO-SECTION ENDS HERE

//  SERVICE-SECTION START

// const serviceData = [
//   { 
//     id: 1, 
//     title: 'Service1', 
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est urna, convallis eu leo id, feugiat laoreet justo. Morbi enim libero, aliquam non maximus non, finibus id nunc.', 
//     image: 'https://img.icons8.com/?size=100&id=82444&format=png&color=2f855a', 
//     link: 'emergency-service.html' 
//   },
//   { 
//     id: 2, 
//     title: 'Service2', 
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Morbi enim libero, aliquam non maximus non, finibus id nunc.', 
//     image: 'https://img.icons8.com/?size=100&id=2171&format=png&color=2f855a', 
//     link: 'pipe-repair.html' 
//   },
//   { 
//     id: 3, 
//     title: 'Service3', 
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Morbi enim libero, aliquam non maximus non, finibus id nunc.', 
//     image: 'https://img.icons8.com/?size=100&id=SIK-MaQikAy4&format=png&color=2f855a', 
//     link: 'water-heater-services.html' 
//   },
//   { 
//     id: 4, 
//     title: 'Service4', 
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est urna, convallis eu leo id, feugiat laoreet justo. Morbi enim libero, aliquam non maximus non, finibus id nunc.', 
//     image: 'https://img.icons8.com/?size=100&id=R5wtOu4JoZbm&format=png&color=2f855a', 
//     link: 'drain-cleaning.html' 
//   },
//   { 
//     id: 5, 
//     title: 'Service5', 
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est urna, convallis eu leo id, feugiat laoreet justo. Morbi enim libero, aliquam non maximus non, finibus id nunc.', 
//     image: 'https://img.icons8.com/?size=100&id=ScAViD0I8h4B&format=png&color=2f855a', 
//     link: 'sewer-line-services.html' 
//   },
//   { 
//     id: 6, 
//     title: 'Service6', 
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', 
//     image: 'https://img.icons8.com/?size=100&id=OrcIpbU7fPgZ&format=png&color=2f855a', 
//     link: 'water-filtration.html' 
//   },
//   { 
//     id: 7, 
//     title: 'Service7', 
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est urna, convallis eu leo id, feugiat laoreet justo. Morbi enim libero, aliquam non maximus non, finibus id nunc.', 
//     image: 'https://img.icons8.com/?size=100&id=48232&format=png&color=2f855a', 
//     link: 'gas-line-services.html' 
//   }
// ];

// const swiperWrapper = document.getElementById('service-swiper-wrapper');

// serviceData.forEach(service => {
//   const slide = document.createElement('div');
//   slide.className = 'swiper-slide service-swiper-slide';
//   slide.innerHTML = `
//     <a href="${service.link}" target="_blank" class="relative service-card p-6 bg-white rounded-lg shadow-lg text-center">
//       <div class="service-icon-container mb-4">
//         <img src="${service.image}" alt="${service.title}" class="h-16 w-16 mx-auto mb-1 mt-8">
//       </div>
//       <h2 class="mt-2 text-lg font-semibold">${service.title}</h2>
//       <p class="text-gray-700 text-sm mb-4">${service.description}</p>
//       <span class="service-learn-more-btn">LEARN MORE &rarr;</span>
//     </a>
//   `;
//   swiperWrapper.appendChild(slide);
// });

// const swiper = new Swiper('#service-swiper-container', {
//   slidesPerView: 1,
//   spaceBetween: 5,
//   pagination: {
//     el: '.service-swiper-pagination',
//     clickable: true,
//   },
//   loop: true,
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   },
//   breakpoints: {
//     640: { slidesPerView: 1 },
//     768: { slidesPerView: 2 },
//     1024: { slidesPerView: 3 },
//     1280: { slidesPerView: 4 },
//   },
// });


// gallery section 
(function() {
  const imageModalImages = [
    'https://media.istockphoto.com/id/1499019570/photo/roof-garden.jpg?s=612x612&w=0&k=20&c=RZgcJAPvFJpWCnPofWSdLbypePbPvqPB46vnU3bBnYQ=',
    'https://media.istockphoto.com/id/1802417528/photo/top-view-of-a-modern-school-with-sloped-terraces-and-roof-gardens.jpg?s=612x612&w=0&k=20&c=B14qBvR-43_npggPcCsmsTcsyqA-hZitM4uAXsfwBA0=',
    'https://media.istockphoto.com/id/1318519526/photo/green-building.jpg?s=612x612&w=0&k=20&c=7rD6NQB7dmHqGV_sDxquaZ4ehA0hv0qAJIXcx80lrso=',
    'https://media.istockphoto.com/id/2158823214/photo/duplex-house-swmming-pool-exterior-design-3d-rendering-interior-design.jpg?s=612x612&w=0&k=20&c=MDbjDJHClBQtEcZjsoCTF7lteX1zL6bqWZfydYwxw2Q=',
    'https://media.istockphoto.com/id/1408135287/photo/aerial-shot-of-rooftop-garden.jpg?s=612x612&w=0&k=20&c=lK70nGJinV2ltzSJU8cNA5hX7e3uRiM1P4q9iexndaQ=',
    'https://media.istockphoto.com/id/1329757808/photo/green-building.jpg?s=612x612&w=0&k=20&c=aP9hDI9b1rQPArU_AS7v96DIrpyaRcW9nz7jO0lLHfM=',
    'https://media.istockphoto.com/id/1365678881/photo/green-buildings.jpg?s=612x612&w=0&k=20&c=HAbi74mkR3hRor-fR2B4qqDFcG3DnK-WKVEUpTwuHX4=',
    'https://media.istockphoto.com/id/2148894060/photo/modern-green-building.jpg?s=612x612&w=0&k=20&c=oum3a-jSgcJOvC7vHmaorodPgrYiklzSe1GQCcOrCzk=',
    'https://media.istockphoto.com/id/1445285707/photo/modern-eco-house-with-solar-panels-and-windmills-to-use-alternative-energy.jpg?s=612x612&w=0&k=20&c=pYYOZufg2oE3rzFg2RhvvRudIncappPcJlIDwE5acDw='
  ];
  
const galleryElement = document.getElementById('image-modal-gallery');
imageModalImages.forEach((src, index) => {
const imgElement = document.createElement('img');
imgElement.src = src;
imgElement.classList.add('cursor-pointer', 'w-full', 'h-48', 'object-cover', 'rounded-md');
imgElement.onclick = () => openImageModal(index);
galleryElement.appendChild(imgElement);
});

let currentImageIndex = 0;
let currentZoomLevel = 1;

function openImageModal(index) {
currentImageIndex = index;
currentZoomLevel = 1; 
const modal = document.getElementById('image-modal-container');
const modalImage = document.getElementById('image-modal-image');
const zoomControls = document.getElementById('image-modal-zoom-controls');

modalImage.src = imageModalImages[currentImageIndex];
modal.style.display = 'flex';
zoomControls.classList.remove('hidden');

modalImage.onload = () => {
modalImage.classList.remove('opacity-0');
modalImage.classList.add('opacity-100');
};

document.addEventListener('keydown', handleKeyboardNavigation);

modal.addEventListener('click', (event) => {
if (event.target === modal) { 
    closeImageModal();
}
});
}

function closeImageModal() {
const modal = document.getElementById('image-modal-container');
const modalImage = document.getElementById('image-modal-image');
const zoomControls = document.getElementById('image-modal-zoom-controls');

modalImage.classList.remove('opacity-100');
modalImage.classList.add('opacity-0');

setTimeout(() => {
modal.style.display = 'none';
zoomControls.classList.add('hidden');
}, 300);

document.removeEventListener('keydown', handleKeyboardNavigation);
}

function handleKeyboardNavigation(event) {
if (event.key === 'Escape') {
closeImageModal();
} else if (event.key === 'ArrowLeft') {
goToPreviousImage();
} else if (event.key === 'ArrowRight') {
goToNextImage();
}
}

function goToPreviousImage() {
currentImageIndex = (currentImageIndex - 1 + imageModalImages.length) % imageModalImages.length;
updateImageModalImage();
}

function goToNextImage() {
currentImageIndex = (currentImageIndex + 1) % imageModalImages.length;
updateImageModalImage();
}

function updateImageModalImage() {
const modalImage = document.getElementById('image-modal-image');
modalImage.classList.add('opacity-0');
setTimeout(() => {
modalImage.src = imageModalImages[currentImageIndex];
modalImage.classList.remove('opacity-0');
modalImage.classList.add('opacity-100');
}, 300);
}

function zoomInImage() {
if (currentZoomLevel < 2) {
currentZoomLevel += 0.1;
const modalImage = document.getElementById('image-modal-image');
modalImage.style.transform = `scale(${currentZoomLevel})`;
}
}

function zoomOutImage() {
if (currentZoomLevel > 1) {
currentZoomLevel -= 0.1;
const modalImage = document.getElementById('image-modal-image');
modalImage.style.transform = `scale(${currentZoomLevel})`;
}
}

document.getElementById('image-modal-prevBtn').onclick = goToPreviousImage;
document.getElementById('image-modal-nextBtn').onclick = goToNextImage;
document.getElementById('image-modal-close-btn').onclick = closeImageModal;

document.getElementById('image-modal-zoomInBtn').onclick = zoomInImage;
document.getElementById('image-modal-zoomOutBtn').onclick = zoomOutImage;
})();


// review section 

const reviews = [
    { name: "Julie Urubek", date: "24 August 2024", rating: "⭐⭐⭐⭐⭐", text: "The most AMAZING job we ever had! Streamline went above and beyond to make sure everything was perfect. They were professional, prompt, and very detailed in their work. Thank you again! God bless you and your company!" },
    { name: "Omar Ahmad", date: "23 August 2024", rating: "⭐⭐⭐⭐", text: "Great experience, but a little room for improvement. Streamline's team was highly professional, and they completed the job in record time. I wish they had provided more detail on maintenance, but overall, I am very satisfied!" },
    { name: "Larry Bergstrom", date: "21 August 2024", rating: "⭐⭐⭐⭐⭐", text: "Streamline Landscape provides exceptional service for big commercial buildings. They took care of all our landscaping needs and made sure everything was pristine. I would definitely recommend them for any large-scale project." },
    { name: "Shelly Nichols", date: "14 August 2024", rating: "⭐⭐⭐", text: "Good work but there was a delay in scheduling. While the team did a fantastic job on our lawn, I wish they were a bit more responsive to follow-up queries. Overall, satisfied with the service." },
    { name: "Rafael Rivera", date: "5 April 2024", rating: "⭐⭐⭐⭐⭐", text: "Jesus, Marco, and Eustacio were a great team! They explained everything in detail, and their professionalism was top-notch. I'm thrilled with the results, and the landscaping looks fantastic." },
    { name: "Michael Tamer", date: "21 July 2024", rating: "⭐⭐⭐⭐", text: "Quick response and good service. They arrived on time, got the work done efficiently, and left the area clean. A few issues arose, but they resolved them quickly. Happy with the overall experience." },
    { name: "Sonia R.", date: "30 June 2024", rating: "⭐⭐⭐⭐⭐", text: "Streamline's team was incredibly efficient and knowledgeable. They completed the project well before the deadline, and the quality of work was impeccable. I would recommend them to anyone looking for reliable service." },
    { name: "Elena Gomez", date: "2 June 2024", rating: "⭐⭐⭐⭐⭐", text: "Exceeded my expectations! The team worked meticulously to ensure everything was perfect. My lawn looks stunning, and I've received so many compliments from neighbors." },
    { name: "Chris White", date: "5 May 2024", rating: "⭐⭐⭐⭐", text: "Solid work! They were very thorough, and any issues that came up were resolved promptly. I would definitely hire them again for future projects." },
    { name: "Patricia Black", date: "15 March 2024", rating: "⭐⭐⭐⭐⭐", text: "Streamline is absolutely fantastic. Their dedication to quality and customer satisfaction is clear in their work. My garden has never looked better, and I'm so grateful for their expertise." },
    { name: "Lucas Hernandez", date: "10 April 2024", rating: "⭐⭐⭐⭐", text: "Overall great experience. I wish they had offered a little more in-depth consultation before the project began, but the end result was impressive. Highly recommend their landscaping services." },
    { name: "Julia Gomez", date: "1 May 2024", rating: "⭐⭐⭐⭐⭐", text: "The team went above and beyond. They made sure everything was just as I envisioned, and even offered some excellent suggestions to improve the design. Couldn't be happier with their service." },
    { name: "Paul Denson", date: "12 February 2024", rating: "⭐⭐⭐⭐", text: "Reliable, efficient, and professional. They worked fast, cleaned up well, and their work was high-quality. I'm pleased with how my landscaping turned out." }
];
let currentIndex = 0;

function toggleReadMore(button) {
    const textContainer = button.previousElementSibling;
    textContainer.classList.toggle('expanded');
    button.textContent = textContainer.classList.contains('expanded') ? 'Read Less' : 'Read More';
}

function loadReviews() {
    const reviewContainer = document.getElementById('reviews');
    for (let i = currentIndex; i < currentIndex + 4 && i < reviews.length; i++) {
        const review = reviews[i];
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" class="google-logo">
            <p class="font-semibold">${review.name}</p>
            <p class="text-sm text-gray-600">${review.date}</p>
            <p class="text-yellow-500">${review.rating}</p>
            <div class="text-container">${review.text}</div>
            <span class="read-more-button" onclick="toggleReadMore(this)">Read More</span>
        `;
        reviewContainer.appendChild(card);
    }
    currentIndex += 4;
    if (currentIndex >= reviews.length) {
        document.getElementById('loadMoreButton').style.display = 'none';
    }
}

document.getElementById('loadMoreButton').addEventListener('click', loadReviews);


loadReviews();

// heroend-section

const textArray = ["Professional", "Expert", "Skilled", "Qualified"];
let index = 0;
const dynamicTextElement = document.getElementById('dynamic-text');

function updateText() {
    fadeOut(() => {
        index = (index + 1) % textArray.length;
        dynamicTextElement.textContent = textArray[index];
        fadeIn();
    });
}

function fadeOut(callback) {
    let opacity = 1;

    function decreaseOpacity() {
        opacity -= 0.05;
        dynamicTextElement.style.opacity = opacity;

        if (opacity <= 0) {
            callback(); 
            return;
        }
        requestAnimationFrame(decreaseOpacity);
    }
    decreaseOpacity();
}

function fadeIn() {
    let opacity = 0;

    function increaseOpacity() {
        opacity += 0.05;
        dynamicTextElement.style.opacity = opacity;

        if (opacity >= 1) return;

        requestAnimationFrame(increaseOpacity);
    }

    increaseOpacity();
}

setInterval(updateText, 3000); 
