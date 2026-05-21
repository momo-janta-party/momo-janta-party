"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('partyForm');
    const card = document.getElementById('registrationCard');
    const welcomeMsg = document.getElementById('welcomeMessage');
    const outName = document.getElementById('outName');
    const outPref = document.getElementById('outPref');
    const outSpice = document.getElementById('outSpice');
    const outX = document.getElementById('outX');
    
    // Load saved profile if it exists
    const savedComrade = localStorage.getItem('mjp_comrade');
    if (savedComrade) {
        try {
            const user = JSON.parse(savedComrade);
            showIdCard(user);
        } catch (e) {
            console.error(e);
        }
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('comradeName');
            const xInput = document.getElementById('xHandle');
            const prefSelect = document.getElementById('momoPref');
            const spiceInput = document.getElementById('chutneySpice');
            
            if (nameInput && prefSelect && spiceInput) {
                if (spiceInput.value === '0') {
                    alert("WARNING: Zero spice detected. Is that mayonnaise? The Chutney Regulation Act strictly forbids this!");
                    return;
                }
                
                const user = {
                    name: nameInput.value,
                    x: xInput && xInput.value.trim() !== '' ? xInput.value : 'N/A',
                    pref: prefSelect.value,
                    spice: spiceInput.value
                };
                
                // Save to localStorage so they don't have to register again
                localStorage.setItem('mjp_comrade', JSON.stringify(user));
                
                showIdCard(user);
            }
        });
    }
    
    function showIdCard(user) {
        if (outName) outName.textContent = user.name;
        if (outX) outX.textContent = user.x;
        if (outPref) outPref.textContent = user.pref;
        if (outSpice) outSpice.textContent = user.spice;
        
        if (card) card.style.display = 'none';
        if (welcomeMsg) welcomeMsg.style.display = 'block';
    }
});
