document.addEventListener('DOMContentLoaded', () => {
    const buyButton = document.getElementById('buy-button');
    const purchaseProcess = document.getElementById('purchase-process');
    const agreeButton = document.getElementById('agree-button');
    const selectPlanButton = document.getElementById('select-plan-button');
    const binancePayButton = document.getElementById('binance-pay-button');
    const verifyButton = document.getElementById('verify-button');
    const sendVerificationButton = document.getElementById('send-verification-button');

    const steps = ['agreement', 'pricing', 'payment', 'verification'];
    let currentStep = 0;

    function showStep(stepIndex) {
        steps.forEach((step, index) => {
            const element = document.getElementById(step);
            if (index === stepIndex) {
                element.classList.remove('hidden');
            } else {
                element.classList.add('hidden');
            }
        });
    }

    buyButton.addEventListener('click', () => {
        purchaseProcess.classList.remove('hidden');
        showStep(currentStep);
    });

    agreeButton.addEventListener('click', () => {
        currentStep++;
        showStep(currentStep);
    });

    selectPlanButton.addEventListener('click', () => {
        currentStep++;
        showStep(currentStep);
    });

    binancePayButton.addEventListener('click', () => {
        // Here you would integrate with Binance Pay API
        alert('Redirecting to Binance Pay...');
    });

    verifyButton.addEventListener('click', () => {
        currentStep++;
        showStep(currentStep);
    });

    sendVerificationButton.addEventListener('click', () => {
        const photo = document.getElementById('verification-photo').files[0];
        const message = document.getElementById('verification-message').value;

        if (photo && message) {
            // Here you would send the verification data to your server
            alert('Verification sent successfully!');
        } else {
            alert('Please upload a photo and enter a message.');
        }
    });
});