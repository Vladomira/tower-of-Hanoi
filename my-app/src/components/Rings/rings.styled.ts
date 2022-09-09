import styled from 'styled-components';

type RingProps = {
    width: number;
    background: string;
    // top: string;
    // left: string;
    active: boolean;
    onClick: React.MouseEventHandler<HTMLDivElement>;
};

export const Ring = styled.div<RingProps>`
    position: relative;

    width: ${({ width }) => `${width}px`};
    height: 18px;
    background-color: ${({ background }) =>
        background ? `${background}` : 'yellow'};
    margin-top: 0.5px;
    border-radius: 18px;
    scale: ${({ active }) => (active ? 1.2 : '')};
`;
// top: ${({ top }) => top};
// left: ${({ left }) => left};
