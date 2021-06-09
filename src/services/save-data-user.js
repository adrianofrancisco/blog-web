import jsonWebTokenService from 'jsonwebtoken';

export const saveDataUser = async (response) => {

    const token = response.data;
    const infoToken = jsonWebTokenService.decode(token);

    const username = infoToken.username;
    const expirationDate = infoToken.exp;

    await localStorage.setItem('@blogreactjsadrianofrancisco:token', token);
    await localStorage.setItem('@blogreactjsadrianofrancisco:username', JSON.stringify(username));
    await localStorage.setItem('@blogreactjsadrianofrancisco:expirationDate', JSON.stringify(expirationDate));

    return;
};

export const removeDataUser = async () => {
    await localStorage.removeItem('@blogreactjsadrianofrancisco:token');
    await localStorage.removeItem('@blogreactjsadrianofrancisco:username');
    await localStorage.removeItem('@blogreactjsadrianofrancisco:expirationDate');

    return;
};