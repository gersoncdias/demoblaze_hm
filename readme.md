# Automação Bemoblaze_hm

- Este é o projeto de automação utilizando Cypress para testes de interface. 

## Descrição do Projeto

- O projeto tem como objetivo principal realizar testes automatizados para assegurar que suas funcionalidades estejam conforme o esperado. Além disso, busca-se validar a experiência do usuário, identificar possíveis falhas de usabilidade e garantir sua consistência.

### Estrutura do projeto
```
├── cypress
│   ├── e2e
│   │   └── home.cy.js
│   ├── fixtures
│   │   └── home.json
│   └── support
│       ├── commands.js
│       ├── e2e.js
│       └── page_elements
│           └── home_page.js
├── cypress.config.js
├── package.json
└── readme.md

```
### Instalação de Dependências

Certifique-se de ter o Node.js instalado em sua máquina. Em seguida, você pode instalar as dependências do projeto executando o seguinte comando no terminal:

- npm install

### Versão das Ferramentas

- Cypress: 13.6.4
- Cypress Plugin XHR Toggle: 1.2.1
- ESLint: 8.55.0
- Prettier: 3.1.0
- NodeJS: 20
- NPM: 10.2.4

### Instalação

- Abra o terminal e navegue até o diretório onde deseja clonar o repositório do GitHub. Em seguida, execute o seguinte comando:
 `git clone https://github.com/gersoncdias/demoblaze_hm`
- Entre no diretório do projeto recém-clonado usando o comando: 
`cd nome-repositorio`
- Edite o arquivo cypress_exemplo.env.json para cypress.env.json e insera seus dados
- Execute o seguinte comando para instalar as dependências do projeto, incluindo o Cypress: `npm i`

### Principais comandos para execução dos testes

NO  pronpt de comando:
Navegar até a pasta do projeto e execute um dos comando abaixo:

Para abrir a IDE do Cypress e executar os testes:


`npx cypress open`


Para executar todos os testes em modo headless:

`npx cypress run`


### Plugins

- Controle do comportamento das solicitações XHR durante a execução dos testes [cypress-plugin-xhr-toggle](https://www.npmjs.com/package/cypress-plugin-xhr-toggle)
