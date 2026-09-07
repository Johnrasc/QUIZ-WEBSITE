/* =================================================================
   CIRCUIT// CpE Quiz Terminal - script.js
   ================================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // State variables
  let currentSubject = null;
  let activeQuestions = [];
  let currentIndex = 0;
  let score = 0;
  let streak = 0;
  let peakStreak = 0;
  let missedQuestions = [];
  let selectedOptionValue = null;
  let answeredLocked = false;
  
  // Timer vars
  let timerInterval = null;
  let timeLeft = 30;
  let maxTimePerQ = 30;

  // DOM Elements
  const screens = {
    home: document.getElementById("screen-home"),
    quiz: document.getElementById("screen-quiz"),
    results: document.getElementById("screen-results"),
    review: document.getElementById("screen-review")
  };

  const subjectGrid = document.getElementById("subjectGrid");
  const clockChip = document.getElementById("clockChip");
  const questionCountSelect = document.getElementById("questionCount");
  const timerSelect = document.getElementById("timerSelect");

  // Quiz UI
  const quizSubjectLabel = document.getElementById("quizSubjectLabel");
  const timerValue = document.getElementById("timerValue");
  const timerBar = document.getElementById("timerBar");
  const progressBar = document.getElementById("progressBar");
  const qIndexLabel = document.getElementById("qIndexLabel");
  const streakLabel = document.getElementById("streakLabel");
  const questionTag = document.getElementById("questionTag");
  const questionText = document.getElementById("questionText");
  const optionsList = document.getElementById("optionsList");
  const explainBox = document.getElementById("explainBox");
  const explainLabel = document.getElementById("explainLabel");
  const explainText = document.getElementById("explainText");
  const nextBtn = document.getElementById("nextBtn");
  const quitBtn = document.getElementById("quitBtn");

  // Results UI
  const resultsScore = document.getElementById("resultsScore");
  const resultsSummary = document.getElementById("resultsSummary");
  const statCorrect = document.getElementById("statCorrect");
  const statWrong = document.getElementById("statWrong");
  const statStreak = document.getElementById("statStreak");
  const statBest = document.getElementById("statBest");
  const reviewBtn = document.getElementById("reviewBtn");
  const retryBtn = document.getElementById("retryBtn");
  const homeBtn = document.getElementById("homeBtn");
  const historySubjectName = document.getElementById("historySubjectName");
  const historyList = document.getElementById("historyList");

  // Review UI
  const reviewBackBtn = document.getElementById("reviewBackBtn");
  const reviewList = document.getElementById("reviewList");

  // Toast & Confetti
  const toast = document.getElementById("toast");
  const confettiCanvas = document.getElementById("confettiCanvas");
  const ctx = confettiCanvas.getContext("2d");

  // Initialize Clock
  function updateClock() {
    const now = new Date();
    clockChip.textContent = now.toTimeString().split(" ")[0];
  }
  setInterval(updateClock, 1000);
  updateClock();

  // Render Subject Selection Cards
  function renderSubjects() {
    subjectGrid.innerHTML = "";
    Object.keys(cpeQuestionBank).forEach(subject => {
      const count = cpeQuestionBank[subject].length;
      const card = document.createElement("button");
      card.type = "button";
      card.className = "subject-card glass";
      card.innerHTML = `
        <span class="subject-card__title">${subject}</span>
        <span class="subject-card__count">${count} items available</span>
      `;
      card.addEventListener("click", () => startQuiz(subject));
      subjectGrid.appendChild(card);
    });
  }

  // Fisher-Yates Shuffle Algorithm
  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Navigation Controller
  function switchScreen(screenName) {
    Object.values(screens).forEach(scr => scr.classList.remove("is-active"));
    if (screens[screenName]) {
      screens[screenName].classList.add("is-active");
    }
  }

  // Toast Notifier
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("is-visible");
    setTimeout(() => toast.classList.remove("is-visible"), 2500);
  }

  // Reset Session State Fully
  function resetSessionState() {
    clearInterval(timerInterval);
    currentSubject = null;
    activeQuestions = [];
    currentIndex = 0;
    score = 0;
    streak = 0;
    peakStreak = 0;
    missedQuestions = [];
    selectedOptionValue = null;
    answeredLocked = false;
  }

  // Start Quiz Run
  function startQuiz(subject) {
    resetSessionState();
    currentSubject = subject;
    
    const rawBank = cpeQuestionBank[subject] || [];
    const limit = parseInt(questionCountSelect.value, 10);
    maxTimePerQ = parseInt(timerSelect.value, 10);

    const shuffledPool = shuffleArray(rawBank);
    activeQuestions = limit === 0 ? shuffledPool : shuffledPool.slice(0, limit);

    quizSubjectLabel.textContent = subject;
    switchScreen("quiz");
    loadQuestion();
  }

// Load Current Question
  function loadQuestion() {
    clearInterval(timerInterval);
    answeredLocked = false;
    selectedOptionValue = null;
    nextBtn.disabled = true;
    nextBtn.textContent = "Select an answer";
    
    // Explicitly hide the explanation box on new question load
    explainBox.hidden = true; 

    const qData = activeQuestions[currentIndex];
    questionTag.textContent = `${currentSubject.toUpperCase()} // Q${currentIndex + 1}`;
    questionText.textContent = qData.question;
    qIndexLabel.textContent = `Question ${currentIndex + 1} / ${activeQuestions.length}`;
    streakLabel.textContent = `🔥 Streak: ${streak}`;

    const progressPct = (currentIndex / activeQuestions.length) * 100;
    progressBar.style.width = `${progressPct}%`;

    const randomizedOptions = shuffleArray(qData.options);
    optionsList.innerHTML = "";

    randomizedOptions.forEach(optText => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option";
      btn.textContent = optText;
      btn.addEventListener("click", () => selectOption(btn, optText, qData.answer));
      optionsList.appendChild(btn);
    });

    if (maxTimePerQ > 0) {
      timeLeft = maxTimePerQ;
      timerValue.textContent = timeLeft;
      document.getElementById("timerWrap").style.display = "flex";
      
      const circumference = 100.5;
      timerBar.style.strokeDashoffset = 0;

      timerInterval = setInterval(() => {
        timeLeft--;
        timerValue.textContent = timeLeft;
        const offset = circumference - (timeLeft / maxTimePerQ) * circumference;
        timerBar.style.strokeDashoffset = offset;

        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          handleTimeout(qData.answer);
        }
      }, 1000);
    } else {
      document.getElementById("timerWrap").style.display = "none";
    }
  }

  // Handle Option Selection
  function selectOption(btnElement, chosenValue, correctValue) {
    if (answeredLocked) return;
    answeredLocked = true;
    clearInterval(timerInterval);

    selectedOptionValue = chosenValue;
    const allOptionBtns = optionsList.querySelectorAll("button");
    allOptionBtns.forEach(b => b.disabled = true);

    const isCorrect = chosenValue === correctValue;

    if (isCorrect) {
      btnElement.classList.add("is-correct");
      score++;
      streak++;
      if (streak > peakStreak) peakStreak = streak;
    } else {
      btnElement.classList.add("is-wrong");
      streak = 0;
      missedQuestions.push({
        question: activeQuestions[currentIndex].question,
        userChoice: chosenValue,
        correctChoice: correctValue,
        explanation: activeQuestions[currentIndex].explanation
      });

      allOptionBtns.forEach(b => {
        if (b.textContent === correctValue) {
          b.classList.add("is-correct");
        }
      });
    }

    streakLabel.textContent = `🔥 Streak: ${streak}`;

    explainLabel.textContent = isCorrect ? "✓ Verified Correct" : "✕ Fault Detected";
    explainLabel.style.color = isCorrect ? "var(--success)" : "var(--error)";
    explainText.textContent = activeQuestions[currentIndex].explanation;
    explainBox.hidden = false;

    nextBtn.disabled = false;
    nextBtn.textContent = currentIndex === activeQuestions.length - 1 ? "Complete Diagnostic" : "Next Question";
  }

  // Handle Timeout
  function handleTimeout(correctValue) {
    if (answeredLocked) return;
    answeredLocked = true;
    streak = 0;
    streakLabel.textContent = `🔥 Streak: ${streak}`;

    missedQuestions.push({
      question: activeQuestions[currentIndex].question,
      userChoice: "Timed out (No selection)",
      correctChoice: correctValue,
      explanation: activeQuestions[currentIndex].explanation
    });

    const allOptionBtns = optionsList.querySelectorAll("button");
    allOptionBtns.forEach(b => {
      b.disabled = true;
      if (b.textContent === correctValue) {
        b.classList.add("is-correct");
      }
    });

    explainLabel.textContent = "⏱ Timeout Expired";
    explainLabel.style.color = "var(--error)";
    explainText.textContent = activeQuestions[currentIndex].explanation;
    explainBox.hidden = false;

    nextBtn.disabled = false;
    nextBtn.textContent = currentIndex === activeQuestions.length - 1 ? "Complete Diagnostic" : "Next Question";
  }

  nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex < activeQuestions.length) {
      loadQuestion();
    } else {
      finishQuiz();
    }
  });

  quitBtn.addEventListener("click", () => {
    resetSessionState();
    switchScreen("home");
  });

  // Finish Quiz & Save LocalStorage
  function finishQuiz() {
    clearInterval(timerInterval);
    progressBar.style.width = "100%";
    switchScreen("results");

    const percentage = Math.round((score / activeQuestions.length) * 100);
    resultsScore.textContent = `${percentage}%`;
    resultsSummary.textContent = `Successfully passed ${score} out of ${activeQuestions.length} evaluation points.`;

    statCorrect.textContent = score;
    statWrong.textContent = activeQuestions.length - score;
    statStreak.textContent = peakStreak;

    let history = JSON.parse(localStorage.getItem(`cpe_quiz_${currentSubject}`) || "[]");
    let bestRecord = Math.max(percentage, ...history.map(h => h.percentage), 0);
    statBest.textContent = `${bestRecord}%`;

    const attemptRecord = {
      date: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      percentage,
      score,
      total: activeQuestions.length
    };
    history.unshift(attemptRecord);
    if (history.length > 10) history.pop();
    localStorage.setItem(`cpe_quiz_${currentSubject}`, JSON.stringify(history));

    historySubjectName.textContent = currentSubject;
    historyList.innerHTML = "";
    history.forEach(item => {
      const row = document.createElement("div");
      row.className = "history-item";
      row.innerHTML = `<span>${item.date}</span><span>Score: ${item.score}/${item.total} (${item.percentage}%)</span>`;
      historyList.appendChild(row);
    });

    if (percentage >= 75) {
      triggerConfetti();
      showToast("Diagnostic passed with flying colors!");
    }
  }

  reviewBtn.addEventListener("click", () => {
    reviewList.innerHTML = "";
    if (missedQuestions.length === 0) {
      reviewList.innerHTML = `<div class="card glass" style="padding:1.5rem; text-align:center;"><p>Zero faults recorded! Flawless diagnostic run.</p></div>`;
    } else {
      missedQuestions.forEach((item, idx) => {
        const div = document.createElement("div");
        div.className = "card glass review-item";
        div.innerHTML = `
          <p class="review-item__q">Q${idx + 1}: ${item.question}</p>
          <div class="review-item__meta">
            <span class="review-item__user">Your input: ${item.userChoice}</span>
            <span class="review-item__correct">Correct standard: ${item.correctChoice}</span>
          </div>
          <p class="explain-box__text" style="margin-top:0.35rem;"><strong>Rationale:</strong> ${item.explanation}</p>
        `;
        reviewList.appendChild(div);
      });
    }
    switchScreen("review");
  });

  reviewBackBtn.addEventListener("click", () => switchScreen("results"));
  retryBtn.addEventListener("click", () => startQuiz(currentSubject));
  homeBtn.addEventListener("click", () => {
    resetSessionState();
    switchScreen("home");
  });

  function triggerConfetti() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
    const particles = [];
    const colors = ["#3b82f6", "#10b981", "#8b5cf6", "#f59e0b", "#ef4444"];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: confettiCanvas.width / 2,
        y: confettiCanvas.height / 2,
        vx: (Math.random() - 0.5) * 14,
        vy: (Math.random() - 0.7) * 14,
        size: Math.random() * 6 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        decay: Math.random() * 0.015 + 0.01
      });
    }

    function updateConfetti() {
      ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.4;
        p.alpha -= p.decay;
        if (p.alpha <= 0) {
          particles.splice(index, 1);
          return;
        }
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
        ctx.restore();
      });

      if (particles.length > 0) {
        requestAnimationFrame(updateConfetti);
      }
    }
    updateConfetti();
  }

  renderSubjects();
});
