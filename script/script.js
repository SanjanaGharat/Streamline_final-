// NAV--BAR STARTS
   
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

const serviceData = [
  { 
    id: 1, 
    title: 'Service1', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est urna, convallis eu leo id, feugiat laoreet justo. Morbi enim libero, aliquam non maximus non, finibus id nunc.', 
    image: 'https://img.icons8.com/?size=100&id=82444&format=png&color=2f855a', 
    link: 'emergency-service.html' 
  },
  { 
    id: 2, 
    title: 'Service2', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est urna, convallis eu leo id, feugiat laoreet justo. Morbi enim libero, aliquam non maximus non, finibus id nunc.', 
    image: 'https://img.icons8.com/?size=100&id=2171&format=png&color=2f855a', 
    link: 'pipe-repair.html' 
  },
  { 
    id: 3, 
    title: 'Service3', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est urna, convallis eu leo id, feugiat laoreet justo. Morbi enim libero, aliquam non maximus non, finibus id nunc.', 
    image: 'https://img.icons8.com/?size=100&id=SIK-MaQikAy4&format=png&color=2f855a', 
    link: 'water-heater-services.html' 
  },
  { 
    id: 4, 
    title: 'Service4', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est urna, convallis eu leo id, feugiat laoreet justo. Morbi enim libero, aliquam non maximus non, finibus id nunc.', 
    image: 'https://img.icons8.com/?size=100&id=R5wtOu4JoZbm&format=png&color=2f855a', 
    link: 'drain-cleaning.html' 
  },
  { 
    id: 5, 
    title: 'Service5', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est urna, convallis eu leo id, feugiat laoreet justo. Morbi enim libero, aliquam non maximus non, finibus id nunc.', 
    image: 'https://img.icons8.com/?size=100&id=ScAViD0I8h4B&format=png&color=2f855a', 
    link: 'sewer-line-services.html' 
  },
  { 
    id: 6, 
    title: 'Service6', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est urna, convallis eu leo id, feugiat laoreet justo. Morbi enim libero, aliquam non maximus non, finibus id nunc.', 
    image: 'https://img.icons8.com/?size=100&id=OrcIpbU7fPgZ&format=png&color=2f855a', 
    link: 'water-filtration.html' 
  },
  { 
    id: 7, 
    title: 'Service7', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est urna, convallis eu leo id, feugiat laoreet justo. Morbi enim libero, aliquam non maximus non, finibus id nunc.', 
    image: 'https://img.icons8.com/?size=100&id=48232&format=png&color=2f855a', 
    link: 'gas-line-services.html' 
  }
];

const swiperWrapper = document.getElementById('service-swiper-wrapper');

serviceData.forEach(service => {
  const slide = document.createElement('div');
  slide.className = 'swiper-slide service-swiper-slide';
  slide.innerHTML = `
    <a href="${service.link}" target="_blank" class="relative service-card p-6 bg-white rounded-lg shadow-lg text-center">
      <div class="service-icon-container mb-4">
        <img src="${service.image}" alt="${service.title}" class="h-16 w-16 mx-auto mb-1 mt-8">
      </div>
      <h2 class="mt-2 text-lg font-semibold">${service.title}</h2>
      <p class="text-gray-700 text-sm mb-4">${service.description}</p>
      <span class="service-learn-more-btn">LEARN MORE &rarr;</span>
    </a>
  `;
  swiperWrapper.appendChild(slide);
});

const swiper = new Swiper('#service-swiper-container', {
  slidesPerView: 1,
  spaceBetween: 5,
  pagination: {
    el: '.service-swiper-pagination',
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1280: { slidesPerView: 4 },
  },
});


// gallery section 
(function() {
const imageModalImages = [
'../images/image1.jpg', '../images/image2.jpg', '../images/image3.jpg',
'../images/image4.jpg', '../images/image5.jpg', '../images/image6.jpg',
'../images/image7.jpg', '../images/image8.jpg', '../images/image9.jpg'
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
currentZoomLevel = 1; // Reset zoom level
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

// Close modal when clicking outside of the image
modal.addEventListener('click', (event) => {
if (event.target === modal) {  // If clicked on the background (outside the image)
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



 