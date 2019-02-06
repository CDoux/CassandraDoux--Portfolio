var un = document.querySelector('.un');
var ombre = document.querySelector('.un--plein');
console.log(ombre)

un.addEventListener('mouseover', function() {
    ombre.classList.add('is-hovered')
    console.log('work?')
});

un.addEventListener('mouseout', function() {
    ombre.classList.remove('is-hovered')
})