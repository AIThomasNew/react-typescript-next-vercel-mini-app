import Head from 'next/head';
import PostInfo from '../../components/PostInfo';

export const getStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  const paths = data.map(({ id }) => ({
    params: { id: id.toString() }, // каждый элемент массива это объект со свойством params, которому присваивается объект со значением id (строкой)
  }));

  return {
    paths,
    fallback: false, // в случае ошибки вернёт 404
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  } // если запрос не выполнился

  return {
    props: { post: data },
  };
};

const Post = ({ post }) => {
  return (
    <>
      <Head>
        <title>Contact Page</title>
      </Head>
      <PostInfo post={post} />
    </>
  );
};

export default Post;
