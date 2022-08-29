import styled from 'styled-components/macro';


export const Inner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${( props ) => props.direction};
    justify-content: space-between;
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`