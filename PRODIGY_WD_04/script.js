document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelectorAll('.progress-circle').forEach(circle => {
    const percent = circle.dataset.percent;
    const circumference = 2 * Math.PI * parseFloat(circle.querySelector('.progress-circle-bar').getAttribute('r'));
    const offset = circumference * (1 - percent / 100);
    const progressColor = '#FFDB58'; // Mustard yellow color
    circle.querySelector('.progress-circle-bar').style.stroke = progressColor;
    circle.querySelector('.progress-circle-bar').style.strokeDashoffset = offset;
});
