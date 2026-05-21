const kandsDatabase: Record<string, string[]> = {
    congress: [
        "File #2G: Momos were severely underpriced to benefit select vendors.",
        "File #CWG: The bamboo baskets were imported at 10x the actual cost.",
        "File #Coal: The coal used for steaming was allocated without transparency.",
        "File #NationalHerald: A newspaper was bought to publish fake reviews about MJP momos."
    ],
    bjp: [
        "File #ElectoralBonds: Anonymous donations received in the form of extra mayonnaise packets.",
        "File #Demonetization: All 500 and 1000 rupee notes were banned to 'stop black momos'.",
        "File #WashingMachine: Corrupt mayonnaise consumers were purified upon joining the MJP.",
        "File #Pegasus: Secret surveillance to find out who ordered extra spicy chutney."
    ],
    aap: [
        "File #LiquorScam: Buy one plate of momos, get one free bottle of 'chutney' (it wasn't chutney).",
        "File #SheeshMahal: The department head spent 45 Crores renovating the steaming kitchen.",
        "File #Dharna: The entire department went on a strike instead of making momos.",
        "File #WaterTanker: Delivered soup instead of water to the citizens."
    ],
    pappu: [
        "File #Machine: Promised a machine where you put a potato in one side and get gold out the other.",
        "File #Youth: Claimed that youth wake up in the morning, and the moment they wake up, it's morning.",
        "File #EscapeVelocity: Stated that Jupiter's escape velocity is needed for Dalits to succeed."
    ]
};

['congress', 'bjp', 'aap', 'pappu'].forEach(id => {
    const btn = document.getElementById(`reveal-btn-${id}`);
    const textNode = document.getElementById(`kand-text-${id}`);
    
    if (btn && textNode) {
        btn.addEventListener('click', () => {
            const kands = kandsDatabase[id];
            const randomKand = kands[Math.floor(Math.random() * kands.length)];
            textNode.innerText = randomKand;
            btn.style.borderColor = 'orange';
        });
    }
});
