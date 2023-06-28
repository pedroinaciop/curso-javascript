var deuses = ['Aegir', 'Aud', 'Balder'];

// Usando a função map com callback
deuses.map(function(deus) {
    console.log(deus);
});

// Usando a função reduce com callback
deuses.reduce(function(_, deus) {
    console.log(deus);
});

// Usando a função filter com callback
deuses.filter(function(deus) {
    console.log(deus);
});