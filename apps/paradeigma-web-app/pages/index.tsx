import type { NextPage } from 'next';

import Image from 'next/future/image';
import harpImg from 'public/pixel-art/harp.png';
import zephirImg from 'public/pixel-art/zephir.png';
import theaImg from 'public/pixel-art/thea.png';

const HomePage: NextPage = () => {
    return (
        <>
            <Image 
            src={harpImg} 
            alt="Whatever"
            width={256}
            height={256}
            quality={100} />
            <Image 
            src={theaImg} 
            alt="Whatever"
            width={256}
            height={256}
            quality={100} />
            <Image 
            src={zephirImg} 
            alt="Whatever"
            width={256}
            height={256}
            quality={100} />
        </>
    );
}

export default HomePage;