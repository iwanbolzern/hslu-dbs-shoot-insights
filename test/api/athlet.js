const request = require('supertest');
const app = require('../../app');
const chai = require('chai');
const expect = chai.expect;

chai.use(require('chai-http'));
chai.use(require('chai-json-schema'));

const athletsSchema = {
  type: 'object',
  'uniqueItems': true
};

describe('Test /athlet/:discipline route', () => {
  it('GET /athlet/:discipline not found', done => {
    request(app)
      .get('/athlet/1234')
      .end((err, res) => {
        console.log(res.body);
        expect(res).to.have.status(404);
/*        expect(res).to.be.json;
        expect(res.body).to.be.jsonSchema(disciplinesSchema);
*/        done();
      })
  });

  it('GET /athlet/:discipline', done => {
    request(app)
      .get('/athlet/5a32bfe2fb6584414052cb31')
      .end((err, res) => {
        expect(res).to.have.status(200);
        console.log(res.body);
/*        expect(res).to.be.json;
        expect(res.body).to.be.jsonSchema(disciplinesSchema);
*/        done();
      })
  })
});
