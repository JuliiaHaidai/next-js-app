import { FC } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Heading from "../../components/Heading";
import { PostType } from "../../types";
import styles from "../../styles/main.module.scss";

type PostsPropsType = {
  posts: PostType[];
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts: data },
  };
};

const Posts: FC<PostsPropsType> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text="Posts list:" />
      <ul className={styles.list}>
        {posts &&
          posts.map(({ id, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Posts;
