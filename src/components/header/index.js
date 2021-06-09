import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { removeDataUser } from '../../services/save-data-user';
import { useHistory } from 'react-router-dom';

function Header() {
    const history = useHistory();

    const [username, setUsername] = useState([]);

    useEffect(() => {
        loadUser();
    }, []);

    function loadUser() {
        var username = localStorage.getItem('@blogreactjsadrianofrancisco:username');
        if (username !== "") {
            setUsername(username);
        }
    }

    async function logout() {
		await removeDataUser();
        history.push('sign-in');
	}

    return (
        <div>
            <Grid container spacing={3}>
                <Grid container item spacing={5} justify="flex-end" alignItems="center">
                    <Grid item>
                        Bem-vindo {username}
                    </Grid>

                    <Grid item>
                        <ExitToAppOutlinedIcon onClick={() => logout()} style={{ cursor: 'pointer' }}/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Header;