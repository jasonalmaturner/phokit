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

// describe('Post email', () => {
//   it('should return an email', done => {
//     rp({
//       uri: 'http://127.0.0.1:9001/api/email',
//       data: {
//         email: 'j@j.com',
//       },
//       method: 'POST',
//     }).then(res => {
//       assert.equal()
//     })
//   })
// })
