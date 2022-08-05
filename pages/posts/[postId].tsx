import Link from "../../node_modules/next/link";
import { useRouter } from "../../node_modules/next/router";

export default function Post() {
  const router = useRouter();
  const { postId } = router.query;
  return (
    <div>
      <h1>日々の記録</h1>
      <p>ID：{ postId }</p>
      <Link href="/posts">日々の記録一覧ページへ</Link>
    </div>
  )
}
