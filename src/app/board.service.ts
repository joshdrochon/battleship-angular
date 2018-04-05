import { Injectable } from '@angular/core';
import { Board } from './board'
import { Player } from './player'

@Injectable()
export class BoardService {

  playerId: number = 1;
  boards: Board[] = [];

  constructor(){}

  createBoard(size:number = 6) : BoardService{
    let tiles = [];
    for(let i=0; i<size;i++){
      tiles[i] = [];
      for(let j=0; j<size; j++){
        tiles[i][j] = {used: false, value: 0, status: ''};
      }
    }

    return this;



  }

}
