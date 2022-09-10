import * as jsonfile from "jsonfile";

class Product {
  id: number;
  name: string;
}

class ProductCollection {
  data: any[] = [];

  async getAll() {
    const resultado = await jsonfile.readFile(__dirname + "/prueba.json");
    this.data = resultado;
    // console.log(this.data); ///{"id":1,"name":"Ezequiel"},{"id":2,"name":"Martin"}
    return resultado;
  }
  async getById(id: number) {
    ///this.data <<<<< [] vacio
    return await this.data.find((item) => item.id == id); //<--Undefined

    // return (await this.getAll()).find((item) => item.id == id);
  }
}

export { ProductCollection };

const controller = new ProductCollection();
