class FlowerList {
        private flowerCount = 0;
       private _items: Flower[];
        constructor(item: Flower) {
        this._items = []; // initialize array
        let name: string;
        name:'prarthana';
        
    }
    get items(): Flower[]{
        return this._items;
        }
    set items(newItems: Flower[]) {
            this._items = newItems;
          }
    }
    