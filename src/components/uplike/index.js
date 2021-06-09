import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';

function UpLike({ ...props }) {
    function handleClick() {
        props.handleClicked();
    }

    return (
        <ThumbUpOutlinedIcon style={{ width: 24, cursor: 'pointer' }} onClick={() => handleClick()} />
    );
}

export default UpLike;