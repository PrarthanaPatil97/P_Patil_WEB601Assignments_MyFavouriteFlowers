class FlowerList {
        private contentCount = 0;
       private _items: Flower[];
        constructor(item: Flower) {
        this._items = []; // initialize array
        this._items[0] = item;
    }
    get items(): Flower[]{
        return this._items;
        }
    set items(newItems: Flower[]) {
            this._items = newItems;
          }
    }
    