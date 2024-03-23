# Espaço TEIA

Projeto de site responsivo para exibição de uma galeria de títulos no formato de cards, contendo título, thumbnail, índice e texto. Os dados são recebidos no formato JSON e paginados, permitindo sua exibição com excelente tempo de resposta, mesmo operando um grande volumes de dados. O usuário poderá manipular a galeria efetuando ordenamentos e filtros através de pesquisa sobre os dados dos títulos. Esta aplicação WEB foi desenvolvida dentro do Desafio para Desenvolvedores Frontend do processo de recrutamento do Programa CAIXA Digital, uma iniciativa da ação Transformação Digital da Caixa.

## 🚀 Documentação

A documentação desta aplicação está divida em tópicos, sendo orientado sua leitura integral.

### Sumário

* **[Pré-requisitos](#-implanta%C3%A7%C3%A3o)**
* **[Instalação](#-implanta%C3%A7%C3%A3o)**
* **[Estrutura do Código](#-implanta%C3%A7%C3%A3o)**
* **[Construído com](#-implanta%C3%A7%C3%A3o)**
* **[Autores](#-implanta%C3%A7%C3%A3o)**
* **[Licença](#-implanta%C3%A7%C3%A3o)**


### 📋 Pré-requisitos

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

De que coisas você precisa para instalar o software e como instalá-lo?

Para copiar o projeto, você tem de ter o [GIT](https://git-scm.com/downloads):

```
# Obtenha o GIT
Baixe a ultima versão no site https://git-scm.com/downloads

# Instale o GIT no seu sistema operacional
```

Para instalar o projeto você precisa do [NODE.JS](https://nodejs.org/en/download/current) e seu gerenciados de pacotes NPM:

```
# Obtenha o Node.js
Baixe uma versão v18.13.0 (preferência) ou superior no site https://nodejs.org/en/download/current

# Instale o Node.js no seu sistema operacional e, durante a instalação, escolha a instalação do npm package manager

# Desculpe reiterar, mas certifique-se de que tem a versão v18.13.0 (preferência) ou superior
# No aplicativo de prompt de comando (ex: CMD no Windows) digite para verificar:
node --version
```

A partir de agora vamos usar sempre o prompt de comando (ex: CMD no Windows) para os comandos.

Seu NODE.JS precisa do Angular v17:

```
# Instale o Angular como dependência do NODE.JS
npm install -g @angular/cli
```

Você está pronto para instalar a aplicação!

### 🔧 Instalação

Execute o passo-a-passo abaixo no prompt de comando (ex: CMD no Windows) para ter um ambiente de desenvolvimento em execução.

Primeiro vamos clonar o projeto do repositório para sua máquina:

```
# No prompt de comando navegue para o diretório de destino do projeto.
# Clone o repositório GIT
git clone https://github.com/hcfmpc/desafio-caixa-teia.git
```

Agora vamos instalar as dependências do projeto:

```
# Navegue o prompt para dentro da pasta do projeto (ex: cd desafio-caixa-teia)
# Inicie a instalação das dependências
npm install
```

Inicie o projeto no modo desenvolvimento:

```
# Você pode iniciar com o Angular
ng s

# E também pode iniciar com NPM, que reconhecerá a tag "start" configurada no package.json do projeto que fará o comando "ng s"
npm run start
```

O site estará disponível na URL [http://localhost:4200/](http://localhost:4200/), sendo executado em modo desenvolvimento localmente.


## ⚙️ Estrutura do Código

Esta aplicação foi desenvolvida respeitando o Design de Arquitetura orientado pela TI Caixa para aplicações WEB frontend departamentais em Angular, sendo empregado boas práticas de programação orientada a objeto (Clean Code e Clean Architechture) bem como o empregado de funcionalidades implementadas no ECMAScript 6.

### 🔩 Organização de Pastas do Projeto

Explique que eles verificam esses testes e porquê.

```
src
    app
    assets
    environments
```

* app

    Nesta pasta constam a aplicação de fato, entidades, domínios e todas as regras de negócios a serem aplicadas para o que se destina a aplicação. Sua explicação será detalhada num item a parte. 

* assets

    Nesta pasta são mantidas todos os arquivos (imagens, fontes, etc) que são referenciados no projeto e devem ter seu estado copiado na íntegra para o servidor/serviço de execução.

* environments

    Nesta pasta mantemos as variáveis de ambiente responsáveis por prover às versões de produção e desenvolvimento as rotas corretas para execução da aplicação nos respectivos ambientes.


```
src
    app
        app
        core
            http
            layout
            models
            services
            store
                galeria
        features
        shared
            components
```

### 🔩 Detalhes da arquitetura empregada no app

A pasta app, comporta:

* src\app\app
    Conforme orientação SUART o componente app foi isolado para melhor organização uma vez que há baixa utilização do mesmo, preservando o router e config da aplicação na pasta original.

* src\app\core
    Nesta pasta toda a infraestrutura e modelagem é organizada.
    Na pasta "http" mantemos um serviço HTTP com interface própria que implemntar um REST que consome o HttpClient do Angular, de forma que possamos organizar o consumo das variáveis de ambiente para o serviço.
    Na pasta "layout" mantemos os detalhes fixos do layout da aplicação, compostos de componentes isolados header, footer e sidenav com relações diretas com a aplicação e a responsividade final da aplicação.
    Na pasta "models" mantemos as classes de entidades/domínio da aplicação de forma a centralizar questões prioritárias relativas às regras de negócios da aplicação.
    Na pasta "services" mantemos serviços que mantem a aplicação, sendo voltados à funcionalidade padrão. Demais serviços são implementados dentro dos componentes.
    Na pasta "store" mantemos o estado da aplicação que é atualizados pelas services através de métodos próprios e que tem seu estado servido aos consumidores via Signals Angular na orígem e propriedades Computed Angular no cliente/component final.

* src\app\features
    Aqui estão as funcionalidades da aplicação desmembradas em componentes especializados que consomem através de propriedades Computed Angular o estado da aplicação mantido nas store. Estes componentes se utilizam de services da aplicação ou vinculadas ao mesmo para requisitar dados aos fornecedores.

* src\app\shared
    Nesta pasta são mantidos funções e componentes compartilhados, como exemplo componentes de botões/cards ou funções de normalização, que serão consumidos por várias partes da aplicação.
    

## 🛠️ Construído com

Para contrução da aplicação foram utilizadas as seguintes ferramentas.

* [Angular v17](https://angular.dev/) - Framework web
* [Angular Material 17](https://material.angular.io/) - Biblioteca CSS
* [Bootstrap 5](https://getbootstrap.com/) - Biblioteca CSS
* [VSCode 1.87.2](https://code.visualstudio.com/) - Editor de código
* [GIT](https://github.com/) - Repositório


## ✒️ Autores

* **Elias Jácome** - GIT: [@hcfmpc](https://github.com/hcfmpc)


## 📄 Licença

Este projeto está sob a licença (MIT).
