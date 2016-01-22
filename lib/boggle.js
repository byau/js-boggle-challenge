'use strict';

const boggle = function boggle(tray, boggleWord) {
  if (tray.length === 16){
    let boggle = '';
    for (let i = 0; i < boggleWord.length; i++){
      let position = 0;
      position = boggleWord[i][0]*4 + boggleWord[i][i];
      boggle += tray[position];
    };
  }
  return boggle;
};


const bigBoggle = function bigBoggle() {};

const superBigBoggle = function superBigBoggle() {};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
