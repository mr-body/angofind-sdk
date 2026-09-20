export const GET_NIF = `
  query GetNif($ref: String!) {
    Nif(ref: $ref) {
      numero
      nome_completo
      denominacao
      nome
      email
      telemovel
      numero_contacto
      data_constituicao
      nif_administrador
      utente_morada2
      apelido
      nif
      data_nasc
      genero
      naturalidade
      pai_nome_completo
      mae_nome_completo
      estado_civil
      data_emissao
      emissao_local
    }
  }
`;
