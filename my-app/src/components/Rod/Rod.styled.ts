import styled from 'styled-components';

export const RodList = styled.ul`
    display: flex;
    justify-content: space-around;

    padding: 120px 0px;
    list-style: none;
`;

export const RodItem = styled.li`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;

    width: 23px;
    height: 300px;
    background: teal;

    border-radius: 10px;
`;
export const Container = styled.div`
    padding-left: 60px;
    padding-right: 60px;
`;
