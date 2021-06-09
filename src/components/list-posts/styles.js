import styled from 'styled-components';
import colors from '../../theme/colors';

export const Article = styled.article`
    background: ${`${colors.BACKGROUND_ARTICLE}`} 0% 0% no-repeat padding-box;    
    border-radius: 10px;    
    margin: 8px;
    padding: 10px 24px;
`;

export const Text = styled.span`
    font-size: 16px;
    color: ${`${colors.DESCRIPTION_POST}`};
    opacity: 1;
`;