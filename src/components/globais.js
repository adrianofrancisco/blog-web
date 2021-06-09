import styled from 'styled-components';
import colors from '../theme/colors';

export const ContainerApp = styled.div`
    max-width: 700px;
    background: #FFF;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin: 0px auto;
`;

export const Form = styled.form`
    margin-top: 5px;

    .colsTable {
        padding-bottom: 5px;
    }

    h1 {
        font-size: 16px;
        display: flex;
        flex-direction: row;
        align-items: center;
        color: #fff;
        padding: 10px 15px;
    }    

    h2 {
        font-size: 16px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    h3 {
        font-size: 14px;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-weight: 500;
    }

    h4 {
        font-size: 12px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        color: ${`${colors.ERROR}`};
    }

    h5 {
        font-size: 14px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        color: ${`${colors.SUCCESS}`};
    }

    h6 {
        font-size: 16px;
        display: flex;
        flex-direction: row;
        align-items: left;
        justify-content: left;
        margin-bottom: 10px;
    }

    hr {
        margin-bottom: 15px;
        margin-top: 15px;
    }
`;