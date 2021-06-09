import React from 'react';
import { ContainerApp, Form } from './../../../components/globais';
import ButtonCustom from './../../../components/button';
import TextFieldCustom from './../../../components/text-field';
import { Formik } from 'formik';
import * as Yup from 'yup';
import apiService from '../../../services/api';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';

const initialValues = {
    username: ''
}

const ForgotPasswordSchema = Yup.object().shape({
    username: Yup
        .string()
        .required('Preencha o campo usuário')
});

function ForgotPassword() {
    const history = useHistory();

    async function handleForgotPassword(values, actions) {
        try {
            actions.setSubmitting(true);

            const response = await apiService.get('forgot-password/' + values.username);
            if (response.status === 200) {
                actions.setSubmitting(false);

                Swal.fire({
                    icon: 'success',
                    text: 'Sua senha é: ' + response.data?.password,
                    timer: 10000
                }).then((result) => {
                    history.push('sign-in');
                });
            } else {
                Swal.fire({
                    icon: 'warning',
                    text: 'Usuário não encontrado em nosso banco de dados',
                    timer: 10000
                })
            };
        } catch (error) {
            actions.setFieldError('general', error.message);
            actions.setSubmitting(false);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                handleForgotPassword(values, actions)
            }}
            validationSchema={ForgotPasswordSchema}
            validateOnChange={false}
        >
            {({ isSubmitting, errors, handleChange, handleSubmit }) => (

                <ContainerApp>
                    <Form>
                        <table width="100%">
                            <tbody>
                                <tr>
                                    <td align="center">
                                        Preencha o seu usuário no campo abaixo para que possamos informar sua senha.
									</td>
                                </tr>

                                <tr>
                                    <td className="colsTable">
                                        <TextFieldCustom variant="outlined" id="username" name="username" label="Usuário" onChange={handleChange} />
                                        <h4>{errors.username}</h4>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <ButtonCustom disabled={isSubmitting} handleClicked={handleSubmit} textButton="Recuperar senha" />
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

export default ForgotPassword;