import { client } from "../../libs/client";
import dynamic from 'next/dynamic';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { useEffect, useState } from "react";
import { Typography, Container, Box } from "@mui/material";
import Select from "react-select";
import { InferGetStaticPropsType, NextPage } from 'next';
import BasicTable from "../../components/table";

dayjs.extend(utc);
dayjs.extend(timezone);

const ChartComponent = dynamic(() => import('../../components/chart'));

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Chart: NextPage<Props> = ({ logs }) => {
  type Data = { menu: string, weight: number, date: string };

  // 全件取得データの加工
  const processedAllData = logs.map(log => {
    return {
      menu: log.menu,
      weight: log.weight,
      date: dayjs.utc(log.publishedAt).tz('Asia/Tokyo').format('MM/DD')
    }
  }).reverse();

  // 種目ごとのデータ作成
  const chestTrainingData: Data = processedAllData.filter(data => data.menu[0] === 'ダンベルフライ（胸筋）');
  const bicepsTrainingData: Data = processedAllData.filter(data => data.menu[0] === 'ダンベルカール（二頭筋）');
  const tricepsTrainingData: Data = processedAllData.filter(data => data.menu[0] === 'ダンベルプルオーバー（三頭筋）');

  const [selectedMenu, setSelectedMenu] = useState("");
  const [selectedMenuTrainingData, setSelectedMenuTrainingData] = useState<Data>(chestTrainingData);

  useEffect(() => {
    switch (selectedMenu) {
      case 'chest':
        setSelectedMenuTrainingData(chestTrainingData);
        break;
      case 'biceps':
        setSelectedMenuTrainingData(bicepsTrainingData);
        break;
      case 'triceps':
        setSelectedMenuTrainingData(tricepsTrainingData);
        break;
    }
    console.log(selectedMenu);
  }, [selectedMenu])

  const options = [
    { value: 'chest', label: 'ダンベルフライ（胸筋）' },
    { value: 'biceps', label: 'ダンベルカール（二頭筋）' },
    { value: 'triceps', label: 'ダンベルプルオーバー（三頭筋）' }
  ]

  const handleSetSelectedMenu = (data: string) => {
    setSelectedMenu(data);
  }

  return (
    <Container maxWidth="lg">
      <Typography variant='h4' component='h1' py={3} sx={{fontWeight: "800"}}>
        トレーニング記録
      </Typography>

      <Typography component="span">種目</Typography>

      <Box sx={{ width: 300, marginTop: 1 }}>
        <Select
          options={options}
          defaultValue={{label:'ダンベルフライ（胸筋）',value:'chest'}}
          onChange={e => handleSetSelectedMenu(e.value)}
        />
      </Box>


      <Box sx={{
        display: "flex",
        marginBottom: 10,
        "@media screen and (max-width:1200px)": { display: "block" }
      }}>
        <ChartComponent data={ selectedMenuTrainingData } />
        <BasicTable data={ selectedMenuTrainingData } />
      </Box>

    </Container>
  )
}

// SSGでデータの取得
export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "training_log",
    queries: { limit: 200 }
  });

  return {
    props: {
      logs: data.contents,
    },
  };
};

export default Chart;
