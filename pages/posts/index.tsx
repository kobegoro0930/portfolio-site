import Link from "../../node_modules/next/link";

export default function Posts() {
  return (
    <div>
      <h1>日々の記録</h1>
      <ul>
        <li><Link href="/posts/1">記録1</Link></li>
        <li><Link href="/posts/2">記録2</Link></li>
        <li><Link href="/posts/3">記録3</Link></li>
      </ul>
      <Link href="/">TOPへ戻る</Link>
    </div>
  )
}
