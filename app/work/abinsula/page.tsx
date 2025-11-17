import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AbinsulaPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20 max-w-7xl">
      <div className="text-center font-inter font-bold text-darkCharcoal text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 sm:mb-10 md:mb-12">
        Working on it - Abinsula Experience
      </div>
      {/* Goals and Results section */}
      <div className="flex flex-col gap-4 items-center">
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
              Working at Abinsula introduced me to professional development practices that I hadn't experienced 
              in personal projects or hackathons. I learned Git workflows including branching, merging, and 
              handling merge conflicts in a team environment. My supervisor taught me how to conduct code reviews 
              and provide constructive feedback, which became especially valuable when I later reviewed the new 
              intern's code. I also adapted to using task management systems to track progress and coordinate 
              with team members. These collaborative practices gave me a solid foundation for working on any 
              professional development team.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion className="w-full max-w-full md:max-w-2xl lg:max-w-3xl" type="single" collapsible>
          <AccordionItem className="w-full" value="item-1">
            <AccordionTrigger>Develop Leadership and Mentoring Skills</AccordionTrigger>
            <AccordionContent>
              During my first four months, my supervisor taught me proper code review practices and how to 
              evaluate code quality for Git merges. As I gained confidence in my technical abilities, my 
              mentor intentionally stepped back from the project to give me an opportunity to develop 
              supervisory skills. I took responsibility for mentoring a new intern who joined the team, 
              teaching them full-stack development concepts and guiding them through our project codebase. 
              The transition from being mentored to mentoring others helped me develop communication skills 
              for explaining technical concepts and gave me confidence in my ability to support other developers.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion className="w-full max-w-full md:max-w-2xl lg:max-w-3xl" type="single" collapsible>
          <AccordionItem className="w-full" value="item-1">
            <AccordionTrigger>Adapt to Living and Working in a New Culture</AccordionTrigger>
            <AccordionContent>
              Moving to Sardinia meant adapting to living independently in a foreign country while working 
              professionally. I learned basic Italian to navigate daily life and communicate with colleagues, 
              which helped me understand workplace conversations and build relationships with my team. Adapting 
              to Italian work culture taught me different approaches to communication and collaboration. I also 
              explored Sardinia and traveled around Italy during weekends, which deepened my appreciation for 
              different cultures and perspectives. Living and working abroad developed my independence and 
              showed me I can thrive in unfamiliar environments.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
