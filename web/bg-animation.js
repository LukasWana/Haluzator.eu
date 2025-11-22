/*
Short && Basic, Custom Shaped 3D Particle Object with Pulse Effect.
*/

var c = document.getElementById('bg'),
    $ = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;

var arr = [],
    midX = c.width / 2,
    midY = c.height / 2,
    rotX = 0,
    rotY = 0,
    u = 0,
    vp = 350,
    pulse = 0, // Pulzující animace
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

for (var i = -Math.PI; i < Math.PI; i += Math.PI / 20) {
  for (var j = -Math.PI; j < Math.PI; j += Math.PI / 20) {
    var px = Math.sin(i) % Math.abs(Math.sqrt(2) + Math.cos(j)),
        py = Math.sin(i * 2 * Math.PI / 3) /
        Math.abs(Math.sqrt(2) * Math.cos(j + 2 * Math.PI / 3)),
        pz = Math.cos(i * 2 * Math.PI / 3) /
        Math.abs(Math.sqrt(2) * Math.cos(j - 2 * Math.PI / 3));
        arr.push(px * c.width * 0.18);
        arr.push(py * c.width * 0.18);
        arr.push(pz * c.width * 0.18);
  }
}

var rnd = function(min, max) {
  return Math.random() * (max - min) + min;
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
        rotX += 0.001; // Dramaticky zpomaleno (původně 0.02)
        rotY += 0.001; // Dramaticky zpomaleno (původně 0.02)
        u -= .01; // Dramaticky zpomaleno (původně .2)
        pulse += 0.001; // Pomalé pulzování (původně 0.002)

    // Výpočet pulzující škály - větší rozsah (0.7 až 1.3)
    var pulseScale = 1 + Math.sin(pulse) * 0.3; // Zvětšený efekt pulzování (původně 0.05)

    for (var i = 0; i < a; i += 3) {
      pt(arr[i], arr[i + 1], arr[i + 2]);
      $.globalCompositeOperation = 'lighter';
      $.fillStyle = 'hsla(' + u * i / 100 + ',85%,70%,.3)'; // Snížena opacity z .8 na .3

      // Aplikace jemnějšího pulzujícího efektu na kolečka
      var radius = rnd(1, 5) * pulseScale;
      $.beginPath();
      $.arc(currX, currY, radius, 0, Math.PI * 2);
      $.fill();
    }
}

//animate && resize
window.requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

var run = function() {
  window.requestAnimFrame(run);
  draw();
}

run();

window.addEventListener('resize', function() {
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  midX = c.width / 2;
  midY = c.height / 2;
  arr = [];
  for (var i = -Math.PI; i < Math.PI; i += Math.PI / 20) {
    for (var j = -Math.PI; j < Math.PI; j += Math.PI / 20) {
      var px = Math.sin(i) % Math.abs(Math.sqrt(2) + Math.cos(j)),
          py = Math.sin(i * 2 * Math.PI / 3) /
          Math.abs(Math.sqrt(2) * Math.cos(j + 2 * Math.PI / 3)),
          pz = Math.cos(i * 2 * Math.PI / 3) /
          Math.abs(Math.sqrt(2) * Math.cos(j - 2 * Math.PI / 3));
          arr.push(px * c.width * 0.18);
          arr.push(py * c.width * 0.18);
          arr.push(pz * c.width * 0.18);
    }
  }
}, false);

// Export for debugging
window.bgCanvas = c;
window.bgCtx = $;
