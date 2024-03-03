import { Request, Response } from 'express';
// import { OutputErrorsType } from '../input-output-types/output-errors-type';
import { db } from '../db/db';

export type OutputErrorsType = {
  errorsMessages: Array<{ message: string; field: string }>;
};

const Resolutions = {
  P144: 'P144',
  P240: 'P240',
  P360: 'P360',
  P480: 'P480',
  P720: 'P720',
  P1080: 'P1080',
  P1440: 'P1440',
  P2160: 'P2160',
};

export type VideoResolutionsType =
  | 'P144'
  | 'P240'
  | 'P360'
  | 'P480'
  | 'P720'
  | 'P1080'
  | 'P1440'
  | 'P2160';

export type UpdateVideoDBType = {
  title: string;
  author: string;
  availableResolutions: Array<VideoResolutionsType>;
  canBeDownloaded: true;
  minAgeRestriction: 18;
  publicationDate: string;
};

export type InputVideoType = {
  title: string;
  author: string;
  availableResolutions: Array<VideoResolutionsType>;
};

export type OutputVideoType = {
  id: number;
  title: string;
  author: string;
  canBeDownloaded: boolean;
  minAgeRestriction: null;
  createdAt: string;
  publicationDate: string;
  availableResolutions: Array<VideoResolutionsType>;
};

const inputValidation = (video: InputVideoType) => {
  const errors: OutputErrorsType = {
    errorsMessages: [],
  };
  const resolutions = ['P144', 'P240', 'P360', 'P480', 'P720', 'P1080', 'P1440', 'P2160'];
  if (
    !Array.isArray(video.availableResolutions) ||
    video.availableResolutions.find(p => !Resolutions[p])
  ) {
    errors.errorsMessages.push({
      message: 'error!!!!',
      field: 'availableResolution',
    });
  }
  return errors;
};

// export const updateVideoController = (
//   req: Request<any, any, InputVideoType>,
//   res: Response<OutputVideoType | OutputErrorsType>
// ) => {
//   const errors = inputValidation(req.body);
//   if (errors.errorsMessages.length) {
//     res.status(400).json(errors);
//     return;
//   }

//   const newVideo: UpdateVideoDBType = {
//     ...req.body,
//     id: Date.now() + Math.random(),
//     title: req.body.title,
//     author: req.body.author,
//     canBeDownloaded: true,
//     createdAt: new Date().toISOString(),
//     publicationDate: new Date().toISOString(),
//     availableResolutions: [...req.body.availableResolutions],
//   };

//   db.videos = [...db.videos, newVideo];

//   res.status(201).json(newVideo);
// };
