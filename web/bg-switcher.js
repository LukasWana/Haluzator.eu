// Background Effect Switcher
// Switch between different background effects

(function() {
    var currentEffect = 'pulse'; // 'pulse' or 'network'
    var currentAnimationId = null;
    var canvas = document.getElementById('bg');

    if (!canvas) {
        console.warn('Canvas element not found');
        return;
    }

    var ctx = canvas.getContext("2d");

    // Stop current animation
    function stopAnimation() {
        if (currentAnimationId) {
            cancelAnimationFrame(currentAnimationId);
            currentAnimationId = null;
        }
    }

    // Pulse effect (original)
    function initPulseEffect() {
        stopAnimation();
        currentEffect = 'pulse';

        var arr = [],
            midX = canvas.width / 2,
            midY = canvas.height / 2,
            rotX = 0,
            rotY = 0,
            u = 0,
            vp = 350,
            pulse = 0,
            d, currX, currY;

        var pt = function(x, y, z) {
            var zpos = z * Math.cos(rotX) - x * Math.sin(rotX),
                xpos = z * Math.sin(rotX) + x * Math.cos(rotX),
                ypos = y * Math.cos(rotY) - zpos * Math.sin(rotY),
                zpos = y * Math.sin(rotY) + zpos * Math.cos(rotY);
            d = 1 / (zpos / vp + 1);
            currX = xpos * d + midX;
            currY = ypos * d + midY;
        }

        for (var i = -Math.PI; i < Math.PI; i += Math.PI / 20) {
            for (var j = -Math.PI; j < Math.PI; j += Math.PI / 20) {
                var px = Math.sin(i) % Math.abs(Math.sqrt(2) + Math.cos(j)),
                    py = Math.sin(i * 2 * Math.PI / 3) / Math.abs(Math.sqrt(2) * Math.cos(j + 2 * Math.PI / 3)),
                    pz = Math.cos(i * 2 * Math.PI / 3) / Math.abs(Math.sqrt(2) * Math.cos(j - 2 * Math.PI / 3));
                arr.push(px * canvas.width * 0.18);
                arr.push(py * canvas.width * 0.18);
                arr.push(pz * canvas.width * 0.18);
            }
        }

        var rnd = function(min, max) {
            return Math.random() * (max - min) + min;
        }

        var draw = function() {
            var g_ = ctx.createLinearGradient(canvas.width + canvas.width,
                canvas.height + canvas.height * 1.5,
                canvas.width + canvas.width, 1);
            g_.addColorStop(0, 'hsla(253, 5%, 95%, 1)');
            g_.addColorStop(0.5, 'hsla(314, 95%, 25%, 1)');
            g_.addColorStop(0.8, 'hsla(259, 95%, 15%, 1)');
            g_.addColorStop(1, 'hsla(0, 0%, 5%, 1)');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = g_;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            var a = arr.length;
            rotX += 0.001; // Dramaticky zpomaleno (původně 0.02)
            rotY += 0.001; // Dramaticky zpomaleno (původně 0.02)
            u -= .01; // Dramaticky zpomaleno (původně .2)
            pulse += 0.002; // Dramaticky zpomaleno (původně 0.05)

            var pulseScale = 1 + Math.sin(pulse) * 0.05; // Jemnější pulzování (původně 0.2)
            for (var i = 0; i < a; i += 3) {
                pt(arr[i], arr[i + 1], arr[i + 2]);
                ctx.globalCompositeOperation = 'lighter';
                ctx.fillStyle = 'hsla(' + u * i / 100 + ',85%,70%,.8)';
                var size = rnd(1, 5) * pulseScale;
                ctx.fillRect(currX, currY, size, size);
                ctx.fill();
            }

            currentAnimationId = requestAnimationFrame(draw);
        }

        draw();
    }

    // Network effect (alternative)
    function initNetworkEffect() {
        stopAnimation();
        currentEffect = 'network';

        var particles = [],
            particleCount = 100,
            connectionDistance = 150,
            mouseX = canvas.width / 2,
            mouseY = canvas.height / 2;

        function Particle() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.05; // Dramaticky zpomaleno (původně 0.5)
            this.vy = (Math.random() - 0.5) * 0.05; // Dramaticky zpomaleno (původně 0.5)
            this.radius = Math.random() * 2 + 1;
        }

        for (var i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        var mouseMoveHandler = function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        document.addEventListener('mousemove', mouseMoveHandler);

        var draw = function() {
            var g_ = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            g_.addColorStop(0, 'hsla(240, 50%, 10%, 1)');
            g_.addColorStop(0.5, 'hsla(280, 60%, 15%, 1)');
            g_.addColorStop(1, 'hsla(300, 40%, 5%, 1)');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = g_;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (var i = 0; i < particles.length; i++) {
                var p = particles[i];

                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                p.x = Math.max(0, Math.min(canvas.width, p.x));
                p.y = Math.max(0, Math.min(canvas.height, p.y));

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'hsla(260, 80%, 70%, 0.8)';
                ctx.fill();

                for (var j = i + 1; j < particles.length; j++) {
                    var p2 = particles[j];
                    var dx = p.x - p2.x;
                    var dy = p.y - p2.y;
                    var distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = 'hsla(260, 80%, 60%, ' + (1 - distance / connectionDistance) * 0.3 + ')';
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }

                var dx = p.x - mouseX;
                var dy = p.y - mouseY;
                var distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    var force = (100 - distance) / 100;
                    p.vx += (dx / distance) * force * 0.001; // Zpomaleno (původně 0.01)
                    p.vy += (dy / distance) * force * 0.001; // Zpomaleno (původně 0.01)
                }
            }

            currentAnimationId = requestAnimationFrame(draw);
        }

        draw();
    }

    // Resize handler
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Restart current effect
        if (currentEffect === 'pulse') {
            initPulseEffect();
        } else {
            initNetworkEffect();
        }
    }

    window.addEventListener('resize', resize);

    // Keyboard shortcut: Press 'B' to switch effects
    document.addEventListener('keydown', function(e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }

        if (e.key === 'b' || e.key === 'B') {
            if (currentEffect === 'pulse') {
                initNetworkEffect();
            } else {
                initPulseEffect();
            }
        }
    });

    // Export functions for console access
    window.switchBackground = function(effect) {
        if (effect === 'pulse') {
            initPulseEffect();
        } else if (effect === 'network') {
            initNetworkEffect();
        } else {
            console.log('Available effects: "pulse" or "network"');
        }
    };

    window.getCurrentEffect = function() {
        return currentEffect;
    };

    // Initialize with pulse effect
    initPulseEffect();

    console.log('Background Switcher loaded. Press "B" to switch effects.');
    console.log('Or use: switchBackground("pulse") or switchBackground("network")');
})();
