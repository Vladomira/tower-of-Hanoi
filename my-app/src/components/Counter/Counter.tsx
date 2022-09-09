import { FC, useState } from 'react';
import { CounterBox, Quantity } from './Counter.styled';

type Counterprops = {
    decrement: () => void;
    increment: () => void;
    counter: number;
};

export const Counter: FC<Counterprops> = ({
    decrement,
    increment,
    counter,
}) => {
    return (
        <CounterBox>
            <button type='button' onClick={decrement}>
                -
            </button>
            <Quantity>{counter}</Quantity>
            <button type='button' onClick={increment}>
                +
            </button>
        </CounterBox>
    );
};
