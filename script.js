const questionsData = [
    // --- BIPOLAR JUNCTION TRANSISTORS (BJT) ---
    { q: "A transistor is technically a 'transfer resistor' that operates by having the output current determined by the:", options: ["Output voltage", "Input circuit current", "Supply resistance", "Magnetic field"], ans: 1 },
    { q: "The BJT is a type of transistor that indicates it has how many junctions between p-type and n-type semiconductors?", options: ["One", "Two", "Three", "Four"], ans: 1 },
    { q: "Which BJT layer is responsible for 'gathering' the charge carriers?", options: ["Emitter", "Base", "Collector", "Gate"], ans: 2 },
    { q: "In a PNP transistor, the arrow on the schematic symbol points:", options: ["Inward toward the base", "Outward from the emitter", "Directly to the collector", "Away from the junction"], ans: 0 },
    { q: "Which BJT configuration is known as a 'Voltage Follower' because it has high input impedance and low output impedance?", options: ["Common-Emitter", "Common-Base", "Common-Collector", "Common-Gate"], ans: 2 },
    { q: "A transistor works as a 'current booster' when it is functioning as a/an:", options: ["Switch", "Amplifier", "Oscillator", "Rectifier"], ans: 1 },
    { q: "Which region of BJT operation occurs when both junctions are forward-biased, making the transistor work as a closed switch?", options: ["Active Region", "Cut-off Region", "Saturation Region", "Breakdown Region"], ans: 2 },
    { q: "The BJT is considered a 'Bipolar' device because its operation involves:", options: ["Only electrons", "Only holes", "Both electrons and holes", "Neither electrons nor holes"], ans: 2 },

    // --- FIELD EFFECT TRANSISTORS (FET) ---
    { q: "Unlike the BJT, the FET is a 'uni-polar' transistor because it performs a:", options: ["Dual-channel operation", "Single-channel operation", "Triple-junction operation", "Zero-current operation"], ans: 1 },
    { q: "In a FET, the applied voltage controls the size and shape of the channel between the:", options: ["Emitter and Collector", "Base and Emitter", "Source and Drain", "Gate and Base"], ans: 2 },
    { q: "Which statement is true regarding the gain of a FET compared to a BJT?", options: ["BJT has higher current gain", "FET has higher current gain", "Both have equal gain", "FET has no gain"], ans: 1 },
    { q: "The three terminals of a Field-Effect Transistor are called:", options: ["Emitter, Base, Collector", "Gate, Source, Drain", "Anode, Cathode, Gate", "Positive, Negative, Neutral"], ans: 1 },

    // --- OSCILLATOR FUNDAMENTALS ---
    { q: "An oscillator is a circuit that generates a repetitive waveform (like a sine or square wave) using only a:", options: ["AC input", "DC energy source", "Mechanical trigger", "Magnetic resonator"], ans: 1 },
    { q: "To sustain oscillations, the feedback signal must be in phase with the input signal. This is called:", options: ["Negative Feedback", "Positive Feedback", "Neutral Feedback", "Degenerative Feedback"], ans: 1 },
    { q: "According to the Barkhausen Criterion, for a circuit to oscillate, the loop gain must be equal to:", options: ["Zero", "Less than one", "One", "Infinity"], ans: 2 },
    { q: "The specific frequency of an LC oscillator is determined by the components in its:", options: ["Power supply", "Biasing network", "Tank circuit", "Amplifier stage"], ans: 2 },
    { q: "The 'tank circuit' in an oscillator acts as an electrical resonator, storing energy in the:", options: ["Resistance", "Magnetic and Electric fields of L and C", "Transistor junctions", "DC Source"], ans: 1 },

    // --- OSCILLATOR TYPES & IDENTIFICATION ---
    { q: "Which oscillator uses a 'tapped' inductor or two inductors and one capacitor in its tank circuit?", options: ["Colpitts Oscillator", "Hartley Oscillator", "Clapp Oscillator", "Crystal Oscillator"], ans: 1 },
    { q: "The Colpitts oscillator is easily identified by its use of:", options: ["Two inductors", "A center-tapped transformer", "A capacitive voltage divider (two capacitors)", "A quartz crystal"], ans: 2 },
    { q: "Which oscillator provides the best frequency stability for high-frequency applications?", options: ["Armstrong", "Hartley", "Crystal Oscillator", "RC Phase Shift"], ans: 2 },
    { q: "A Crystal oscillator operates based on the 'Piezoelectric Effect' found in:", options: ["Silicon", "Germanium", "Quartz", "Copper"], ans: 2 },
    { q: "Which type of oscillator is typically used for low-frequency or audio-frequency (AF) ranges?", options: ["LC Oscillator", "RC Oscillator", "Crystal Oscillator", "Clapp Oscillator"], ans: 1 },
    { q: "In an RC Phase Shift oscillator, how many RC networks are typically used to achieve the required 180° phase shift?", options: ["One", "Two", "Three", "Four"], ans: 2 },

    // --- OPERATING PRINCIPLES & SYMBOLS ---
    { q: "When a transistor is used as a switch and is 'OFF' (no current flows), it is in the:", options: ["Saturation Region", "Active Region", "Cut-off Region", "Linear Region"], ans: 2 },
    { q: "The 'Q-point' (Quiescent point) is the point on the load line that represents the transistor's:", options: ["Maximum power", "Steady-state DC operating condition", "AC input peak", "Dynamic range"], ans: 1 },
    { q: "What is the primary function of the 'Base' terminal in a BJT?", options: ["To emit carriers", "To collect carriers", "To control the flow of carriers", "To provide the output voltage"], ans: 2 },
    { q: "Which oscillator uses a 'tickler coil' and transformer coupling to provide feedback?", options: ["Armstrong Oscillator", "Wien-Bridge Oscillator", "Colpitts Oscillator", "Hartley Oscillator"], ans: 0 },
    { q: "The stability of an oscillator's frequency is often measured by its:", options: ["Beta value", "Q-factor (Quality Factor)", "Alpha value", "Resistance"], ans: 1 },

    // --- COMPARISONS & CHARACTERISTICS ---
    { q: "Which of the following is a key advantage of FETs over BJTs?", options: ["Lower input impedance", "Higher input impedance", "Higher noise levels", "Smaller size only"], ans: 1 },
    { q: "In a Hartley oscillator, the frequency can be adjusted by varying the:", options: ["Supply voltage", "Capacitor in the tank circuit", "Transistor gain", "Feedback resistor"], ans: 1 },
    { q: "What happens to the output of an oscillator if the loop gain falls below 1?", options: ["Oscillations increase", "Oscillations remain constant", "Oscillations die out (damped)", "The frequency changes"], ans: 2 },
    { q: "The 'Resonant Frequency' is the frequency where:", options: ["Resistance is maximum", "Inductive and capacitive reactances are equal", "The transistor turns off", "The gain is zero"], ans: 1 },
    { q: "The common-base (CB) configuration is primarily used in:", options: ["Audio amplifiers", "High-frequency applications", "Voltage regulators", "Switching power supplies"], ans: 1 },
    { q: "A 'Crystal' in an oscillator circuit behaves like a/an:", options: ["Variable Resistor", "Extremely high-Q tuned circuit", "Battery", "Simple wire"], ans: 1 },
    { q: "Which region of the BJT is used for 'Linear' amplification?", options: ["Saturation", "Cut-off", "Active", "Breakdown"], ans: 2 }
];

let randomizedQuestions = [];
let index = 0;
let score = 0;

// 2. The Shuffle Function (Fisher-Yates Algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 3. Audio Controller
const playSound = (id) => {
    const audio = document.getElementById(id);
    if(audio) {
        audio.currentTime = 0;
        audio.play().catch(e => console.log("Interaction required for audio"));
    }
};

// 4. Initialize Quiz
function initQuiz() {
    randomizedQuestions = shuffleArray([...questionsData]); // Copy and Shuffle
    index = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    const current = randomizedQuestions[index];
    const quizCard = document.querySelector('.quiz-card');
    const total = randomizedQuestions.length;

    // Calculate progress percentage
    // (index + 1) makes the bar move as soon as the question loads
    const progressPercent = ((index + 1) / total) * 100;

    // Update the bar width
    const progressBar = document.getElementById('progress');
    if (progressBar) {
        progressBar.style.width = progressPercent + "%";
    }
    
    // Capture the text of the correct answer BEFORE shuffling the options
    const correctAnswerText = current.options[current.ans];
    
    // Shuffle the options for THIS specific question
    const shuffledOptions = shuffleArray([...current.options]);
    
    // Find where the correct answer ended up after the shuffle
    const newCorrectIndex = shuffledOptions.indexOf(correctAnswerText);

    // Smooth transition
    quizCard.style.opacity = "0";
    
    setTimeout(() => {
        document.getElementById('question').innerText = current.q;
        document.getElementById('q-num').innerText = index + 1;
        
        const container = document.getElementById('options');
        container.innerHTML = '';
        
        shuffledOptions.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerText = opt;
            
            // We pass the newCorrectIndex to the handler
            btn.onclick = () => handleSelection(i, newCorrectIndex, btn);
            container.appendChild(btn);
        });
        
        quizCard.style.opacity = "1";
    }, 150);
}

function handleSelection(userChoice, correctIdx, btn) {
    const allBtns = document.querySelectorAll('.option-btn');
    
    // Disable all buttons immediately to prevent double-clicking
    allBtns.forEach(b => b.style.pointerEvents = 'none');

    if (userChoice === correctIdx) {
        btn.classList.add('is-correct');
        playSound('snd-correct');
        score++;
    } else {
        btn.classList.add('is-wrong');
        document.querySelector('.quiz-card').classList.add('shake');
        playSound('snd-wrong');
        
        // Show the user which one was actually correct
        allBtns[correctIdx].classList.add('is-correct');
        
        setTimeout(() => document.querySelector('.quiz-card').classList.remove('shake'), 500);
    }

    // Move to next question after 1.2 seconds
    setTimeout(() => {
        index++;
        if (index < randomizedQuestions.length) {
            loadQuestion();
        } else {
            finishQuiz();
        }
    }, 1200);
}

function finishQuiz() {
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('score-val').innerText = `${score}/${randomizedQuestions.length}`;

    playSound('snd-tada'); 
    confetti({
        particleCount: 200,
        spread: 90,
        origin: { y: 0.7 },
        colors: ['#7000ff', '#00d4ff', '#00ff88']
    });
}

// Start the sequence
initQuiz();


