document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('bt');
    const title = document.getElementById('title');
    const body = document.body;
    const particlesContainer = document.getElementById('particles');
    
    const colors = ['#ff9a9e', '#fad0c4', '#a18cd1', '#fbc2eb', '#ffecd2', '#fcb69f'];
    let clickCount = 0;
    
    button.addEventListener('click', function() {
        clickCount++;
        
        // Change background color
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        body.style.background = `linear-gradient(135deg, ${randomColor} 0%, ${colors[(clickCount % colors.length)]} 100%)`;
        
        // Animate title
        title.style.transform = 'scale(1.1)';
        setTimeout(() => {
            title.style.transform = 'scale(1)';
        }, 300);
        
        // Create particles
        createParticles(20);
        
        // Button effects
        button.textContent = ['Wow!', 'Amazing!', 'Again!', 'More!', 'Yay!'][clickCount % 5];
        
        // Special effect every 3 clicks
        if (clickCount % 3 === 0) {
            title.classList.toggle('rotate');
            setTimeout(() => {
                title.classList.toggle('rotate');
            }, 2000);
        }
    });
    
    function createParticles(count) {
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random properties
            const size = Math.random() * 15 + 5;
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.background = color;
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${Math.random() * 100}vh`;
            
            // Animation
            const animation = particle.animate([
                { transform: 'translate(0, 0)', opacity: 1 },
                { transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`, opacity: 0 }
            ], {
                duration: Math.random() * 1000 + 1000,
                easing: 'cubic-bezier(0,0.2,0.8,1)'
            });
            
            particlesContainer.appendChild(particle);
            
            // Remove particle after animation
            animation.onfinish = () => {
                particle.remove();
            };
        }
    }
});