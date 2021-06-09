import React, { useState } from 'react';
import ButtonSave from '../../components/button';
import ButtonNewPost from '../../components/button';
import TextArea from '../../components/textarea';
import { DivNewPost, DivButtonNewPost } from './styles';
import apiService from '../../services/api';
import Swal from 'sweetalert2';

function Post({ ...props }) {
	const [isSaving, setSaving] = useState(false);

	async function savePost() {
		try {
			setSaving(true);

			var description = document.getElementById("post").value;
			const data = {
				content: description
			}

			const response = await apiService.post('feed', data);
			if ((response.status === 200) || (response.status === 201)) {
				Swal.fire({
					icon: 'success',
					text: 'Post gravado com sucesso!',
					timer: 5000
				}).then((result) => {
					reloadPage();
				});;
			}
			setSaving(false);
		} catch (error) {
			Swal.fire({
				icon: 'error',
				text: error,
				timer: 5000
			});

			setSaving(false);
		}
	}

	function reloadPage() {
		document.location.reload(true);
	}

	function newPost() {
		var divButtonNewPost = document.getElementById("buttonNewPost");
		var divPost = document.getElementById("newPost");

		divButtonNewPost.style.display = "none";
		divPost.style.display = "block";
	}

	return (
		<>
			<DivButtonNewPost id="buttonNewPost">
				<ButtonNewPost textButton="Criar novo post" handleClicked={() => newPost()} />
			</DivButtonNewPost>

			<DivNewPost id="newPost">
				<table width="100%">
					<tbody>
						<tr>
							<td>
								<TextArea name="post" id="post" placeholder="Escreva aqui o seu post" rows="5" cols="20" />
							</td>
						</tr>

						<tr>
							<td>
								<ButtonSave isSaving={isSaving} textButton="Postar" textSaving="Postando..." handleClicked={() => savePost()} />
							</td>
						</tr>
					</tbody>
				</table>
			</DivNewPost>
		</>
	);
}

export default Post;