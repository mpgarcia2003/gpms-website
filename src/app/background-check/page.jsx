import BackgroundCheckForm from "./BackgroundCheckForm";

export const metadata = {
  title: "Onboarding Packet | GreenPoint Maintenance Services",
  description: "Secure submission of your completed pre-employment eligibility packet.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export default function Page() {
  return <BackgroundCheckForm />;
}
