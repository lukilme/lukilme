document.querySelectorAll('.accordion-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const content = document.getElementById(button.getAttribute('aria-controls'));
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        const icon = button.querySelector('span:last-child');

        button.setAttribute('aria-expanded', !isExpanded);
        content.classList.toggle('open');


        if (isExpanded) {
            icon.textContent = '+';
            icon.classList.remove('rotate-45');
            content.classList.remove('border-t-4')
        } else {
            icon.textContent = '×';
            icon.classList.add('rotate-45');
            content.classList.add('border-t-4');
        }
    });
});

tailwind.config = {
    theme: {
        extend: {
            colors: {
                brutal: {
                    pink: '#d61919ff',
                    yellow: '#FBFF12',
                    blue: '#2181daff',
                    black: '#0C0F0A',
                    white: '#FFFFFF',
                    purple: '#6c36cfff'
                }
            },
            fontFamily: {
                sans: ['"Space Grotesk"', 'sans-serif'],
                mono: ['"Space Mono"', 'monospace']
            },
            boxShadow: {
                'brutal': '8px 8px 0 0 rgba(12,15,10,1)',
                'brutal-sm': '4px 4px 0 0 rgba(12,15,10,1)'
            }
        }
    }
}