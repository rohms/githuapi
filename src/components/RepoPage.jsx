import { useParams } from "react-router-dom";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RepoPage = ({ repos }) => {
  const navigate = useNavigate();
  const { name } = useParams();
  const decodedName = decodeURI(name);
  const repo = repos.find((repo) => repo.name === decodedName);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="repo-container">
      <div className="repo-owner">
        <Avatar
          className="myavatar"
          sx={{ width: 200, height: 200 }}
          alt="avatar"
          src={repo.owner.avatarUrl}
        />
        <h1>{repo.owner.name}</h1>
      </div>
      <div className="repo-infos">
        <h4>Repo name:</h4>{" "}
        <b>
          <p>{repo.name}</p>
        </b>
        {repo.followers > 0 ? <p>Followers: {repo.stargazerCount}</p> : null}
        <h4>Owner Bio:</h4>
        {repo.owner.bio ? (
          <p>{repo.owner.bio}</p>
        ) : (
          <p>The owner doesn't have a bio.</p>
        )}
        {repo.description && (
          <>
            <h4>Description:</h4>
            {repo.description}
          </>
        )}
      </div>
      <button onClick={handleGoBack}>Go back</button>
    </div>
  );
};

export { RepoPage };
