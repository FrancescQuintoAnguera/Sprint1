//Funció del selctro de pàgines
function selector(){
    const pagines = document.getElementById("opcions").value;
    if (pagines){
        window.location.href = pagines;
    }
}
