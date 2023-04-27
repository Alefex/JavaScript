//const id_no_final = /\d+(ID)/;
const id_no_final = /\d+ID\b/;



console.log(id_no_final.test("456465id"));
console.log(id_no_final.test("456664ID"));
console.log(id_no_final.test("ID45646"));
