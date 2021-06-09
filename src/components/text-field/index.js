import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import colors from '../../theme/colors';

const TextFieldCustom = withStyles({
	root: {
		'& label.Mui-focused': {
			color: `${colors.APP_BLOG_REACT}`,
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: `${colors.APP_BLOG_REACT}`,
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: `${colors.APP_BLOG_REACT}`,
			},
			'&:hover fieldset': {
				borderColor: `${colors.APP_BLOG_REACT}`,
			},
			'&.Mui-focused fieldset': {
				borderColor: `${colors.APP_BLOG_REACT}`,
			},
		},
		width: '100%'
	},
})(TextField);

export default TextFieldCustom;