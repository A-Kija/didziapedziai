const htmlBody = document.querySelector('body');
const color = document.querySelector('[type=color]');
const size = document.querySelector('[type=range]');

color
    .addEventListener('change', e => {
        htmlBody.style.backgroundColor = e.target.value;
        settings.color = e.target.value;
        localStorage.setItem('bc', JSON.stringify(settings));
    });

size
    .addEventListener('change', e => {
        htmlBody.style.fontSize = e.target.value + 'px';
        settings.size = e.target.value;
        localStorage.setItem('bc', JSON.stringify(settings));
    });

//start
let settings = localStorage.getItem('bc');
if (null === settings) {
    settings = {
        color: '#ffffff',
        size: 16
    };
    localStorage.setItem('bc', JSON.stringify(settings));
} else {
    settings = JSON.parse(settings);
}

htmlBody.style.backgroundColor = settings.color;
color.value = settings.color;
htmlBody.style.fontSize = settings.size + 'px';
size.value = settings.size;