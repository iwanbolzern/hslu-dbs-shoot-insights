const request = require('supertest');
const app = require('../../app');
const chai = require('chai');
const expect = chai.expect;

chai.use(require('chai-http'));
chai.use(require('chai-json-schema'));

const disciplinesSchema = {
  type: 'array',
  items: {
    type: "string"
  },
  'uniqueItems': true
};

describe('Test disciplines route', () => {
  it('GET /disciplines validate JSON-Schema', done => {
    request(app)
      .get('/disciplines')
      .expect(200)
      .end((err, res) => {
        expect(res).to.be.json;
        expect(res.body).to.be.jsonSchema(disciplinesSchema);
        done();
      })
  });
  it('GET /disciplines return the list', done => {
    request(app)
      .get('/disciplines')
      .end((err, res) => {
          expect(res.body).to.be.jsonSchema(disciplinesSchema);
          done();
      })
  })
});
