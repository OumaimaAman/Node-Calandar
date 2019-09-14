const supertest = require('supertest');
const expect = require('chai').expect;
const app = require('../app');

let agent = {};



before((done)=>{
    agent = supertest.agent(app);
    done();
});

describe('Test Authentification',()=>{
    it("doit retourner erreur d'authetification", async ()=>{
       await agent
        .post('/auth/login')
        .send({
            'username':'ouma',
            'password' :'jj'
        })
        .expect(401);
              
    })

    it("doit s'authentifier", async ()=>{
        let res = await agent
        .post('/auth/login')
        .send({
            'username':'admin',
            'password' :'admin'
        })
        .expect(200);
        expect(res.body.token).to.exist;
    })
})


