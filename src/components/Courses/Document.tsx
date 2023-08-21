import { useState } from "react";
import { ELocale } from "@/interfaces/core/ELang";
import { IDocumentProps } from "@/interfaces/props/IDocumentProps";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { HiDocumentText } from "react-icons/hi2";

const Document = ({ document, locale }: IDocumentProps) => {
  const [isOpen, setIsOpen] = useState<number[]>([]);

  const handleOpen = (id: number) =>
    setIsOpen(
      isOpen.includes(id)
        ? [...isOpen.filter((el) => el != id)]
        : [...isOpen, id]
    );

  return (
    <>
      {document && document.length > 0 && (
        <div className="my-4 px-2 flex flex-col space-y-3">
          {document.map((el) => (
            <div
              key={el.id}
              className="bg-blue-50 relative overflow-hidden flex p-2 rounded-xl"
            >
              <div className="absolute top-1 -left-3 bg-pink-650 text-white font-lato-bold text-xs px-4 -rotate-45">
                {el.locale}
              </div>
              <div className="p-4 rounded-lg text-blue-600">
                <HiDocumentText size={34} />
              </div>
              <div className="flex-x justify-between w-full">
                <div
                  onClick={() => handleOpen(el.id)}
                  className="flex flex-col cursor-pointer"
                >
                  <span className="text-blue-600 font-lato-bold">
                    {el.title[locale as ELocale]}
                  </span>
                  <div className="w-40 mt-1 sm:w-96 flex text-blue-500 overflow-hidden">
                    <div
                      className={`${
                        !isOpen.includes(el.id) && "h-5 truncate"
                      } w-full opacity-80`}
                      dangerouslySetInnerHTML={{
                        __html: el.description[locale as ELocale],
                      }}
                    />
                    {!isOpen.includes(el.id) && "..."}
                  </div>
                </div>

                <Link
                  href={el.document}
                  className="w-10 h-10 duration-300 text-blue-600 hover:bg-white flex-center rounded-lg"
                >
                  <FiDownload size={24} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Document;
