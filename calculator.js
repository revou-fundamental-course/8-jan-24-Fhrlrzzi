const btnpersegi = document.getElementById('btnpersegi')
const btnpersegipanjang =document.getElementById('btnpersegipanjang')
btnpersegi.addEventListener('click',function(){
    document.getElementById('ini-persegi').style.display='block'
    document.getElementById('ini-persegi-panjang').style.display='none'
    btnpersegi.classList.add('active')
    btnpersegipanjang.classList.remove('active')
} )
btnpersegipanjang.addEventListener('click',function(){
    document.getElementById('ini-persegi').style.display='none'
    document.getElementById('ini-persegi-panjang').style.display='block'
    btnpersegi.classList.remove('active')
    btnpersegipanjang.classList.add('active')
})
function calculate() {
    const sideLength = parseFloat(document.getElementById('sideLength').value);

    if (isNaN(sideLength) || sideLength <= 0) {
        alert("Masukkan panjang sisi yang valid.");
        return;
    }

    const area = sideLength * sideLength;
    const perimeter = 4 * sideLength;

    document.getElementById('areaValue').textContent = area;
    document.getElementById('areaFormula').textContent = "Rumus Luas: A = " + sideLength + " * " + sideLength;
    document.getElementById('perimeterValue').textContent = perimeter;
    document.getElementById('perimeterFormula').textContent = "Rumus Keliling: P = 4 * " + sideLength;

    const resultContainer = document.getElementById('resultContainer');
    resultContainer.classList.remove('hidden');
}
function rectangleCalculate(){
    const sideLength = parseFloat(document.getElementById('rectangleSideLength').value);
    const sideWidth  = parseFloat(document.getElementById('rectangleSideWidth').value);
    if (isNaN(sideLength) || sideLength  <= 0 || isNaN(sideWidth) || sideWidth <= 0) {
        alert("Masukkan panjang sisi yang valid.");
        return;
    }

    const area = sideLength * sideWidth ;
    const perimeter = 2 * (sideLength + sideWidth) ;
    
    document.getElementById('rectangleAreaResult').textContent = area;
    document.getElementById('rectangleAreaFormula').textContent = `Rumus luas Persegi Panjang ${sideLength} * ${sideWidth}`
    document.getElementById('rectanglePerimeterResult').textContent = perimeter;
    document.getElementById('rectanglePerimeterFormula').textContent = `Rumus Keliling Persegi Panjang ${2} * (${sideLength} + ${sideWidth})`

    const resultContainer = document.getElementById('rectangleResultContainer');
    resultContainer.classList.remove('hidden');
}
function resetForm() {
    document.getElementById('sideLength').value = '';
    document.getElementById('resultContainer').classList.add('hidden');
}

function resetRectangleForm() {
    document.getElementById('rectangleSideLength').value = '';
    document.getElementById('rectangleSideWidth').value = '';
    document.getElementById('rectangleResultContainer').classList.add('hidden');
}