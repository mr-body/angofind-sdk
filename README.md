# @mrbody/angofind

Official JavaScript & TypeScript SDK for the **AngoFind API**. Easily integrate queries for company publications (GUE), NIF/BI details, and taxpayer information (AGT) into your applications.

---

## 📦 Installation

To install dependencies:

```bash
npm i @mrbody/angofind
```

## 🚀 Usage

```javascript
import { AngoFind } from "@mrbody/angofind"

const angofind = new AngoFind({
    apiKey: YOUR_API_KEY_HERE,
});

```

### 🏗️ Searching by  (telefone/empresa/ndi/nome)


```javascript
async function main() {
    const data = await angofind.getPublication({
        telefone: "920000000"
    });
}
```


```typescript
{
    posicao?: string | null;
    nome?: string | null;
    dataPublicacao?: string | null;
    nif?: string | null;
    origem?: string | null;
    link?: string | null;
}
```

### Searching by BI/NIF
```javascript
async function main() {
    const data = await angofind.getNif("500008796");
    console.log(data)
}
```
```typescript
{
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
```

### Searching by Publication URL (GUE)

```javascript
async function main() {
    const data = await angofind.getPublicationURL("https://gue.gov.ao/portal/publicacao/ver/000000");

    console.log(data)
}
```

```typescript
{
    source?: string | null;
    registrationNumber?: string | null;
    companyName?: string | null;
    capital?: string | null;
    subject?: string | null;
    headquarters?: string | null;
    partner?: string | null;
    manager?: string | null;
    signedDate?: string | null;
    rawText?: string | null;
}
```

### Searching by NIF (AGT)

```javascript
async function main() {
    const data = await angofind.getContribuinte("00000000000KN44");

    console.log(data)
}
```

```typescript
{
    nif?: string | null;
    nome?: string | null;
    denominacao?: string | null;
    estado?: string | null;
    reparticaoFiscal?: string | null;
    tipoContribuinte?: string | null;
    dataInicioAtividade?: string | null;
    atividadePrincipal?: string | null;
    rawText?: string | null;
}
```

This project was created using `bun init` in bun v1.4.0. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.