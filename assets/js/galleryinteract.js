let currentImageIndex = 0;
const images = document.querySelectorAll(".gallery img");

function openModal(index) {
    currentImageIndex = index;
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const modalCaption = document.getElementById("modalCaption");
    
    // Set the image source and caption
    modalImage.src = images[currentImageIndex].src;
    modalCaption.textContent = images[currentImageIndex].alt; // Use the alt attribute as the caption
    
    // Show the modal with fade-in effect
    modal.classList.add("show");
}

// Close modal
function closeModal() {
    document.getElementById("imageModal").classList.remove("show");
}

// Change Image (Next/Prev)
function changeImage(direction) {
    currentImageIndex += direction;

    // Loop back if at the start or end
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    const modalImage = document.getElementById("modalImage");
    const modalCaption = document.getElementById("modalCaption");

    modalImage.src = images[currentImageIndex].src;
    modalCaption.textContent = images[currentImageIndex].alt; // Update the caption text
}

// Keyboard Controls
document.addEventListener("keydown", function (event) {
    if (document.getElementById("imageModal").style.display === "flex") {
        if (event.key === "ArrowRight") {
            changeImage(1);
            event.preventDefault(); // Prevent page scrolling
        } else if (event.key === "ArrowLeft") {
            changeImage(-1);
            event.preventDefault(); // Prevent page scrolling
        } else if (event.key === "Escape") {
            closeModal();
        }
    }
});

// Close modal if clicked outside of the image
const modal = document.getElementById("imageModal");
modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModal();
    }
});
