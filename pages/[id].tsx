import Link from "next/link";
import { client } from "../libs/client";
import { Button, Container, Typography } from "@mui/material";
import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Post: NextPage<Props> = ({ blog }) => {
  return (
    <Container maxWidth="lg">
      <Typography variant='h4' component='h1' py={3} sx={{fontWeight: "800"}}>
        {blog.title}
      </Typography>
      <Typography mb={1} color="text.secondary">
        {new Date(blog.publishedAt).toLocaleDateString()}
      </Typography>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
      <Button color="primary">
        <Link href="/"><a>一覧へ戻る</a></Link>
      </Button>
    </Container>
  )
}

// 静的生成のためのパスを指定
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });
  const paths = data.contents.map((content) => `/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理
export const getStaticProps = async (
  context: GetStaticPropsContext<{ id: string }>
) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });
  return {
    props: {
      blog: data,
    },
  };
};

export default Post;
