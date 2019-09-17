const fs = require('fs');
const path = require('path');
let calandar = require('../models/calandar.js');


    const readClandarFile = () =>{
        let calandars = [];
        let fichier = fs.readFileSync(path.
            resolve(__dirname,'../tmp/calandar.json'));
            try{
                calandars = JSON.parse(fichier);
            }catch(err){
                calandars = [];
            }
        return calandars;

    }

    const writeClandarToFile = (calandars = []) => {
        let data = JSON.stringify(calandars, null, 2);
        fs.writeFileSync(path.resolve(__dirname,'../tmp/calandar.json'), data);
    }

module.exports = {

    getDate : async (id) =>{
        let calandars = readClandarFile();
        let  date = calandars.find(v => v.id === id);
        return date;

    },
     getCalandar : async () =>{
        return readClandarFile();
    },

    addCalandar : async (body) => {

        let calandars = readClandarFile();
        let newDate = new calandar(body.dateDebut, body.dateFin, body.libelle);
        calandars.push(newDate);
        writeClandarToFile(calandars);
        return newDate;


    },

    deleteCalandar : async (id) => {
        let calandars = readClandarFile();
         calandars = calandars.filter(v => v.id !== id);
           writeClandarToFile(calandars);
           return id;
    }


}