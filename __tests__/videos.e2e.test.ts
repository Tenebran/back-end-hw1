// import { req } from './test-helpers';
// import {setDB} from '../src/db/db'
// import {dataset1} from './datasets'
import { SETTINGS } from '../src/settings';

import { app } from '../src/app';
import supertest from 'supertest';
import { db } from '../src/db/db';

const req = supertest(app);

describe('/videos', () => {
  beforeAll(async () => {
    // await req.delete('/testing/all-data')
  });

  // it('should get empty array', async () => {
  //   // setDB()

  //   const res = await req.get(SETTINGS.PATH.VIDEOS).expect(200);

  //   console.log(res.body);

  //   // expect(res.body.length).toBe(0)
  // });

  it('Get videos = []', async () => {
    const x = 'super video';
    db.videos = [{ title: 'x' }];
    const res = await req.get(`/videos/1?search=${x}`).send({ title: 1234 }).expect(200);
    console.log(res.body);
    expect(res.body.length).toBe(1);
  });
  // it('should get not empty array', async () => {
  //   // setDB(dataset1)

  //   const res = await req.get(SETTINGS.PATH.VIDEOS).expect(200);

  //   console.log(res.body);

  //   // expect(res.body.length).toBe(1)
  //   // expect(res.body[0]).toEqual(dataset1.videos[0])
  // });
});
