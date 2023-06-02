var btnEntrar = document.querySelector('.btnEntrarMenu');
var container = document.querySelector('.containerLogin');

btnEntrar.addEventListener('click', function () {

    if (container.style.display === 'flex') {
        container.style.display = 'none';
    } else {
        container.style.display = 'flex';
    }
});