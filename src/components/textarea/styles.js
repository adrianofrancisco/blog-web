import styled from 'styled-components';
import colors from '../../theme/colors';

export const Textarea = styled.textarea`
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    border: 1px solid ${`${colors.BORDER_FIELDS}`};
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
`;