document.querySelector('.form').addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const countryCode = document.getElementById('country-code').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const message = document.getElementById('message').value;

    const userData = `
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Phone Number: ${countryCode} ${phoneNumber}
        Message: ${message}
    `;

    console.log('Form Submitted with the following data:');
    console.log(userData);

    alert(`Form Submitted!\n\n${userData}`);
});
