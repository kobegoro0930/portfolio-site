import Link from "next/link";
import { client } from "../libs/client";
import { Card, CardActions, CardContent, Typography, Button, Container } from "@mui/material";
import { InferGetStaticPropsType, NextPage } from 'next';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Posts: NextPage<Props> = ({ blogs }) => {
  return (
    <Container maxWidth="lg">
      <Typography variant='h4' component='h1' py={3} sx={{fontWeight: "800"}}>
        ブログ
      </Typography>
      {blogs.map((blog) => (
        <Card sx={{
          mb:2, width: 600,
          "@media screen and (max-width:900px)": { width: "100%"},
        }} key={blog.id}>
          <CardContent>
            <Typography mb={1} color="text.secondary" sx={{fontSize: 14}}>
              {new Date(blog.publishedAt).toLocaleDateString()}
            </Typography>
            <Typography variant="h6" component="h2" sx={{fontWeight: "800"}}>
              {blog.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <Link href={`/${blog.id}`}><a>もっと見る</a></Link>
            </Button>
          </CardActions>
        </Card>
      ))}
    </Container>
  )
}

// データをテンプレートに受け渡す部分の処理
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blogs: data.contents,
    },
  };
};

export default Posts;
