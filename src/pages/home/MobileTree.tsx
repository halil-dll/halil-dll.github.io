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
                    title={'Titanfall 2 - Northstar'}
                    description={'Titanfall 2 is back with custom, community-made servers! Host your own or join one of many existing servers. Jump into the heavily modified action of being a pilot again.'}
                    image={'https://i.ytimg.com/vi/en06Y6CPMQg/maxresdefault.jpg'}
                    link={'https://northstar.tf'}
                    animate={true}
                    github={'https://github.com/R2Northstar'}
                    index={projects.length}
                    reverted={false}
                />
            </div>
        </div>
    )
}