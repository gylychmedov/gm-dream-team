import { ILang } from "./ILang";
import { ILesson } from "./ILesson";

export interface ICourseDetail {
  id: number;
  title: ILang;
  image: string;
  lessons: ILesson[];
}
