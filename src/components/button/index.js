import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import colors from '../../theme/colors';

const ColorButton = withStyles((theme) => ({
	root: {
		color: theme.palette.getContrastText(`${colors.APP_BLOG_REACT}`),
		backgroundColor: `${colors.APP_BLOG_REACT}`,
		'&:hover': {
			backgroundColor: `${colors.APP_BLOG_REACT}`,
		},
		width: '100%'
	},
}))(Button);


function ButtonCustom(props) {

	function handleClick() {
		props.handleClicked();
	}
	
	return (
		<ColorButton disabled={props.isSaving} variant="contained" onClick={() => handleClick()}>
			{props.textButton}
		</ColorButton>
	);
};

export default ButtonCustom;