export const GET_CONTRIBUINTE = `
  query GetContribuinte($nif: String!) {
    Contribuinte(nif: $nif) {
      nif
      nome
      denominacao
      estado
      reparticaoFiscal
      tipoContribuinte
      dataInicioAtividade
      atividadePrincipal
      rawText
    }
  }
`;
