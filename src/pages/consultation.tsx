import Layout from "@/components/Layout/Layout";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

const ConsultationPage = () => {
  const { t } = useTranslation();
  return (
    <Layout title="Consultation" className="py-24 sm:py-32 relative isolate">
      <img
        src="https://images.unsplash.com/photo-1562564055-71e051d33c19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 h-full w-full object-cover bg-blue-850 bg-opacity-70"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">
            Grant Management Consultation
          </h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-white lg:max-w-none lg:grid-cols-2">
            <div>
              <p>Welcome to our Grant Management Consultation Services!</p>
              <p className="mt-8">
                At the GM-Dream Team we understand that managing grants can be a
                complex and challenging task. Whether you are a nonprofit
                organization, a research institution, or a private entity,
                securing and effectively managing grants is crucial for the
                success and sustainability of your projects.
              </p>
              <p>
                Our team of experienced professionals is here to support you
                every step of the way. We offer comprehensive grant management
                consultations tailored to meet your specific needs. With our
                expertise and in-depth understanding of the grant landscape, we
                can help you navigate the intricacies of grant funding and
                optimize your chances of securing and successfully managing
                grants.
              </p>
              <p className="mt-8">
                Here's how our consultation services can benefit you:
                <br />
                Grant Readiness Assessment: We begin by evaluating your
                organization's readiness to apply for grants. Our team will
                conduct a thorough analysis of your programs, financial systems,
                and overall capacity to effectively manage grants. We will
                identify any gaps or areas that need improvement and provide you
                with actionable recommendations to enhance your grant readiness.
              </p>

              <p className="mt-8">
                Grant Research and Identification: Finding the right grants that
                align with your organization's mission and goals can be
                time-consuming and overwhelming. Our experts will assist you in
                identifying relevant funding opportunities from various sources,
                including government agencies, foundations, and private
                organizations. We will ensure that you have a comprehensive list
                of potential grants to pursue.
              </p>
              <p className="mt-8">
                Grant Proposal Development: Writing a compelling grant proposal
                requires a deep understanding of the funder's requirements and
                the ability to clearly articulate your project's goals,
                objectives, and impact. Our team will work closely with you to
                develop persuasive grant proposals that highlight the
                significance of your work and effectively communicate your
                organization's strengths and capabilities.
              </p>
            </div>
            <div>
              <p className="mt-8">
                Budgeting and Financial Management: Managing grant finances is a
                critical aspect of grant administration. We will coach you on
                developing accurate and realistic budgets, ensuring that all
                expenses align with the grant guidelines and restrictions. Our
                financial management guidance will enable you to track expenses,
                manage cash flow, and comply with financial reporting
                requirements.
              </p>

              <p className="mt-8">
                Grant Compliance and Reporting: Grants often come with specific
                compliance regulations and reporting obligations. Our experts
                will guide you through the compliance process, ensuring that you
                meet all the necessary requirements. We will assist you in
                developing systems and procedures to track and report project
                progress, outcomes, and financial information, enabling you to
                maintain transparency and accountability.
              </p>

              <p className="mt-8">
                Grant Performance Evaluation: Assessing the impact of your
                funded projects is vital for ongoing success and future funding
                opportunities. Our team will help you design and implement
                robust evaluation frameworks to measure the effectiveness and
                impact of your programs. We will provide valuable insights and
                recommendations to enhance your project's outcomes and
                strengthen your grant management strategies.
              </p>

              <p className="mt-8">
                Partnering with us means gaining access to a wealth of knowledge
                and expertise in grant management. We are committed to your
                success and will work closely with you to ensure that your
                organization maximizes its grant funding potential and achieves
                its mission-driven objectives.
              </p>

              <p className="mt-8">
                Contact us today to schedule a consultation and take the first
                step toward effective grant management. Let us be your trusted
                partner in securing, managing, and maximizing grants for your
                organization's success.
              </p>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-pink-650 w-80 text-center py-4 text-sm font-semibold text-white shadow-sm hover:-translate-y-1 duration-500"
            >
              {t("navigation:contact")}
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ConsultationPage;
