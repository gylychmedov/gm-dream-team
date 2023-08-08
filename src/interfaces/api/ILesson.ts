import { ILang } from "./ILang";

export interface ILesson {
  id: number;
  title: ILang;
  description: ILang;
  image: string;
  video: string | null;
  coures_title: ILang;
}
