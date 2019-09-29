# 55pbx_task
Tarefa para seleção de desenvolvedor Node.js júnior/pleno.


# Como preparar o ambiente local
## __1-__ Clone o projeto e instale as dependências:

```
$ git clone https://github.com/ImOhashi/55pbx_task.git
$ cd 55pbx_task
$ yarn
```

## __2-__ Configure o usuário do Mongo Express no arquivo __docker-compose.yml__:

```
ME_CONFIG_BASICAUTH_USERNAME: <<Nome de usuário do Mongo Express>>
ME_CONFIG_BASICAUTH_PASSWORD: <<Senha do Mongo Express>>
```

O usuário e senha do container do MongoDB já estão configurados, mas caso queira reconfigurar, [siga essas recomentações](https://github.com/ImOhashi/Docker-Compose-Mongo).

## __3-__ Suba os containers Docker:

O seguinte comando ira gerar as imagens dos containers Docker com o banco de dados Mongo e o SGBD Mongo Express:

```
docker-compose up -d
```

## __4-__ Rode o servidor com PM2:

```
yarn start
```