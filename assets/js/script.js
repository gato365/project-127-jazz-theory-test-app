// --- Music Data ---
const theoryData = {
    "keys": [
        { 
            "name": "C", 
            "scale": ["C", "D", "E", "F", "G", "A", "B"], 
            "1-4-5": ["C", "F", "G"], 
            "2-5-1": ["Dm7", "G7", "Cmaj7"],
            "4-2-5-1": ["F", "Dm", "G", "C"],
            "1-3-5-7": ["C", "E", "G", "B"],
            "1-2-3-5-6": ["C", "D", "E", "G", "A"]
        },
        { 
            "name": "G", 
            "scale": ["G", "A", "B", "C", "D", "E", "F#"], 
            "1-4-5": ["G", "C", "D"], 
            "2-5-1": ["Am7", "D7", "Gmaj7"],
            "4-2-5-1": ["C", "Am", "D", "G"],
            "1-3-5-7": ["G", "B", "D", "F#"],
            "1-2-3-5-6": ["G", "A", "B", "D", "E"]
        },
        { 
            "name": "D", 
            "scale": ["D", "E", "F#", "G", "A", "B", "C#"], 
            "1-4-5": ["D", "G", "A"], 
            "2-5-1": ["Em7", "A7", "Dmaj7"],
            "4-2-5-1": ["G", "Em", "A", "D"],
            "1-3-5-7": ["D", "F#", "A", "C#"],
            "1-2-3-5-6": ["D", "E", "F#", "A", "B"]
        },
        { 
            "name": "A", 
            "scale": ["A", "B", "C#", "D", "E", "F#", "G#"], 
            "1-4-5": ["A", "D", "E"], 
            "2-5-1": ["Bm7", "E7", "Amaj7"],
            "4-2-5-1": ["D", "Bm", "E", "A"],
            "1-3-5-7": ["A", "C#", "E", "G#"],
            "1-2-3-5-6": ["A", "B", "C#", "E", "F#"]
        },
        { 
            "name": "E", 
            "scale": ["E", "F#", "G#", "A", "B", "C#", "D#"], 
            "1-4-5": ["E", "A", "B"], 
            "2-5-1": ["F#m7", "B7", "Emaj7"],
            "4-2-5-1": ["A", "F#m", "B", "E"],
            "1-3-5-7": ["E", "G#", "B", "D#"],
            "1-2-3-5-6": ["E", "F#", "G#", "B", "C#"]
        },
        { 
            "name": "B", 
            "scale": ["B", "C#", "D#", "E", "F#", "G#", "A#"], 
            "1-4-5": ["B", "E", "F#"], 
            "2-5-1": ["C#m7", "F#7", "Bmaj7"],
            "4-2-5-1": ["E", "C#m", "F#", "B"],
            "1-3-5-7": ["B", "D#", "F#", "A#"],
            "1-2-3-5-6": ["B", "C#", "D#", "F#", "G#"]
        },
        { 
            "name": "F#", 
            "scale": ["F#", "G#", "A#", "B", "C#", "D#", "E#"], 
            "1-4-5": ["F#", "B", "C#"], 
            "2-5-1": ["G#m7", "C#7", "F#maj7"],
            "4-2-5-1": ["B", "G#m", "C#", "F#"],
            "1-3-5-7": ["F#", "A#", "C#", "E#"],
            "1-2-3-5-6": ["F#", "G#", "A#", "C#", "D#"]
        },
        { 
            "name": "Db", 
            "scale": ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"], 
            "1-4-5": ["Db", "Gb", "Ab"], 
            "2-5-1": ["Ebm7", "Ab7", "Dbmaj7"],
            "4-2-5-1": ["Gb", "Ebm", "Ab", "Db"],
            "1-3-5-7": ["Db", "F", "Ab", "C"],
            "1-2-3-5-6": ["Db", "Eb", "F", "Ab", "Bb"]
        },
        { 
            "name": "Ab", 
            "scale": ["Ab", "Bb", "C", "Db", "Eb", "F", "G"], 
            "1-4-5": ["Ab", "Db", "Eb"], 
            "2-5-1": ["Bbm7", "Eb7", "Abmaj7"],
            "4-2-5-1": ["Db", "Bbm", "Eb", "Ab"],
            "1-3-5-7": ["Ab", "C", "Eb", "G"],
            "1-2-3-5-6": ["Ab", "Bb", "C", "Eb", "F"]
        },
        { 
            "name": "Eb", 
            "scale": ["Eb", "F", "G", "Ab", "Bb", "C", "D"], 
            "1-4-5": ["Eb", "Ab", "Bb"], 
            "2-5-1": ["Fm7", "Bb7", "Ebmaj7"],
            "4-2-5-1": ["Ab", "Fm", "Bb", "Eb"],
            "1-3-5-7": ["Eb", "G", "Bb", "D"],
            "1-2-3-5-6": ["Eb", "F", "G", "Bb", "C"]
        },
        { 
            "name": "Bb", 
            "scale": ["Bb", "C", "D", "Eb", "F", "G", "A"], 
            "1-4-5": ["Bb", "Eb", "F"], 
            "2-5-1": ["Cm7", "F7", "Bbmaj7"],
            "4-2-5-1": ["Eb", "Cm", "F", "Bb"],
            "1-3-5-7": ["Bb", "D", "F", "A"],
            "1-2-3-5-6": ["Bb", "C", "D", "F", "G"]
        },
        { 
            "name": "F", 
            "scale": ["F", "G", "A", "Bb", "C", "D", "E"], 
            "1-4-5": ["F", "Bb", "C"], 
            "2-5-1": ["Gm7", "C7", "Fmaj7"],
            "4-2-5-1": ["Bb", "Gm", "C", "F"],
            "1-3-5-7": ["F", "A", "C", "E"],
            "1-2-3-5-6": ["F", "G", "A", "C", "D"]
        }
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
const backspaceBtn = document.getElementById('backspaceBtn');

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

// --- Helper Functions ---

/**
 * Strips chord qualities and handles theory edge cases.
 * e.g., "E#" becomes "F", "Cb" becomes "B", "Dm7" becomes "D"
 */
function normalizeExpectedNote(rawNote) {
    if (!rawNote) return null;
    
    // 1. Remove chord qualities: "maj7", "m7", "m", "7"
    let root = rawNote.replace(/(maj7|m7|m|7)$/, "");

    // 2. Handle Theory "Edge Case" enharmonics
    const logicMap = {
        "E#": "F",
        "B#": "C",
        "Cb": "B",
        "Fb": "E"
    };

    return logicMap[root] || root;
}

function updateAccuracy() {
    if (sessionInputs.length === 0) {
        accuracyDisplay.innerText = "Accuracy: 0%";
        return;
    }
    const correctCount = sessionInputs.filter(i => i.correct).length;
    const percent = Math.round((correctCount / sessionInputs.length) * 100);
    accuracyDisplay.innerText = `Accuracy: ${percent}%`;
}

// --- Core Logic ---

function handleInput(clickedNote) {
    if (!isRunning) return;

    const currentKey = theoryData.keys.find(k => k.name === keySelect.value);
    const targetPattern = currentKey[typeSelect.value];
    const currentIndex = sessionInputs.length;
    
    // 1. Get the raw expected string (e.g., "Gbmaj7")
    const rawExpected = targetPattern[currentIndex];
    
    // 2. Normalize it to a simple note (e.g., "Gb")
    const expectedRoot = normalizeExpectedNote(rawExpected);

    // 3. Logic: Does the button clicked (e.g., "F#/Gb") contain the expected root?
    // We also check if it's an "Extra" note (past the end of the pattern)
    const isCorrect = expectedRoot && clickedNote.includes(expectedRoot);
    
    // 4. Store the result
    sessionInputs.push({ 
        input: clickedNote, 
        expected: rawExpected || "Extra", 
        correct: !!isCorrect 
    });

    // 5. UPDATE UI
    const span = document.createElement('span');
    span.innerText = clickedNote;
    span.className = isCorrect ? "correct-note" : "wrong-note";
    display.appendChild(span);

    updateAccuracy();
}

function handleBackspace() {
    if (!isRunning || sessionInputs.length === 0) return;

    sessionInputs.pop();
    if (display.lastElementChild) {
        display.removeChild(display.lastElementChild);
    }
    updateAccuracy();
}

function startSession() {
    clearInterval(timerInterval);
    seconds = 0;
    sessionInputs = [];
    isRunning = true;
    
    timerElem.innerText = "00:00";
    accuracyDisplay.innerText = "Accuracy: 0%";
    display.innerHTML = '';
    
    grid.classList.remove('hidden');
    submitBtn.classList.remove('hidden');
    backspaceBtn.classList.remove('hidden');
    beginBtn.innerText = "RESTART SESSION";

    timerInterval = setInterval(() => {
        seconds++;
        let m = Math.floor(seconds/60).toString().padStart(2,'0');
        let s = (seconds%60).toString().padStart(2,'0');
        timerElem.innerText = `${m}:${s}`;
    }, 1000);
}

// --- Event Listeners ---

backspaceBtn.onclick = handleBackspace;

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

    console.log("Session Submitted:", finalData);
    alert("Session data submitted to console log!");
    
    grid.classList.add('hidden');
    submitBtn.classList.add('hidden');
    backspaceBtn.classList.add('hidden');
};

beginBtn.addEventListener('click', startSession);