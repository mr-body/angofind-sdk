import { AngoFind } from "./dist"

const angofind = new AngoFind({
    apiKey: "c82954b0-1807-4e38-8bb9-0e5188b88b87",
});

async function main() {
    const data = await angofind.getContribuinte("00000000000KN44");

    console.log(data)
}

main()