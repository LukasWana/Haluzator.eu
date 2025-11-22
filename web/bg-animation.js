/*
Background Animation - CodePen Style Particle Effect
Optimized for performance
*/

(function() {
    var canvas = document.getElementById('bg');
    if (!canvas) {
        console.warn('Canvas element #bg not found');
        return;
    }

    var ctx = canvas.getContext('2d');
    var particles = [];
    var particleCount = 50; // Optimalizováno pro výkon
    var mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }; // Začínáme ve středu
    var w, h;

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }

    resize();

    function Particle() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.baseRadius = Math.random() * 2 + 1; // Základní velikost
        this.radius = this.baseRadius;
    }

    Particle.prototype.update = function() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;

        // Reakce na pohyb kurzoru - částice jsou přitahovány k myši (jako v původním kódu)
        var dx = mouse.x - this.x;
        var dy = mouse.y - this.y;
        var distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 0 && distance < 150) {
            var force = (150 - distance) / 150;
            this.vx += (dx / distance) * force * 0.03; // Zvýšená síla pro výraznější reakci
            this.vy += (dy / distance) * force * 0.03;

            // Efekt přiblížení - částice se zvětšují při přiblížení k myši
            var zoomFactor = 1 + (1 - distance / 150) * 1.5; // Zvětšení až 2.5x při přiblížení
            this.radius = this.baseRadius * zoomFactor;
        } else {
            // Vrátit na základní velikost když je daleko
            this.radius = this.baseRadius;
        }

        // Omezení rychlosti pro plynulost
        var maxSpeed = 2.5;
        var speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (speed > maxSpeed) {
            this.vx = (this.vx / speed) * maxSpeed;
            this.vy = (this.vy / speed) * maxSpeed;
        }
    };

    Particle.prototype.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'hsla(260, 80%, 70%, 0.8)';
        ctx.fill();
    };

    // Inicializace částic
    for (var i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    // Mouse tracking - reakce na pohyb kurzoru
    document.addEventListener('mousemove', function(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    // Reset pozice myši při opuštění okna
    document.addEventListener('mouseleave', function() {
        mouse.x = w / 2;
        mouse.y = h / 2;
    });

    function animate() {
        requestAnimationFrame(animate);

        // Gradient pozadí
        var gradient = ctx.createLinearGradient(0, 0, w, h);
        gradient.addColorStop(0, 'hsla(240, 50%, 10%, 1)');
        gradient.addColorStop(0.5, 'hsla(280, 60%, 15%, 1)');
        gradient.addColorStop(1, 'hsla(300, 40%, 5%, 1)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);

        // Aktualizace a vykreslení částic
        for (var i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }

        // Spojení částic
        ctx.strokeStyle = 'hsla(260, 80%, 60%, 0.3)';
        ctx.lineWidth = 1;

        for (var i = 0; i < particles.length; i++) {
            for (var j = i + 1; j < particles.length; j++) {
                var dx = particles[i].x - particles[j].x;
                var dy = particles[i].y - particles[j].y;
                var distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = 'hsla(260, 80%, 60%, ' + (1 - distance / 150) * 0.3 + ')';
                    ctx.stroke();
                }
            }
        }
    }

    animate();

    // Resize handler
    var resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            resize();
            // Reinicializace částic při resize
            particles = [];
            for (var i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }, 100);
    });
})();
