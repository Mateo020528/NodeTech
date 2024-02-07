const questions = [
    {
        question: "¿Qué es una Media Query?",
        options: ["a)  Una regla o conjunto de reglas en HTML.", "b) Una función de CSS3 para definir propiedades específicas para distintos tipos de medios.", "c) Una forma de manipular bases de datos en JavaScript."],
        answer: "b"
        },
        {
        question: "¿Cómo se utilizan las Media Queries?",
        options: ["a) Es un estándar de diseño solo recomendado por algunos navegadores.", "b) Se introducen en una hoja de estilo HTML.", "c) Se introducen en una hoja de estilo CSS y permiten especificar la visualización de un documento para diferentes medios de salida y tamaños de pantalla."],
        answer: "c"
        },
        {
        question: "¿Para qué sirven las Media Queries?",
        options: ["a) Para generar animaciones en páginas web.", "b) Para crear una experiencia de uso adecuada para cada dispositivo, ajustando la visualización en función de determinadas condiciones como el tipo de medio, la orientación de la pantalla o su resolución.", "c) Para codificar aplicaciones móviles."],
        answer: "b"
        },
        {
        question: "¿Cómo funcionan las Media Queries CSS?",
        options: ["a) Están conformadas por un tipo de medio obligatorio y una o más expresiones conocidas como características de medios.", "b) No es necesario especificar ningún tipo de medio en las Media Queries.", "c) Las Media Queries CSS se definen únicamente con JavaScript."],
        answer: "a"
        },
        {
        question: "¿Cuál es el valor por defecto para un tipo de medio si no se especifica en una Media Query?",
        options: ["a) all", "b) none", "c) default"],
        answer: "a"
        }
    ];
    
    const quizContainer = document.getElementById('quiz');
    const questionContainer = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const submitButton = document.getElementById('submit');
    
    let currentQuestion = 0;
    let score = 0;
    
    function showQuestion() {
        const q = questions[currentQuestion];
        questionContainer.textContent = q.question;
        optionsContainer.innerHTML = '';
        q.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => {
            checkAnswer(option[0]);
        });
        optionsContainer.appendChild(button);
        });
    }
    
    function checkAnswer(answer) {
        if (answer === questions[currentQuestion].answer) {
        score++;
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
        showQuestion();
        } else {
        showResult();
        }
    }
    
    function showResult() {
        quizContainer.innerHTML = `
        <h1>Resultado</h1>
        <p>Has respondido correctamente ${score} de ${questions.length} preguntas.</p>
        `;
    }
    
    showQuestion();
    submitButton.addEventListener('click', showResult);