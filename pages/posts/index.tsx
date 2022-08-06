import Link from "../../node_modules/next/link";
import { client } from "../../libs/client";

export default function Posts({ blogs }) {
  return (
    <div>
      <h1>日々の記録</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/posts/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
      <Link href="/">TOPへ戻る</Link>
    </div>
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
