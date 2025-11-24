/*
Short && Basic, Custom Shaped 3D Particle Object.
*/

(function() {
    'use strict';

    function init() {
        var c = document.getElementById('bg');

        if (!c) {
            console.warn('Canvas element #bg not found');
            return;
        }

        var $ = c.getContext("2d");

        c.width = window.innerWidth;
        c.height = window.innerHeight;

        var arr = [],
            midX = c.width / 2,
            midY = c.height / 2,
            rotX = 0,
            rotY = 0,
            u = 0,
            vp = 550,
            speed = .5, // RYCHLOST ANIMACE - čím větší, tím rychlejší (1.0 = normální rychlost)
            d, currX, currY,
            x, y, z, g;

        var pt = function(x, y, z) {
          var zpos = z * Math.cos(rotX) - x * Math.sin(rotX),
              xpos = z * Math.sin(rotX) + x * Math.cos(rotX),
              ypos = y * Math.cos(rotY) - zpos * Math.sin(rotY),
              zpos = y * Math.sin(rotY) + zpos * Math.cos(rotY);
              d = 1 / (zpos / vp + 1);
              currX = xpos * d + midX;
              currY = ypos * d + midY;
        }

        for (var i = -Math.PI; i < Math.PI; i += Math.PI / 60) {
          for (var j = -Math.PI; j < Math.PI; j += Math.PI / 20) {
            var px = Math.sin(i*3) % Math.abs(Math.sqrt(5) + Math.cos(j)),
                py = Math.sin(i * 3 * Math.PI / 3) /
                Math.abs(Math.sqrt(5) * Math.cos(j * 3 * Math.PI / 3)),
                pz = Math.cos(i * 3 * Math.PI / 3) /
                Math.abs(Math.sqrt(5) * Math.cos(j * 3 * Math.PI / 3));
                arr.push(px * c.width * 0.218);
                arr.push(py * c.width * 0.218);
                arr.push(pz * c.width * 0.218);
          }
        }

        var draw = function() {
            var g_ = $.createLinearGradient(c.width + c.width,
                c.height + c.height * 1.5,
                c.width + c.width, 1);
                g_.addColorStop(0, 'hsla(253, 5%, 95%, 1)');
                g_.addColorStop(0.5, 'hsla(314, 95%, 25%, 1)');
                g_.addColorStop(0.8, 'hsla(259, 95%, 15%, 1)');
                g_.addColorStop(1, 'hsla(0, 0%, 5%, 1)');
                $.clearRect(0, 0, c.width, c.height);
                $.fillStyle = g_;
                $.fillRect(0, 0, c.width, c.height);

            var a = arr.length;
                rotX += 0.02 * speed; // RYCHLOST ROTACE X
                rotY += 0.02 * speed; // RYCHLOST ROTACE Y
                u -= .2 * speed; // RYCHLOST ZMĚNY BARVY

            for (var i = 0; i < a; i += 40) {
              pt(arr[i], arr[i + 1], arr[i + 2]);
              $.globalCompositeOperation = 'lighter';
              $.fillStyle = 'hsla(' + u * i / 100 + ',85%,70%,.2)';
              $.fillRect(currX, currY, 5, 5);
              $.fill();
            }
          window.requestAnimationFrame(draw);
        }

        draw();

        window.addEventListener('resize', function() {
          c.width = window.innerWidth;
          c.height = window.innerHeight;
          midX = c.width / 2;
          midY = c.height / 2;
          // Reinicializace částic při resize
          arr = [];
          for (var i = -Math.PI; i < Math.PI; i += Math.PI / 60) {
            for (var j = -Math.PI; j < Math.PI; j += Math.PI / 20) {
              var px = Math.sin(i*3) % Math.abs(Math.sqrt(5) + Math.cos(j)),
                  py = Math.sin(i * 3 * Math.PI / 3) /
                  Math.abs(Math.sqrt(5) * Math.cos(j * 3 * Math.PI / 3)),
                  pz = Math.cos(i * 3 * Math.PI / 3) /
                  Math.abs(Math.sqrt(5) * Math.cos(j * 3 * Math.PI / 3));
                  arr.push(px * c.width * 0.18);
                  arr.push(py * c.width * 0.18);
                  arr.push(pz * c.width * 0.18);
            }
          }
        }, false);
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
