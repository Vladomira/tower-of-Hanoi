import { FC, useState, MouseEvent } from 'react';
import { ringsElementProps } from '../../App';
import { Ring } from './rings.styled';

type Props = {
    onRingClick: ({ width, color, id }: ringsElementProps) => void;
    active: boolean;
};
export const RingItem: FC<ringsElementProps & Props> = ({
    width,
    color,
    id,
    onRingClick,
    active,
}) => {
    const [position, setPosition] = useState({ top: 'auto', left: 'auto' });
    const onHandleClick = (e: MouseEvent<HTMLDivElement>) => {
        // console.log('x', e.clientX + 'px');
        // setPosition({ top: e.clientX + 'px', left: e.clientY + 'px' });
    };

    return (
        <Ring
            width={width}
            background={color}
            active={active}
            onClick={() => onRingClick({ width, color, id, active })}
        />
    );
};
