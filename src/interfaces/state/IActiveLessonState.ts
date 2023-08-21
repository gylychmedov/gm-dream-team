import { IDocument } from "../api/IDocument";
import { ILesson } from "../api/ILesson";

export interface IActiveLessonState {
  lesson: ILesson;
  document: IDocument[];
}
