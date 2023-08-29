import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { GrLanguage } from "react-icons/gr";
import { BiSolidChevronRight } from "react-icons/bi";

const LanguageSwitcher = () => {
  const { asPath, locale } = useRouter();
  const [langModal, setLangModal] = useState(false);

  return (
    <div className="relative">
      <div
        className="px-3 py-2 flex-x hover:bg-gray-50"
        onClick={() => setLangModal(!langModal)}
      >
        <GrLanguage />
        <span>{locale?.toUpperCase()}</span>
      </div>

      {langModal && (
        <div className="absolute border top-10 right-0 w-20 bg-white rounded-lg overflow-hidden flex flex-col">
          <Link
            href={asPath}
            className="px-3 py-2 flex-x hover:bg-gray-50 "
            locale="ru"
            onClick={() => setLangModal(false)}
          >
            <BiSolidChevronRight className="text-pink-650" />
            <span>RU</span>
          </Link>
          <Link
            href={asPath}
            className="px-3 py-2 flex-x hover:bg-gray-50 "
            locale="en"
            onClick={() => setLangModal(false)}
          >
            <BiSolidChevronRight className="text-pink-650" />
            <span>EN</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
