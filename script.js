const questionsData = [
    {
        q: "Medieval Literature was developed during Middle Ages, approximately:",
        options: ["100–400 CE", "500–1500 CE", "1600–1800 CE", "200–900 CE"],
        ans: 1
    },
    {
        q: "He was an Italian poet, and was called the 'Father of the Italian language.'",
        options: ["Geoffrey Chaucer", "Giovanni Boccaccio", "Dante Alighieri", "Francesco Petrarch"],
        ans: 2
    },
    {
        q: "He wrote the famous comedy drama 'The Divine Comedy.'",
        options: ["Geoffrey Chaucer", "William Shakespeare", "Giovanni Boccaccio", "Dante Alighieri"],
        ans: 3
    },
    {
        q: "Dante Alighieri is an Italian poet who wrote the:",
        options: ["The Decameron", "Canterbury Tales", "The Prince", "The Divine Comedy"],
        ans: 3
    },
    {
        q: "Dante Alighieri died on:",
        options: ["1302", "1401", "1321", "1350"],
        ans: 2
    },
    {
        q: "He is also called the 'Pearl Poet.'",
        options: ["Geoffrey Chaucer", "William Langland", "John Gower", "Gawain Poet"],
        ans: 3
    },
    {
        q: "One of the most famous literary pieces written by the Gawain Poet is:",
        options: ["Beowulf", "The Canterbury Tales", "Paradise Lost", "Sir Gawain and the Green Knight"],
        ans: 3
    },
    {
        q: "This literary main form is also called 'the meaning over meaning.' It consists of stories where characters, events, and objects symbolize deeper moral, spiritual, or political meaning.",
        options: ["Satire", "Epic", "Myth", "Allegory"],
        ans: 3
    },
    {
        q: "This literary form includes writing that reflects faith, morality, and the influence of the Church on daily life.",
        options: ["Chivalric Romance", "Religious Theme", "Humanism", "Individualism"],
        ans: 1
    },
    {
        q: "This literary form focuses on knights, honor, and courtly love.",
        options: ["Allegory", "Epic", "Chivalric Romance", "Drama"],
        ans: 2
    },
    {
        q: "The Religious Theme main form often explores questions, EXCEPT:",
        options: ["What is the meaning of life", "How to achieve salvation", "What is happiness and love", "The nature of good and evil"],
        ans: 2
    },
    {
        q: "During the Medieval Period, this Religious Theme literary masterpiece evoked emotions.",
        options: ["The Divine Comedy", "Beowulf", "Everyman", "The Decameron"],
        ans: 2
    },
    {
        q: "The Divine Comedy, an epic written by Dante Alighieri, is a spiritual journey written in three parts, EXCEPT:",
        options: ["Inferno", "Purgatorio", "Paradiso", "Forest"],
        ans: 3
    },
    {
        q: "What did Virgil show Dante in the journey to Inferno?",
        options: ["7 Terraces", "9 Circles of Hell", "9 Spheres of Heaven", "3 Gates"],
        ans: 1
    },
    {
        q: "What did Virgil show Dante in the journey to Purgatorio?",
        options: ["9 Circles of Hell", "7 Terraces", "9 Spheres of Heaven", "The River Styx"],
        ans: 1
    },
    {
        q: "What did Virgil show Dante in the journey to Paradiso?",
        options: ["9 Circles of Hell", "7 Terraces", "9 Spheres of Heaven", "The Elysian Fields"],
        ans: 2
    },
    {
        q: "This literary masterpiece during the Medieval Period was a 15th-century English morality play about a man called by Death to account for his life before God.",
        options: ["The Canterbury Tales", "Sir Gawain", "Everyman", "The Prince"],
        ans: 2
    },
    {
        q: "What does 'Everyman' symbolize?",
        options: ["The King", "The Church", "Mankind", "The Knight"],
        ans: 2
    },
    {
        q: "Renaissance developed roughly:",
        options: ["1100–1400 CE", "1300–1600 CE", "1500–1800 CE", "1000–1300 CE"],
        ans: 1
    },
    {
        q: "This literary form during the Renaissance emphasizes the study of classical texts, moral philosophy, and the potential of humans to reason and shape their world.",
        options: ["Humanism", "Individualism", "Drama", "Tragedy"],
        ans: 0
    },
    {
        q: "This literary form during the Renaissance focuses on personal experience, self-expression, and the uniqueness of human character.",
        options: ["Humanism", "Individualism", "Drama", "Allegory"],
        ans: 1
    },
    {
        q: "This literary form during the Renaissance includes plays that examine human behavior, social dynamics, and philosophical ideas.",
        options: ["Epic", "Myth", "Chivalric Romance", "Drama"],
        ans: 3
    },
    {
        q: "Drama during the Renaissance period often focuses on:",
        options: ["Comedy", "Romance", "Historical narratives", "Tragedy"],
        ans: 3
    },
    {
        q: "This poet announced that he would publicly defend 900 philosophical and theological propositions.",
        options: ["Baldassare Castiglione", "Dante Alighieri", "Francesco Petrarch", "Giovanni Pico della Mirandola"],
        ans: 3
    },
    {
        q: "Giovanni Pico della Mirandola is best known for writing the:",
        options: ["The Prince", "Utopia", "The Book of the Courtier", "Oration on the Dignity of Man"],
        ans: 3
    },
    {
        q: "He wrote the first printed book ever universally banned by the Church.",
        options: ["Giovanni Pico della Mirandola", "Niccolò Machiavelli", "Thomas More", "Baldassare Castiglione"],
        ans: 0
    },
    {
        q: "He was an Italian Renaissance courtier, diplomat, soldier, and author best known for writing The Book of the Courtier.",
        options: ["Niccolò Machiavelli", "Giovanni Pico della Mirandola", "Francesco Petrarch", "Baldassare Castiglione"],
        ans: 3
    },
    {
        q: "Baldassare Castiglione wrote the famous influential book about manners called:",
        options: ["The Prince", "The Decameron", "Utopia", "The Book of the Courtier"],
        ans: 3
    },
    {
        q: "He was an English playwright, poet, and actor widely regarded as the greatest writer in the English language.",
        options: ["Geoffrey Chaucer", "Christopher Marlowe", "Ben Jonson", "William Shakespeare"],
        ans: 3
    },
    {
        q: "How many plays or dramas did Shakespeare write?",
        options: ["25", "31", "39", "45"],
        ans: 2
    },
    {
        q: "Shakespeare wrote these iconic works, EXCEPT:",
        options: ["Hamlet", "Macbeth", "Romeo and Juliet", "The Book of the Courtier"],
        ans: 3
    },
    {
        q: " ______ is a tragedy written by William Shakespeare, believed to have been written between 1594–1596.",
        options: ["Hamlet", "Othello", "Macbeth", "Romeo and Juliet"],
        ans: 3
    },
    {
        q: "How many years did Shakespeare spend finishing Romeo and Juliet?",
        options: ["1 year", "2 years", "3 years", "5 years"],
        ans: 2
    },
    {
        q: "William Shakespeare died at the age of:",
        options: ["45", "50", "52", "60"],
        ans: 2
    },
    {
        q: "William Shakespeare was married to:",
        options: ["Mary Arden", "Elizabeth Hall", "Jane Seymour", "Anne Hathaway"],
        ans: 3
    }
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
    
    // Smooth fade-in effect
    quizCard.style.opacity = "0";
    
    setTimeout(() => {
        document.getElementById('question').innerText = current.q;
        document.getElementById('q-num').innerText = index + 1;
        
        // Progress bar logic
        const progress = ((index) / randomizedQuestions.length) * 100;
        document.getElementById('progress').style.width = `${progress}%`;
        
        const container = document.getElementById('options');
        container.innerHTML = '';
        
        current.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerText = opt;
            btn.onclick = () => handleSelection(i, btn);
            container.appendChild(btn);
        });
        
        quizCard.style.opacity = "1";
    }, 150);
}

function handleSelection(choice, btn) {
    const correct = randomizedQuestions[index].ans;
    const allBtns = document.querySelectorAll('.option-btn');
    
    allBtns.forEach(b => b.style.pointerEvents = 'none');

    if (choice === correct) {
        btn.classList.add('is-correct');
        playSound('snd-correct');
        score++;
    } else {
        btn.classList.add('is-wrong');
        document.querySelector('.quiz-card').classList.add('shake');
        playSound('snd-wrong');
        allBtns[correct].classList.add('is-correct');
        
        setTimeout(() => document.querySelector('.quiz-card').classList.remove('shake'), 500);
    }

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
