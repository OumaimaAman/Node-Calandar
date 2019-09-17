const expect = require('chai').expect;
const calandarService = require('../../services/calandar');
const Calandar = require('../../models/calandar.js');

let newDate;

before(done => {
newDate = new Calandar("14/04/19","14/12/19","congé");
done();
});

describe('Test Calandar services',()=>{

  it("doit ajouter calandar", async function(){
    let result = await calandarService.addCalandar(newDate);
    expect(result.dateDebut).to.be.equal(newDate.dateDebut);
    expect(result.dateFin).to.be.equal(newDate.dateFin);
    newDate.id = result.id;

  });

  it("doit returner le contenu du fichier ", async function(){
    let result = await calandarService.getCalandar();
    expect(result.find(element => element.id === newDate.id)).to.exist;  
});

it("doit supprimer calandar", async function(){
  let id = await calandarService.deleteCalandar(newDate.id);
   let result = await calandarService.getCalandar();
   expect(result.find(element => element.id ===id)).to.not.exist; 
  });
});
