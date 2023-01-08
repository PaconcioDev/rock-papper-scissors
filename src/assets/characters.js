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
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui officia dolores neque reprehenderit voluptas voluptates nemo! Eligendi voluptatibus expedita earum recusandae quidem, optio amet harum impedit, vero praesentium ipsam. Recusandae.",
  "This character was nerfed by the ancient gods, nowdays he can only use 2 attacks, choose wisely",
  "https://64.media.tumblr.com/e438a7fcb187daddc11a4654303bb056/tumblr_pi59lbdFVm1w4trzf_400.gif"
);

export let paolo = new Character(
  "Paolo",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui officia dolores neque reprehenderit voluptas voluptates nemo! Eligendi voluptatibus expedita earum recusandae quidem, optio amet harum impedit, vero praesentium ipsam. Recusandae.",
  "This character was nerfed by the ancient gods, nowdays he can only use 1 attack, choose wisely",
  "https://i.pinimg.com/originals/d0/23/f8/d023f8ac6daa52386d49b54cd1feba81.gif"
);

export let sre = new Character(
  "Sr. E",
  "It's something that our mind just doesn't understand, in it's world they used to call it 'Una mona china'",
  "This character has the power to use all the attacks",
  "http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/229aea930cdd921.png"
);