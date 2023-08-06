import { ICourse } from "../api/ICourse";

export interface ICorusesStore {
  courses: ICourse[];
  setCourses: (courses: ICourse[]) => void;
}
