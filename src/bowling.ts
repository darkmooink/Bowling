export function bowling(game:string): number {
  game =  game.replace(/ /g, "")
  let score = 0
  for(let i = 0; i < game.length; i++){
    if(Number.isInteger(Number.parseInt(game[i]))){
      score += Number.parseInt(game[i])
    }
  }
  return score;
}
