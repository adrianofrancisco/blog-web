import React from 'react';
import { ContainerApp, Form } from './../../../components/globais';
import ButtonCustom from './../../../components/button';
import TextFieldCustom from './../../../components/text-field';
import TextFieldPasswordCustom from './../../../components/text-field-password';
import { Formik } from 'formik';
import * as Yup from 'yup';
import apiService from '../../../services/api';
import { saveDataUser } from '../../../services/save-data-user';
import { useHistory } from 'react-router-dom';

const initialValues = {
    username: '',
    password: ''
}

const SignInSchema = Yup.object().shape({
    username: Yup
        .string()
        .required('Preencha o campo usuário.'),
    password: Yup
        .string()
        .required('Preencha o campo senha.')
});

function SignIn({ ...props }) {
    const history = useHistory();

    async function handleSignIn(values, actions) {
        try {
            actions.setSubmitting(true);

            const data = {
                username: values.username,
                password: values.password
            };

            const response = await apiService.post('/sign-in', data);
            if (response.status === 200) {
                await saveDataUser(response);

                actions.setSubmitting(false);

                history.push('post');
            };
        } catch (error) {
            actions.setFieldError('general', "Usuário inexistente ou senha inválida.");
            actions.setSubmitting(false);
        }
    }

    async function handleSignUp() {
        history.push('/sign-up');
    }

    async function handleForgotPassword() {
        history.push('/forgot-password');
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                handleSignIn(values, actions)
            }}
            validationSchema={SignInSchema}
            validateOnChange={false}
        >
            {({ isSubmitting, errors, handleChange, handleSubmit }) => (

                <ContainerApp>
                    <Form>
                        <table width="100%">
                            <tbody>
                                <tr>
                                    <td className="colsTable">
                                        <TextFieldCustom variant="outlined" id="username" name="username" onChange={handleChange} label="Usuário" />
                                        <h4>{errors.username}</h4>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="colsTable">
                                        <TextFieldPasswordCustom variant="outlined" id="password" name="password" onChange={handleChange} label="Senha" type="password" />
                                        <h4>{errors.password}</h4>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <ButtonCustom disabled={isSubmitting} textButton="Entrar" handleClicked={() => handleSubmit()} />
                                        <h4>{errors.general}</h4>
                                    </td>
                                </tr>

                                <tr>
                                    <td>&nbsp;</td>
                                </tr>

                                <tr>
                                    <td>
                                        <h3 style={{ justifyContent: 'center' }}>Não tem uma conta?</h3>
                                        <ButtonCustom textButton="Registre-se" handleClicked={() => handleSignUp()} />
                                    </td>
                                </tr>

                                <tr>
                                    <td>&nbsp;</td>
                                </tr>

                                <tr>
                                    <td>
                                        <h3 style={{ justifyContent: 'center' }}>Esqueceu sua senha?</h3>
                                        <ButtonCustom textButton="Recuperar acesso" handleClicked={() => handleForgotPassword()} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Form>
                </ContainerApp>
            )}
        </Formik>
    );
}

export default SignIn;