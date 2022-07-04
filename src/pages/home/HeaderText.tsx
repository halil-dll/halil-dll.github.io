import { AnimatedParts } from "../../components/AnimatedParts"
import { Button } from "../../components/Button"
import { Fade } from "../../components/Fade"
import { Flex } from "../../components/Flex"

export const HeaderText = () => {
    const explore = () => {
        window.scrollTo({top: 600, behavior: 'smooth'})
    }

    return(
        <div className="header-text">
            <AnimatedParts 
                parts={['Hallo,', `mein Name ist Halil`, 'Ich bin ein Web-Entwickler.']}
                wordBreak={1}
                bold={true}
            />
            <Flex>
                <Fade delay={1700}>
                    <Button onClick={explore}>
                    Sieh dir meine Story an
                    </Button>
                </Fade>
            </Flex>
        </div>
    )
}