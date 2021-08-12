import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { serch } = useLocation();
  const query = new URLSearchParams(serch);
  console.log(query);

  return (
    <div>
      <h1>URLパラメタです</h1>
      <p>パラメータは {id} です</p>
      <p>パラメータは {query.get("name")} です</p>
    </div>
  );
};
