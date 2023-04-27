        //const end_ip = /([0-255]{3})[.]([0-255]{3})[.]([0-255]{3})[.]([0-255]{3})/;
        const end_ip = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

    console.log(end_ip.test("255.255.255.255"));
    console.log(end_ip.test("0.das.123.223"));
    console.log(end_ip.test("4.22222.23.255"));
    console.log(end_ip.test("454534"));
    console.log(end_ip.test("sadda"));
    console.log(end_ip.test("0.0.0.0"));