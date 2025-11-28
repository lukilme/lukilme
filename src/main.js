document.addEventListener('DOMContentLoaded', function () {
    const binaryRain = document.getElementById('binaryRain');
    const digitCount = 100;

    for (let i = 0; i < digitCount; i++) {
        const digit = document.createElement('div');
        digit.classList.add('binary-digit');

        const posX = Math.random() * 100;

        digit.textContent = Math.random() > 0.5 ? '1' : '0';

        const size = Math.random() * 16 + 10;

        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 5;

        digit.style.left = `${posX}%`;
        digit.style.fontSize = `${size}px`;
        digit.style.animationDuration = `${duration}s`;
        digit.style.animationDelay = `${delay}s`;

        binaryRain.appendChild(digit);
    }


    const subtitle = document.querySelector('.subtitle');
    const originalText = subtitle.textContent;
    subtitle.textContent = '';

    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            subtitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };

    setTimeout(typeWriter, 1500);

    const linkTitles = document.querySelectorAll('.link-info h3');
    linkTitles.forEach(title => {
        const originalTitle = title.textContent;
        title.textContent = '';

        let j = 0;
        const titleTypeWriter = () => {
            if (j < originalTitle.length) {
                title.textContent += originalTitle.charAt(j);
                j++;
                setTimeout(titleTypeWriter, 50 + Math.random() * 100);
            }
        };

        setTimeout(titleTypeWriter, 2000 + Math.random() * 3000);
    });
});