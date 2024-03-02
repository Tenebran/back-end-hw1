import express, { Request, Response } from 'express';
import { db } from './db/db';

type ParamsType = { id: string };
type ResponseBodyType = any[];
type ReqBodyType = { title: string };
type QueryType = { search: string };

export const app = express();
app.use(express.json());

export const getVideos = (
  req: Request<ParamsType, any, ReqBodyType, QueryType>,
  res: Response<ResponseBodyType>
) => {
  console.log(req.params.id);
  console.log(req.body.title);
  console.log(req.query.search);
  res.status(200).json(db.videos);
  //
  //
};

app.get('/videos/:id', getVideos);
// app.get(SETTINGS.PATH.VIDEOS, getVideosController)
// app.use(SETTINGS.PATH.VIDEOS, videosRouter)
