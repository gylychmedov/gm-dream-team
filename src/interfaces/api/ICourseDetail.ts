import { IDocument } from "./IDocument";
import { ILang } from "./ILang";
import { ILesson } from "./ILesson";

export interface ICourseDetail {
  id: number;
  title: ILang;
  description: ILang;
  image: string;
  lessons: ILesson[];
  documents: IDocument[];
}
