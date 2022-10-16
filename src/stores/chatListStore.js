import { writable } from "svelte/store";

const chatStore = () => {
  const chatList = [
    {
      id: 0,
      name: "Homer Simpson",
      imgUrl: "/homer.jpg",
      verified: false,
    },
    {
      id: 1,
      name: "Bart Simpson",
      imgUrl: "/bart.jpg",
      verified: false,
    },
  ];

  const { subscribe, set, update } = writable(chatList);

  return {
    subscribe,
    set,
    addUser: (user) => update((data) => [...data, user]),
    removeUser: (id) => update((data) => data.filter((u) => u.id !== id)),
  };
};

export const chatListStore = chatStore();
