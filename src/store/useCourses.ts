import { ICourse } from "@/interfaces/api/ICourse";
import { ICorusesStore } from "@/interfaces/store/ICorusesStore";
import { create } from "zustand";

const useCoursesStore = create<ICorusesStore>((set) => ({
  courses: [] as ICourse[],
  setCourses: (courses) =>
    set({
      courses,
    }),
}));

export default useCoursesStore;
