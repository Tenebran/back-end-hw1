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

  let videoId: string;

  it('post video to db', async () => {
    const newVideo = {
      title: 'This is new video',
      author: 'Sergej Garkusha',
      availableResolutions: ['P144'],
    };
    const res = await req.post('/videos').send(newVideo).expect(201);
    videoId = res.body.id;
  });

  it('post  videos to db', async () => {
    const newVideo2 = {
      title: 'This is video N3',
      author: 'Sergej Garkusha',
      availableResolutions: ['P144'],
    };

    const newVideo3 = {
      title: 'This is video N4',
      author: 'Sergej Garkusha',
      availableResolutions: ['P144', 'P1080', 'P240', 'P360', 'P480'],
    };
    await req.post('/videos').send(newVideo2).expect(201);
    await req.post('/videos').send(newVideo3).expect(201);
  });

  it('get all videos', async () => {
    const x = [
      { title: 'super video', id: 'id' },
      { title: 'super video', id: 'id2' },
    ];
    const res = await req.get(`/videos`).expect(200);
  });

  it('Get videos = []', async () => {
    console.log('videoId', videoId);
    const res = await req.get(`/videos/${videoId}`).expect(200);
    expect(res.body.id).toBe(videoId);
    expect(res.body.title).toBe('This is new video');
  });
  // it('should get not empty array', async () => {
  //   // setDB(dataset1)

  //   const res = await req.get(SETTINGS.PATH.VIDEOS).expect(200);

  //   console.log(res.body);

  //   // expect(res.body.length).toBe(1)
  //   // expect(res.body[0]).toEqual(dataset1.videos[0])
  // });
});
