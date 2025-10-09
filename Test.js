const data = require('./Reservierungen.json');

var Hilfe = 0;

const Monate = Object.keys(data.Jahr2025)

const Tische = Object.keys(data.Jahr2025.Januar);

const Datum = Object.keys(data.Jahr2025.Januar.Tisch11);

const Uhr = Object.keys(data.Jahr2025.Januar.Tisch11["01.01.2025"]);



for(var a = 1; a < Datum.length; a++){

    for(var i = 0; i < 3; i++){
      if(data.Jahr2025.Januar.Tisch11[Datum[a]][Uhr[i]].reserviert == true){
        Hilfe = Hilfe + 1;
      }
    }

  }
  



console.log(Hilfe)





