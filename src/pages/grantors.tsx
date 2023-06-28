import Layout from "@/components/Layout/Layout";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function ForGrantorsPage() {
  const [active, setActive] = useState<number[]>([]);
  const handleToggleActive = (id: number) =>
    active.includes(id)
      ? setActive(active.filter((prev) => prev != id))
      : setActive([...active, id]);

  const faqs = [
    {
      id: 1,
      question: "Question 1",
      answer:
        'Welcome to the "GM-dream team" grant agency! We are your dedicated partner in bridging the gap between grantor and grantee organizations. Our agency plays a vital role in educating potential grantee organizations about grant policies and requirements, ensuring a seamless and effective grant management process for both parties.',
    },
    {
      id: 2,
      question: "Question 2",
      answer:
        'At the "GM-dream team" grant agency, we understand the importance of establishing strong connections between grantor and grantee organizations. We serve as a reliable link, facilitating communication, understanding, and collaboration between these two crucial entities. Our goal is to ensure that grantor organizations find suitable and capable grantees who can effectively implement projects aligned with their mission and goals.      ',
    },
    {
      id: 3,
      question: "Question 3",
      answer:
        "One of the key services we offer to grantor organizations is the education and training of potential grantee organizations. We recognize that grant policies and requirements can sometimes be complex and overwhelming, particularly for organizations new to the grant-seeking process. Our agency is here to simplify and demystify these policies, guiding potential grantees through every step of the way.      ",
    },
    {
      id: 4,
      question: "Question 3",
      answer:
        "Our team of experienced professionals provides comprehensive training sessions and consultations for potential grantees. We familiarize them with the grant application process, help them understand the specific requirements of grantor organizations, and offer guidance on how to craft competitive grant proposals.      ",
    },
  ];
  return (
    <Layout title="Consultation">
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <header className="col-span-12 flex-center py-10  flex-center flex-col">
              <span className="text-gray-900 font-bold text-3xl mt-3">
                For Grantors
              </span>
            </header>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="pt-6 cursor-pointer"
                  onClick={() => handleToggleActive(faq.id)}
                >
                  <>
                    <dt>
                      <div className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {active.includes(faq.id) ? (
                            <AiOutlineMinus
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <AiOutlinePlus
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </div>
                    </dt>
                    <AnimatePresence>
                      {active.includes(faq.id) && (
                        <motion.div
                          initial={{ height: 0 }}
                          exit={{ height: 0 }}
                          animate={{ height: "auto" }}
                          className="mt-2 pr-12"
                        >
                          <p className="text-base leading-7 text-gray-600">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  );
}
