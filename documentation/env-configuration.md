## Env Configuration

- Create env file in root directory, example:

```sh
 .env.development.local
```

- After that, update package.json according to the env that was created, example:

```sh
 "dev:development": "NODE_ENV=development next dev -p 5001"
```

- If everything is appropriate, run the command according to what you created earlier

```sh
 yarn run dev:development
```
