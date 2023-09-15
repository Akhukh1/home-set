import Team from '../team';

test('test team addAll', () => {
  const teamObj = new Team();
  const characters = [
    {
      name: 'Misha',
      health: 100,
      level: 1,
      type: 'Daemon',
      attack: 10,
      defence: 40,
    },
    {
      name: 'Olga',
      health: 100,
      level: 1,
      type: 'Magician',
      attack: 10,
      defence: 40,
    },
  ];
  teamObj.addAll(characters);
  const result = teamObj.toArray();
  expect(result).toEqual(['Misha', 'Olga']);
});

test('test team add not unique', () => {
  const teamObj = new Team();
  const characters = [
    {
      name: 'Misha',
      health: 100,
      level: 1,
      type: 'Daemon',
      attack: 10,
      defence: 40,
    },
    {
      name: 'Olga',
      health: 100,
      level: 1,
      type: 'Magician',
      attack: 10,
      defence: 40,
    },
  ];

  const character = {
    name: 'Misha',
    health: 100,
    level: 1,
    type: 'Daemon',
    attack: 10,
    defence: 40,
  };
  teamObj.addAll(characters);
  teamObj.add(character);
  const result = teamObj.toArray();
  expect(result).toEqual(['Misha', 'Olga']);
});

test('test team add unique', () => {
  const teamObj = new Team();
  const characters = [
    {
      name: 'Misha',
      health: 100,
      level: 1,
      type: 'Daemon',
      attack: 10,
      defence: 40,
    },
    {
      name: 'Olga',
      health: 100,
      level: 1,
      type: 'Magician',
      attack: 10,
      defence: 40,
    },
  ];

  const character = {
    name: 'Sasha',
    health: 100,
    level: 1,
    type: 'Bowerman',
    attack: 25,
    defence: 25,
  };
  teamObj.addAll(characters);
  teamObj.add(character);
  const result = teamObj.toArray();
  expect(result).toEqual(['Misha', 'Olga', 'Sasha']);
});
