# searchGitRepos

Please use React and then, npm install and npm run dev

the quality score has been calculated as follow: 

quality_score = (owner_quality_score+repos_quality_score)/2

owner_quality_score = follower_quality_score+creation_date_quality_score+bio_quality_score+type_quality_score
repos_quality_score = stargazers_quality_score+watchers_quality_score+update_quality_score+topics_quality_score+fork_quality_score+oppen_issues_quality_score


follower_quality_score = 
    0-9 : 1pts
		10-99: 2pts
		100-999:3pts
		1000-9999:4pts
		...

creation_date_quality_score: current_date - creation_date : 1 point per year

bio_quality_score: 1pts for the bio

type_quality_score: User: 1pts
Organization_quality_score: 2pts

stargazers_quality_score:  
    0-9 : 1pts
		10-99: 2pts
		100-999:3pts
		1000-9999:4pts
    ...

update_quality_score: current_date - last_update : -1 per month

topics_quality_score: 1pts per topic

watchers_quality_score:  
    0-9 : 1pts
		10-99: 2pts
		100-999:3pts
		1000-9999:4pts
		...

open_issues_quality_score: repo.open_issues/5 
fork_quality_score: repo.open_issues/5 
