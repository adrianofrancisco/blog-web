import React from 'react';
import Header from '../../components/header';
import Post from '../../components/post';
import ListPosts from '../../components/list-posts';
import { ContainerApp } from '../../components/globais';

function Posts() {
	return (
		<ContainerApp>
			<Header />
			<Post />
			<ListPosts />
		</ContainerApp>
	);
}

export default Posts;