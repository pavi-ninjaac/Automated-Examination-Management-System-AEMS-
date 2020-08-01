import React from "react";
import { Container, Typography } from "@material-ui/core";

const sample = [
  {
    name: "Model Question Paper 2014",
    link: "https://drive.google.com/file/d/0B2Pe6kQT8J9zZ0xUOVo4NW5NY2c/view"
  },
  {
    name: "Model Question Paper 2013",
    link: "https://drive.google.com/file/d/0B2Pe6kQT8J9zN1lWWkd5WTlnX0k/view"
  },
  {
    name: "Model Question Paper 2012",
    link: "https://drive.google.com/file/d/0B2Pe6kQT8J9zRGU5UEpzVXppYkU/view"
  },
  {
    name: "Model Question Paper 2014 - Part2",
    link: "https://drive.google.com/file/d/0B2Pe6kQT8J9zazNDN0F5eWxlR1E/view"
  },
  {
    name: "Child Development and Pedagogy Sample Paper 2",
    link: "https://drive.google.com/drive/folders/0BzQbOchjLyKQWmdUd2E2Nkk4eUk"
  },
  {
    name: "English materials",
    link: "https://drive.google.com/drive/folders/0BzQbOchjLyKQZ2pqbi1CMXROYmM"
  },
  {
    name: "Maths materials",
    link: "https://drive.google.com/drive/folders/0BzQbOchjLyKQSUxNa1c2NElzOFE"
  },
  {
    name: "UPTET Study Material",
    link: "https://drive.google.com/file/d/0BzQbOchjLyKQc1p1cVNBQ2xCYXM/view"
  }
];

function LinkComponent(obj) {
  return (
    <li>
      <a style={{ textDecoration: "none" }} href={obj.link}>
        {obj.name}
      </a>
    </li>
  );
}

export default function Materials() {
  return (
    <Container>
      <Typography component="h1" variant="h2">
        Materials
      </Typography>
      <ul style={{ listStyle: "none" }}>{sample.map(LinkComponent)}</ul>
    </Container>
  );
}
