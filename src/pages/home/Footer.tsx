import { useEffect, useRef, useState } from "react";
import { Button } from "../../components/Button";
import { Flex } from "../../components/Flex";

export const Footer = () => {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            const { top, height } = ref.current.getBoundingClientRect();
            if (top - 450 < height) {
                setVisible(true);
                document.removeEventListener('scroll', handleScroll);
            }
        }
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Flex className={`footer${visible ? ' visible' : ''}`} ref={ref} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
            <span className="footer-overlay" />
            {visible && (
                <>
                    <a href="mailto:halil@cstudios.gay" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <Button rounded={true}>
                        E-Mail
                        </Button>
                    </a>
                    <a href="https://twitter.com/intent/tweet?text=Ich%20schaue%20gerade%20halil-ismail.me%20an,%20die%20Seite%20sieht%20einfach%20geil%20aus" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <Button rounded={true}>
                        Tweet
                        </Button>
                    </a>
                    <a href="https://zerotwo.gay/server" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <Button rounded={true}>
                        Discordサーバー
                        </Button>
                    </a>
                </>
            )}
        </Flex>
    )
}