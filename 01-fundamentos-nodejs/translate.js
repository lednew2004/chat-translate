const translate = require('@vitalets/google-translate-api');

const userText = "I'm doing very well and you?"
const lang = "pt"
translate(userText, { to: lang }).then(res => {
  console.log('Idioma detectado:', res.from.language.iso); // Certifique-se de que isso é válido
  console.log('Tradução:', res.text);
}).catch(err => {
  console.log("Erro na tradução:", err);
});

