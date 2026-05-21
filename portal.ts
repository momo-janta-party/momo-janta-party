function runSpiceTest(): void {
    const select = document.getElementById('spiceQuiz') as HTMLSelectElement;
    const resultBox = document.getElementById('spiceResult') as HTMLDivElement;
    
    if (!select || !resultBox) return;

    resultBox.style.display = 'block';
    
    switch (select.value) {
        case 'weak':
            resultBox.innerHTML = '<strong>Rank: Mild Supporter</strong><br>You need more practice. Report to the Ministry of Steaming for training.';
            resultBox.style.borderColor = 'yellow';
            break;
        case 'mid':
            resultBox.innerHTML = '<strong>Rank: Spicy Comrade</strong><br>Good job. You are a respectable citizen of the MJP.';
            resultBox.style.borderColor = 'orange';
            break;
        case 'chad':
            resultBox.innerHTML = '<strong>Rank: Schezwan Supreme Leader</strong><br>Absolute legend. The Dept. of Chutney Affairs wants to recruit you.';
            resultBox.style.borderColor = 'red';
            break;
        case 'mayo':
            resultBox.innerHTML = '<strong>🚨 ARREST WARRANT ISSUED 🚨</strong><br>The Schezwan Mahila Morcha has been dispatched to your location.';
            resultBox.style.borderColor = 'red';
            resultBox.style.background = 'rgba(255, 0, 0, 0.2)';
            break;
        default:
            resultBox.innerHTML = 'Please select an option first.';
            resultBox.style.display = 'none';
    }
}

function calculateTax(): void {
    const input = document.getElementById('momoCount') as HTMLInputElement;
    const resultBox = document.getElementById('taxResult') as HTMLDivElement;
    
    if (!input || !resultBox) return;

    const count = parseInt(input.value);
    
    resultBox.style.display = 'block';
    if (isNaN(count) || count < 0) {
        resultBox.innerHTML = 'Enter a valid number of plates.';
        return;
    }

    if (count === 0) {
        resultBox.innerHTML = '<strong>0 Momos?</strong><br>This is a national tragedy. Claim your Universal Basic Momo immediately.';
    } else {
        const napkins = count * 2; // 2 napkins per plate
        resultBox.innerHTML = `<strong>Tax Due: ${napkins} Napkins</strong><br>Please submit these to the nearest Steaming Corridor.`;
    }
}

let isPlaying = false;
function toggleAnthem(): void {
    const btn = document.getElementById('playBtn') as HTMLButtonElement;
    const eq = document.getElementById('equalizer') as HTMLDivElement;
    const status = document.getElementById('anthemStatus') as HTMLParagraphElement;
    
    if (!btn || !eq || !status) return;

    isPlaying = !isPlaying;
    
    if (isPlaying) {
        btn.textContent = '⏸';
        eq.style.display = 'block';
        status.innerHTML = '<em>"Melody itni chocolaty kyun hai..."</em> (Lo-Fi Remix)';
        status.style.color = 'var(--primary-color)';
    } else {
        btn.textContent = '▶';
        eq.style.display = 'none';
        status.innerHTML = 'Stand up for the anthem.';
        status.style.color = 'var(--text-muted)';
    }
}

// Expose functions to global scope so inline onclick handlers can use them
(window as any).runSpiceTest = runSpiceTest;
(window as any).calculateTax = calculateTax;
(window as any).toggleAnthem = toggleAnthem;
