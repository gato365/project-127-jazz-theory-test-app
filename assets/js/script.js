// --- Music Data ---
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

const notes = ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"];

// --- App State ---
let sessionInputs = [];
let timerInterval;
let seconds = 0;
let isRunning = false;

// --- DOM Elements ---
const keySelect = document.getElementById('keySelect');
const typeSelect = document.getElementById('typeSelect');
const grid = document.getElementById('buttonGrid');
const display = document.getElementById('displayInput');
const accuracyDisplay = document.getElementById('accuracyDisplay');
const timerElem = document.getElementById('timerDisplay');
const beginBtn = document.getElementById('beginBtn');
const submitBtn = document.getElementById('submitBtn');

// --- Initialization ---
theoryData.keys.forEach(k => {
    let opt = document.createElement('option');
    opt.value = k.name;
    opt.innerText = k.name;
    keySelect.appendChild(opt);
});

notes.forEach(note => {
    const btn = document.createElement('button');
    btn.className = "btn btn-outline-secondary note-btn";
    btn.innerText = note;
    btn.onclick = () => handleInput(note);
    grid.appendChild(btn);
});

// --- Core Logic ---

function handleInput(note) {
    if (!isRunning) return;

    const currentKey = theoryData.keys.find(k => k.name === keySelect.value);
    const targetPattern = currentKey[typeSelect.value];
    const currentIndex = sessionInputs.length;
    
    // Grading Logic: Check if input matches the specific note at this position in the sequence
    const expected = targetPattern[currentIndex];
    // Check if the input note matches the start of the chord (e.g., "D" matches "Dm7")
    const isCorrect = expected && expected.startsWith(note);
    
    sessionInputs.push({ input: note, expected: expected || "Extra", correct: isCorrect });

    // Update Display UI
    const span = document.createElement('span');
    span.innerText = expected || note; // Show the full chord name if correct
    span.className = isCorrect ? "correct-note" : "wrong-note";
    display.appendChild(span);

    updateAccuracy();
}

function updateAccuracy() {
    const correctCount = sessionInputs.filter(i => i.correct).length;
    const percent = Math.round((correctCount / sessionInputs.length) * 100) || 0;
    accuracyDisplay.innerText = `Accuracy: ${percent}%`;
}

function startSession() {
    // 1. Reset State
    clearInterval(timerInterval); // Fix: Ensure any old timer is killed
    seconds = 0;
    sessionInputs = [];
    isRunning = true;
    
    // 2. Reset UI
    timerElem.innerText = "00:00";
    accuracyDisplay.innerText = "Accuracy: 0%";
    display.innerHTML = '';
    
    // 3. Show/Hide Elements
    grid.classList.remove('hidden');
    submitBtn.classList.remove('hidden');
    beginBtn.innerText = "RESTART SESSION";

    // 4. Start Timer
    timerInterval = setInterval(() => {
        seconds++;
        let m = Math.floor(seconds/60).toString().padStart(2,'0');
        let s = (seconds%60).toString().padStart(2,'0');
        timerElem.innerText = `${m}:${s}`;
    }, 1000);
}

submitBtn.onclick = () => {
    clearInterval(timerInterval);
    isRunning = false;
    
    const finalData = {
        timestamp: new Date().toISOString(),
        key: keySelect.value,
        testType: typeSelect.value,
        accuracy: accuracyDisplay.innerText,
        time: timerElem.innerText,
        results: sessionInputs
    };

    console.log("Session Submitted:", JSON.stringify(finalData, null, 2));
    alert("Session data submitted to console log!");
    
    // Optional: Hide buttons again after submit
    grid.classList.add('hidden');
    submitBtn.classList.add('hidden');
};

beginBtn.addEventListener('click', startSession);