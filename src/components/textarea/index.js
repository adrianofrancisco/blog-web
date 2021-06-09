import { Textarea } from './styles';

const TextArea = ({...props}) => {
	return (
		<Textarea name={props.name} id={props.id} placeholder={props.placeholder} rows={props.rows} cols={props.cols} />
	);
}

export default TextArea;