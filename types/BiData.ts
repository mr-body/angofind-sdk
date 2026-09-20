// Dados do BI ou NIF retornados pelo DTSER
export interface BiData {
    numero?: string | null;
    nome_completo?: string | null;
    denominacao?: string | null;
    nome?: string | null;
    email?: string | null;
    telemovel?: string | null;
    numero_contacto?: string | null;
    data_constituicao?: string | null;
    nif_administrador?: string | null;
    utente_morada2?: string | null;
    apelido?: string | null;
    nif?: string | null;
    data_nasc?: string | null;
    genero?: string | null;
    naturalidade?: string | null;
    pai_nome_completo?: string | null;
    mae_nome_completo?: string | null;
    estado_civil?: string | null;
    data_emissao?: string | null;
    emissao_local?: string | null;
}