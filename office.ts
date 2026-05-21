document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('partyForm') as HTMLFormElement;
    const card = document.getElementById('registrationCard') as HTMLElement;
    const welcomeMsg = document.getElementById('welcomeMessage') as HTMLElement;
    
    const outName = document.getElementById('outName') as HTMLSpanElement;
    const outPref = document.getElementById('outPref') as HTMLSpanElement;
    const outSpice = document.getElementById('outSpice') as HTMLSpanElement;

    if (form) {
        form.addEventListener('submit', (e: Event) => {
            e.preventDefault();
            
            const nameInput = document.getElementById('comradeName') as HTMLInputElement;
            const prefSelect = document.getElementById('momoPref') as HTMLSelectElement;
            const spiceInput = document.getElementById('chutneySpice') as HTMLInputElement;

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
