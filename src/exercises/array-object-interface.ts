/*
    ===== Código de TypeScript =====
*/

let skills: string[] = ['Bash', 'Counter', 'Healing'];

skills.push('Hero');
console.info(skills[0]);

interface Character {
  name: string;
  hp: number;
  skill: string[];
  homeTown?: string;
}

const character: Character = {
  name: 'Strider',
  hp: 100,
  skill: ['Bash', 'Counter', 'Healing'],
};

character.homeTown = 'Medellin';

console.table(character);
