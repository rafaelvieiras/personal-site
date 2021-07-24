import Head from 'next/head';
import Image from 'next/image';
import { GetStaticProps } from 'next';

export default function Home({name, username, bio, imageProfile}) {
  return (
    <div className="container">
      <Head>
        <title>{name} - Aka {username}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="avatar">
          <Image src={imageProfile} alt={`Foto ${name}`} width="300" height="300" />
        </div>
        <h1 className="title">
          {name}
          <small>search for {username}</small>
        </h1>

        <p className="description">
          {bio}
        </p>
      </main>

      <footer>
       
      </footer>

      <style jsx>{`
        .title {
          font-size: 2em;
          display: flex;
          flex-direction: column;
          text-align: center;
        }
        .avatar {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.5);
        }

        .avatar > img {
          max-width: 100%;
        }

      `}</style>

      <style jsx global>{`
        body, html {
          background-color: rgb(29, 31, 33);
          color: #f8f8f2;
          display: flex;
          justify-content: center;
          align-items: center;
          height: fill-available;
          font-family: Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono, 
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace, serif;
          text-shadow: 0 1px rgb(0 0 0 / 30%);
        }
        main { 
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        small {
          opacity: 0.6;
          font-size: 0.5em;
        }
      `}</style>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`https://api.github.com/users/rafaelvieiras`);
  const data = await response.json();

  // console.warn(data);
  return {
    props: {
      name: data.name,
      username: data.login,
      bio: data.bio,
      imageProfile: data.avatar_url
    }
  }
} 