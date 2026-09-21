import { AngoFind } from "./dist"

const angofind = new AngoFind({
    apiKey: "c82954b0-1807-4e38-8bb9-0e5188b88b87",
});

async function main() {
    const data = await angofind.getPublication({
        telefone: "942419531"
    });

    const name = data[0].nif

    console.log(name)
}

main()