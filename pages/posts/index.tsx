import Link from "../../node_modules/next/link";
import { client } from "../../libs/client";
import { Card, CardActions, CardContent, Typography, Button, Container } from "../../node_modules/@mui/material/index";

export default function Posts({ blogs }) {
  return (
    <Container maxWidth="lg">
      <Typography variant='h4' component='h1' py={3}>
        新着一覧
      </Typography>
      {blogs.map((blog) => (
        <Container maxWidth="sm" key={blog.id}>
          <Card sx={{mb:2}}>
            <CardContent>
              <Typography mb={1} color="text.secondary">
                {new Date(blog.publishedAt).toLocaleDateString()}
              </Typography>
              <Typography variant="h5" component="h2">
                {blog.title}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <Link href={`/posts/${blog.id}`}>READ MORE</Link>
              </Button>
            </CardActions>
          </Card>
        </Container>

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
