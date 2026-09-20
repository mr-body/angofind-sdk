import type { BiData } from "./types/BiData";
import type { ContribuinteData } from "./types/ContribuinteData";
import type { GuePublication } from "./types/GuePublication";
import type { GuePublicationURL } from "./types/GuePublicationURL";
import type { PublicationArgs } from "./types/PublicationArgs";
import {
    GET_PUBLICATION,
    GET_PUBLICATION_URL,
    GET_NIF,
    GET_CONTRIBUINTE,
} from "./GraphQL";

export class AngoFind {
    private endpoint: string;

    constructor(endpoint: string = "https://angofind.vercel.app/api/graphql") {
        this.endpoint = endpoint;
    }

    /**
     * Método genérico para executar requisições POST no GraphQL
     */
    private async request<T>(query: string, variables?: Record<string, any>): Promise<T> {
        try {
            const response = await fetch(this.endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    query,
                    variables,
                }),
            });

            const result = (await response.json()) as any;

            if (result.errors) {
                throw new Error(result.errors.map((e: any) => e.message).join(", "));
            }

            return result.data;
        } catch (error) {
            console.error("Erro na requisição GraphQL:", error);
            throw error;
        }
    }

    /**
     * Busca empresas no portal GUE por empresa, nome, NDI ou telefone
     */
    async getPublication(params: PublicationArgs): Promise<GuePublication[]> {
        const data = await this.request<{ Publication: GuePublication[] }>(GET_PUBLICATION, params);
        return data.Publication;
    }

    /**
     * Obtém detalhes extraídos da publicação do GUE a partir da URL
     */
    async getPublicationURL(url: string): Promise<GuePublicationURL> {
        const data = await this.request<{ PublicationURL: GuePublicationURL }>(GET_PUBLICATION_URL, { url });
        return data.PublicationURL;
    }

    /**
     * Consulta informações fiscais/identidade pelo NIF ou BI (DTSER)
     */
    async getNif(ref: string): Promise<BiData> {
        const data = await this.request<{ Nif: BiData }>(GET_NIF, { ref });
        return data.Nif;
    }

    /**
     * Consulta informações do Contribuinte no Portal da AGT / MINFIN
     */
    async getContribuinte(nif: string): Promise<ContribuinteData> {
        const data = await this.request<{ Contribuinte: ContribuinteData }>(GET_CONTRIBUINTE, { nif });
        return data.Contribuinte;
    }
}