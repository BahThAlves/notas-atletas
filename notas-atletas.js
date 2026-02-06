let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];


function dadosFinais(objAtletas) {
  let calcularMedia = []
  let soma = 0
  let media = 0
  let dados = []

  for (let i = 0; i < objAtletas.length; i++) {

    /// organizar as notas do menor para o maior
    objAtletas[i].notas.sort(function(n1, n2) {
      return n1 - n2
    })

    /// cortar os 3 do meio
    calcularMedia.push({
      nome: objAtletas[i].nome,
      notas: objAtletas[i].notas.slice(1,4)
    })
  }

  
    /// media
    for(let i = 0; i < calcularMedia.length; i++) {
      soma = 0
        for(let j = 0; j < calcularMedia[i].notas.length; j++) {
            soma += calcularMedia[i].notas[j]
        }
        media = soma / 3

        /// montar dados
        dados.push({
            atleta: objAtletas[i].nome,
            notasObtidas: objAtletas[i].notas,
            mediaValida: media
        })
    }

    return dados
}

console.log(dadosFinais(atletas))