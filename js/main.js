// FAQ Accordion
document.addEventListener("DOMContentLoaded", () => {
    const faqContainer = document.querySelector('.faq-content');

    faqContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.faq-group-header'); //e.target is the clicked element and closest finds the nearest ancestor with the class 'faq-group-header'
        
        if (!groupHeader) return;
        
        // console.log(groupHeader);

        const group = groupHeader.parentElement; // Get the parent element of the clicked header, which is the faq-group
        const groupBody = group.querySelector('.faq-group-body'); // Find the body within the same group
        const icon = groupHeader.querySelector('i'); // Find the icon within the clicked header

        // Toggle Icon
        icon.classList.toggle('fa-plus'); // if it is plus, change to minus
        icon.classList.toggle('fa-minus'); // if it is minus, change to plus

        // Toggle Body
        groupBody.classList.toggle('open'); // if it is open, close it; if it is closed, open it

        // Close other opened bodies
        const otherGroups = faqContainer.querySelectorAll('.faq-group');
        otherGroups.forEach((otherGroup) => {
            if (otherGroup != group) {
                const otherBody = otherGroup.querySelector('.faq-group-body');
                const otherIcon = otherGroup.querySelector('.faq-group-header i');

                // Close the body and change icon to plus
                otherBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        });
    });
});

// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => mobileMenu.classList.toggle('active'));
})