const navSection = document.querySelector('.nav-section');
const openNav = document.getElementById('openNav');
const closeNav = document.getElementById('closeNav');
const modal = document.getElementById('orientation-modal');
const body = document.body;

// Ensure modal only displays on small screens
if (window.innerWidth <= 420) {
    modal.style.display = 'flex';
    body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 420) {
        modal.style.display = 'none';
        body.style.overflow = 'auto'; // Restore scrolling
    }
});

// Open and close navigation
openNav.onclick = () => navSection.style.display = 'flex';
closeNav.onclick = () => navSection.style.display = 'none';

// Close modal and sidenav on outside click
window.addEventListener('click', (e) => {
    if (!navSection.contains(e.target) && e.target !== openNav) {
        navSection.style.display = 'none'; // Close sidenav
    }
    if (e.target === modal) {
        modal.style.display = 'none'; // Close modal
        body.style.overflow = 'auto'; // Restore scrolling
    }
});
