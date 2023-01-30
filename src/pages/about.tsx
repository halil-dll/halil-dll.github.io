import { MainLayout } from 'layouts/MainLayout'

const About = () => {
  return (
    <MainLayout title="About" description="Some information about me">
      <article className="max-w-none w-full prose prose-lg dark:prose-dark">
        <div>
          <h3>How I got into Programming</h3>
            <p>
            I got into programming because I was always fascinated by how technology works and how I could utilize it to solve problems. I began by learning how to build simple websites before advancing gradually to more advanced programming ideas. I initially learned by myself using learning tools like Codecademy, StackOverflow and Udemy. I made the decision to pursue coding as a career after seeing how much I loved the problem-solving part of it as I learned more and built more projects. I continuously develop my abilities and discover new technologies.
            </p>
        </div>
        <div>
            <h3>My Stack</h3>
            <p>
            I am (trying to be) a full-stack developer with a focus on the back-end. I have experience with the following technologies:
            </p>
            <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>GraphQL</li>
                <li>PostgreSQL</li>
                <li>Git</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>SCSS</li>
                <li>Bootstrap</li>
                <li>Material UI</li>
                <li>Styled Components</li>
                <li>React Testing Library</li>
            </ul>
        </div>
        <div>
            <h3>My Hobbies</h3>
            <p>
            I'm a big fan of video games, I actively play VALORANT and other games. I also enjoy watching movies and shows. Once I get invested in a show or book, I <em>won't</em> stop watching it until I finish it.
            I honestly don't have much time for hobbies or other freetime things, but I enjoy playing basketball or jogging when I have the time.
            </p>
        </div>
        <div>
            <h3>My Goals</h3>
            <p>
            I have a number of objectives for myself as a programmer, both as an individual and as a member of a team. My goal is to constantly hone my coding abilities and stay abreast of new developments in the field. I want to create effective and high-quality software solutions that cater to customers' and users' needs. I also try to work on interesting and varied projects that let me broaden my knowledge and skill set. I also want to help those who are learning to code and give back to the open-source community. I firmly believe in constantly challenging myself and extending my boundaries in order to advance both personally and professionally in the field of programming. As a team member, my objectives are to work well with others, impart my knowledge, and aid my group in achieving our shared objectives. In all of my team initiatives, I strive to establish and uphold the pleasant and inclusive work atmosphere that I value effective communication, teamwork, and mutual respect.
            </p>
        </div>
      </article>
    </MainLayout>
  )
}

export default About
