import React from "react";
import { MyCard } from "./MyCard";
import { Avatar } from "@mui/material";

const List = ({ data }) => {
  return (
    <ul>
      {data.map((node) => (
        <li key={node.id}>
          <Avatar
            className="myavatar"
            sx={{ width: 125, height: 125 }}
            alt="avatar"
            src={node.owner.avatarUrl}
          />
          <MyCard
            key={node.id}
            id={node.id}
            name={node.name}
            description={node.description}
            stargazers={node.stargazerCount}
            issues={node.issues.totalCount}
            languages={node.languages}
          />
        </li>
      ))}
    </ul>
  );
};

export { List };
