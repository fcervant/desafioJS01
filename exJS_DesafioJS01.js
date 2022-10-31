console.log("Testando JS - exJS_DesafioJS01.js");

const qtPaises = 10;
const dadosPaises = [];
dadosPaises.push({ pais: "Brasil", ponto: "Cristo Redentor", contador: 0 });
dadosPaises.push({ pais: "França", ponto: "Torre Eiffel", contador: 0 });
dadosPaises.push({ pais: "Itália", ponto: "Coliseu", contador: 0 });
dadosPaises.push({
  pais: "Alemanha",
  ponto: "Portão de Brandemburgo",
  contador: 0,
});
dadosPaises.push({
  pais: "Inglaterra",
  ponto: "Abadia de Westminster",
  contador: 0,
});
dadosPaises.push({
  pais: "Austria",
  ponto: "Catedral de Santo Estêvão",
  contador: 0,
});
dadosPaises.push({ pais: "Holanda", ponto: "Casa de Anne Frank", contador: 0 });
dadosPaises.push({ pais: "Espanha", ponto: "Museu do Prado", contador: 0 });
dadosPaises.push({ pais: "Argentina", ponto: "Porto Madero", contador: 0 });
dadosPaises.push({ pais: "Peru", ponto: "Machu Picchu", contador: 0 });

console.table(dadosPaises);

var indicePais = 0;
var pais = "";
let p = document.createElement("p");
p.style = "color:brown";
p.setAttribute("class", "w-75");

function Random() {
  var rnd = Math.floor(Math.random() * qtPaises);
  document.getElementById("btnMensagem").value = rnd;
  console.log(rnd);
  console.log(dadosPaises[rnd]);
  dadosPaises[rnd].contador++;

  p.innerText = `${dadosPaises[rnd].pais}, Ponto Turistico ${dadosPaises[rnd].ponto}, Contador ${dadosPaises[rnd].contador}`;
  document.querySelector("#mensagem").appendChild(p);
}

let p2 = document.createElement("p");

function atualizaTb() {
  for (i = 0; i < dadosPaises.length; i++) {
    document.getElementById("tabelaPaises").innerHTML += "<p>" +
      i +
      ": " +
      dadosPaises[i].pais +
      " - " +
      dadosPaises[i].ponto +
      " - " +
      dadosPaises[i].contador + " </p>"
    // document.writeln(i + 1 + ": " + dadosPaises[i].pais);
  }

  /*Object.keys(dadosPaises).forEach((key, i) => {
    p.innerText = dadosPaises[key].pais;
    document.querySelector("#item-pais").appendChild(p2);

    console.log(
      dadosPaises[key].pais,
      dadosPaises[key].ponto,
      dadosPaises[key].contador
    );
  }); */
}
