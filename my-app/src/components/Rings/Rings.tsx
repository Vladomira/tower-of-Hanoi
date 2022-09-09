import { FC } from 'react';
import { ringsElementProps } from '../../App';
import { RingItem } from './RingItem';

export interface RingsProps {
    onRingClick: ({ width, color, id }: ringsElementProps) => void;
    ringsArray: ringsElementProps[];
}

export const Rings: FC<RingsProps> = ({ ringsArray, onRingClick }) => {
    return (
        <>
            {ringsArray.map(({ width, color, id, active }) => {
                return (
                    <RingItem
                        onRingClick={onRingClick}
                        active={active}
                        width={width}
                        color={color}
                        key={width}
                        id={id}
                    />
                );
            })}
        </>
    );
};
