document.getElementById('dateButton').addEventListener('click', function() {
    alert('Yay! I can’t wait to spend this special evening with you!');
    window.location.href = "next.html";
});
document.addEventListener('DOMContentLoaded', function() {
    var image = document.querySelector('.animated-image');
    
    // Trigger animation on image load
    image.onload = function() {
        image.classList.add('animated');
    };
});