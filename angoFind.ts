import type { BiData } from "./types/BiData";
import type { ContribuinteData } from "./types/ContribuinteData";
import type { GuePublication } from "./types/GuePublication";
import type { GuePublicationURL } from "./types/GuePublicationURL";
import type { PublicationArgs } from "./types/PublicationArgs";
import { Request, RequestOptions } from "./request";
import {
    GET_PUBLICATION,
    GET_PUBLICATION_URL,
    GET_NIF,
    GET_CONTRIBUINTE,
} from "./GraphQL";

export class AngoFind {
    private requester: Request;

    constructor(config: RequestOptions) {
        this.requester = new Request(config);
    }

    /**
     * Busca empresas no portal GUE por empresa, nome, NDI ou telefone
     */
    async getPublication(params: PublicationArgs): Promise<GuePublication[]> {
        const data = await this.requester.send<{ Publication: GuePublication[] }>(GET_PUBLICATION, params);
        return data.Publication;
    }

    /**
     * Obtém detalhes extraídos da publicação do GUE a partir da URL
     */
    async getPublicationURL(url: string): Promise<GuePublicationURL> {
        const data = await this.requester.send<{ PublicationURL: GuePublicationURL }>(GET_PUBLICATION_URL, { url });
        return data.PublicationURL;
    }

    /**
     * Consulta informações fiscais/identidade pelo NIF ou BI (DTSER)
     */
    async getNif(ref: string): Promise<BiData> {
        const data = await this.requester.send<{ Nif: BiData }>(GET_NIF, { ref });
        return data.Nif;
    }

    /**
     * Consulta informações do Contribuinte no Portal da AGT / MINFIN
     */
    async getContribuinte(nif: string): Promise<ContribuinteData> {
        const data = await this.requester.send<{ Contribuinte: ContribuinteData }>(GET_CONTRIBUINTE, { nif });
        return data.Contribuinte;
    }
}