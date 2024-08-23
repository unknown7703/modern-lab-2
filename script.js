
function updateBenefits() {
    const age = document.getElementById('age').value;
    const benefitsList = document.getElementById('benefitsList');
    
    benefitsList.innerHTML = ''; 
    
    if (age < 18) {
        benefitsList.innerHTML = `
            <li>Free T-shirt</li>
            <li>Meal vouchers</li>
        `;
    } else {
        benefitsList.innerHTML = `
            <li>Free T-shirt</li>
            <li>Meal vouchers</li>
            <li>Festival pass</li>
        `;
    }
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const benefits = document.getElementById('benefitsList').innerHTML;
    
    alert(`Thank you, ${name}! You are registered as a ${role}. Your benefits: ${benefits.replace(/<li>/g, '').replace(/<\/li>/g, ', ')}`);
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const benefits = document.getElementById('benefitsList').innerHTML;

    const confirmationMessage = document.createElement('div');
    confirmationMessage.classList.add('confirmation');
    confirmationMessage.innerHTML = `
        <h2>Thank you, ${name}!</h2>
        <p>You are registered as a ${role}. Your benefits include:</p>
        <ul>${benefits}</ul>
        <p>Please pick up your T-shirt at the volunteer booth.</p>
    `;

    document.body.innerHTML = '';
    document.body.appendChild(confirmationMessage);
});
