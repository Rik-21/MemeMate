// Toggle between sections
function showSection(section) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    const targetSection = document.getElementById(section);
    if (targetSection) {
        targetSection.classList.add('active');
    } else {
        console.error(`Section "${section}" not found.`);
    }
}

// Change chat content background color based on mood
function changeBackground(color) {
    const chatContent = document.getElementById('chat-content');
    if (chatContent) {
        chatContent.style.backgroundColor = color;
    } else {
        console.error('Chat content element not found.');
    }
}

// Add event listeners to mood circles for background change
document.addEventListener('DOMContentLoaded', () => {
    const moodCircles = document.querySelectorAll('.circle');
    moodCircles.forEach(circle => {
        circle.addEventListener('click', () => {
            const color = getComputedStyle(circle).backgroundColor;
            changeBackground(color);
        });
    });
});
