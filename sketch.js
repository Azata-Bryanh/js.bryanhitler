// Guerra dos mundos, Livre, Ficção científica/ação
// Escola de rock, Livre, Comédia/Drama
// Harry Potter e o Cálice de Fogo, 10, Infantil/Fantasia
// Interestrelar, 10, Ficção científica/Aventura
// Jumanji, 10, Infantil/Aventura
// Velozes e Furiosos, 12, Ação/Crime
// Godzilla Resurgence, 12, terror/Ficção científica
// American Psyco, 18, Terror/Comédia

let campoIdade;
let campoFantasia;
let campoFicçao;
let campoTerror;
function setup() {
  createCanvas(600, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("15");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoFicçao = createCheckbox("Gosta de ficçao cientifica?");
  campoTerror = createCheckbox("Gosta de terror?");
}

function draw() {
  background("rgb(188,231,188)");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeFicçao = campoFicçao.checked();
  let gostaDeTerror = campoTerror.checked();
  let recomendaçao = gerarRecomendaçao(
    idade,
    gostaDeFantasia,
    gostaDeFicçao,
    gostaDeTerror
  );
  textAlign(CENTER, CENTER);
  textSize(42);
  fill(color(170, 30, 255));
  text(recomendaçao, width / 2, height / 2);
}

function gerarRecomendaçao(
  idade,
  gostaDeFantasia,
  gostaDeFicçao,
  gostaDeTerror
) {
  if (idade >= 10) {
    if (idade >= 18) {
      return "American Psyco";
    } else {
      if (idade >= 12) {
        if (gostaDeFicçao || gostaDeTerror) {
          return "Godzilla Ressurge";
        } else {
          return "Velozes e Furiosos";
        }
      } else {
        if (gostaDeFantasia) {
          return "HP e o Cálice de Fogo";
        } else {
          return "Jumanji";
        }
      }
    }
  } else {
    if (gostaDeFicçao) {
      return "Guerra dos mundos";
    } else {
      return "Escola de Rock";
    }
  }
}
