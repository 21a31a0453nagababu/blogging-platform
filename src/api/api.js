let posts=[
    {
        id: '1',
        title: 'First Post',
        author: 'John Doe',
        content: 'This is the content of the first post.',
        date: '2023-06-01',
        summary: 'Summary of the first post.',
      },

];

export const getPosts = () => {
    return posts;
  };
  
  export const getPostById = (id) => {
    return posts.find(post => post.id === id);
  };
  
  export const addPost = (post) => {
    post.id = (posts.length + 1).toString();
    posts.push(post);
  };
  
  export const updatePost = (id, updatedPost) => {
    posts = posts.map(post => (post.id === id ? updatedPost : post));
  };
  
  export const deletePost = (id) => {
    posts = posts.filter(post => post.id !== id);
  };