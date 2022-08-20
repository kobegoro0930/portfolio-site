import { client } from "../../libs/client";
import dynamic from 'next/dynamic';

// 動的インポート（非同期にモジュールを呼び出し）
const ChartComponent = dynamic(() => import('../../components/chart'));

const Chart = () => {
  const data = [
    {name: 'Page A', pv: 10, amt: 2400},
    {name: 'Page B', pv: 11, amt: 2400},
    {name: 'Page C', pv: 13, amt: 2400},
    {name: 'Page D', pv: 12, amt: 2400},
  ];
  return (
    <>
      <h2>筋トレログ</h2>
      <label>種目</label>
      <select name="" id=""></select>
      <br />
      <label>期間</label>
      <select name="" id=""></select>
      〜
      <select name="" id=""></select>
      {/* {logs.map((log) => (
        <div>
          <p>{log.menu}</p>
          <p>{log.weight}</p>
        </div>
      ))} */}

      {/* グラフ描画 */}
      <ChartComponent data={ data } />

    </>
  )
}

// SSRでデータの取得
export const getServerSideProps = async () => {
  const data = await client.get({
    endpoint: "training_log",
    queries: { limit: 100 }
  });

  return {
    props: {
      logs: data.contents,
    },
  };
};

export default Chart;
