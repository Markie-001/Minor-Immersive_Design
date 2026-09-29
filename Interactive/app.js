AFRAME.registerComponent('interactief-object', {
init: function () {
let element = this.el; // Het huidige 3D object
element.addEventListener('click', function () {
// Verander de kleur willekeurig bij een klik
let kleuren = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33'];
let randomKleur = kleuren[Math.floor(Math.random() *
kleuren.length)];
element.setAttribute('color', randomKleur);
// Bonus: Pas ook de schaal (scale) aan!
element.setAttribute('scale', '1.2 1.2 1.2');
});
}
});
