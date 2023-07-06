import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import { formatLanguages } from "../helperfunctions";
import { calculateScore } from "../helperfunctions";

const MyCard = ({ name, description, languages, stargazers, issues }) => {
  const languageNames = languages.nodes.map((node) => node.name);
  const formattedLanguages = formatLanguages(languageNames);

  // formattedScore is now just stargazerCount / issueAmount
  const formattedScore = calculateScore(stargazers, issues);

  return (
    <>
      <Card className="mycard">
        <CardActionArea LinkComponent={Link} to={`/repo/${encodeURI(name)}`}>
          <CardContent className="card-content">
            <p>
              <b>Name:</b> {name}
            </p>
            <p>
              {description && (
                <>
                  <b>Description:</b> {description}
                </>
              )}
            </p>
            <span>
              <p>
                <b>Quality score:</b> {formattedScore}
              </p>
              <p>
                {formattedLanguages !== undefined && (
                  <>
                    <b>Languages:</b> {formattedLanguages}
                  </>
                )}
              </p>
            </span>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export { MyCard };
