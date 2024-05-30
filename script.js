document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-bar ul li a');
    const sections = document.querySelectorAll('.section-content');
    const navBarHighlight = document.querySelector('.nav-bar-highlight');

    navItems.forEach(navItem => {
        navItem.addEventListener('click', (e) => {
            e.preventDefault();
            navItems.forEach(item => item.classList.remove('active'));

        
            navItem.classList.add('active');

         
            sections.forEach(section => section.classList.remove('active'));

           
            const targetSectionId = navItem.getAttribute('data-target');
            const targetSection = document.getElementById(targetSectionId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
            const navBarItem = navItem.parentElement;
            const navBarItemPosition = navBarItem.offsetLeft;
            const navBarItemWidth = navBarItem.offsetWidth;

            navBarHighlight.style.left = `${navBarItemPosition}px`;
            navBarHighlight.style.width = `${navBarItemWidth}px`;
        });

        navItem.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.classList.add('tooltip');
            tooltip.textContent = navItem.getAttribute('data-target');
            document.body.appendChild(tooltip);
            const rect = navItem.getBoundingClientRect();
            tooltip.style.left = `${rect.left + window.scrollX}px`;
            tooltip.style.top = `${rect.bottom + window.scrollY}px`;

            navItem.addEventListener('mouseleave', () => {
                tooltip.remove();
            });
        });
    });

  
    if (navItems.length > 0) {
        navItems[0].click();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-bar ul li a');
    const sections = document.querySelectorAll('.section-content');
    const navBarHighlight = document.querySelector('.nav-bar-highlight');

    navItems.forEach(navItem => {
        navItem.addEventListener('click', (e) => {
            e.preventDefault();
            navItems.forEach(item => item.classList.remove('active'));
            navItem.classList.add('active');
            sections.forEach(section => section.classList.remove('active'));
            const targetSectionId = navItem.getAttribute('data-target');
            const targetSection = document.getElementById(targetSectionId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
            const navBarItem = navItem.parentElement;
            const navBarItemPosition = navBarItem.offsetLeft;
            const navBarItemWidth = navBarItem.offsetWidth;
            navBarHighlight.style.left = `${navBarItemPosition}px`;
            navBarHighlight.style.width = `${navBarItemWidth}px`;
        });
    });

    // Show the default section (Prerequisites)
    if (navItems.length > 0) {
        navItems[0].click();
    }
});
function toggleModule(moduleHeader) {
    const content = moduleHeader.nextElementSibling;
    const symbol = moduleHeader.querySelector('span');

    if (moduleHeader.classList.contains('active')) {
        content.style.display = 'none';
        moduleHeader.classList.remove('active');
        symbol.textContent = '+';
    } else {
        content.style.display = 'block';
        moduleHeader.classList.add('active');
        symbol.textContent = '-';
    }
}
// Set the event date (year, month (0-based), day, hour, minute, second)
const eventDate = new Date('2024-06-07T12:00:00');

function updateCountdown() {
  const now = new Date();
  const difference = eventDate - now;

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  } else {
    // If the event has passed, display a message or take appropriate action
    document.getElementById('countdown').textContent = 'The event has already passed!';
  }
}

// Initial call to update the countdown immediately
updateCountdown();

// Update the countdown every second
setInterval(updateCountdown, 1000);




