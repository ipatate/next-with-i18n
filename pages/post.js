import { getPosts } from '../services/posts';
import { Link, withNamespaces } from '../i18n.js';

class Post extends React.Component {
  static async getInitialProps(ctx) {
    const { id } = ctx.query;
    const posts = await getPosts();
    const post = await posts.find(p => p.id === +id);
    return { post };
  }
  render() {
    console.log(this.props.lng);

    const { post } = this.props;
    const { title, body } = post;
    return (
      <>
        <p>Hello</p>
        <h1>{title}</h1>
        <p>{body}</p>
      </>
    );
  }
}

export default withNamespaces('translation')(Post);
