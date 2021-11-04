let r = readLine();

function piCode(r){
    const PI = Math.PI;

    let area = PI * (r**2);
    console.log(area);

    let perimeter = 2 * PI * r;
    console.log(perimeter);
}
piCode(r)