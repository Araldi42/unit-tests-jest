// Requisição GET para listar companhias aéreas
fetch('https://api.instantwebtools.net/v1/airlines') 
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na requisição: ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log('Companhias aéreas:', data);
  })
  .catch(error => {
    console.error('Erro:', error);
  });
