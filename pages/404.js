import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Heading from '../components/Heading';
import styles from '../styles/404.module.scss';

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000);
  }, [router]); // через 2 секунды перебросит на главную

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Error</title>
      </Head>
      <div>
        <Heading text="404" />
        <Heading tag="h2" text="Что-то пошло не так..." />
      </div>
    </div>
  );
};

export default Error;

// ошибка 404 идет сразу из коробки
