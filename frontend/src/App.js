import "./App.css";
import useJsonFetch from "./hooks/useJsonFetch";
import { CircularProgress } from "@mui/material";

function App() {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/data");

  const content = !!data ? <h3>{data.status}</h3> : <h3>Данных нет</h3>;

  const contentWithLoading = loading ? <CircularProgress /> : content;

  const errorText = !!error ? <p>{error.message}</p> : null;

  return (
    <div className="app">
      {contentWithLoading} {errorText}
    </div>
  );
}

export default App;
