import { FC, SyntheticEvent, useEffect, useState } from 'react';
import { ringsElementProps } from '../../App';
import { Rings } from '../Rings/Rings';
import { RodItem, RodList } from './Rod.styled';

export type RodProps = {
    ringsArray: ringsElementProps[];
};

export const Rod: FC<RodProps> = ({ ringsArray }) => {
    const [rings, setRings] = useState<ringsElementProps[]>([
        { width: 0, color: '', id: 0, active: false },
    ]);
    const [thirdRings, setthirdRings] = useState<ringsElementProps[]>([
        { width: 0, color: '', id: 0, active: false },
    ]);
    const [filtredRings, setFiltredRings] =
        useState<ringsElementProps[]>(ringsArray);

    const toChooseEl = ({ width, color, id }: ringsElementProps) => {
        localStorage.setItem(
            'activeRing',
            JSON.stringify({ width, color, id })
        );
        ringsArray.filter((el) => el.id !== id);
    };

    const onHandleClick = (e: SyntheticEvent) => {
        ringsArray.splice(-1, 1);
        if (e.target === e.currentTarget) {
            const ring = localStorage.getItem('activeRing');
            ring && rings.push(JSON.parse(ring));
        }
    };
    const onHandleThirdClick = (e: SyntheticEvent) => {
        const ring = localStorage.getItem('activeRing');
        ringsArray.splice(-1, 1);
        ring && thirdRings.push(JSON.parse(ring));
    };

    useEffect(() => {
        console.log('rtr');

        setFiltredRings(ringsArray);
    }, [ringsArray]);

    return (
        <RodList>
            <RodItem key={1}>
                <Rings ringsArray={filtredRings} onRingClick={toChooseEl} />
            </RodItem>
            <RodItem key={2} onClick={onHandleClick} id={'2'}>
                {rings && <Rings ringsArray={rings} onRingClick={toChooseEl} />}
            </RodItem>
            <RodItem key={3} onClick={onHandleThirdClick} id={'3'}>
                {rings && (
                    <Rings ringsArray={thirdRings} onRingClick={toChooseEl} />
                )}
            </RodItem>
        </RodList>
    );
};
