import express, { Request, Response } from 'express';

export const app = express();
// app.use(express.json());

export const getVideos = (req: Request, res: Response) => {
  res.status(200).json({ videos: [{ title: 'super video' }] });
  //
  //
};

app.get('/videos', getVideos);
// app.get(SETTINGS.PATH.VIDEOS, getVideosController)
// app.use(SETTINGS.PATH.VIDEOS, videosRouter)
