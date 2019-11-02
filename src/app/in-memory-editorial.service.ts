import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryEditorialService implements InMemoryDbService {
  createDb() {
    let editorials = [
      {
        id: 1,
        name: "Oveja Negra",
        description: "Donec at dolor quam. Nam eu turpis ac arcu blandit commodo dapibus lacinia quam. Fusce fringilla congue sodales. Suspendisse pharetra metus vel leo efficitur malesuada. In dictum eget libero nec viverra. Donec molestie non tortor sed faucibus. Quisque non eros in ipsum imperdiet malesuada. In tristique ut dui quis euismod. Etiam fermentum consequat nulla sit amet pretium. Cras non lobortis nisl. Proin gravida elit non ex ultrices, ac facilisis purus congue. Donec vestibulum ultricies nunc, nec euismod nibh rhoncus in. Proin euismod porta tellus, sit amet egestas nibh porttitor iaculis."
      },
      {
        id: 2,
        name: "Siruela",
        description: "Donec at dolor quam. Nam eu turpis ac arcu blandit commodo dapibus lacinia quam. Fusce fringilla congue sodales. Suspendisse pharetra metus vel leo efficitur malesuada. In dictum eget libero nec viverra. Donec molestie non tortor sed faucibus. Quisque non eros in ipsum imperdiet malesuada. In tristique ut dui quis euismod. Etiam fermentum consequat nulla sit amet pretium. Cras non lobortis nisl. Proin gravida elit non ex ultrices, ac facilisis purus congue. Donec vestibulum ultricies nunc, nec euismod nibh rhoncus in. Proin euismod porta tellus, sit amet egestas nibh porttitor iaculis."
      },
      {
        id: 3,
        name: "Plaza y Janes",
        description: "Donec at dolor quam. Nam eu turpis ac arcu blandit commodo dapibus lacinia quam. Fusce fringilla congue sodales. Suspendisse pharetra metus vel leo efficitur malesuada. In dictum eget libero nec viverra. Donec molestie non tortor sed faucibus. Quisque non eros in ipsum imperdiet malesuada. In tristique ut dui quis euismod. Etiam fermentum consequat nulla sit amet pretium. Cras non lobortis nisl. Proin gravida elit non ex ultrices, ac facilisis purus congue. Donec vestibulum ultricies nunc, nec euismod nibh rhoncus in. Proin euismod porta tellus, sit amet egestas nibh porttitor iaculis."
      },
      {
        id: 4,
        name: "Norma",
        description: "Donec at dolor quam. Nam eu turpis ac arcu blandit commodo dapibus lacinia quam. Fusce fringilla congue sodales. Suspendisse pharetra metus vel leo efficitur malesuada. In dictum eget libero nec viverra. Donec molestie non tortor sed faucibus. Quisque non eros in ipsum imperdiet malesuada. In tristique ut dui quis euismod. Etiam fermentum consequat nulla sit amet pretium. Cras non lobortis nisl. Proin gravida elit non ex ultrices, ac facilisis purus congue. Donec vestibulum ultricies nunc, nec euismod nibh rhoncus in. Proin euismod porta tellus, sit amet egestas nibh porttitor iaculis."
      }
    ];
    return { editorials };
  }
}
