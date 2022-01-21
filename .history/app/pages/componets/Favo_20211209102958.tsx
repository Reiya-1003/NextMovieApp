import { useQuery, useMutation } from "@apollo/react-hooks";
import { FAVO_LIST, DELETE_FAVO } from "../../graphql/querys/querys";

export default function Favo() {
  const { loading, error, data } = useQuery(FAVO_LIST);
  return (
    <>
      <div>ここにお気にいり入る</div>
    </>
  );
}
