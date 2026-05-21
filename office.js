"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('partyForm');
    const card = document.getElementById('registrationCard');
    const welcomeMsg = document.getElementById('welcomeMessage');
    const outName = document.getElementById('outName');
    const outPref = document.getElementById('outPref');
    const outSpice = document.getElementById('outSpice');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('comradeName');
            const prefSelect = document.getElementById('momoPref');
            const spiceInput = document.getElementById('chutneySpice');
            if (nameInput && prefSelect && spiceInput) {
                // Check mayo violation (easter egg logic)
                if (spiceInput.value === '0') {
                    alert("WARNING: Zero spice detected. Is that mayonnaise? The Chutney Regulation Act strictly forbids this!");
                    return;
                }
                // Update UI
                outName.textContent = nameInput.value;
                outPref.textContent = prefSelect.value;
                outSpice.textContent = spiceInput.value;
                // Transition
                card.style.display = 'none';
                welcomeMsg.style.display = 'block';
            }
        });
    }
});
