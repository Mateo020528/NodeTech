//Se crea un objeto que contiene la pregunta, las opciones de respuesta y la respuesta correcta
const preguntas = [
    {
        pregunta: "¿Qué significan las APIS en el contexto del diseño web?",
        opciones: ["a) Aplicación de Interfaz de Software", "b) Interfaz de Programación de Aplicaciones", "c) Protocolo de Conexión de Servidores"],
        respuesta: "b"
        },
        {
        pregunta: "¿Cómo funcionan las APIS en términos de arquitectura cliente-servidor?",
        opciones: ["a) El servidor envía solicitudes y el cliente responde.", "b) El cliente envía solicitudes y el servidor responde.", "c) Ambos intercambian solicitudes y respuestas de manera simultánea."],
        respuesta: "b"
        },
        {
        pregunta: "¿Cuál es una característica de las API de SOAP?",
        opciones: ["a) Utilizan el protocolo de WebSocket.", "b) Intercambian mensajes mediante JSON.", "c) Utilizan XML para el intercambio de mensajes."],
        respuesta: "c"
        },
        {
        pregunta: "¿Qué tipo de API permite la comunicación bidireccional entre cliente y servidor?",
        opciones: ["a) API de RPC", "b) API de WebSocket", "c) API de REST"],
        respuesta: "b"
        },
        {
        pregunta: "¿Cuál es el tipo de API más popular y flexible en la web actualmente?",
        opciones: ["a) API de RPC", "b) API de SOAP", "c) API de REST"],
        respuesta: "c"
        }
    ];
    
    //Se llaman todas las clases de los elementos que necesitamos del HTML para hacer funcional el cuestionario
    const quizContainer = document.getElementById('quiz');
    const preguntaContainer = document.getElementById('pregunta');
    const opcionesContainer = document.getElementById('opciones');
    const enviarButton = document.getElementById('enviar');
    
    //Se crean variables para las preguntas y las respuestas correctas (puntaje)
    let numPreguntas = 0;
    let puntaje = 0;
    //Esta funcion recorre el objeto de preguntas y crea botones por cada opcion de respuesta
    function mostrarPregunta() {
        const preg = preguntas[numPreguntas];
        preguntaContainer.textContent = preg.pregunta;
        opcionesContainer.innerHTML = '';
        preg.opciones.forEach(opcion => {
        const button = document.createElement('button');
        button.textContent = opcion;
        button.addEventListener('click', () => {
            verRespuesta(opcion[0]);
        });
        opcionesContainer.appendChild(button);
        });
    }
    //Esta funcion se encarga de comparar la respuesta seleccionada con la respuesta correcta, si son iguales sube el puntaje, si la pregunta es menor a 5 pasa de pregunta si no muestra el puntaje obtenido
    function verRespuesta(respuesta) {
        if (respuesta === preguntas[numPreguntas].respuesta) {
        puntaje++;
        }
        numPreguntas++;
        if (numPreguntas < preguntas.length) {
        mostrarPregunta();
        } else {
        mostrarResultado();
        }
    }
    //Esta funcion muestra el puntaje obtenido
    function mostrarResultado() {
        quizContainer.innerHTML = `
        <h1>Resultado</h1>
        <p>Has respondido correctamente ${puntaje} de ${preguntas.length} preguntas.</p>
        `;
    }
    
    //Es lo que aparece al principio ( la primera pregunta) y llama la funcion del puntaje al darle clic al boton enviar
    mostrarPregunta();
    submitButton.addEventListener('click', mostrarResultado);