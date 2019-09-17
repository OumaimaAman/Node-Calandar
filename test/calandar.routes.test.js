const supertest = require('supertest');
const expect = require('chai').expect;
const app = require('../app');

let agent = {};



before((done)=>{
    agent = supertest.agent(app);
    done();
});

describe('Test Calandar',()=>{
    it("doit ajouter ", async ()=>{  
        await agent
        .post('/calandars/')
        .send({
            dateDebut:"10/10/10",
            dateFin :"11/11/11",
            libelle: "RTT"
        })
        .expect(201);
              
    })

    it("doit retourner un tableau", async ()=>{  
       let res = await agent
        .get('/calandars')
        .expect(200);

        expect(res.body.constructor.name).to.be.equal("Array");

    })

    it("doit supprimer",  async ()=>{  
        let res =  await agent
        .post('/calandars/')
        .send({
            dateDebut:"10/10/10",
            dateFin :"11/11/11",
            libelle: "RTT"
        })
        .expect(201);

        await agent
        .delete('/calandars/'+res.body.id)
        .expect(204);
});

});