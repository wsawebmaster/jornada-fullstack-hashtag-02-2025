# Gabarito da Aula 1

Esta é uma aplicação simples em React construída com Node.js e npm. Serve como um template para criar aplicações React.

## Índice

- [Instalação](#instalação)
- [Uso](#uso)
- [Docker](#docker)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Instalação

Para começar com este projeto, clone o repositório e instale as dependências:

```bash
git clone <repository-url>
cd gabarito-da-aula-1
npm install
```

## Uso

Para rodar a aplicação em modo de desenvolvimento, use o seguinte comando:

```bash
npm start
```

Isso iniciará o servidor de desenvolvimento e abrirá a aplicação no seu navegador padrão.

## Docker

Para construir e rodar a aplicação usando Docker, siga estes passos:

1. Construa e inicie os containers Docker:

   ```bash
   docker-compose up -d
   ```

2. Acesse o container `web` (se necessário):

   ```bash
   docker-compose exec web bash
   ```

A aplicação estará acessível em `http://localhost:3000`.

## Contribuição

Contribuições são bem-vindas! Por favor, abra uma issue ou envie um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.

### Remover todos os contêineres, redes e volumes definidos no arquivo docker-compose.yml

```bash
docker-compose down
```

### Remover contêineres, imagens e limpar redes não utilizadas.

```bash
[ "$(docker ps -q)" ] && docker stop $(docker ps -q); [ "$(docker ps -aq)" ] && docker rm $(docker ps -aq); [ "$(docker images -q)" ] && docker rmi $(docker images -q); docker network prune -f
```

### 📧 Contato

[LinkedIn](https://www.linkedin.com/in/wsawebmaster/)

[wsawebmaster@yahoo.com.br](mailto:wsawebmaster@yahoo.com.br)