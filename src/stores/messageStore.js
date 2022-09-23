import { writable } from "svelte/store";

const createMessageStore = () => {
  const messageList = [
    {
      id: 0,
      text: "My favorite quotes of Homer Simpson",
      time: "3:14 PM",
      received: true,
      first: true,
    },
    {
      id: 1,
      text: "Maybe, just once, someone will call me 'Sir', without adding 'you are making a scene'.",
      time: "3:15 PM",
      received: true,
      first: false,
    },
    {
      id: 2,
      text: "Doh!",
      time: "3:16 PM",
      received: false,
      first: true,
    },
  ];

  const { subscribe, set, update } = writable(messageList);

  return {
    subscribe,
    set,
    addMessage: (message) => update((data) => [...data, message]),
    removeMessage: (id) => update((data) => data.filter((u) => u.id !== id)),
  };
};

export const messageStore = createMessageStore();
