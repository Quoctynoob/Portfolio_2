'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from 'next/image';
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import { CartoonButton } from "@/components/ui/cartoon-button";

export default function AbinsulaPage() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [activeProject, setActiveProject] = useState('ss');


  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = ['introduction', 'company', 'role', 'goals', 'conclusion', 'thanks', 'reel'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20 max-w-7xl">
      {/* Hero Section */}
      <div className="mb-16 pb-8 border-b border-darkCharcoal/20">
        <div className="space-y-0.5 mb-6 text-darkCharcoal">
          <p className="text-lg md:text-xl font-semibold">Software Developer Internship in Sardinia, Italy</p>
          <p className="text-lg md:text-xl">July 2025 - December 2025</p>
          {/* <p className="text-base md:text-lg">1982 views</p> */}
        </div>
        <Link href="https://www.abinsula.com/" target="_blank" className="inline-block hover:opacity-80 transition-opacity">
          <Image
            src="/image/abinsula_logo_1.png"
            alt="Abinsula Logo"
            width={800}
            height={300}
            priority
            className="object-contain"
          />
        </Link>
      </div>

      {/* Content with Sticky Sidebar */}
      <div className="flex gap-8 mt-8">
        {/* Sticky Sidebar Navigation */}
        <aside className="hidden lg:block w-48 shrink-0">
          <nav className="sticky top-8 space-y-2">
            <a
              href="#introduction"
              className={`block text-sm transition-colors ${
                activeSection === 'introduction'
                  ? 'text-darkCharcoal font-semibold border-l-2 border-darkCharcoal pl-3'
                  : 'text-darkCharcoal/60 hover:text-darkSubtle pl-3'
              }`}
            >
              Introduction
            </a>
            <a
              href="#company"
              className={`block text-sm transition-colors ${
                activeSection === 'company'
                  ? 'text-darkCharcoal font-semibold border-l-2 border-darkCharcoal pl-3'
                  : 'text-darkCharcoal/60 hover:text-darkSubtle pl-3'
              }`}
            >
              Company
            </a>
            <a
              href="#role"
              className={`block text-sm transition-colors ${
                activeSection === 'role'
                  ? 'text-darkCharcoal font-semibold border-l-2 border-darkCharcoal pl-3'
                  : 'text-darkCharcoal/60 hover:text-darkSubtle pl-3'
              }`}
            >
              Role
            </a>
            <a
              href="#goals"
              className={`block text-sm transition-colors ${
                activeSection === 'goals'
                  ? 'text-darkCharcoal font-semibold border-l-2 border-darkCharcoal pl-3'
                  : 'text-darkCharcoal/60 hover:text-darkSubtle pl-3'
              }`}
            >
              Goals
            </a>
            <a
              href="#conclusion"
              className={`block text-sm transition-colors ${
                activeSection === 'conclusion'
                  ? 'text-darkCharcoal font-semibold border-l-2 border-darkCharcoal pl-3'
                  : 'text-darkCharcoal/60 hover:text-darkSubtle pl-3'
              }`}
            >
              Conclusion
            </a>
            <a
              href="#thanks"
              className={`block text-sm transition-colors ${
                activeSection === 'thanks'
                  ? 'text-darkCharcoal font-semibold border-l-2 border-darkCharcoal pl-3'
                  : 'text-darkCharcoal/60 hover:text-darkSubtle pl-3'
              }`}
            >
              Thanks
            </a>
            <a
              href="#reel"
              className={`block text-sm transition-colors ${
                activeSection === 'reel'
                  ? 'text-darkCharcoal font-semibold border-l-2 border-darkCharcoal pl-3'
                  : 'text-darkCharcoal/60 hover:text-darkSubtle pl-3'
              }`}
            >
              Behind the Scenes
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Introduction Section */}
          <section id="introduction" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-darkCharcoal mb-8">Introduction</h2>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1">
                <p className="text-base md:text-md leading-relaxed">
                  I completed my first software developer internship at Abinsula in Sardinia, Italy from July to December
                  2025. Working as a Full-Stack Developer, I built a web application for a local club and contributed to
                  an IoT water tank project. This role expanded my skills beyond web development into embedded systems and
                  gave me valuable experience working abroad.
                </p>
              </div>
              <div className="w-full md:w-80 flex-shrink-0">
                <div className="border-2 border-darkCharcoal rounded-lg bg-project-bg p-4">
                  <div className="relative h-64 w-full overflow-hidden rounded-lg">
                    <Image
                      src="/image/abinsula_me.jpg"
                      alt="Abinsula & Me"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About the Company Section */}
          <section id="company" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-darkCharcoal mb-8">Company</h2>
            <div>
              <p className="text-base md:text-md leading-relaxed mb-8">
                Abinsula is a tech company from Sardinia, Italy. Their name literally means "from the island"
                (ab insula), reflecting their identity as a company putting Sardinian technology on
                the global map. Founded in 2012, they specialize in embedded, IoT, web and mobile
                solutions, with over 100 employees building custom software and hardware for clients
                worldwide while representing Sardinian innovation. You can read more about Abinsula <span> </span>
                <Link href="https://www.linkedin.com/company/abinsula/" className="underline hover:text-darkSubtle">here</Link>.
              </p>
            </div>
            {/* Profile Image Carousel */}
            <div className="mt-8">
              <div className="w-full border-2 border-darkCharcoal rounded-xl p-4">
                <Carousel className="w-full">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="relative h-80 w-full overflow-hidden rounded-xl">
                        <Image src="/image/abinsula_office_1.jpg" alt="Quoc Le" fill className="object-cover object-center" priority />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="relative h-80 w-full overflow-hidden rounded-xl">
                        <Image src="/image/abinsula_office_2.jpg" alt="Quoc Le" fill className="object-cover object-center" priority />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="relative h-80 w-full overflow-hidden rounded-xl">
                        <Image src="/image/abinsula_office_3.jpg" alt="Quoc Le" fill className="object-cover object-center" priority />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="-left-16" />
                  <CarouselNext className="-right-16" />
                </Carousel>
              </div>
              <div className="mt-3 text-sm text-darkCharcoal/60 italic text-left">Abinsula's main office in Sassari, Sardinia</div>
            </div>
          </section>

          {/* Role/Jobs Description Section */}
          <section id="role" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-darkCharcoal mb-8">Roles Description</h2>

            <p className="mb-5 text-md">
              As a Full-Stack Developer, I focused on web application development while also getting the chance to 
              work on an embedded systems project. This allowed me to expand my skills beyond web development and 
              learn how software and hardware work together. My work centered around two main projects.
            </p>

            {/* Project Tabs */}
            <div className="flex gap-4 mb-8">
              <CartoonButton
                label="SimpleShop"
                onClick={() => setActiveProject('ss')}
                size="sm"
                bgColor="bg-main"
              />
              <CartoonButton
                label="Water Pump Controller"
                onClick={() => setActiveProject('wpc')}
                size="sm"
                bgColor="bg-main"
              />
            </div>

            {/* Project 1 Content */}
            {activeProject === 'ss' && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-bold text-darkCharcoal">SimpleShop</h3>
                    <p className="text-base md:text-md leading-relaxed">
                      I worked on developing "SimpleShop," a full-stack web application to sell merchandise 
                      online. The platform allows customers to browse products, manage orders, and complete 
                      secure payments.
                    </p>
                    <h3 className="font-semibold text-darkCharcoal">My contributions:</h3>
                    <ul className="list-disc list-inside text-base md:text-md leading-relaxed space-y-2">
                      <li>
                        Designed and implemented database schema and ORM operations using Prisma
                      </li>
                      <li>
                        Built data validation layer using Zod to ensure data integrity
                      </li>
                      <li>
                        Created and managed database seeding scripts for initial data population
                      </li>
                      <li>
                        Developed full-stack checkout functionality integrating Stripe payment API,
                        including front-end UI design and back-end API endpoints
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-80 flex-shrink-0 border-2 border-darkCharcoal rounded-lg bg-project-bg p-4">
                    <Image src="/image/simpleshop.png" alt="SimpleShop" width={320} height={240} className="rounded-lg" />
                  </div>
                </div>
              </div>
            )}

            {/* Project 2 Content */}
            {activeProject === 'wpc' && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-bold text-darkCharcoal">Water Pump Controller</h3>
                    <p className="text-base md:text-md leading-relaxed">
                      I contributed to building an automated water pump controller, using three ESP32 
                      microcontrollers to manage pump operations, monitor water flow and tank levels, 
                      and enable remote control via mobile app and Telegram bot.
                    </p>
                    <h3 className="font-semibold text-darkCharcoal">My contributions:</h3>
                    <ul className="list-disc list-inside text-base md:text-md leading-relaxed space-y-2">
                      <li>
                        Programmed Tank Monitor ESP32 using Arduino framework to read 5 water level sensors 
                        (XKC-Y25) and control motorized valve for water distribution
                      </li>
                      <li>
                        Developed HTTP server on Master ESP32 to provide REST API endpoints, enabling Android 
                        app to remotely control pump and monitor system status

                      </li>
                      <li>
                        Performed hardware-software integration testing across all ESP32 controllers, debugging 
                        communication protocols (ESP-NOW, TCP) and ensuring fail-safe operation
                      </li>
                      <li>
                        Built Android application with real-time UI for displaying multi-sensor tank levels and 
                        controlling pump/valve operations through REST API integration
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-80 flex-shrink-0 border-2 border-darkCharcoal rounded-lg bg-project-bg p-4">
                    <Image src="/image/water_pump.png" alt="Water Pump Controller" width={320} height={240} className="rounded-lg" />
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Goals and Results Section */}
          <section id="goals" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-darkCharcoal mb-8">Goals</h2>
            <div className="flex flex-col gap-4">
              <Accordion className="w-full max-w-full md:max-w-2xl lg:max-w-3xl" type="single" collapsible>
                <AccordionItem className="w-full" value="item-1">
                  <AccordionTrigger>Strengthen Full-Stack Development Skills</AccordionTrigger>
                  <AccordionContent>
                    Through building a complete web application, I significantly improved my front-end design
                    abilities while gaining hands-on experience with ORM queries and database operations. Working
                    alongside my mentor and another intern taught me to balance both sides of development while
                    maintaining code quality. I developed a deeper understanding of full-stack development approach
                    beyond just specific technologies.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion className="w-full max-w-full md:max-w-2xl lg:max-w-3xl" type="single" collapsible>
                <AccordionItem className="w-full" value="item-1">
                  <AccordionTrigger>Gain experience in Embedded Systems and Hardware Testing</AccordionTrigger>
                  <AccordionContent>
                    Through the water tank monitoring project, I learned Arduino programming and worked with ESP32
                    microcontrollers under the guidance of my colleague. I conducted extensive hardware testing to
                    ensure product reliability and learned debugging techniques specific to embedded systems. This
                    experience expanded my understanding beyond pure software development and showed me how software
                    and hardware integrate in real-world IoT products.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion className="w-full max-w-full md:max-w-2xl lg:max-w-3xl" type="single" collapsible>
                <AccordionItem className="w-full" value="item-1">
                  <AccordionTrigger>Master Professional Development Workflows</AccordionTrigger>
                  <AccordionContent>
                    Working at Abinsula taught me to professional development practices that I hadn't experienced
                    in personal projects or hackathons. I learned Git workflows including branching, merging, and
                    handling merge conflicts in a team environment. My supervisor taught me how to conduct code reviews
                    and provide constructive feedback, which became especially valuable when I later reviewed the new
                    intern's code. I also adapted to using ticketing systems to track progress and coordinate
                    with team members. These collaborative practices prepared me for working on professional 
                    development teams.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion className="w-full max-w-full md:max-w-2xl lg:max-w-3xl" type="single" collapsible>
                <AccordionItem className="w-full" value="item-1">
                  <AccordionTrigger>Develop Leadership and Mentoring Skills</AccordionTrigger>
                  <AccordionContent>
                    During my first four months, my supervisor taught me proper code review practices and how to
                    evaluate code quality for Git merges. As I gained confidence in my technical abilities, my
                    mentor stepped back to let me develop supervisory skills. I took on mentoring 
                    a new intern who joined the team, teaching them full-stack development concepts and guiding 
                    them through our project codebase.
                    Going from being mentored to mentoring someone else helped me develop communication skills
                    for explaining technical concepts and gave me confidence in my ability to support other developers.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion className="w-full max-w-full md:max-w-2xl lg:max-w-3xl" type="single" collapsible>
                <AccordionItem className="w-full" value="item-1">
                  <AccordionTrigger>Adapt to Living and Working in a New Culture</AccordionTrigger>
                  <AccordionContent>
                    Living in Sardinia meant adapting to living independently in a foreign country while working
                    professionally. I learned basic Italian to navigate daily life and communicate with colleagues,
                    helping me understand workplace conversations and connect with my team. Adapting
                    to Italian work culture taught me different approaches to communication and collaboration. I also
                    explored Sardinia and traveled around Italy during weekends, which deepened my appreciation for
                    different cultures and perspectives. This experience developed my independence and confidence in 
                    handling unfamiliar environments.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          {/* Conclusion Section */}
          <section id="conclusion" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-darkCharcoal mb-8">Conclusion</h2>
            <div>
              <p className="text-base md:text-md leading-relaxed">
                During my internship search, I never imagined I'd spend the next six months living in Sardinia, Italy,
                an experience that transformed me both professionally and personally.
                <br></br><br></br>
                This internship strengthened my full-stack development skills and introduced me to embedded systems.
                I was able to apply what I learned from hackathons and personal projects in a professional setting.
                I grew from being mentored during my first months to mentoring a new intern by the end, showing how much
                I developed in just half a year. I also learned professional development practices like Git workflows,
                code reviews, and team collaboration.
                <br></br><br></br>
                What made this experience unique was combining technical growth with living abroad. I adapted to a new
                language, culture, and work environment while building my development skills. I gained both technical
                abilities and life skills like independence, adaptability, and cross-cultural communication.
                <br></br><br></br>
                This experience has left me confident in my abilities as a developer and ready to bring both my
                technical skills and adaptability to future opportunities. I'm grateful for every challenge and experience
                along the way.
              </p>
            </div>
          </section>

          {/* Thanks Section */}
          <section id="thanks" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-darkCharcoal mb-8">Thanks</h2>
            <div>
              <p className="text-base md:text-md leading-relaxed">
                {/* Opening */}
                A special thank you to Gianfranco, my supervisor, and Federica from HR, for reaching out and giving me this 
                unique opportunity in Italy. Their support made this entire experience possible.
                <br></br><br></br>
                {/* Thanking mentor */}
                I want to thank Carlo Meloni, my mentor, for his guidance during my internship. He taught me the company's 
                development workflow, from using version control and handling pull requests to working with ticketing 
                systems and communicating through Google Chat. His web development especially expertise was incredible, 
                and he was always willing to help me learn. What I valued most was his teaching style: he didn't just 
                give me answers but encouraged me to figure things out myself first. His patience made me a better and 
                more confident developer.
                <br></br><br></br>
                {/* Thanking embedded */}
                I'm also grateful to Manolo and Davide Gianni for teaching me about hardware and IoT/embedded systems. 
                They were always willing to answer my questions about Arduino, ESP32, and how software communicates with 
                hardware. Beyond the technical knowledge, they showed me what they were working on and talked about their 
                projects, giving me insight into other areas of the company beyond web development. Their patience and 
                openness helped me develop a real interest in embedded systems.
                <br></br><br></br>
                {/* Ending */}
                Finally, I'm grateful to all my colleagues who made my experience in Sardinia unforgettable. They 
                welcomed me not just as a coworker but as a friend, spending time with me outside of work and showing 
                me life on the island. Their friendship and warmth made me feel at home despite being far from Canada. 
                They made this internship more than just a work term; it became a personal adventure I'll always cherish.
              </p>
              <div className="w-full mt-8">
                <Carousel className="md:w-2/3 border-2 border-darkCharcoal rounded-xl p-4">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="relative h-80 w-full overflow-hidden rounded-xl">
                        <Image src="/image/bowling_everyone.jpg" alt="Quoc Le" fill className="object-cover object-center" priority />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="relative h-80 w-full overflow-hidden rounded-xl">
                        <Image src="/image/beach_everyone.jpg" alt="Quoc Le" fill className="object-cover object-center" priority />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="-left-12" />
                  <CarouselNext className="-right-12" />
                </Carousel>
              </div>
            </div>
          </section>

          {/* Reel Section */}
          <section id="reel" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-darkCharcoal mb-8">Behind the Scenes</h2>
            {/* Instagram Reel Link */}
            <div>
              <Link
                href="https://www.instagram.com/p/DRDjC9oAoTu/"
                target="_blank"
                className="group inline-block"
              >
                <div className="relative w-[200px] sm:w-[250px] h-[356px] sm:h-[444px] rounded-lg border-2 border-darkCharcoal bg-project-bg overflow-hidden cursor-pointer p-4">
                  <div className="relative w-full h-full flex items-center justify-center p-4">
                    <Image
                      src="/image/SD_reel.jpg"
                      alt="Behind the Scenes"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/*<section>
            
            <h2 className="text-3xl md:text-4xl font-bold text-darkCharcoal mb-8">Extras</h2>

          </section>*/}
        </div>
      </div>
    </div>
  );
}
