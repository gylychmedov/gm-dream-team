import { ILesson } from "@/interfaces/api/ILesson";
import { ELocale } from "@/interfaces/core/ELang";
import { useRouter } from "next/router";

const Lesson = ({
  lesson,
  active,
  onClick,
}: {
  lesson: ILesson;
  active: boolean;
  onClick: (lesson: ILesson) => void;
}) => {
  const { locale } = useRouter();
  return (
    <div
      onClick={() => onClick(lesson)}
      className={`${
        active ? "bg-blue-850 text-white" : "bg-white"
      } group relative hover:bg-blue-850 hover:text-white duration-500 cursor-pointer border rounded-xl p-2 border-gray-100 flex items-center shadow-xl shadow-gray-100`}
    >
      <div className="overflow-hidden w-24 shrink-0 rounded-lg bg-gray-100">
        <img
          src={lesson.image}
          alt={lesson.image}
          className="object-cover w-24 h-24 border rounded-xl"
        />
      </div>

      <div className="flex flex-col">
        <h3 className="font-lato-bold px-2 text-base">
          {lesson.title[locale as ELocale]}
        </h3>

        <div
          className={`${
            active ? "text-white" : "text-gray-400"
          } text-sm group-hover:text-white rounded-md px-2 py-1 line-clamp-1`}
        >
          - {lesson.description[locale as ELocale]}
        </div>
      </div>
    </div>
  );
};

export default Lesson;
