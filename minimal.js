//Funzioni per calcolare il percorso migliore

var mat = new Array();

mat[0] = new Array();		//latitudine
mat[1] = new Array();		//longitudine
mat[2] = new Array();		//priorità

mat[0][0] = 45.992165;      //latitudine
mat[1][0] = 12.522830;      //longitudine
mat[2][0] = 0;              //priorità
mat[0][1] = 45.942901;
mat[1][1] = 12.180354;
mat[2][1] = 0;
mat[0][2] = 47.017843;
mat[1][2] = 12.920347;
mat[2][2] = 0;
mat[0][3] = 46.376337;
mat[1][3] = 11.166807;
mat[2][3] = 0;

function add_item(lat,lon){ //inserimento di una tappa all'interno del percorso

    mat[0][mat[0].length+1]=lat;
    mat[1][mat[0].length+1]=lon;
    mat[2][mat[0].length+1]=0;

}

function first_order(){ //ordinamento che ottiene il percorso migliore

    for (j = 0; j < mat[0].length; j++){
        var d = 9999999.999999999;
        for(i = j+1; i < mat[0].length; i++){
            if(d >= getDist(mat[0][i], mat[1][i], mat[0][j], mat[1][j])){
                swap(i, j+1);
                d = getDist(mat[0][i], mat[1][i], mat[0][j], mat[1][j]);
            }
        }
    }

}

function second_order(){ //ordinamento che ottiene il percorso migliore tenendo conto della possibilità di bloccare con una priorità dei punti nella mappa (che non verranno ordinati)

    for (j = 0; j < mat[0].length; j++){
        var d = 9999999.999999999;
        for(i = j+1; i < mat[0].length; i++){
            if((d >= getDist(mat[0][i], mat[1][i], mat[0][j], mat[1][j]))&&(mat[2][i] == 0)&&(mat[2][j] == 0)){
                swap(i, j+1);
                d = getDist(mat[0][i], mat[1][i], mat[0][j], mat[1][j]);
            }
        }
    }

}

function swap(pos1,pos2){ //funzione indispensabile per gli ordinamenti (scambia due elementi)

    var auxla = mat[0][pos1];
    var auxlo = mat[1][pos1];
    var auxp = mat[2][pos1];
    mat[0][pos1] = mat[0][pos2];
    mat[1][pos1] = mat[1][pos2];
    mat[2][pos1] = mat[2][pos2];
    mat[0][pos2] = auxla;
    mat[1][pos2] = auxlo;
    mat[2][pos2] = auxp;

}

function link_creator(){ //crea un link della mappa creata, da aprire direttamente in google maps

    var x = new String("https://www.google.it/maps/dir");
    for (i = 0; i < mat[0].length; i++) {
        x = x + "/";
        x = x + String(mat[0][i]);
        x = x + ",";
        x = x + String(mat[1][i]);
    }
    return x;

}

function getDist(lat1, lon1, lat2, lon2) { //funzione indispensabile per gli ordinamenti (calcola la distanza punto punto a partire dalla latitudine e dalla longitudine di due punti)

    var dx = lat1 - lat2;
    var dy = lon1 - lon2;
    
    var distanza = Math.sqrt((dx * dx) + (dy * dy));
    
    return distanza;
    
}

function getDistKM(lat1, lon1, lat2, lon2) { //alternativa al calcolo della distanza (il risultato viene restituito in kilomentri)

    var R = 6371;

    var deltaLat = degreeToRadians(lat2-lat1);
    var deltaLon = degreeToRadians(lon2-lon1);
    
    lat1 = degreeToRadians(lat1);
    lat2 = degreeToRadians(lat2);
    
    var a = Math.sin(deltaLat/2) * Math.sin(deltaLat/2) +
               Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon/2) * Math.sin(deltaLong/2);
    
    var c = 2 * Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
    var d = R * c;
    
    return d;
    
}

/*---------------------------------------------------------------------------------------------------------------*/

function go_to(url){ //apre in una nuova Tab del browser il link fornito
    var win = window.open(url, '_blank');
    win.focus();

}

function send_email(email, subject, body) { //invia una mail tramite l'app predefinita del dispositivo (passando email, subject e body)
    window.location.href = "mailto:" + email + "?subject=" + subject + "&body=" + body;
}

/*---------------------------------------------------------------------------------------------------------------*/

function reader_file(){ //lettura di un file

    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "input.txt", false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

function write_file(text){ //scrittura di un file

    const fs = require('fs') 
  
    let data = text
  
    fs.writeFile('output.txt', data, (err) => { 
       
        if (err) throw err; 
    }) 

}

/*---------------------------------------------------------------------------------------------------------------*/

document.onkeyup = function(e) { //gestione dei combokey da tastiera
  if (e.which == 77) {
    alert("M key was pressed");
  } else if (e.ctrlKey && e.which == 66) {
    alert("Ctrl + B shortcut combination was pressed");
  } else if (e.ctrlKey && e.altKey && e.which == 89) {
    alert("Ctrl + Alt + Y shortcut combination was pressed");
  } else if (e.ctrlKey && e.altKey && e.shiftKey && e.which == 85) {
    alert("Ctrl + Alt + Shift + U shortcut combination was pressed");
  }
};








