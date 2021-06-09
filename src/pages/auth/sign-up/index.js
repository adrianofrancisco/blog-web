import React from 'react';
import { ContainerApp, Form } from './../../../components/globais';
import ButtonCustom from './../../../components/button';
import TextFieldCustom from './../../../components/text-field';
import TextFieldPasswordCustom from './../../../components/text-field-password';
import { Formik } from 'formik';
import * as Yup from 'yup';
import apiService from '../../../services/api';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

const initialValues = {
	username: '',
	password: ''
}

const SignUpSchema = Yup.object().shape({
	username: Yup
		.string()
		.required('Preencha o campo usuário'),
	password: Yup
		.string()
		.required('Preencha o campo senha'),
	password_confirmation: Yup
		.string()
		.required('Preencha o campo de confirmação de senha'),
});

function SignUp({ ...props }) {

	const history = useHistory();

	async function handleSignUp(values, actions) {
		try {
			actions.setSubmitting(true);

			if (values.password !== values.password_confirmation) {
				throw new Error('Campos senha e confirmar senha precisam ser iguais.');
			};

			const data = {
				username: values.username,
				password: values.password
			};

			const response = await apiService.post('/sign-up', data);

			if (response.status === 200) {
				actions.setSubmitting(false);

				Swal.fire({
					icon: 'success',
					text: 'Cadastro realizado com sucesso! Você será redirecionado para a tela de login.',
					timer: 10000
				}).then((result) => {
					history.push('sign-in');
				});
			};
		} catch (error) {
			actions.setFieldError('general', 'Erro ao criar a conta.');
			actions.setSubmitting(false);
		}
	}

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={(values, actions) => {
				handleSignUp(values, actions)
			}}
			validationSchema={SignUpSchema}
			validateOnChange={false}
		>
			{({ values, isSubmitting, errors, handleChange, handleSubmit }) => (

				<ContainerApp>
					<Form>
						<h2>Criar conta</h2>
						<table width="100%">
							<tbody>
								<tr>
									<td className="colsTable">
										<TextFieldCustom variant="outlined" id="username" name="username" label="Usuário" onChange={handleChange} />
										<h4>{errors.username}</h4>
									</td>
								</tr>

								<tr>
									<td className="colsTable">
										<TextFieldPasswordCustom variant="outlined" id="password" name="password" label="Senha" onChange={handleChange} type="password" />
										<h4>{errors.password}</h4>
									</td>
								</tr>

								<tr>
									<td className="colsTable">
										<TextFieldPasswordCustom variant="outlined" id="password_confirmation" name="password_confirmation" label="Confirmar a senha" onChange={handleChange} type="password" />
										<h4>{errors.password_confirmation}</h4>
									</td>
								</tr>

								<tr>
									<td className="colsTable">
										<ButtonCustom disabled={isSubmitting} handleClicked={handleSubmit} textButton="Criar conta" />
										<h4>{errors.general}</h4>
									</td>
								</tr>
							</tbody>
						</table>
					</Form>
				</ContainerApp>
			)
			}
		</Formik>

	);
}

export default SignUp;