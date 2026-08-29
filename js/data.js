/**
 * Data Configuration & Choice Lists for the Rizz Experience
 */

export const BRING_ITEMS = [
  { key: 'food', label: 'Food / Snacks', emoji: '🍱', img: 'images/bring_food.jpg' },
  { key: 'tent', label: 'Camping Tent', emoji: '⛺', img: 'images/bring_tent.jpg' },
  { key: 'motorcycle', label: 'Motorcycle', emoji: '🏍️', img: 'images/bring_motorcycle.jpg' },
  { key: 'horse', label: 'Horse', emoji: '🐴', img: 'images/bring_horse.jpg' },
  { key: 'dog', label: 'Cute Doggo', emoji: '🐶', img: 'images/bring_dog.jpg' },
  { key: 'wifi', label: 'Pocket Wifi', emoji: '📶', img: 'images/bring_wifi.jpg' },
  { key: 'rope', label: 'Rope (just in case)', emoji: '🪢', img: 'images/bring_rope.jpg' },
  { key: 'soap', label: 'Soap & Skincare', emoji: '🧼', img: 'images/bring_soap.jpg' },
  { key: 'guitar', label: 'Acoustic Guitar', emoji: '🎸', img: 'images/bring_guitar.jpg' },
  { key: 'flashlight', label: 'Flashlight', emoji: '🔦', img: 'images/bring_flashlight.jpg' }
];

export const DESTINATIONS = [
  { key: 'konoha', label: 'Hidden Leaf (Konoha)', emoji: '🍥', img: 'images/dest_konoha.jpg' },
  { key: 'ghibli', label: 'Ghibli World', emoji: '🌱', img: 'images/dest_ghibli.jpg' },
  { key: 'disneyland', label: 'Disneyland', emoji: '🏰', img: 'images/dest_disneyland.jpg' },
  { key: 'neverland', label: 'Neverland', emoji: '🧚', img: 'images/dest_neverland.jpg' }
];

export const TRANSPORTATION = [
  { key: 'motorcycle', label: 'Motorcycle', emoji: '🏍️', img: 'images/transport_motorcycle.jpg' },
  { key: 'car', label: 'Roadtrip Car', emoji: '🚗', img: 'images/transport_car.jpg' },
  { key: 'horse', label: 'Noble Steed', emoji: '🐴', img: 'images/transport_horse.jpg' },
  { key: 'goat', label: 'Goat', emoji: '🐐', img: 'images/transport_goat.jpg' },
  { key: 'dog', label: 'Giant Doggo', emoji: '🐶', img: 'images/transport_dog.jpg' },
  { key: 'endportal', label: 'End Portal', emoji: '🌀', img: 'images/transport_endportal.jpg' },
  { key: 'carpet', label: 'Magic Carpet', emoji: '🧞', img: 'images/transport_carpet.jpg' },
  { key: 'louyi', label: 'Ulti ni Lou Yi', emoji: '⚡', img: 'images/transport_louyi.jpg' }
];

export const FAVORITES = [
  { key: 'chocolate', label: 'Chocolate', emoji: '🍫', img: 'images/fav_chocolate.jpg' },
  { key: 'milk', label: 'Fresh Milk / Tea', emoji: '🥛', img: 'images/fav_milk.jpg' },
  { key: 'coffee', label: 'Iced Coffee', emoji: '☕', img: 'images/fav_coffee.jpg' },
  { key: 'icecream', label: 'Ice Cream', emoji: '🍦', img: 'images/fav_icecream.jpg' }
];

export const WHO = [
  { key: 'siya', label: 'THEM (Siya)', emoji: '👤', img: 'images/who_siya.jpg' },
  { key: 'me', label: 'ME (Syempre Ako)', emoji: '👑', img: 'images/who_me.jpg' }
];

export const TEXT_CONTENT = {
  taglish: {
    welcomeTitle: "Before we go any further,<br>what's your name? ✨",
    welcomeSub: "Type your cute name below and hit enter 👇",
    namePlaceholder: "Jane / Alex / ikaw na 'to...",
    enterBtn: "Let's Start ✨",
    greeting: (name) => `Hi <span class="name-highlight">${name}</span>, <br>GWould you like to explore the world with me?`,
    yesBtn: "Yes 🥹",
    noBtn: "No 🏃‍♂️",
    scene3Caption: "Sabi na nga ba eh, you're interested to travel with me 😏",
    continueBtn: "Continue ➡️",
    scene4Eyebrow: "packing time 🎒",
    scene4Title: "Anong gusto mong dalhin kasama ko?",
    scene4Hint: "Pumili ng hanggang 3",
    scene5Eyebrow: "next stop 🗺️",
    scene5Title: "Saan tayo pupunta?",
    scene6Eyebrow: "getting there 🚀",
    scene6Title: "Anong sasakyan natin papunta roon?",
    scene7Eyebrow: "for the trip 🍫",
    scene7Title: "Piliin mo paborito mo:",
    scene8Eyebrow: "last question 💭",
    scene8Title: "Sino ang sasama sayo?",
    revealBtn: "Reveal 💌",
    scene9Eyebrow: "it's official 💕",
    scene9Title: "Let's make it happen!",
    finalBtn: "Tara na! 🚀",
    hugotText: "This took longer than it should've. Guess I just really wanted you to see it.",
    restartLink: "run it back 🔁"
  }
};
