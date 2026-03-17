const questionsData = [
    // --- CLASSICAL LITERATURE (1-10) ---
    { q: "1. Classical literature refers to the enduring works of ancient Greece and Rome produced between:", options: ["1000 BCE–100 CE", "500 BCE–500 CE", "500 CE–1500 CE", "1300 CE–1600 CE"], ans: 1 },
    { q: "2. Which of the following is NOT a main form of Classical Literature mentioned in the handout?", options: ["Drama", "Philosophy", "Lyric Poetry", "Chivalric Romance"], ans: 3 },
    { q: "3. This ancient Greek playwright is best known for his Theban plays, including Antigone:", options: ["Plato", "Sophocles", "Sappho", "Socrates"], ans: 1 },
    { q: "4. In the play Antigone, the protagonist disobeys the king to bury her:", options: ["Father", "Husband", "Brother", "Son"], ans: 2 },
    { q: "5. Who founded 'The Academy' (Platonic Academy) in Athens?", options: ["Socrates", "Aristotle", "Plato", "Sophocles"], ans: 2 },
    { q: "6. Which work by Plato explores justice, the ideal state, and the journey from ignorance to knowledge?", options: ["The Republic", "Antigone", "The Prince", "Utopia"], ans: 0 },
    { q: "7. This ancient Greek poet from Lesvos focused on personal themes like love, longing, and identity:", options: ["Sophocles", "Sappho", "Homer", "Virgil"], ans: 1 },
    { q: "8. Classical Drama often uses these two elements to reflect on the consequences of choices:", options: ["Action and Mystery", "Tragic or Comedic", "Epic and Lyric", "Prose and Verse"], ans: 1 },
    { q: "9. Studying Classical Literature helps us understand the foundations of:", options: ["Eastern Philosophy", "Western Civilization", "Medieval Feudalism", "The Industrial Revolution"], ans: 1 },
    { q: "10. Plato was a student of which famous philosopher?", options: ["Aristotle", "Sophocles", "Socrates", "Sappho"], ans: 2 },

    // --- MEDIEVAL LITERATURE (11-20) ---
    { q: "11. The Middle Ages is a period spanning approximately:", options: ["500 BCE–500 CE", "500 CE–1500 CE", "1300 CE–1600 CE", "100 CE–400 CE"], ans: 1 },
    { q: "12. Medieval literature is characterized by a strong influence from:", options: ["The Industrialists", "The Military", "The Church", "Classical Humanists"], ans: 2 },
    { q: "13. In Medieval literature, what form uses characters and objects to symbolize deeper spiritual meanings?", options: ["Epic", "Allegory", "Drama", "Lyric Poetry"], ans: 1 },
    { q: "14. Dante Alighieri’s 'The Divine Comedy' is an epic allegory of the soul's journey toward:", options: ["Rome", "Dharma", "God", "Exile"], ans: 2 },
    { q: "15. Which part of the soul's journey in The Divine Comedy represents Hell?", options: ["Purgatorio", "Paradiso", "Inferno", "Everyman"], ans: 2 },
    { q: "16. This 15th-century English morality play features a character who must account for his life before God:", options: ["Sir Gawain", "Antigone", "Everyman", "Hamlet"], ans: 2 },
    { q: "17. Chivalry in Medieval literature focuses on which social group?", options: ["Knights", "Philosophers", "Peasants", "Monks"], ans: 0 },
    { q: "18. Who is the credited (though anonymous) author of 'Sir Gawain and the Green Knight'?", options: ["Dante Alighieri", "The Pearl Poet", "Geoffrey Chaucer", "William Shakespeare"], ans: 1 },
    { q: "19. The Divine Comedy emphasizes two major concepts regarding humans:", options: ["Reason and Creativity", "Responsibility and Divine Justice", "Honor and Chivalry", "Madness and Grief"], ans: 1 },
    { q: "20. Which Medieval theme highlights bravery, loyalty, and social codes of the aristocracy?", options: ["Humanism", "Individualism", "Chivalry", "Philosophy"], ans: 2 },

    // --- RENAISSANCE LITERATURE (21-30) ---
    { q: "21. The Renaissance period occurred roughly during:", options: ["500–1500 CE", "1300–1600 CE", "500 BCE–500 CE", "1600–1800 CE"], ans: 1 },
    { q: "22. Unlike the Middle Ages, Renaissance literature emphasizes:", options: ["Collective ideals", "Individual experience", "Religious dominance", "Feudal structures"], ans: 1 },
    { q: "23. Which Renaissance 'ism' focuses on the potential of humans to reason and shape their world?", options: ["Feudalism", "Humanism", "Individualism", "Stoicism"], ans: 1 },
    { q: "24. Who wrote 'Oration on the Dignity of Man'?", options: ["Baldassare Castiglione", "Giovanni Pico della Mirandola", "William Shakespeare", "Niccolò Machiavelli"], ans: 1 },
    { q: "25. This work highlights manners, skills, and moral character as ways to excel in society:", options: ["The Republic", "The Book of the Courtier", "Everyman", "The Prince"], ans: 1 },
    { q: "26. Who wrote 'The Book of the Courtier'?", options: ["Giovanni Pico della Mirandola", "William Shakespeare", "Baldassare Castiglione", "Sophocles"], ans: 2 },
    { q: "27. In Renaissance Drama, what form presents stories of human suffering and the consequences of choices?", options: ["Comedy", "Tragedy", "Satire", "Epic"], ans: 1 },
    { q: "28. Shakespeare’s 'Romeo and Juliet' is an example of which Renaissance form?", options: ["Epic Poetry", "Philosophy", "Drama (Tragedy)", "Allegory"], ans: 2 },
    { q: "29. Renaissance literature revived learning from which era?", options: ["Ancient Egypt", "Classical Greece and Rome", "The Dark Ages", "The Victorian Era"], ans: 1 },
    { q: "30. The 'Oration on the Dignity of Man' reflects Renaissance optimism about:", options: ["Divine intervention", "Human capabilities", "The fall of the Church", "Military conquest"], ans: 1 },

    // --- MAHABHARATA: SETTING & ORIGIN (31-37) ---
    { q: "31. The Mahabharata is an ancient Indian epic attributed to:", options: ["Krishna", "Vyasa", "Arjuna", "Valmiki"], ans: 1 },
    { q: "32. The Mahabharata was passed down in this way before being written:", options: ["Through secret scrolls", "Orally", "In Latin texts", "On stone tablets"], ans: 1 },
    { q: "33. What does the symbolism in the Mahabharata primarily represent?", options: ["Love and Hate", "Dharma and Karma", "Heaven and Hell", "Wealth and Poverty"], ans: 1 },
    { q: "34. The epic is set around which ancient cities in northern India?", options: ["Ayodhya and Mathura", "Hastinapur and Indraprastha", "Mumbai and Delhi", "Pataliputra"], ans: 1 },
    { q: "35. What literary device is used in the Mahabharata to dramatize battles?", options: ["Soliloquies", "Epic similes", "Moralities", "Lyric stanzas"], ans: 1 },
    { q: "36. Modern-day Meerut district is the site of which ancient city?", options: ["Indraprastha", "Hastinapur", "Elsinore", "Athens"], ans: 1 },
    { q: "37. The rivalry in the Mahabharata is between which two groups of cousins?", options: ["Greeks and Romans", "Pandavas and Kauravas", "Danes and Norwegians", "Knights and Earls"], ans: 1 },

    // --- MAHABHARATA: CHARACTERS (38-45) ---
    { q: "38. Who is the eldest Pandava, known for being wise and just?", options: ["Bhima", "Arjuna", "Yudhishthira", "Nakula"], ans: 2 },
    { q: "39. Which Pandava is known as an extremely strong and courageous warrior?", options: ["Arjuna", "Sahadeva", "Bhima", "Duryodhana"], ans: 2 },
    { q: "40. Who is the skilled archer guided by Krishna?", options: ["Arjuna", "Karna", "Abhimanyu", "Nakula"], ans: 0 },
    { q: "41. Whose humiliation in the Kaurava court sparks the conflict leading to war?", options: ["Gandhari", "Kunti", "Draupadi", "Satyavati"], ans: 2 },
    { q: "42. Who is the leader of the Kauravas, described as ambitious and envious?", options: ["Shakuni", "Karna", "Duryodhana", "Bhishma"], ans: 2 },
    { q: "43. This warrior is allied with the Kauravas but meets a tragic end in battle:", options: ["Arjuna", "Karna", "Abhimanyu", "Yudhishthira"], ans: 1 },
    { q: "44. Who is the divine guide who teaches duty and righteousness to the Pandavas?", options: ["Vyasa", "Ganga", "Krishna", "Shantanu"], ans: 2 },
    { q: "45. Who is the uncle of Duryodhana that cheats the Pandavas in a dice game?", options: ["Bhishma", "Shakuni", "Karna", "Drona"], ans: 1 },

    // --- MAHABHARATA: SYNOPSIS & THEMES (46-52) ---
    { q: "46. Where does the climax of the Mahabharata occur?", options: ["The Forest of Exile", "The Kaurava Court", "The Kurukshetra war", "The Palace of Indraprastha"], ans: 2 },
    { q: "47. According to the POV section, the Mahabharata is told from which perspective?", options: ["First-person", "Third-person limited", "Third-person omniscient", "Dramatic POV"], ans: 2 },
    { q: "48. Which character struggles with 'Character vs. Self' until guided by Krishna?", options: ["Duryodhana", "Arjuna", "Karna", "Shakuni"], ans: 1 },
    { q: "49. What is the moral of the Mahabharata regarding personal gain?", options: ["Personal gain is the goal of life", "Upholding dharma is more important", "Revenge is necessary", "Wealth brings happiness"], ans: 1 },
    { q: "50. In the resolution, what happens to the Pandavas?", options: ["They are exiled forever", "They reclaim their kingdom", "They become monks", "They lose the war"], ans: 1 },
    { q: "51. 'Dharma is the highest virtue' is a passage attributed to whom?", options: ["Krishna", "Arjuna", "Yudhishthira", "Vyasa"], ans: 2 },
    { q: "52. King Shantanu had sons with which goddess of the river?", options: ["Saraswati", "Ganga", "Yamuna", "Lakshmi"], ans: 1 },

    // --- HAMLET: CHARACTERS & SETTING (53-60) ---
    { q: "53. Hamlet is a tragic play set in Elsinore Castle, located in:", options: ["Norway", "England", "Denmark", "Italy"], ans: 2 },
    { q: "54. Who murdered King Hamlet to take the throne?", options: ["Laertes", "Polonius", "Claudius", "Fortinbras"], ans: 2 },
    { q: "55. This character is Hamlet's love interest who descends into madness:", options: ["Gertrude", "Ophelia", "Beatrice", "Desdemona"], ans: 1 },
    { q: "56. Who is the meddling advisor to the king and father of Laertes?", options: ["Horatio", "Claudius", "Polonius", "Rosencrantz"], ans: 2 },
    { q: "57. Who is the loyal friend of Hamlet that survives to tell his story?", options: ["Laertes", "Fortinbras", "Horatio", "Guildenstern"], ans: 2 },
    { q: "58. This Prince of Norway becomes king after the tragedy at Elsinore:", options: ["Hamlet", "Claudius", "Fortinbras", "Laertes"], ans: 2 },
    { q: "59. Shakespeare uses these 'alone-on-stage' speeches to reveal a character's inner thoughts:", options: ["Dialogue", "Soliloquies", "Epics", "Sonnets"], ans: 1 },
    { q: "60. The castle in Hamlet feels dark and tense, reflecting death, grief, and:", options: ["Chivalry", "Corruption", "Humanism", "Comedy"], ans: 1 },

    // --- HAMLET: SYNOPSIS & THEMES (61-70) ---
    { q: "61. Hamlet pretends to be mad in order to:", options: ["Escape the castle", "Win Ophelia's heart", "Observe and uncover Claudius's guilt", "Become the King of Norway"], ans: 2 },
    { q: "62. Hamlet stages a play to 'catch the conscience' of which character?", options: ["Gertrude", "Claudius", "Polonius", "Laertes"], ans: 1 },
    { q: "63. How does Hamlet die?", options: ["By his own hand", "By drinking poison", "Wounds from a poisoned duel", "Old age"], ans: 2 },
    { q: "64. The theme 'Madness and Grief' is reflected in the breakdown of which character?", options: ["Gertrude", "Ophelia", "Horatio", "Fortinbras"], ans: 1 },
    { q: "65. What point of view does the play Hamlet follow?", options: ["First-person", "Third-person limited", "Dramatic point of view", "Omniscient narrator"], ans: 2 },
    { q: "66. Which passage begins with 'To be, or not to be: that is the question'?", options: ["Act 1, Scene 1", "Act 2, Scene 2", "Act 3, Scene 1", "Act 5, Scene 2"], ans: 2 },
    { q: "67. Hamlet teaches that unchecked ambition and what other trait can lead to tragedy?", options: ["Indecision", "Bravery", "Loyalty", "Wisdom"], ans: 0 },
    { q: "68. Who reveals the truth about King Hamlet's murder to the Prince?", options: ["Horatio", "The Ghost", "Gertrude", "Polonius"], ans: 1 },
    { q: "69. In the duel, Hamlet fights against which character?", options: ["Claudius", "Fortinbras", "Laertes", "Horatio"], ans: 2 },
    { q: "70. What is the 'play-within-a-play' intended to reveal?", options: ["Hamlet's love for Ophelia", "Claudius's crime", "Gertrude's innocence", "Polonius's spying"], ans: 1 }
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


