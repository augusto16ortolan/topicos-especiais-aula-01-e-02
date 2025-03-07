const axios = require("axios");

async function buscarPersonagem(nomeDoPersonagem) {
  try {
    const url = `https://swapi.dev/api/people?search=${nomeDoPersonagem}`;
    const response = await axios.get(url);
    let personagens = response.data.results;

    return personagens[0];
  } catch (error) {
    console.error(
      "Ocorreu um erro ao buscar o personagem. Erro: ",
      error.message
    );
  }
}

async function buscarNaves(urls) {
  try {
    const requisicoes = urls.map((url) => axios.get(url));

    const responses = await Promise.all(requisicoes);
    const naves = responses.map((r) => {
      const { name, films } = r.data;

      return {
        name,
        films,
      };
    });
    return naves[0];
  } catch (error) {
    console.error("Ocorreu um erro ao buscar os naves. Erro: ", error.message);
  }
}

async function buscarFilmes(urls) {
  try {
    const requisicoes = urls.map((url) => axios.get(url));

    const responses = await Promise.all(requisicoes);
    const filmes = responses.map((r) => {
      const { title, opening_crawl } = r.data;

      return {
        title,
        opening_crawl,
      };
    });
    return filmes;
  } catch (error) {
    console.error("Ocorreu um erro ao buscar os filmes. Erro: ", error.message);
  }
}

async function main() {
  const { name, height, gender, films, starships } = await buscarPersonagem(
    "Darth Vader"
  );

  let dadosPersonagem = {
    name,
    height,
    gender,
  };

  const { name: nomeDaNave, films: filmesDaNave } = await buscarNaves(
    starships
  );

  let filmes = await buscarFilmes(filmesDaNave);

  console.log("Dados do personagem: ", dadosPersonagem);
  console.log("A nave que ele pilota: ", nomeDaNave);
  console.log("Os filmes que a nave aparece: ", filmes);
}

main();
