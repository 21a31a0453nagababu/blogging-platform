import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getPostById, deletePost } from '../api/api';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const PostTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;
`;

const PostAuthor = styled.p`
  font-size: 18px;
  color: #555;
`;

const PostDate = styled.p`
  font-size: 14px;
  color: #999;
`;

const PostContent = styled.div`
  margin-top: 20px;
  font-size: 16px;
`;

const Button = styled.button`
  margin-right: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

const DeleteButton = styled(Button)`
  background-color: #dc3545;
`;

const PostView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = getPostById(id);

  const handleDelete = () => {
    deletePost(id);
    navigate('/');
  };

  return (
    <Container>
      <PostTitle>{post.title}</PostTitle>
      <PostAuthor>By {post.author}</PostAuthor>
      <PostDate>{new Date(post.date).toLocaleDateString()}</PostDate>
      <PostContent>{post.content}</PostContent>
      <Link to={`/posts/${id}/edit`}>
        <Button>Edit Post</Button>
      </Link>
      <DeleteButton onClick={handleDelete}>Delete Post</DeleteButton>
      <Link to="/">Back to List</Link>
    </Container>
  );
};

export default PostView;
