import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addPost } from '../api/api';
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

const PostForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, author, content, date });
    navigate('/');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h1>Add New Post</h1>
        <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
        <Input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
        <Textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" required></Textarea>
        <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <Button type="submit">Add Post</Button>
      </form>
    </Container>
  );
};

export default PostForm;
