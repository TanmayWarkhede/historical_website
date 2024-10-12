document.addEventListener('DOMContentLoaded', function () {
    const eraOptions = document.querySelectorAll('.era-option');

    eraOptions.forEach(option => {
        option.addEventListener('click', function () {
            window.location.href = this.getAttribute('data-href');
        });
    });
});
