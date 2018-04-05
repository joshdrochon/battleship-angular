export class Player {
  id: number;
  score: number;

  constructor(values: Object = {}){
    Object.assign(this, values);
  }
}

//object.assign(target, ...sources)
