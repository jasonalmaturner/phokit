import rp from 'request-promise';
import assert from 'assert';

import '../lib/server.js';

describe('First get', () => {
  it('should return \'it\'s working!\'', done => {
    rp('http://127.0.0.1:9001/api/test').then(res => {
      assert.equal('it\'s working!', res);
      done();
    });
  });
});

describe('Post email', () => {
  it('should return an email added or email already registered', done => {
    rp({
      uri: 'http://127.0.0.1:9001/api/email',
      body: {
        email: 'j@j.com',
      },
      json: true,
      method: 'POST',
    }).then(res => {
      assert.equal(true, res === 'email added' || res === 'email already registered');
      done();
    });
  });
});
