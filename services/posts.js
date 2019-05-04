const axios = require('axios');

const getPosts = () => axios('https://jsonplaceholder.typicode.com/posts').then(res => res.data);

module.exports = { getPosts };
