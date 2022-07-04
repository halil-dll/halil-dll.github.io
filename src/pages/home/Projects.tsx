import { Flex } from "../../components/Flex"
import { Project } from "./Project"
import ProjectJSON from './Projects.json';
const projects = ProjectJSON.projects;

interface Props {
    animate: boolean;
}
export const Projects: React.FC<Props> = ({ animate }) => {
    return(
        <Flex className={`projects${animate ? ' animate' : ''}`} flexDirection={'column'} alignItems={'center'}>
            <Flex justifyContent={'space-between'} style={{width: '100%'}}>
                {projects.map((project, key) => {
                    const { title, description, image, link, github } = project;

                    return(
                        <Project 
                            title={title}
                            description={description}
                            image={image}
                            link={link}
                            animate={animate}
                            index={key}
                            reverted={key % 2 !== 0}
                            github={github}
                            key={key}
                        />
                    )
                })}
            </Flex>
            <div className={`special-project${animate ? ' animate' : ''}`}>
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
        </Flex>
    )
}