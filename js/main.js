// Navbar active 

document.addEventListener("DOMContentLoaded", () => {
    const navBar = document.querySelector('.main-menu');
    
    navBar.addEventListener("click", (e) => {
        // change the active button
        const clickedButton = e.target.closest('li');
        if (!clickedButton) return;
        const allButtons = navBar.querySelectorAll('li');

        allButtons.forEach(button => {
            if (button == clickedButton) {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
        });
    });
});

// document.addEventListener("DOMContentLoaded", () => {
//     const sections = document.querySelectorAll(".observe-section");
//     const navLinks = document.querySelectorAll(".main-menu ul li a");

//     // console.log(sections);

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//             const id = entry.target.getAttribute("id");
//             const link = document.querySelector(`.main-menu ul li a[href="#${id}"]`);

//             console.log(id);
//             console.log(link);

//             if (entry.isIntersecting) {
//                 console.log("got here");
//                 navLinks.forEach(link => 
//                     // link.parentElement.classList.remove("active")
//                     console.log(link.parentElement)
//                 );
//                 if (link) link.parentElement.classList.add("active");
//             }
//         });
//     },
//     {
//         rootMargin: "-50% 0px -50% 0px",
//         threshold: 0.1,
//     });

//     // sections.forEach((section) => observer.observe(section));
//     sections.forEach((section) => {
//         console.log(`Observing section: ${section.id}`);
//         observer.observe(section);
//     });
// });




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
});

// About Menu
document.addEventListener("DOMContentLoaded", () => {
    const aboutMenu = document.querySelector('.about-menu');
    
    aboutMenu.addEventListener("click", (e) => {
        // change the active button
        const clickedButton = e.target.closest('li');
        const allButtons = aboutMenu.querySelectorAll('li');

        allButtons.forEach(button => {
            if (button == clickedButton) {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
        });

        // display the corresponding content
        const aboutGroups = document.querySelectorAll('.about-group')
        const openedSection = clickedButton.getAttribute('data-section');

        aboutGroups.forEach(group => {
            if (group.getAttribute('data-section') == openedSection) {
                group.classList.add('open');
            } else {
                group.classList.remove('open');
            }
        });
    });
});

// About Education
document.addEventListener("DOMContentLoaded", () => {
    const aboutContainer = document.querySelector('.about-group[data-section="education"]');
    const educationItems = aboutContainer.querySelectorAll('.about-education');

    educationItems.forEach((item) => {
        const header = item.querySelector('.about-education-header');
        const body = item.querySelector('.about-education-body');
        const icon = header.querySelector('i');

        // Show body on hover
        item.addEventListener('mouseenter', () => {
            body.classList.add('open');
            icon.classList.toggle('fa-plus'); 
            icon.classList.toggle('fa-minus');
            

            // Close all others
            educationItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    const otherBody = otherItem.querySelector('.about-education-body');
                    const otherIcon = otherItem.querySelector('.about-education-header i');
                    otherBody.classList.remove('open');
                    otherIcon.classList.remove('fa-minus');
                    otherIcon.classList.add('fa-plus');
                    
                }
            });
        });

        // Optional: Collapse on mouse leave
        // item.addEventListener('mouseleave', () => {
        //     body.classList.remove('open');
        // });
    });
});

// About Experience
document.addEventListener("DOMContentLoaded", () => {
    const allGroups = document.querySelectorAll('.about-group'); // must grab all groups since there is one for education, experience, and coursework
    allGroups.forEach((aboutContainer) => {
        aboutContainer.addEventListener('click', (e) => {
            const groupHeader = e.target.closest('.about-experience-header'); //e.target is the clicked element and closest finds the nearest ancestor with the class 'faq-group-header'
            console.log(groupHeader);
            if (!groupHeader) return;
            
            // console.log(groupHeader);

            const group = groupHeader.parentElement; // Get the parent element of the clicked header, which is the faq-group
            const groupBody = group.querySelector('.about-experience-body'); // Find the body within the same group
            const icon = groupHeader.querySelector('i'); // Find the icon within the clicked header

            // Toggle Icon
            icon.classList.toggle('fa-plus'); // if it is plus, change to minus
            icon.classList.toggle('fa-minus'); // if it is minus, change to plus

            // Toggle Body
            groupBody.classList.toggle('open'); // if it is open, close it; if it is closed, open it

            // Close other opened bodies
            const otherGroups = aboutContainer.querySelectorAll('.about-experience');
            otherGroups.forEach((otherGroup) => {
                if (otherGroup != group) {
                    const otherBody = otherGroup.querySelector('.about-experience-body');
                    const otherIcon = otherGroup.querySelector('.about-experience-header i');

                    // Close the body and change icon to plus
                    otherBody.classList.remove('open');
                    otherIcon.classList.remove('fa-minus');
                    otherIcon.classList.add('fa-plus');
                }
            });
        });
    });
});

// About Coursework
document.addEventListener("DOMContentLoaded", () => {
    const faqContainer = document.querySelector('.coursework-grid');

    faqContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.coursework-subgroup-header');
        
        if (!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.coursework-subgroup-body');
        const icon = groupHeader.querySelector('i');

        // Toggle icon direction
        icon.classList.toggle('fa-angle-right');
        icon.classList.toggle('fa-angle-down');

        // Toggle visibility
        groupBody.classList.toggle('open');

        // Close other groups
        const otherGroups = faqContainer.querySelectorAll('.course-work-subgroup');
        otherGroups.forEach((otherGroup) => {
            if (otherGroup !== group) {
                const otherBody = otherGroup.querySelector('.coursework-subgroup-body');
                const otherIcon = otherGroup.querySelector('.coursework-subgroup-header i');

                otherBody.classList.remove('open');
                otherIcon.classList.remove('fa-angle-down');
                otherIcon.classList.add('fa-angle-right');
            }
        });
    });
});