import { Content } from "./content-interface";

export class ContentList {
    static flowerCount = 0;
    private _items: Content[];
    constructor(item: Content) {
      this._items = []; // initialize array
      this._items[0]=item;
      this.increaseCount();
  }
increaseCount(){
  return ++ContentList.flowerCount;
}


get items(): Content[]{
  return this._items;
  }
set items(newItems: Content[]) {
      this._items = newItems;
    }
}