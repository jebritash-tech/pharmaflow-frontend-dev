let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {

    e.preventDefault();

    deferredPrompt = e;

    const installBtn =
        document.getElementById('installAppBtn');

    if (installBtn) {
        installBtn.classList.remove('hidden');
    }
});

window.installPWA = async function () {

    if (!deferredPrompt) {

        alert(
            'التثبيت غير متاح حالياً. استخدم زر التثبيت في شريط المتصفح.'
        );

        return;
    }

    deferredPrompt.prompt();

    const result =
        await deferredPrompt.userChoice;

    console.log(
        'Install:',
        result.outcome
    );

    deferredPrompt = null;

    document
        .getElementById('installAppBtn')
        ?.classList.add('hidden');
};

window.addEventListener(
    'appinstalled',
    () => {

        console.log(
            'PWA Installed'
        );

        document
            .getElementById('installAppBtn')
            ?.classList.add('hidden');

        document
            .getElementById('installSuccess')
            ?.classList.remove('hidden');
    }
);

if ('serviceWorker' in navigator) {

    window.addEventListener(
        'load',
        () => {

            navigator.serviceWorker
                .register('./sw.js')
                .then(() => {

                    console.log(
                        'Service Worker Registered'
                    );

                })
                .catch(console.error);

        }
    );
}
