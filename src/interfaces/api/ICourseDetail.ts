import { ILang } from "./ILang";

export interface ICourseDetail {
  id: number;
  title: ILang;
  image: string;
  lessons: [];
}
