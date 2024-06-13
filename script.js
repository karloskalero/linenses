document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const empresaButtons = document.querySelectorAll('.empresa-button');
    const empresaInfo = document.querySelector('.empresa-info p');
    const empresaInfoDiv = document.querySelector('.empresa-info');
    let currentImage = null;

    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    empresaButtons.forEach(button => {
        button.addEventListener('click', function () {
            const newText = button.getAttribute('data-text');
            const imgSrc = button.getAttribute('data-img');
            empresaInfo.textContent = newText;

            if (currentImage) {
                // Deshabilitamos temporalmente la eliminación de la imagen anterior
                let previousImage = currentImage;
                previousImage.classList.remove('active');
                previousImage.addEventListener('transitionend', () => {
                    previousImage.remove();
                }, { once: true });
                currentImage = null; // Reseteamos la referencia a la imagen actual
            }

            let newImage = document.createElement('img');
            newImage.src = imgSrc;
            empresaInfoDiv.appendChild(newImage);

            // Forzar reflujo para asegurar que la transición se aplique correctamente
            requestAnimationFrame(() => {
                newImage.classList.add('active');
            });

            currentImage = newImage; // Actualizamos la referencia a la nueva imagen
        });
    });
});
