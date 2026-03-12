const questionsData = [
    { q: "Medieval Literature was developed during Middle Ages, approximately:", options: ["100–400 CE", "500–1500 CE", "1600–1800 CE", "200–900 CE"], ans: 1 },
    { q: "He was an Italian poet, and was called the 'Father of the Italian language.'", options: ["Geoffrey Chaucer", "Giovanni Boccaccio", "Dante Alighieri", "Francesco Petrarch"], ans: 2 },
    { q: "He wrote the famous comedy drama 'The Divine Comedy.'", options: ["Geoffrey Chaucer", "William Shakespeare", "Giovanni Boccaccio", "Dante Alighieri"], ans: 3 },
    { q: "Dante Alighieri is an Italian poet who wrote the:", options: ["The Decameron", "Canterbury Tales", "The Prince", "The Divine Comedy"], ans: 3 },
    { q: "Dante Alighieri died in:", options: ["1302", "1401", "1321", "1350"], ans: 2 },
    { q: "He is also called the 'Pearl Poet.'", options: ["Geoffrey Chaucer", "William Langland", "John Gower", "Gawain Poet"], ans: 3 },
    { q: "One of the most famous literary pieces written by the Gawain Poet is:", options: ["Beowulf", "The Canterbury Tales", "Paradise Lost", "Sir Gawain and the Green Knight"], ans: 3 },
    { q: "This literary form is also called 'the meaning over meaning,' symbolizing deeper moral or spiritual meanings:", options: ["Satire", "Epic", "Myth", "Allegory"], ans: 3 },
    // Adding Missing Questions 9-22 to complete the 1-35 set
    { q: "Which of these is a famous Old English epic poem?", options: ["The Odyssey", "Beowulf", "The Aeneid", "The Iliad"], ans: 1 },
    { q: "The Canterbury Tales was written by:", options: ["Geoffrey Chaucer", "Thomas More", "John Milton", "William Shakespeare"], ans: 0 },
    { q: "What language was most Medieval scholarly literature written in?", options: ["English", "French", "Latin", "German"], ans: 2 },
    { q: "The Black Death, which influenced much Medieval writing, occurred in the:", options: ["12th Century", "13th Century", "14th Century", "15th Century"], ans: 2 },
    { q: "A 'Sonnet' is a poem consisting of how many lines?", options: ["10", "12", "14", "16"], ans: 2 },
    { q: "Who is known as the 'Father of Humanism'?", options: ["Dante", "Petrarch", "Erasmus", "Machiavelli"], ans: 1 },
    { q: "The term 'Renaissance' literally means:", options: ["Revolution", "Rebirth", "Discovery", "Enlightenment"], ans: 1 },
    { q: "Who wrote 'The Prince'?", options: ["Castiglione", "Machiavelli", "Pico della Mirandola", "Shakespeare"], ans: 1 },
    { q: "In 'The Divine Comedy', who guides Dante through Hell?", options: ["Beatrice", "Virgil", "Homer", "Petrarch"], ans: 1 },
    { q: "Which work is a collection of 100 tales told by ten young people?", options: ["The Decameron", "Canterbury Tales", "The Courtier", "Utopia"], ans: 0 },
    { q: "Johannes Gutenberg's invention that revolutionized literature was the:", options: ["Compass", "Telescope", "Printing Press", "Steam Engine"], ans: 2 },
    { q: "Who wrote the famous humanist work 'Utopia'?", options: ["John Milton", "Thomas More", "Francis Bacon", "Christopher Marlowe"], ans: 1 },
    { q: "The 'Chanson de Roland' is a famous epic from which country?", options: ["England", "Italy", "Spain", "France"], ans: 3 },
    { q: "Which literary period followed the Middle Ages?", options: ["The Enlightenment", "The Renaissance", "The Romantic Era", "The Victorian Era"], ans: 1 },
    // Resuming your original list (23-35)
    { q: "Drama during the Renaissance period often focuses on:", options: ["Comedy", "Romance", "Historical narratives", "Tragedy"], ans: 3 },
    { q: "This poet announced that he would publicly defend 900 philosophical and theological propositions:", options: ["Baldassare Castiglione", "Dante Alighieri", "Francesco Petrarch", "Giovanni Pico della Mirandola"], ans: 3 },
    { q: "Giovanni Pico della Mirandola is best known for writing the:", options: ["The Prince", "Utopia", "The Book of the Courtier", "Oration on the Dignity of Man"], ans: 3 },
    { q: "He wrote the first printed book ever universally banned by the Church:", options: ["Giovanni Pico della Mirandola", "Niccolò Machiavelli", "Thomas More", "Baldassare Castiglione"], ans: 0 },
    { q: "He was an Italian Renaissance courtier best known for writing 'The Book of the Courtier':", options: ["Niccolò Machiavelli", "Giovanni Pico della Mirandola", "Francesco Petrarch", "Baldassare Castiglione"], ans: 3 },
    { q: "Baldassare Castiglione wrote the famous influential book about manners called:", options: ["The Prince", "The Decameron", "Utopia", "The Book of the Courtier"], ans: 3 },
    { q: "He was an English playwright widely regarded as the greatest writer in the English language:", options: ["Geoffrey Chaucer", "Christopher Marlowe", "Ben Jonson", "William Shakespeare"], ans: 3 },
    { q: "How many plays or dramas did Shakespeare write?", options: ["25", "31", "39", "45"], ans: 2 },
    { q: "Shakespeare wrote these iconic works, EXCEPT:", options: ["Hamlet", "Macbeth", "Romeo and Juliet", "The Book of the Courtier"], ans: 3 },
    { q: "Which tragedy by Shakespeare is believed to have been written between 1594–1596?", options: ["Hamlet", "Othello", "Macbeth", "Romeo and Juliet"], ans: 3 },
    { q: "How many years did Shakespeare spend finishing Romeo and Juliet?", options: ["1 year", "2 years", "3 years", "5 years"], ans: 2 },
    { q: "William Shakespeare died at the age of:", options: ["45", "50", "52", "60"], ans: 2 },
    { q: "William Shakespeare was married to:", options: ["Mary Arden", "Elizabeth Hall", "Jane Seymour", "Anne Hathaway"], ans: 3 }
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