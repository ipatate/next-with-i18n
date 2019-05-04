const { getPosts } = require('./services/posts');
const LANGUAGES = ['de', 'en']; // or whatever

module.exports = {
  publicRuntimeConfig: {
    localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string' ? process.env.LOCALE_SUBPATHS : 'foreign'
  },
  exportPathMap: async function(defaultPathMap) {
    const posts = await getPosts();
    const listPosts = {};
    posts.forEach(p => (listPosts[`/post/${p.id}`] = { page: '/post', query: { id: p.id } }));
    delete defaultPathMap['/post'];
    LANGUAGES.forEach(language => {
      posts.forEach(p => (listPosts[`/${language}/post/${p.id}`] = { page: '/post', query: { id: p.id } }));
    });

    const pathMap = {};

    Object.entries(defaultPathMap).forEach(([key, value]) => {
      pathMap[key] = value;

      LANGUAGES.forEach(language => {
        pathMap[`/${language}${key}`] = { ...value, query: { language } };
      });
    });

    return {
      ...pathMap,
      ...listPosts
    };
  }
};
