import { ILang } from "./ILang";

export interface ICourse {
  id: number;
  title: ILang;
  image: string;
  lesson_count: number;
}
