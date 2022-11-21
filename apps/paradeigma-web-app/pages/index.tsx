import PixelSlide from 'components/home-page/PixelSlide';
import HighlightedText from 'components/home-page/HighlightedText';
import Footer from 'components/home-page/Footer';
import harpImg from 'public/pixel-art/harp.png';
import zephirImg from 'public/pixel-art/zephir.png';
import theaImg from 'public/pixel-art/thea.png';

const HomePage = () => (
    <>
        <PixelSlide image={{ src: zephirImg, altText: 'Pixel Zephir', priority: true }}>
            Find the code examples you need, the{' '}
            <HighlightedText
                tooltipText={
                    <>
                        <b>
                            <em>mīkrós</em>
                        </b>: Short and sweet code bits.
                    </>
                }>
                top mikros
            </HighlightedText>{' '}
            you keep looking for.
        </PixelSlide>
        <PixelSlide image={{ src: theaImg, altText: 'Pixel Thea', alignment: 'right' }}>
            Discover new implementations, contribute your own, and <HighlightedText>export snippets</HighlightedText>
            {' '}
            ready to use in your IDE.
        </PixelSlide>
        <PixelSlide image={{ src: harpImg, altText: 'Pixel harp' }}>
            <HighlightedText
                tooltipText={
                    <>
                        <b>
                            <em>parádeigma</em>
                        </b>: Illustrative pattern, example.
                    </>
                }>
                Why Paradeigma?
            </HighlightedText>{' '}
            Because documentation is often not enough to understand a coding concept. We need real-life use cases,{' '}
            <HighlightedText>insightful bits</HighlightedText> of true code.
        </PixelSlide>
        <Footer />
    </>
);

export default HomePage;
