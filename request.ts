export interface RequestOptions {
    server?: string;
    apiKey: string;
    option?: RequestInit;
}

export class Request {
    private server: string;
    private apiKey: string;
    private option: RequestInit;

    constructor({ server = "https://angofind.vercel.app/api/graphql", apiKey, option = {} }: RequestOptions) {
        if (!apiKey) {
            throw new Error("API_KEY não fornecida");
        }
        this.server = server;
        this.apiKey = apiKey;
        this.option = option;
    }

    /**
     * Executa requisições POST genéricas no GraphQL
     */
    async send<T>(query: string, variables?: Record<string, any>): Promise<T> {
        try {
            const response = await fetch(this.server, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": this.apiKey,
                    ...(this.option.headers || {}),
                },
                body: JSON.stringify({
                    query,
                    variables,
                }),
                ...this.option,
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
}