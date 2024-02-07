//Se crea un objeto que contiene la pregunta, las opciones de respuesta y la respuesta correcta
const questions = [
    {
        question: "¿Qué significan las APIS en el contexto del diseño web?",
        options: ["a) Aplicación de Interfaz de Software", "b) Interfaz de Programación de Aplicaciones", "c) Protocolo de Conexión de Servidores"],
        answer: "b"
        },
        {
        question: "¿Cómo funcionan las APIS en términos de arquitectura cliente-servidor?",
        options: ["a) El servidor envía solicitudes y el cliente responde.", "b) El cliente envía solicitudes y el servidor responde.", "c) Ambos intercambian solicitudes y respuestas de manera simultánea."],
        answer: "b"
        },
        {
        question: "¿Cuál es una característica de las API de SOAP?",
        options: ["a) Utilizan el protocolo de WebSocket.", "b) Intercambian mensajes mediante JSON.", "c) Utilizan XML para el intercambio de mensajes."],
        answer: "c"
        },
        {
        question: "¿Qué tipo de API permite la comunicación bidireccional entre cliente y servidor?",
        options: ["a) API de RPC", "b) API de WebSocket", "c) API de REST"],
        answer: "b"
        },
        {
        question: "¿Cuál es el tipo de API más popular y flexible en la web actualmente?",
        options: ["a) API de RPC", "b) API de SOAP", "c) API de REST"],
        answer: "c"
        }
    ];
    
    //Se llaman todas las clases de los elementos que necesitamos del HTML para hacer funcional el cuestionario
    const quizContainer = document.getElementById('quiz');
    const questionContainer = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const submitButton = document.getElementById('submit');
    
    //Se crean variables para las preguntas y las respuestas correctas (puntaje)
    let currentQuestion = 0;
    let score = 0;
    //Esta funcion recorre el objeto de preguntas y crea botones por cada opcion de respuesta
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
    //Esta funcion se encarga de comparar la respuesta seleccionada con la respuesta correcta, si son iguales sube el puntaje, si la pregunta es menor a 5 pasa de pregunta si no muestra el puntaje obtenido
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
    //Esta funcion muestra el puntaje obtenido
    function showResult() {
        quizContainer.innerHTML = `
        <h1>Resultado</h1>
        <p>Has respondido correctamente ${score} de ${questions.length} preguntas.</p>
        `;
    }
    
    //Es lo que aparece al principio ( la primera pregunta) y llama la funcion del puntaje al darle clic al boton enviar
    showQuestion();
    submitButton.addEventListener('click', showResult);