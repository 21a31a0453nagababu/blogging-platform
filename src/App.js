import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './components/PostList';
import PostView from './components/PostView';

import PostForm from './components/PostForm';

import PostEdit from './components/PostEdit';

import Header from './components/Header';

import './styles/index.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/new" element={<PostForm />} />
        <Route path="/posts/:id/edit" element={<PostEdit />} />
        <Route path="/posts/:id" element={<PostView />} />
      </Routes>
    </Router>
  );
};

export default App;
