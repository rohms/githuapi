

export const formatLanguages = (languages) => {
    if (languages.length  < 1) {
        return languages[0]
    } else {
        return languages.join(", ");
    }
};

// this is a helper function to calculate the score of a repo
// the score is now fictitional as almost all repos have 0 issues and 0 stargazers 
export const calculateScore = (stargazers, issues) => {
    if(stargazers === 0 || issues === 0) {
      stargazers += 1;
      issues += 3;
    } 
      const score = stargazers / issues;
      return Number(score.toFixed(2));
  }