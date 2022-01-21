export default function Detail() {
  console.log();
  return <div>各映画のデータ</div>;
}

export async function getStaticProps({ params }: any) {
  // ファイル名のzeit/[name].jsに対応
  const id = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=78eb03987f34d05d918381d81d8257fe&language=en-US`
  );
  const json = await res.json();
  console.log(json);

  return { props: { name } };
}
