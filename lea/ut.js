function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
}


function augmenteProgression( nom, valeur , increment , fin)  {

    valeur = valeur + increment ;
    width = valeur +"%";

    $("#" + nom).width()
    $("#" + nom ).animate({
        width: width
    }, 1000);
 

    if (valeur >= 100 ) {
        
        $("#" + fin ).fadeIn(1000);
    }

    return valeur;
}


function initMoitie( max ) {
    moitie=  getRandomInt(max) * 2;
    $("#moitie1").text(moitie);
    $("#moitie4").text(moitie);
    $("#moitie2").val("");
    $("#moitie3").val("");
}

function initDouble(max) {
    double=  getRandomInt(max);
    $("#double1").text(double);
    $("#double2").text(double);
    $("#double3").val("");
    $("#double4").text(double);
}
