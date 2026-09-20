import { AngoFind } from "./dist";

const angofind = new AngoFind();

async function main() {
    const data = await angofind.getContribuinte("000000000kn044");

    const name = data.nome

    console.log(name)
}

main()