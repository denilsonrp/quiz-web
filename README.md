# 💻 Cadastro de Questionários

Aplicação web para criação e listagem de questionários

## 📦 Instalação e execução

```bash
# Faça o clone do repositório
git clone git@github.com:denilsonrp/quiz-web.git
```

```bash
# Instale as dependências
yarn install
```

```bash
# Executar aplicação em modo desenvolvimento (servidor local na porta :9000)
yarn server

# Ou abrir o arquivo index.html no browser (nesse caso, garantir que o build atualizado para produção esteja gerado em /public/dist/)
```

```bash
# Gerar arquivos para produção
yarn build:prod
```

Garantir que a baseURL do arquivo ```/assets/src/js/services/api-config.js``` esteja apontando corretamente para a API. Por padrão, a porta usada para acessar a API local é a :3001

## 🛠️ Tecnologias utilizadas

- [webpack v4.42.1](https://webpack.js.org/)
- [font-awesome v5.13.0](https://fontawesome.com/v5.13.0/icons/)
- [normalize.css v8.0.0](https://necolas.github.io/normalize.css/8.0.0/normalize.css)
- [itcss](https://willianjusten.com.br/organizando-seu-css-com-itcss/)
- [rscss](https://willianjusten.com.br/falando-sobre-rscss/)
