const sounds = {
    success: new Audio('assets/sounds/success.mp3'),
    error: new Audio('assets/sounds/error.mp3'),
    checkout: new Audio('assets/sounds/checkout.mp3'),
    sync: new Audio('assets/sounds/sync.mp3'),
    cart: new Audio('assets/sounds/cart.mp3')
};

function playSound(type) {
    const sound = sounds[type];
    if (!sound) return;

    sound.currentTime = 0;
    sound.play().catch(() => {});
}
