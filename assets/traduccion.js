const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/html';
const body = document.body;

/* Traducción Español */
const col = document.querySelector('#colombia');

function traducirEs() {
    const optionsCol = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'f0352ad7cfmsh6d616f46931fdedp1d062ejsn8fe7c2d34671',
            'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
        },
        body: new URLSearchParams({
            from: 'en',
            to: 'es',
            html: body.innerHTML
        })
    };

    fetch(url ,optionsCol).then(r=>r.json()).then(d=>{
        body.innerHTML=d.trans
        console.log("Traducido a Español!")
    }).catch(err => console.error("ERROR: ", err.message));
}

// col.addEventListener('click', ()=>{
//     const optionsCol = {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/x-www-form-urlencoded',
//             'X-RapidAPI-Key': 'f0352ad7cfmsh6d616f46931fdedp1d062ejsn8fe7c2d34671',
//             'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
//         },
//         body: new URLSearchParams({
//             from: 'en',
//             to: 'es',
//             html: body.innerHTML
//         })
//     };

//     fetch(url ,optionsCol).then(r=>r.json()).then(d=>{
//         body.innerHTML=d.trans
//         console.log("Traducido a Español!")
//     }).catch(err => console.error("ERROR: ", err.message));
// })

/* Traducción Estados Unidos */
const us = document.querySelector('#estados-unidos');


function traducirEn() {
    const optionsUs = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'f0352ad7cfmsh6d616f46931fdedp1d062ejsn8fe7c2d34671',
            'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
        },
        body: new URLSearchParams({
            from: 'es',
            to: 'en',
            html: body.innerHTML
        })
    };

    fetch(url ,optionsUs).then(r=>r.json()).then(d=>{
        body.innerHTML = d.trans
        console.log("Traducido a Inglés!")
    }).catch(err => console.error("ERROR: ", err.message));
}
// us.addEventListener('click', ()=>{
//     const optionsUs = {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/x-www-form-urlencoded',
//             'X-RapidAPI-Key': 'f0352ad7cfmsh6d616f46931fdedp1d062ejsn8fe7c2d34671',
//             'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
//         },
//         body: new URLSearchParams({
//             from: 'es',
//             to: 'en',
//             html: body.innerHTML
//         })
//     };

//     fetch(url ,optionsUs).then(r=>r.json()).then(d=>{
//         body.innerHTML = d.trans
//         console.log("Traducido a Inglés!")
//     }).catch(err => console.error("ERROR: ", err.message));
// })

