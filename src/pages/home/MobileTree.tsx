import { MobileBranch } from './MobileBranch';
import TimelineJSON from './Timeline.json';
import ProjectJSON from './Projects.json';
import { Project } from './Project';
const timeline = TimelineJSON.years;
const projects = ProjectJSON.projects;

export const MobileTree = () => {
    return(
        <div className="mobile-tree">
            {timeline.map((time, key) => {
                const { date, title, description, year } = time;
                return(
                    <MobileBranch 
                        date={date}
                        description={description}
                        title={title}
                        year={year}
                        key={key}
                    />
                )
            })}
            {projects.map((project, key) => {
                const { title, description, image, link, github } = project;
                return(
                    <Project 
                        animate={true}
                        description={description}
                        image={image}
                        link={link}
                        title={title}
                        github={github}
                        index={key}
                        key={key}
                    />
                )   
            })}
            <div className={`special-project animate`}>
                <Project 
                    title={'plane.js'}
                    description={'Make yourself a plane to play around with! (Highly WIP)'}
                    image={'https://cdn.zerotwo.wtf/plane.js.png'}
                    link={'https://npmjs.org/package/@zerotwobot/plane.js'}
                    animate={true}
                    github={'https://github.com/ConnorDoesDev/plane.js'}
                    index={projects.length}
                    reverted={false}
                />
            </div>
        </div>
    )
}