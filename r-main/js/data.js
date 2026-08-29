/**
 * Data Configuration & Choice Lists for the Rizz Experience
 */

export const BRING_ITEMS = [
  { key: 'food', label: 'Food / Snacks', emoji: '🍱', img: 'images/bring_food.jpg' },
  { key: 'tent', label: 'Camping Tent', emoji: '⛺', img: 'images/bring_tent.jpg' },
  { key: 'motorcycle', label: 'Motorcycle', emoji: '🏍️', img: 'images/bring_motorcycle.jpg' },
  { key: 'horse', label: 'Horse', emoji: '🐴', img: 'images/bring_horse.jpg' },
  { key: 'dog', label: 'Cute Dog', emoji: '🐶', img: 'images/bring_dog.jpg' },
  { key: 'wifi', label: 'Pocket Wifi', emoji: '📶', img: 'images/bring_wifi.jpg' },
  { key: 'rope', label: 'Rope, Just in Case', emoji: '🪢', img: 'images/bring_rope.jpg' },
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
  { key: 'horse', label: 'Horse', emoji: '🐴', img: 'images/transport_horse.jpg' },
  { key: 'goat', label: 'Goat', emoji: '🐐', img: 'images/transport_goat.jpg' },
  { key: 'dog', label: 'Giant Dog', emoji: '🐶', img: 'images/transport_dog.jpg' },
  { key: 'endportal', label: 'End Portal', emoji: '🌀', img: 'images/transport_endportal.jpg' },
  { key: 'carpet', label: 'Magic Carpet', emoji: '🧞', img: 'images/transport_carpet.jpg' },
  { key: 'louyi', label: 'Lou Yi’s Ultimate', emoji: '⚡', img: 'images/transport_louyi.jpg' }
];

export const FAVORITES = [
  { key: 'chocolate', label: 'Chocolate', emoji: '🍫', img: 'images/fav_chocolate.jpg' },
  { key: 'milk', label: 'Milk or Tea', emoji: '🥛', img: 'images/fav_milk.jpg' },
  { key: 'coffee', label: 'Iced Coffee', emoji: '☕', img: 'images/fav_coffee.jpg' },
  { key: 'icecream', label: 'Ice Cream', emoji: '🍦', img: 'images/fav_icecream.jpg' }
];

export const WHO = [
  { key: 'siya', label: 'THEM', emoji: '👤', img: 'images/who_siya.jpg' },
  { key: 'me', label: 'ME, OF COURSE', emoji: '👑', img: 'images/who_me.jpg' }
];

export const TEXT_CONTENT = {
  english: {
    greeting: (name) => `Hi, <span class="name-highlight">${name}</span> 👀<br>Would you like to explore the world with me?`
  }
};
