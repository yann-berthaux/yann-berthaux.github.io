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


function initMultiplication(multiplicateur_max , table_max) {
    multiplicateur =  getRandomInt(multiplicateur_max);
    table =  getRandomInt(table_max);

    $("#multiplication1").text(multiplicateur);
    $("#multiplication2").text(table);
    $("#multiplication3").val("");
   
}


function initAddition(a ,b ) {
    
    a = getRandomInt(20) + 10;
    b = getRandomInt(20) + 10;

    $("#a1").text(a);
    $("#a2").text(Math.trunc(a/10));
    $("#a3").text(a%10);
    $("#b1").text(b);
    $("#b2").text(Math.trunc(b/10));
    $("#b3").text(b%10);    
    $("#retenue").val("");
    $("#dizaine").val("");
    $("#unite").val("");
    
    return [a , b];
}
