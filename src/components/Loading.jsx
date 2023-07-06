import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <div className="loadingpage">
      <CircularProgress size={100} />
      <h3>Loading...</h3>
    </div>
  );
};

export { Loading };
