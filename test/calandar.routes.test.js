const supertest = require('supertest');
const expect = require('chai').expect;
const app = require('../app');

let agent = {};
let token = '';

before(async ()=>{
    agent = supertest.agent(app);
    let res = await agent
    .post('/auth/login')
    .send({
        'username':'admin',
        'password' :'admin'
    })
    .expect(200);
    token =  res.body.token;
});

describe('Test Calandar',()=>{
    it("doit ajouter ", async ()=>{  
        await agent
        .post('/calandars/')
        .set('Authorization', 'bearer ' + token)
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
        .set('Authorization', 'bearer ' + token)
        .expect(200);

        expect(res.body.constructor.name).to.be.equal("Array");

    })

    it("doit supprimer",  async ()=>{  
        let res =  await agent
        .post('/calandars/')
        .set('Authorization', 'bearer ' + token)
        .send({
            dateDebut:"10/10/10",
            dateFin :"11/11/11",
            libelle: "RTT"
        })
        .expect(201);

        await agent
        .delete('/calandars/'+res.body.id)
        .set('Authorization', 'bearer ' + token)
        .expect(204);
});

});