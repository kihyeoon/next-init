interface Props {
  params: {
    slug: string;
  };
}

export default function DetailPage({ params: { slug } }: Props) {
  return <h1>{slug} 제품 설명 페이지</h1>;
}
