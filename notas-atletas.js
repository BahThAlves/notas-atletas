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


function apresentacaoEMedia(objAtletas) {
  let saida = []
  let media = 0
  let matrizatual = []

  for (let i = 0; i < objAtletas.length; i++) {

    /// organizar as notas do menor para o maior
    objAtletas[i].notas.sort(function(n1, n2) {
      return n1 - n2
    })

  }



  console.log(objAtletas)
}

apresentacaoEMedia(atletas)