const randomDamage = () => {
  return Math.floor(Math.random() * 10 + 1);
};

const chooseOption = (opt1, opt2) => {
  let randNum = Math.round(Math.random());
  return randNum === 0 ? opt1 : opt2;
};

const attackPlayer = function(health) {
  return (health = health - randomDamage());
};

const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};

const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};
