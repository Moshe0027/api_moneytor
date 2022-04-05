import { Request, Response } from "express";
import {
  CreateWordInput,
  ReadWordInput,
} from "../schema/lang.schema";
import {
  createWord,
  findOneWord,
} from "../service/lang.service";

export const createWordHandler = async (
  req: Request<{}, {}, CreateWordInput["body"]>,
  res: Response
) => {
  const body = req.body;
  const EN = 'en';
  let word_en = null;
  const err = { message: 'The word does not exist in English please add it then you can add a word in another language' }
  if (body.lang !== EN) {
    word_en = await findOneWord({ word_code: body.word_code, lang: EN });
    if (!word_en) {
     return res.send(err);
    }
  }
  const word = await findOneWord({ word_code: body.word_code, lang: body.lang });
  if (word) {
    return res.send(word);
  } else {
    const result = await createWord({ ...body });
    return res.send(result);
  }
};

export const getWordHandler = async (
  req: Request<ReadWordInput["params"]>,
  res: Response
) => {

  const word_code = req.query.word_code;
  const lang = req.query.lang;
  const word = await findOneWord({ word_code: word_code, lang: lang });
  if (!word) {
    return res.sendStatus(404);
  }
  return res.send(word);
};