import Head from 'next/head';
import Heading from '../components/Heading';
import styles from '../styles/Home.module.scss';

const Home = () => {
  const inputText = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="This is React & Next :)" />
      <div>
        <p>onChange input</p>
        <input onChange={inputText} type="text" />
      </div>
    </div>
  );
};

export default Home;
