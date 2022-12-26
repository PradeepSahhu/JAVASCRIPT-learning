const books = class {
  constructor(
    AuthorName,
    pages,
    price,
    type // class properties. // class parameters
  ) {
    (this.Name = AuthorName),
      (this.pages = pages),
      (this.cost = price),
      (this.type = type),
      (this.of = "Pradeep Sahu");
  }
  setName(AuthorNameValue) {
    this.name = AuthorNameValue;
  }
  setCost(Cost) {
    this.cost = Cost;
  }
  settype(typeValue) {
    this.type = typeValue;
  }
  setPages(pagesCount) {
    this.pages = pagesCount;
  }
  setof(ownerName) {
    this.of = ownerName;
  }
};
export default books;
