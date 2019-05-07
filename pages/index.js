import Head from 'next/head';
// import { Link, withNamespaces } from '../i18n.js';
import Link from 'next/link';
import { getPosts } from '../services/posts';

const Page = ({ posts }) => (
  <>
    <Head>
      <title>My Hello World</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1>Posts</h1>
    <ul>
      {posts
        ? posts.map(p => (
            <li key={p.id}>
              <Link href={`/post?id=${p.id}`} as={`/post/${p.id}`}>
                <a>{p.title}</a>
              </Link>
            </li>
          ))
        : null}
    </ul>
    <br />
  </>
);

Page.getInitialProps = async ({ req }) => {
  const posts = await getPosts();
  return { posts };
};

export default Page;
