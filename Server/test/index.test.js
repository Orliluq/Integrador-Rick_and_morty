const app = require('../src/app');
const session = require('supertest');
const request = session(app);

const character = {
    id: 923,
    name: 'Orli',
    species: 'Human',
    gender: 'Female',
    status: 'Alive',
    origin: {
        name: 'Earth (C-139)'
    },
    image: 'image.jpg' 
};

describe("test de RUTAS", () => {
    describe("GET /rickandmorty/character/:id", () => {
        it("Responde con status: 200", async () => {
            const response = await request.get('/rickandmorty/character/1');
            expect(response.statusCode).toBe(200);
        });

        it("Responde un objeto con las propiedades: 'id', 'name', 'species', 'gender', 'status', 'origin' e 'image'", 
        async () => {
            const response = await request.get('/rickandmorty/character/1');
            for(const prop in character){
                // console.log(response.body); 
                expect(response.body).toHaveProperty(prop);
            };
        });

        it("Si hay un error responde con status: 500", async () => {
            const response = await request.get('/rickandmorty/character/3209j');
            expect(response.statusCode).toBe(500);
        });
    });

    describe("GET /rickandmorty/login", () => {
        const access = { access: true };

        it("Responde con un objeto con la propiedad access en true si la información del usuario es válida",
        async () => {
            const response = await request.get('/rickandmorty/login?email=orlibet@gmail.com&password=luq123');
            expect(response.body).toEqual(access);
        });

        it("Responde con un objeto con la propiedad access en false si la información del usuario es válida",
        async () => {
            const response = await request.get('/rickandmorty/login?email=orlibet@mail.com&password=qul132');
            access.access = false;
            expect(response.body).toEqual(access);
        });
    });

    describe("POST /rickandmorty/fav", () => {
        it("Debe guardar el personaje en favoritos", 
        async () => {
            const response = await request.post('/rickandmorty/fav').
            send(character);
            expect(response.body).toContainEqual(character);
        });

        it("Debe agregar personajes a favoritos sin eliminar los existentes", 
        async () => {
            character.id = 1923;
            character.name = 'FT-39a';
            const response = await request.post('/rickandmorty/fav').
            send(character);
            // console.log(response.body); 
            expect(response.body.length).toBe(2);  
        });
    });

    describe("DELETE /rickandmorty/fav/:id", () => {
        it("Si el ID solicitado no existe, debería retornar un arreglo con todos los favoritos",
        async () => {
            const response = await request.delete('/rickandmorty/fav/2gh56');
            expect(response.body.length).toBe(2);
        });

        it("Si el ID enciado existe, debería eliminarlo de favoritos", 
        async () => {
            const response = await request.delete('/rickandmorty/fav/1923');
            expect(response.body.length).toBe(1);  
        });
    });
});


// const app = require("../src/app");
// const session = require("supertest"); // ezyme
// const agent = session(app);

// describe("Tests de Rutas", () => {
//   describe("GET /rickandmorty/character/:id", () => {
//     it("Responde con status: 200", async () => {
//       await agent.get("/rickandmorty/character/1").expect(200);
//     });

//     it(`Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"`, async () => {
//       const {body} = await agent.get("/rickandmorty/character/1");

//       const atributes = [
//         "id",
//         "name",
//         "species",
//         "gender",
//         "status",
//         "origin",
//         "image",
//       ];

//       const keys = Object.keys(body);

//       atributes.forEach((atribute) => {
//         expect(keys).toContain(atribute);
//       });
//     });

//     it("Si hay un error responde con status: 500", async () => {
//       await agent.get("/rickandmorty/character/bartolomiau").expect(500);
//     });
//   });

//   describe("GET /rickandmorty/login", () => {
//     it("Informacion sea correcta y nos de acceso", async () => {
//       const {body} = await agent.get(
//         "/rickandmorty/login?email=gama@gmail.com&password=gamaliel1"
//       );

//       expect(body.access).toEqual(true);
//     });

//     it("Informacion sea incorrecta y nos bloquea", async () => {
//       const {body} = await agent.get(
//         "/rickandmorty/login?email=gama@gmail.com&password=esteestamal"
//       );

//       expect(body.access).toEqual(false);
//     });
//   });

//   describe("POST /rickandmorty/fav", () => {
//     const char1 = {id: 1, name: "Gama"};
//     const char2 = {id: 2, name: "Benjamin"};

//     it("Devuelve un array con el personaje", async () => {
//       const {body} = await agent.post("/rickandmorty/fav").send(char1);

//       expect(body).toContainEqual(char1);
//     });

//     it("Al enviar mas de un elemento devuelve todos los elementos", async () => {
//       const {body} = await agent.post("/rickandmorty/fav").send(char2);
//       expect(body).toContainEqual(char1);
//       expect(body).toContainEqual(char2);
//     });
//   });

//   describe("DELETE /rickandmorty/fav/:id", () => {
//     const char1 = {id: 1, name: "Gama"};
//     const char2 = {id: 2, name: "Benjamin"};

//     // beforeAll(async()=>{
//     //   await agent.post("/rickandmorty/fav").send(char1);
//     //   await agent.post("/rickandmorty/fav").send(char2);
//     // })

//     it("Si no se envia un ID correcto se devuelve el mismo array", async () => {
//       const {body} = await agent.delete("/rickandmorty/fav/7162354");

//       expect(body).toContainEqual(char1);
//       expect(body).toContainEqual(char2);
//     });

//     it("Elimina correctamente al personaje que contenga el ID", async () => {
//       const {body} = await agent.delete("/rickandmorty/fav/1");

//       expect(body).not.toContainEqual(char1);
//     });
//   });
// });
