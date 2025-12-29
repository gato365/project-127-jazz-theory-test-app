// --- Music Data from JSON ---
const theoryData = {
    "keys": [
        { "name": "C", "scale": ["C", "D", "E", "F", "G", "A", "B"], "1-4-5": ["C", "F", "G"], "2-5-1": ["Dm7", "G7", "Cmaj7"] },
        { "name": "G", "scale": ["G", "A", "B", "C", "D", "E", "F#"], "1-4-5": ["G", "C", "D"], "2-5-1": ["Am7", "D7", "Gmaj7"] },
        { "name": "D", "scale": ["D", "E", "F#", "G", "A", "B", "C#"], "1-4-5": ["D", "G", "A"], "2-5-1": ["Em7", "A7", "Dmaj7"] },
        { "name": "A", "scale": ["A", "B", "C#", "D", "E", "F#", "G#"], "1-4-5": ["A", "D", "E"], "2-5-1": ["Bm7", "E7", "Amaj7"] },
        { "name": "E", "scale": ["E", "F#", "G#", "A", "B", "C#", "D#"], "1-4-5": ["E", "A", "B"], "2-5-1": ["F#m7", "B7", "Emaj7"] },
        { "name": "B", "scale": ["B", "C#", "D#", "E", "F#", "G#", "A#"], "1-4-5": ["B", "E", "F#"], "2-5-1": ["C#m7", "F#7", "Bmaj7"] },
        { "name": "F#", "scale": ["F#", "G#", "A#", "B", "C#", "D#", "E#"], "1-4-5": ["F#", "B", "C#"], "2-5-1": ["G#m7", "C#7", "F#maj7"] },
        { "name": "Db", "scale": ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"], "1-4-5": ["Db", "Gb", "Ab"], "2-5-1": ["Ebm7", "Ab7", "Dbmaj7"] },
        { "name": "Ab", "scale": ["Ab", "Bb", "C", "Db", "Eb", "F", "G"], "1-4-5": ["Ab", "Db", "Eb"], "2-5-1": ["Bbm7", "Eb7", "Abmaj7"] },
        { "name": "Eb", "scale": ["Eb", "F", "G", "Ab", "Bb", "C", "D"], "1-4-5": ["Eb", "Ab", "Bb"], "2-5-1": ["Fm7", "Bb7", "Ebmaj7"] },
        { "name": "Bb", "scale": ["Bb", "C", "D", "Eb", "F", "G", "A"], "1-4-5": ["Bb", "Eb", "F"], "2-5-1": ["Cm7", "F7", "Bbmaj7"] },
        { "name": "F", "scale": ["F", "G", "A", "Bb", "C", "D", "E"], "1-4-5": ["F", "Bb", "C"], "2-5-1": ["Gm7", "C7", "Fmaj7"] }
    ]
};

// --- App State ---
let sessionNotes = [];
let timerInterval;
let seconds = 0;
let isRunning = false;
let correctCount = 0;

// --- Init UI ---
const keySelect = document.getElementById('keySelect');
const grid = document.getElementById('buttonGrid');
const display = document.getElementById('displayInput');
const accuracyDisplay = document.getElementById('accuracyDisplay');

// Populating Keys
theoryData.keys.forEach(k => {
    let opt = document.createElement('option');
    opt.value = k.name;
    opt.innerText = k.name;
    keySelect.appendChild(opt);
});

// Create Buttons (including m7 and maj7 for progressions)
const notes = ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"];
const suffixes = ["", "m7", "7", "maj7"]; // To handle 2-5-1 and 1-4-5 variety

function createButtons() {
    notes.forEach(note => {
        const btn = document.createElement('button');
        btn.className = "btn btn-outline-secondary note-btn";
        btn.innerText = note;
        btn.onclick = () => handleInput(note);
        grid.appendChild(btn);
    });
}
createButtons();

// --- Logic Functions ---

function handleInput(inputNote) {
    if (!isRunning) return;

    const currentKey = theoryData.keys.find(k => k.name === keySelect.value);
    const targetType = document.getElementById('typeSelect').value;
    const targetArray = currentKey[targetType];
    
    // Check if the input exists in the target scale/progression
    // We use a simple check; for complex chord names, user can type or we can add chord buttons
    const isCorrect = targetArray.some(n => n.startsWith(inputNote));
    
    if (isCorrect) correctCount++;
    sessionNotes.push({ note: inputNote, correct: isCorrect });

    // Update Visuals
    const span = document.createElement('span');
    span.innerText = inputNote;
    span.className = isCorrect ? "correct-note" : "wrong-note";
    display.appendChild(span);

    // Update Accuracy %
    const percent = Math.round((correctCount / sessionNotes.length) * 100);
    accuracyDisplay.innerText = `Accuracy: ${percent}%`;
}

function startSession() {
    isRunning = true;
    seconds = 0;
    correctCount = 0;
    sessionNotes = [];
    display.innerHTML = '';
    accuracyDisplay.innerText = "Accuracy: 0%";
    
    timerInterval = setInterval(() => {
        seconds++;
        let m = Math.floor(seconds/60).toString().padStart(2,'0');
        let s = (seconds%60).toString().padStart(2,'0');
        document.getElementById('timerDisplay').innerText = `${m}:${s}`;
    }, 1000);
}

document.getElementById('beginBtn').onclick = startSession;

document.getElementById('saveBtn').onclick = () => {
    clearInterval(timerInterval);
    isRunning = false;
    const finalData = {
        key: keySelect.value,
        type: document.getElementById('typeSelect').value,
        accuracy: accuracyDisplay.innerText,
        duration: document.getElementById('timerDisplay').innerText,
        raw_data: sessionNotes
    };
    console.log("Final JSON Data:", JSON.stringify(finalData, null, 2));
    alert("Session data logged to console. Ready for Firebase!");
};