export class Character {
  constructor(name, info, attacksInfo, image) {
    this.name = name;
    this.info = info;
    this.attacksInfo = attacksInfo;
    this.image = image;
    this.attacks = [];
  }
}

export let paco = new Character(
  "Paco",
  'He was part of a dark cult called "The knights of the blood", this cult belive in a God named Zukkhu. Since Paco was born everyone told him that he was the most powerful blood knight and that he was destinated to big things, but when Paco was growing up Zukkhu himself knew that Paco could kill him one day, so Zukkhu cursed Paco.',
  "This character was cursed by the Zukkhu the ancient god, nowdays he can only use 2 attacks, choose wisely",
  "https://64.media.tumblr.com/e438a7fcb187daddc11a4654303bb056/tumblr_pi59lbdFVm1w4trzf_400.gif"
);

export let paolo = new Character(
  "Paolo",
  "One day Paolo was just bored, so he stealed an armor from a strager, but he didn't know that the armor was made to contain the powers of certain blood knight and now Paolo doesn't know how to take the armor off",
  "This character was nerfed by 'The Zukkhu armor', he can only use 1 attack, choose wisely",
  "https://i.pinimg.com/originals/d0/23/f8/d023f8ac6daa52386d49b54cd1feba81.gif"
);

export let sre = new Character(
  "Sr. E",
  "It's something that our mind just doesn't understand, in it's world they used to call it 'Una mona china', but in this world everyone calls it 'Zukkhu'",
  "This character has the power to use all the attacks",
  "http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/229aea930cdd921.png"
);
