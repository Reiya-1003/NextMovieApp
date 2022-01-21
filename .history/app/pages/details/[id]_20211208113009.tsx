export default function Detail({ posts }: any) {
  console.log();
  return <div>各映画のデータ</div>;
}

export async function getStaticProps() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=78eb03987f34d05d918381d81d8257fe&language=ja`
  );
  const posts = await res.json();
  const id = posts.id;
  console.log(posts);
  return { props: { posts } };
}
