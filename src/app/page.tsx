import HeroSection from "@/components/Hero-Section";
import AboutMe from "@/components/AboutMe";
import ContactForm from "@/components/MessageMe";
import Contact from "@/components/Contact";
import Projects from "@/components/Project";
import SocialSidebar from "@/components/SideBar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
    <SocialSidebar/>
    <HeroSection/>
    <AboutMe/>
    <Skills/>
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-indigo-400">
      <Projects/>
    <ContactForm />
    </section>
    <Contact/>

    </>
  );
}
