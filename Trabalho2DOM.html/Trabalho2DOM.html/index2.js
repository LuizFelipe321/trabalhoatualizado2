 async function carregarCurso(curso) {
     try {
         document.getElementById("detalhes").innerHTML = "Carregando...";
     }
 } catch (error) {
     document.getElementById("detalhes").innerHTML = "Error:" +
         erro.mensage;

     console.error("Erro ao carregar detalhes do curso:", error);
 }