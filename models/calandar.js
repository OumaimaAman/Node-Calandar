const uuidv1 = require('uuid/v1');

module.exports = class calandar {
    constructor(dateDebut, dateFin, libelle){
       this.id = uuidv1();
       this.dateDebut = dateDebut;
       this.dateFin = dateFin;
       this.libelle = libelle;
   }
   
};
