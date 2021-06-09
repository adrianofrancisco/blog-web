import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

function UpLove({ ...props }) {
    function handleClick() {
        props.handleClicked();
    }

    return (
        <FavoriteBorderOutlinedIcon style={{ width: 24, cursor: 'pointer' }} onClick={() => handleClick()} />
    );
}

export default UpLove;