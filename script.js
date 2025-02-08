document.addEventListener('DOMContentLoaded', function() {
    const topics = {
        vocabulario: [
            { question: "¿Qué significa 'casa' en turco?", options: ["Ev", "Araba", "Kitap", "Masa"], answer: "Ev" },
            { question: "¿Qué significa 'libro' en turco?", options: ["Kalem", "Kitap", "Defter", "Sandalye"], answer: "Kitap" },
            { question: "¿Qué significa 'puerta' en turco?", options: ["Kapı", "Pencere", "Duvar", "Çatı"], answer: "Kapı" },
            { question: "¿Qué significa 'ventana' en turco?", options: ["Kapı", "Pencere", "Duvar", "Masa"], answer: "Pencere" },
            { question: "¿Qué significa 'silla' en turco?", options: ["Sandalye", "Masa", "Bardak", "Kitap"], answer: "Sandalye" },
            { question: "¿Qué significa 'mesa' en turco?", options: ["Masa", "Koltuk", "Defter", "Tablo"], answer: "Masa" },
            { question: "¿Qué significa 'teléfono' en turco?", options: ["Telefon", "Bilgisayar", "Kamera", "Mikrofon"], answer: "Telefon" },
            { question: "¿Qué significa 'espejo' en turco?", options: ["Ayna", "Bardak", "Kitap", "Koltuk"], answer: "Ayna" },
            { question: "¿Qué significa 'luz' en turco?", options: ["Işık", "Sıcak", "Soğuk", "Su"], answer: "Işık" },
            { question: "¿Qué significa 'fruta' en turco?", options: ["Meyve", "Sebze", "Et", "Yemek"], answer: "Meyve" }
        ],
        gramática: [
            { question: "¿Cuál es el artículo definido para 'mesa'?", options: ["El", "La", "Los", "Las"], answer: "La" },
            { question: "¿Cuál es el plural de 'libro'?", options: ["Libros", "Libres", "Libra", "Libro"], answer: "Libros" },
            { question: "¿Cuál es el pronombre de objeto directo para 'nosotros'?", options: ["Nos", "Los", "La", "Le"], answer: "Nos" },
            { question: "¿Cómo se dice 'él come' en español?", options: ["Él comió", "Él comerá", "Él come", "Él comía"], answer: "Él come" },
            { question: "¿Cómo se dice 'nosotros hablamos' en español?", options: ["Nosotros hablaron", "Nosotros hablan", "Nosotros hablamos", "Nosotros hablabamos"], answer: "Nosotros hablamos" },
            { question: "¿Cómo se conjuga 'vivir' en presente para 'tú'?", options: ["Vives", "Vivo", "Viven", "Viviré"], answer: "Vives" },
            { question: "¿Qué significa 'hablar' en inglés?", options: ["To speak", "To write", "To read", "To sleep"], answer: "To speak" },
            { question: "¿Qué significa 'leer' en inglés?", options: ["To read", "To sleep", "To eat", "To run"], answer: "To read" },
            { question: "¿Cómo se conjuga 'tener' en presente para 'yo'?", options: ["Tengo", "Tienes", "Tiene", "Tienen"], answer: "Tengo" },
            { question: "¿Cuál es el verbo auxiliar para formar el futuro?", options: ["Haber", "Ser", "Estar", "Tener"], answer: "Haber" }
        ],
        verbos: [
            { question: "¿Cómo se conjuga 'hablar' en presente para 'yo'?", options: ["Hablo", "Hablas", "Habla", "Hablamos"], answer: "Hablo" },
            { question: "¿Cómo se conjuga 'comer' en presente para 'tú'?", options: ["Como", "Comes", "Come", "Comemos"], answer: "Comes" },
            { question: "¿Cómo se conjuga 'vivir' en presente para 'él/ella'?", options: ["Vivo", "Vives", "Vive", "Vivimos"], answer: "Vive" },
            { question: "¿Cómo se conjuga 'trabajar' en presente para 'nosotros'?", options: ["Trabajo", "Trabajas", "Trabaja", "Trabajamos"], answer: "Trabajamos" },
            { question: "¿Cómo se conjuga 'beber' en presente para 'ellos/ellas'?", options: ["Beben", "Bebo", "Bebes", "Bebemos"], answer: "Beben" },
            { question: "¿Cómo se conjuga 'hacer' en presente para 'yo'?", options: ["Hago", "Haces", "Hace", "Hacemos"], answer: "Hago" },
            { question: "¿Cómo se conjuga 'ir' en presente para 'tú'?", options: ["Voy", "Vas", "Va", "Vamos"], answer: "Vas" },
            { question: "¿Cómo se conjuga 'tener' en presente para 'ella'?", options: ["Tiene", "Tengo", "Tienes", "Tienen"], answer: "Tiene" },
            { question: "¿Cómo se conjuga 'leer' en presente para 'yo'?", options: ["Leo", "Lees", "Lee", "Leemos"], answer: "Leo" },
            { question: "¿Cómo se conjuga 'escribir' en presente para 'nosotros'?", options: ["Escribo", "Escribes", "Escribe", "Escribimos"], answer: "Escribimos" }
        ],
        expresiones: [
            { question: "¿Qué significa '¿Cómo estás?' en turco?", options: ["Nasılsın?", "Ne yapıyorsun?", "Neredesin?", "Kimsin?"], answer: "Nasılsın?" },
            { question: "¿Qué significa 'Gracias' en turco?", options: ["Teşekkürler", "Lütfen", "Özür dilerim", "Merhaba"], answer: "Teşekkürler" },
            { question: "¿Qué significa '¿Qué tal?' en turco?", options: ["Nasılsın?", "Ne yapıyorsun?", "Ne haber?", "Nerede?"], answer: "Ne haber?" },
            { question: "¿Qué significa 'De nada' en turco?", options: ["Bir şey değil", "Hoşça kal", "Merhaba", "Evet"], answer: "Bir şey değil" },
            { question: "¿Qué significa '¿Qué haces?' en turco?", options: ["Ne yapıyorsun?", "Neredesin?", "Ne zaman?", "Kimle?"], answer: "Ne yapıyorsun?" },
            { question: "¿Qué significa '¿Cuántos años tienes?' en turco?", options: ["Kaç yaşındasın?", "Ne yapıyorsun?", "Neredesin?", "Nasılsın?"], answer: "Kaç yaşındasın?" },
            { question: "¿Qué significa '¡Hasta luego!' en turco?", options: ["Hoşça kal!", "Merhaba", "Evet", "Hadi git"], answer: "Hoşça kal!" },
            { question: "¿Qué significa '¡Adiós!' en turco?", options: ["Güle güle!", "Hoşça kal!", "Merhaba", "Evet"], answer: "Güle güle!" },
            { question: "¿Qué significa '¡Te quiero!' en turco?", options: ["Seni seviyorum!", "Hoşça kal!", "Ne yapıyorsun?", "Güle güle!"], answer: "Seni seviyorum!" },
            { question: "¿Qué significa '¿Dónde está?' en turco?", options: ["Nerede?", "Ne zaman?", "Kimle?", "Nasılsın?"], answer: "Nerede?" }
        ]
    };


    let currentTopic = '';
    let currentQuestionIndex = 0;
    let correctAnswers = 0;
    let wrongAnswers = 0;
    let consecutiveWrongAnswers = 0;
    let timer;
    let timeLeft;

    const homeScreen = document.getElementById('home-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultScreen = document.getElementById('result-screen');
    const questionText = document.getElementById('question-text');
    const optionsDiv = document.getElementById('options');
    const nextBtn = document.getElementById('next-btn');
    const timeLeftSpan = document.getElementById('time-left');
    const resultText = document.getElementById('result-text');
    const noteArea = document.getElementById('note-area');

    document.querySelectorAll('.topic-btn').forEach(button => {
        button.addEventListener('click', function() {
            currentTopic = this.getAttribute('data-topic');
            homeScreen.style.display = 'none';
            quizScreen.style.display = 'block';
            startQuiz();
        });
    });

    function startQuiz() {
        currentQuestionIndex = 0;
        correctAnswers = 0;
        wrongAnswers = 0;
        consecutiveWrongAnswers = 0;
        showQuestion();
    }

    function showQuestion() {
        const question = topics[currentTopic][currentQuestionIndex];
        questionText.textContent = question.question;
        optionsDiv.innerHTML = '';
        question.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', function() {
                checkAnswer(option, question.answer);
            });
            optionsDiv.appendChild(button);
        });
        startTimer();
    }

    function checkAnswer(selectedOption, correctAnswer) {
        const buttons = optionsDiv.querySelectorAll('button');
        buttons.forEach(button => {
            button.disabled = true;
            if (button.textContent === correctAnswer) {
                button.style.backgroundColor = '#28a745'; // Yeşil
            } else if (button.textContent === selectedOption) {
                button.style.backgroundColor = '#dc3545'; // Kırmızı
            }
        });

        if (selectedOption === correctAnswer) {
            correctAnswers++;
            consecutiveWrongAnswers = 0;
        } else {
            wrongAnswers++;
            consecutiveWrongAnswers++;
            if (consecutiveWrongAnswers === 2) {
                buttons.forEach(button => {
                    if (button.textContent === correctAnswer) {
                        button.style.backgroundColor = '#28a745'; // Yeşil
                    }
                });
            }
        }

        nextBtn.style.display = 'block';
    }

    function startTimer() {
        timeLeft = currentQuestionIndex < 5 ? 60 : 30;
        timeLeftSpan.textContent = timeLeft;
        timer = setInterval(() => {
            timeLeft--;
            timeLeftSpan.textContent = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(timer);
                nextQuestion();
            }
        }, 1000);
    }

    nextBtn.addEventListener('click', nextQuestion);

    function nextQuestion() {
        clearInterval(timer);
        currentQuestionIndex++;
        if (currentQuestionIndex < topics[currentTopic].length) {
            showQuestion();
            nextBtn.style.display = 'none';
        } else {
            showResult();
        }
    }

    function showResult() {
        quizScreen.style.display = 'none';
        resultScreen.style.display = 'block';
        resultText.textContent = `Correctas: ${correctAnswers}, Incorrectas: ${wrongAnswers}`;
    }
});

document.getElementById('backToHome').addEventListener('click', function() {
    document.getElementById('home-screen').style.display = 'block';
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'none';
});