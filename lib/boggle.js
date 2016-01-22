'use strict';



const boggle = function boggle(tray, boggleWord) {
  let boggle1 = '';
  if (tray.length === 16){
    for (let i = 0; i < boggleWord.length; i++){
      if((boggleWord[i][0] < 4) && (boggleWord[i][1]<4)){
        let position = 0;
        position = boggleWord[i][0]*4 + boggleWord[i][1];
        boggle1 = boggle1 + tray[position];
      }
    }
  return boggle1;
  }
};

const bigBoggle = function bigBoggle(tray, boggleWord) {
  let boggle1 = '';
  if (tray.length === 25){
    for (let i = 0; i < boggleWord.length; i++){
      if((boggleWord[i][0] < 5) && (boggleWord[i][1]<5)){
        let position = 0;
        position = boggleWord[i][0]*5 + boggleWord[i][1];
        boggle1 = boggle1 + tray[position];
      }
    }
  return boggle1;
  }
};

const superBigBoggle = function superBigBoggle(tray, boggleWord) {
  let boggle1 = '';
  if (tray.length === 36){
    for (let i = 0; i < boggleWord.length; i++){
      if((boggleWord[i][0] < 6) && (boggleWord[i][1]<6)){
        let position = 0;
        position = boggleWord[i][0]*6 + boggleWord[i][1];
        boggle1 = boggle1 + tray[position];
      }
    }
  return boggle1;
  }
};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
