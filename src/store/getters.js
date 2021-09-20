const getters = {
  biosTitle: state => state.bios[0],
  biosContent: state => state.bios[1],
  booksTitle: state => state.books[0],
  booksContent: state => state.books[1],
  booksSeries: state => state.books[1].items[0],
};

export default getters;
