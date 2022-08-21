import { client } from "../../libs/client";
import dynamic from 'next/dynamic';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { useEffect, useState } from "react";
import { Typography, Container, Box } from "@mui/material";
import Select from "react-select";

dayjs.extend(utc);
dayjs.extend(timezone);

const ChartComponent = dynamic(() => import('../../components/chart'));

const Chart = ({ logs }) => {
const processedData = logs.map(log => {
    return {
      menu: log.menu,
      weight: log.weight,
      date: dayjs.utc(log.publishedAt).tz('Asia/Tokyo').format('MM/DD')
    }
  }).reverse();

  const chestTrainingData = processedData.filter(data => data.menu[0] === 'ダンベルフライ（胸筋）');
  const bicepsTrainingData = processedData.filter(data => data.menu[0] === 'ダンベルカール（二頭筋）');
  const tricepsTrainingData = processedData.filter(data => data.menu[0] === 'ダンベルプルオーバー（三頭筋）');

  const [selectedMenu, setSelectedMenu] = useState();
  const [selectedMenuTrainingData, setSelectedMenuTrainingData] = useState(chestTrainingData);

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

  const handleSetSelectedMenu = (data) => {
    setSelectedMenu(data);
  }

  return (
    <Container maxWidth="lg">
      <Typography variant='h4' component='h1' py={3}>
        筋トレチャート
      </Typography>

      <Typography component="span">種目</Typography>

      <Box sx={{ width: 300 }}>
        <Select
          options={options}
          defaultValue={{label:'ダンベルフライ（胸筋）',value:'chest'}}
          onChange={e => handleSetSelectedMenu(e.value)}
        />
      </Box>

      <ChartComponent data={ selectedMenuTrainingData } />

    </Container>
  )
}

// SSRでデータの取得
export const getServerSideProps = async () => {
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
