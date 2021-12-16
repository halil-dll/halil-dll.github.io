import { useEffect, useRef, useState } from "react";
import { AnimatedText } from "../../components/AnimatedText"
import { Button } from "../../components/Button";
import { Fade } from "../../components/Fade";
import { Flex } from "../../components/Flex";
import { WaitFor } from "../../components/WaitFor";

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
                    <a href="mailto:connor@zerotwo.wtf" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <Button rounded={true}>
                        Eメール
                        </Button>
                    </a>
                    <a href="https://twitter.com/intent/tweet?text=https://connor.is-a.dev%20is%20pretty%20cool!" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <Button rounded={true}>
                        シェア
                        </Button>
                    </a>
                    <a href="https://zerotwo.wtf/support" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <Button rounded={true}>
                        Discordサーバー
                        </Button>
                    </a>
                </>
            )}
        </Flex>
    )
}