document.addEventListener('DOMContentLoaded', () => {
    // Form validation
    const form = document.getElementById('registrationForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const fullName = form.fullName.value.trim();
        const email = form.email.value.trim();
        const phone = form.phone.value.trim();
        const course = form.course.value;

        if (fullName === '' || email === '' || phone === '' || course === '') {
            formMessage.textContent = 'All fields are required!';
        } else {
            formMessage.textContent = 'Registration successful!';
            form.reset();
        }
    });

    // Interactive menu
    const menuItems = document.querySelectorAll('.menu-link');
    menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            menuItems.forEach(i => i.classList.remove('active'));
            event.target.classList.add('active');

            // Scroll to the selected section
            const sectionId = event.target.getAttribute('href').substring(1);
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });

            // Show contact information when clicking on "Contact"
            if (sectionId === 'contact') {
                const contactInfo = document.getElementById('contactInfo');
                contactInfo.style.display = 'block';
                contactInfo.innerHTML = `
                    <h3>Contact Information</h3>
                    <p>Email: online@gmail.com</p>
                    <p>Phone: 9876543210</p>
                    <p>Address: kakinada, bhanugudi junction, East godavari</p>
                `;
            }
        });
    });
});
