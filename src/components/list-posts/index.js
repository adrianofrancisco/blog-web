import React, { useState, useEffect } from 'react';
import apiService from '../../services/api';
import { Article, Text } from './styles.js';
import UpLike from '../../components/uplike';
import UpLove from '../../components/uplove';
import Swal from 'sweetalert2';
import { Badge, Grid } from '@material-ui/core';

function ListPosts() {
	const [dataPosts, setDataPosts] = useState([]);

	useEffect(() => {
		loadPosts();
	}, []);

	async function loadPosts() {
		const response = await apiService.get('feeds');
		if (response.data) {
			setDataPosts(response.data);
		}
	}

	async function upVote(idPost, likes, loves) {
		try {
			var data;
			if (likes) {
				data = {
					feedId: idPost,
					like: likes
				}
			} else {
				data = {
					feedId: idPost,
					love: loves
				}
			}

			const response = await apiService.post('reaction', data);
			if (response.status === 200) {
				reloadPage();
			}
		} catch (error) {
			Swal.fire({
				icon: 'error',
				text: error,
				timer: 5000
			});
		}
	}

	function reloadPage() {
		document.location.reload(true);
	}

	return (
		<div>
			{dataPosts.map((data, key) => (
				<Article key={key}>
					<Grid container spacing={3}>
						<Grid item>
							<Text>{data.content}</Text>
						</Grid>

						<Grid container item spacing={2}>
							<Grid item>
								<Badge badgeContent={data.likes} color="primary">
									<UpLike handleClicked={() => upVote(data.id, true, false)} />
								</Badge>
							</Grid>

							<Grid item>
								<Badge badgeContent={data.loves} color="primary">
									<UpLove handleClicked={() => upVote(data.id, false, true)} />
								</Badge>
							</Grid>
						</Grid>
					</Grid>
				</Article>
			))}
		</div>
	);
}

export default ListPosts;