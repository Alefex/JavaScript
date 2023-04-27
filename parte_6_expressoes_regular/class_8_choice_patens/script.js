    const digitar = /\w+: (Alefe|Laúra|Alex)/;


    console.log(digitar.test("Nome: Alefe"));
    console.log(digitar.test("Nome: Laura"));
    console.log(digitar.test("Nome: Alex"));

    // pra dar true é preciso a string estar exatamente igual no mesmo padrão