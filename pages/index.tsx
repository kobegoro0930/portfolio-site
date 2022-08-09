import { Box, Container, Typography } from "../node_modules/@mui/material/index";
import Image from "../node_modules/next/image";
import imageSrc from '../public/work.jpg';

export default function Home() {
  return (
    <>
      <Typography variant="h1" component="h2" p={4} mb={5}>
        Web Developer
        <br />
        Front-End Engineer
      </Typography>
      <Container maxWidth='sm'>
        <Image src={imageSrc} layout='responsive' alt='logo' />
      </Container>

    </>
  )
}
