const questionsData = [
    // --- TRANSISTOR FUNDAMENTALS ---
    { q: "A transistor is short for 'transfer resistor' and primarily functions as a device that regulates:", options: ["Resistance only", "Current or voltage flow", "Power dissipation", "Magnetic flux"], ans: 1 },
    { q: "Which type of transistor is considered 'unipolar' because it performs a single-channel operation?", options: ["BJT", "NPN", "PNP", "FET"], ans: 3 },
    { q: "When a transistor takes a tiny input current and produces a much bigger output current, it is working as a/an:", options: ["Switch", "Amplifier", "Oscillator", "Rectifier"], ans: 1 },
    { q: "In a Bipolar Junction Transistor (BJT), the three layers of semiconductor material are called:", options: ["Gate, Source, Drain", "Anode, Cathode, Grid", "Emitter, Base, Collector", "Positive, Negative, Neutral"], ans: 2 },
    { q: "Which BJT configuration is most commonly used because it provides good voltage and current gain?", options: ["Common-Base", "Common-Collector", "Common-Emitter", "Common-Gate"], ans: 2 },
    { q: "In an NPN transistor, the arrow on the schematic symbol points:", options: ["Inward toward the base", "Outward from the emitter", "Upward toward the collector", "Directly at the base-collector junction"], ans: 1 },
    { q: "A BJT is a current-controlled device, whereas a FET is controlled by:", options: ["Applied Voltage", "Light Intensity", "Temperature", "Magnetic Field"], ans: 0 },

    // --- TRANSISTOR BIASING & REGION ---
    { q: "For a transistor to operate as a linear amplifier, it must be biased in the:", options: ["Saturation Region", "Cutoff Region", "Active Region", "Breakdown Region"], ans: 2 },
    { q: "When a transistor acts as a closed switch (fully ON), it is operating in the:", options: ["Active Region", "Cutoff Region", "Saturation Region", "Linear Region"], ans: 2 },
    { q: "In the Cutoff region, the transistor acts as an:", options: ["Open switch", "Closed switch", "Variable resistor", "Voltage source"], ans: 0 },
    { q: "What is the primary purpose of 'biasing' a transistor?", options: ["To increase heat", "To establish a specific operating point (Q-point)", "To prevent current flow", "To convert DC to AC"], ans: 1 },
    { q: "The 'Q-point' on a load line represents the:", options: ["Maximum voltage", "Minimum current", "Static operating condition", "Breakdown point"], ans: 2 },

    // --- OSCILLATOR FUNDAMENTALS ---
    { q: "An oscillator is a circuit that generates a repetitive waveform from a:", options: ["AC input source", "DC input source", "Mechanical vibration", "Magnetic field"], ans: 1 },
    { q: "Which type of feedback is required for a circuit to sustain oscillations?", options: ["Negative Feedback", "Degenerative Feedback", "Positive Feedback", "Neutral Feedback"], ans: 2 },
    { q: "The two essential conditions for oscillation (Gain = 1 and Phase Shift = 0/360°) are known as:", options: ["Ohm's Law", "The Barkhausen Criterion", "The Miller Effect", "Faraday's Law"], ans: 1 },
    { q: "The circuit that determines the specific frequency of an oscillator is called the:", options: ["Amplifier circuit", "Tank circuit (Frequency-determining network)", "Power supply", "Biasing network"], ans: 1 },
    { q: "Which of the following is NOT a basic requirement for an oscillator?", options: ["Amplification", "Positive Feedback", "Negative Feedback", "Frequency-determining network"], ans: 2 },

    // --- TYPES OF OSCILLATORS ---
    { q: "Which oscillator uses two capacitors and one inductor in its tank circuit?", options: ["Hartley Oscillator", "Colpitts Oscillator", "Armstrong Oscillator", "Clapp Oscillator"], ans: 1 },
    { q: "A Hartley Oscillator is easily identified because its tank circuit contains:", options: ["Two capacitors", "A tapped inductor (two inductors)", "A quartz crystal", "A transformer only"], ans: 1 },
    { q: "Which oscillator is known for having the highest frequency stability?", options: ["RC Phase Shift", "Colpitts", "Crystal Oscillator", "Hartley"], ans: 2 },
    { q: "The 'Piezoelectric Effect' is the operating principle behind which component?", options: ["Inductor", "Transistor", "Quartz Crystal", "Electrolytic Capacitor"], ans: 2 },
    { q: "Which oscillator is typically used for low-frequency (audio) applications?", options: ["Colpitts", "Hartley", "RC Phase Shift", "Crystal"], ans: 2 },
    { q: "The Wien-Bridge oscillator is a type of:", options: ["LC Oscillator", "RC Oscillator", "Crystal Oscillator", "Magnetostriction Oscillator"], ans: 1 },

    // --- LC & TANK CIRCUITS ---
    { q: "In an LC tank circuit, energy is continuously swapped between the:", options: ["Resistor and Capacitor", "Inductor and Capacitor", "Transistor and Battery", "Input and Output"], ans: 1 },
    { q: "What happens to the oscillations in a tank circuit if no power is supplied to overcome losses?", options: ["They increase", "They stay constant", "They are 'damped' and die out", "They change frequency"], ans: 2 },
    { q: "The frequency at which an LC circuit oscillates naturally is called the:", options: ["Harmonic frequency", "Resonant frequency", "Cutoff frequency", "Damping frequency"], ans: 1 },

    // --- OPERATIONAL CHARACTERISTICS ---
    { q: "What is the total phase shift required around the feedback loop to maintain oscillation?", options: ["90 degrees", "180 degrees", "360 degrees (or 0)", "45 degrees"], ans: 2 },
    { q: "In a Crystal Oscillator, the crystal acts as a very high-Q:", options: ["Resistor", "Tuned LC circuit", "Voltage source", "Amplifier"], ans: 1 },
    { q: "Which factor describes the 'purity' or 'sharpness' of a resonant circuit?", options: ["Beta factor", "Quality factor (Q)", "Gain factor", "Stability factor"], ans: 1 },
    { q: "Self-sustaining oscillations are also known as:", options: ["Damped oscillations", "Undamped (Continuous) oscillations", "Parasitic oscillations", "Transient oscillations"], ans: 1 },

    // --- APPLICATIONS & MISC ---
    { q: "Which device can be used as a 'buffer' to prevent a load from affecting the oscillator frequency?", options: ["A transformer", "A transistor amplifier", "A large resistor", "A capacitor"], ans: 1 },
    { q: "The main disadvantage of an LC oscillator compared to a Crystal oscillator is:", options: ["Higher cost", "Frequency instability (drift)", "Larger size", "Lower power"], ans: 1 },
    { q: "The Armstrong oscillator is primarily known for using what to provide feedback?", options: ["A voltage divider", "Transformer coupling (tickler coil)", "A phase-shift network", "A bridge circuit"], ans: 1 },
    { q: "Transistors used in switching applications (like digital logic) alternate between which two regions?", options: ["Active and Saturation", "Cutoff and Saturation", "Active and Cutoff", "Linear and Breakdown"], ans: 1 },
    { q: "What is the primary function of the 'Collector' in a BJT?", options: ["To emit charge carriers", "To control the flow", "To collect charge carriers", "To provide feedback"], ans: 2 }
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


