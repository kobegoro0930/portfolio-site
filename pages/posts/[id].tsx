import Link from "../../node_modules/next/link";
import { client } from "../../libs/client";
import { Button, Container, Typography } from "../../node_modules/@mui/material/index";

export default function Post({ blog }) {
  return (
    <Container maxWidth="lg">
      <Typography variant='h4' component='h1' py={3}>
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
        <Link href="/posts">一覧へ戻る</Link>
      </Button>
    </Container>
  )
}

// 静的生成のためのパスを指定
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });
  const paths = data.contents.map((content) => `/posts/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });
  return {
    props: {
      blog: data,
    },
  };
};
