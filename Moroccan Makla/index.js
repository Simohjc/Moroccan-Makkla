

const buttons = document.querySelectorAll('.click-btn');

buttons.forEach(button => {
    const buttonId = button.getAttribute('data-id');
    const countDisplay = document.getElementById(`click-count-${buttonId}`);
    let count = parseInt(localStorage.getItem(`click-count-${buttonId}`)) || 0;
    countDisplay.textContent = `Checked out: ${count}`;
    button.addEventListener('click', () => {
        count++;
        countDisplay.textContent = `Checked out: ${count}`;
        localStorage.setItem(`click-count-${buttonId}`, count);
    });
});

