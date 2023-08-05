const pricingPlans = document.querySelector('.pricing-plans');

pricingPlans.addEventListener('mouseover', function (e) {
    const target = e.target;
    if (target.classList.contains('pricing-plan')) {
        target.classList.add('pricing-plan-mouseover');
    } else if (target.parentElement.classList.contains('pricing-plan')) {
        target.parentElement.classList.add('pricing-plan-mouseover')
    }
});

pricingPlans.addEventListener('mouseout', function (e) {
    const target = e.target;
    if (target.classList.contains('pricing-plan')) {
        target.classList.remove('pricing-plan-mouseover');
    };
});

const passwordOne = document.querySelector('.password1');
const passwordTwo = document.querySelector('.password2');

passwordTwo.addEventListener('change', function (e) {
    if (passwordTwo.value !== passwordOne.value) {
        passwordOne.classList.add('red-password');
        passwordTwo.classList.add('red-password');
        passwordTwo.classList.remove('greenpassword');
        passwordOne.classList.remove('greenpassword');
    } else {
        passwordOne.classList.add('green-password');
        passwordTwo.classList.add('green-password');
        passwordTwo.classList.remove('red-password');
        passwordOne.classList.remove('red-password');
    }
});

const raiting = document.querySelector('.raiting');

raiting.addEventListener('click', function (e) {
    e.target.setAttribute('fill', 'yellow');
});