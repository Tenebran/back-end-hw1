import express, { Request, Response } from 'express';
import { db, setDB } from './db/db';
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
  res.status(200).json(db.videos.find(v => v.id === +req.params.id));
};

export const getVideos = (
  req: Request<ParamsType, any, ReqBodyType, QueryType>,
  res: Response<ResponseBodyType>
) => {
  res.status(200).json(db.videos);
};

export const updateVideoController = (
  req: Request<ParamsType, any, ReqBodyType, QueryType>,
  res: Response<ResponseBodyType>
) => {
  res.status(200).json(db.videos.find(v => v.id === +req.params.id));
};

export const deleteVideoController = (
  req: Request<ParamsType, any, ReqBodyType, QueryType>,
  res: Response<ResponseBodyType>
) => {
  const video = db.videos.find(v => v.id === +req.params.id);

  if (!video) {
    res.status(404);
    return;
  }
  db.videos = db.videos.filter(v => v.id === +req.params.id);

  res.status(204).json();
};

app.get('/videos', getVideos);
app.get('/videos/:id', getVideo);
app.post('/videos', createVideoController);
app.put('/videos/:id', createVideoController);
app.delete('/videos/:id', deleteVideoController);
// app.delete('/:id', updateVideoController);
// app.get(SETTINGS.PATH.VIDEOS, getVideosController)
// app.use(SETTINGS.PATH.VIDEOS, videosRouter)
