export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    // if (!members.has(character.name)) {
    //   this.members.add(character.name);
    // }
    this.members.add(character.name);
    return this.members;
  }

  addAll(characters) {
    for (const item of characters) {
      this.members.add(item.name);
    }
    return this.members;
  }

  toArray() {
    const membersArr = [...this.members];
    return membersArr;
  }
}
