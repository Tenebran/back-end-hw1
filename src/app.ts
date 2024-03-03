import express, { Request, Response } from 'express';
import { db } from './db/db';
import { createVideoController } from './controller/createVideoController';

type ParamsType = { id: string };
type ResponseBodyType = any[];
type ReqBodyType = { title: string };
type QueryType = { search: string };

export const app = express();
app.use(express.json());

export const getVideo = (
  req: Request<ParamsType, any, ReqBodyType, QueryType>,
  res: Response<ResponseBodyType>
) => {
  console.log(req.params.id);
  console.log(req.body.title);
  console.log(req.query.search);
  res.status(200).json(db.videos);
};

export const getVideos = (
  req: Request<ParamsType, any, ReqBodyType, QueryType>,
  res: Response<ResponseBodyType>
) => {
  console.log(new Date().toISOString());
  // console.log(req.params.id);
  // console.log(req.body.title);
  // console.log(req.query.search);
  res.status(200).json(db.videos);
};

export const postVideos = (
  req: Request<ParamsType, any, ReqBodyType, QueryType>,
  res: Response<ResponseBodyType>
) => {};

export const postVideo = (
  req: Request<ParamsType, any, ReqBodyType, QueryType>,
  res: Response<ResponseBodyType>
) => {};

app.get('/videos', getVideos);
app.get('/videos/:id', getVideo);
app.post('/videos', createVideoController);
// app.get(SETTINGS.PATH.VIDEOS, getVideosController)
// app.use(SETTINGS.PATH.VIDEOS, videosRouter)
