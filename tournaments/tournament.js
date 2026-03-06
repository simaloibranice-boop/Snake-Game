let players = []
let leaderboard = []

function joinTournament(player){

players.push(player)

}

function recordScore(player,score){

leaderboard.push({player,score})

leaderboard.sort((a,b)=>b.score-a.score)

}

function getTopPlayers(){

return leaderboard.slice(0,10)

}

module.exports = {
joinTournament,
recordScore,
getTopPlayers
}
