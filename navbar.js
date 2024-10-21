
// Navigation Bar
// fetch('navbar.html')
// .then(response => {
//     if (!response.ok) {
//         throw new Error('Network response was not ok ' + response.statusText);
//     }
//     return response.text();
// })
// .then(data => {
//     document.getElementById('navbar-container').innerHTML = data;
// })
// .catch(error => {
//     console.error('There has been a problem with your fetch operation:', error);
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const navbarContainer = document.getElementById('navbar-container');

//     if (!navbarContainer) {
//         console.error('Navbar container element not found');
//         return;
//     }

//     fetch('navbar.html')
//         .then(response => response.text())
//         .then(data => {
//             navbarContainer.innerHTML = data;
//         })
//         .catch(error => {
//             console.error('There has been a problem with your fetch operation:', error);
//         });
// });

// $(document).ready(function() {
//     var url = window.location.href ;
//     $('.nav_links').filter(function() {
//       return url.indexOf(this.href) != -1;
//     }).addClass('active');
//   });

document.addEventListener('DOMContentLoaded', () => {
    const navbarContainer = document.getElementById('navbar-container');
    
    if (!navbarContainer) {
        console.error('Navbar container element not found');
        return;
    }

    // Fetch the navbar content
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            navbarContainer.innerHTML = data;

            // Active Page Logic
            const activePage = window.location.pathname.split("/").pop();
            const navLinks = document.querySelectorAll('.nav_links');

            navLinks.forEach(link => {
                if (link.href.includes(`${activePage}`)) {
                    link.classList.add('active');
                }
            });

            // Dropdown functionality for hover and click
            document.querySelectorAll('nav ul li a.nav_links').forEach(menuItem => {
                menuItem.addEventListener('click', function(e) {
                    const dropdown = this.nextElementSibling;
                    if (dropdown && dropdown.classList.contains('dropdown')) {
                        e.preventDefault();
                        dropdown.classList.toggle('show');
                    }
                });
            });

        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});

