export const GET_PUBLICATION = `
  query GetPublication($empresa: String, $nome: String, $ndi: String, $telefone: String) {
    Publication(empresa: $empresa, nome: $nome, ndi: $ndi, telefone: $telefone) {
      posicao
      nome
      dataPublicacao
      nif
      origem
      link
    }
  }
`;
