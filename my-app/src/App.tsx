import { useState } from 'react';
import { Counter } from './components/Counter/Counter';
import { Rod } from './components/Rod/Rod';
import { Container } from './components/Rod/Rod.styled';
import { colors } from './components/utils/colors';

export type ringsElementProps = {
    width: number;
    color: string;
    id: number;
    active: boolean;
};

function App() {
    const [counter, setCounter] = useState(1);
    const [ringWidth, setRingWidth] = useState(60);
    const [ringsArray, setRingsArray] = useState<ringsElementProps[]>([
        { width: 45, color: 'brown', id: 1, active: false },
    ]);

    const decrement = () => {
        setRingWidth((prev) => prev - 15);
        if (counter !== 3) {
            setCounter((prev) => prev - 1);
            ringsArray.splice(-1, 1);
        } else return;
    };

    const increment = () => {
        setCounter((prev) => prev + 1);
        setRingWidth((prev) => prev + 15);

        const randomNumber = Math.floor(Math.random() * colors.length);
        const randomColor = colors[randomNumber].fill;

        setRingsArray((prev) => {
            return [
                ...prev,
                {
                    width: ringWidth,
                    color: randomColor,
                    id: ringWidth,
                    active: false,
                },
            ];
        });
    };

    return (
        <Container>
            <Counter
                decrement={decrement}
                increment={increment}
                counter={counter}
            />

            <Rod ringsArray={ringsArray} />
        </Container>
    );
}

export default App;
