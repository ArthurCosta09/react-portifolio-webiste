import './index.scss';

// Component parameters schema
interface AnimatedLettersProps {
    letterClass: string,
    strArray: string[],
    idx: number
}

// Component to add animation style in titles
const AnimatedLetters = ({letterClass, strArray, idx} : AnimatedLettersProps) => {
    return (
        <>
            <span>
                {
                    strArray.map((char: string, i: number) => (
                        <span key={char + i} className={`${letterClass} _${i + idx}`}>
                            {char}
                        </span>
                    ))
                }
            </span>
        </>
    );
};

export default AnimatedLetters;