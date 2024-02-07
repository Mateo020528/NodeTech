//Se crea un objeto que contiene la pregunta, las opciones de respuesta y la respuesta correcta
const preguntas = [
    {
        pregunta: "¿Qué es una Media Query?",
        opciones: ["a)  Una regla o conjunto de reglas en HTML.", "b) Una función de CSS3 para definir propiedades específicas para distintos tipos de medios.", "c) Una forma de manipular bases de datos en JavaScript."],
        respuesta: "b"
        },
        {
        pregunta: "¿Cómo se utilizan las Media Queries?",
        opciones: ["a) Es un estándar de diseño solo recomendado por algunos navegadores.", "b) Se introducen en una hoja de estilo HTML.", "c) Se introducen en una hoja de estilo CSS y permiten especificar la visualización de un documento para diferentes medios de salida y tamaños de pantalla."],
        respuesta: "c"
        },
        {
        pregunta: "¿Para qué sirven las Media Queries?",
        opciones: ["a) Para generar animaciones en páginas web.", "b) Para crear una experiencia de uso adecuada para cada dispositivo, ajustando la visualización en función de determinadas condiciones como el tipo de medio, la orientación de la pantalla o su resolución.", "c) Para codificar aplicaciones móviles."],
        respuesta: "b"
        },
        {
        pregunta: "¿Cómo funcionan las Media Queries CSS?",
        opciones: ["a) Están conformadas por un tipo de medio obligatorio y una o más expresiones conocidas como características de medios.", "b) No es necesario especificar ningún tipo de medio en las Media Queries.", "c) Las Media Queries CSS se definen únicamente con JavaScript."],
        respuesta: "a"
        },
        {
        pregunta: "¿Cuál es el valor por defecto para un tipo de medio si no se especifica en una Media Query?",
        opciones: ["a) all", "b) none", "c) default"],
        respuesta: "a"
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