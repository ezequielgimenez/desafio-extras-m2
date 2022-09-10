import { ProductCollection } from "./models";

export class ControllerOptions {
  search: any;
}

class ProductController {
  collection: ProductCollection;
  constructor() {
    this.collection = new ProductCollection();
    this.collection.getAll();
  }

  processOptions(options: ControllerOptions) {
    if (options.search) {
      return this.collection.getById(options.search);
    } else {
      return this.collection.getAll();
    }
  }
}

export { ProductController };
