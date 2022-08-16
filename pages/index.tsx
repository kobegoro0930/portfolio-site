import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import imageSrc from '/public/work.jpg';

export default function Home() {
  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h1" component="h2" p={4} mb={5}>
          Web Developer
          <br />
          Front-End Engineer
        </Typography>
        <Container maxWidth='sm'>
          <Image src={imageSrc} layout='responsive' alt='logo' />
        </Container>
      </Container>
    </>
  )
}
