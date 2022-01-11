import Head from 'next/head';
import Heading from '../../components/Heading';

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = null;

  if (!data) {
    return {
      notFound: true,
    };
  } // если запрос не выполнился

  return {
    props: { contacts: data },
  };
}; // отображение на клиентской части, а не на серверной

// компонент Contacts принял contacts для работы с данными
const Contacts = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Contacts list:" />
      <ul>
        {contacts &&
          contacts.map(({ id, name, email }) => (
            <li key={id}>
              <strong>{name}</strong> ({email})
            </li>
          ))}
      </ul>
    </>
  );
};

export default Contacts;
