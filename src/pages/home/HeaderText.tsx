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
                parts={['こんにちは,', `私はコナーです`, 'バックエンド開発者']}
                wordBreak={1}
                bold={true}
            />
            <Flex>
                <Fade delay={1700}>
                    <Button onClick={explore}>
                    私の旅をたどる
                    </Button>
                </Fade>
            </Flex>
        </div>
    )
}