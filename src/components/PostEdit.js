import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPostById, updatePost } from '../api/api';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Input = styled.input`
  display: block;
  margin: 10px 0;
  padding: 10px;
  width: 100%;
`;

const Textarea = styled.textarea`
  display: block;
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  height: 150px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

const PostEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: '', author: '', content: '', date: '' });

  useEffect(() => {
    setPost(getPostById(id));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePost(id, post);
    navigate(`/posts/${id}`);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h1>Edit Post</h1>
        <Input type="text" value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} required />
        <Input type="text" value={post.author} onChange={(e) => setPost({ ...post, author: e.target.value })} required />
        <Textarea value={post.content} onChange={(e) => setPost({ ...post, content: e.target.value })} required></Textarea>
        <Input type="date" value={post.date} onChange={(e) => setPost({ ...post, date: e.target.value })} required />
        <Button type="submit">Update Post</Button>
      </form>
    </Container>
  );
};

export default PostEdit;



