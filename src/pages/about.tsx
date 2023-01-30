import { MainLayout } from 'layouts/MainLayout'

const About = () => {
  return (
    <MainLayout title="About" description="Some information about me (scroll down for my photography path)">
      <article className="max-w-none w-full prose prose-lg dark:prose-dark">
        <h2>Programming</h2>
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
            <h3>My Goals</h3>
            <p>
            I have a number of objectives for myself as a programmer, both as an individual and as a member of a team. My goal is to constantly hone my coding abilities and stay abreast of new developments in the field. I want to create effective and high-quality software solutions that cater to customers' and users' needs. I also try to work on interesting and varied projects that let me broaden my knowledge and skill set. I also want to help those who are learning to code and give back to the open-source community. I firmly believe in constantly challenging myself and extending my boundaries in order to advance both personally and professionally in the field of programming. As a team member, my objectives are to work well with others, impart my knowledge, and aid my group in achieving our shared objectives. In all of my team initiatives, I strive to establish and uphold the pleasant and inclusive work atmosphere that I value effective communication, teamwork, and mutual respect.
            </p>
        </div>
      </article>
      <article className="max-w-none w-full prose prose-lg dark:prose-dark">
        <h2>Photography</h2>
        <div>
          <h3>How I got into Photography</h3>
            <p>
            I became interested in photography because I was drawn to remembering moments in time and telling stories with pictures. I first began as a hobbyist, using a point-and-shoot camera to capture images of my friends and family. As I became more educated about photography and began experimenting with various methods, I came to appreciate the creative process and the capacity to capture moments in time. I invested a lot of money in a good camera and began taking photography more seriously. I also attended workshops and classes to improve my abilities. I began adopting the methods of well-known photographers and attempting new things on my own after being inspired by their work.
            </p>
        </div>
        <div>
            <h3>My Gear</h3>
            <p>
            Camera: Canon EOS 850D + EF-S 18-55 f/4-5,6 IS STM
            </p>
        </div>
        <div>
            <h3>My Goals</h3>
            <p>
            In order to improve as a photographer, I have several objectives: 
            </p>
            <ul>
                <li>I want to keep getting better at technical things like lighting, composition, and editing.</li>
                <li>Create an unique and recognizable style that will set me apart from other professionals in the field.</li>
                <li>Team up with other photographers and creatives to share ideas and skills.</li>
                <li>develop a solid portfolio that showcases my greatest work and draws in new customers.</li>
                <li>Provide customers with exceptional services that go above and beyond their expectations and their needs.</li>
                <li>Use the newest tools and technologies to improve my work, staying up to date with industry trends.</li>
                <li>Using my photographic skills to support good causes and non-profit organizations, I would like to give back to the community.</li>
                <li>Expand my skill set, explore into new areas of photography, and keep pushing myself to get better.</li>
            </ul>
            <p>
              ...and I have high hopes for my future as a programmer and photographer.
            </p>
        </div>
      </article>
      <article className="max-w-none w-full prose prose-lg dark:prose-dark">
        <h2>Personal</h2>
        <div>
            <h3>My Hobbies</h3>
            <p>
            I'm a big fan of video games, I actively play VALORANT and other games. I also enjoy watching movies and shows. Once I get invested in a show or book, I <em>won't</em> stop watching it until I finish it.
            I honestly don't have much time for hobbies or other freetime things, but I enjoy playing basketball or jogging when I have the time.
            </p>
        </div>
      </article>
    </MainLayout>
  )
}

export default About
