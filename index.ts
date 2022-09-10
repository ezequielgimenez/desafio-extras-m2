import { ProductController } from "./controllers";

function parseaArgumentos(argv) {
  var argv = require("minimist")(process.argv.slice(2));
  return {
    search: argv.search,
  };
}

async function main() {
  const controller = new ProductController();
  const argumentosTerminal = parseaArgumentos(process.argv.slice(2));
  const resultado = await controller.processOptions(argumentosTerminal);
  console.log(resultado);
}
main();
