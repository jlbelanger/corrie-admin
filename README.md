# Corrieography Admin

## Development

### Requirements

- [Git](https://git-scm.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install)

### Setup

First, setup [Corrieography](https://github.com/jlbelanger/corrie).

``` bash
git clone https://github.com/jlbelanger/corrie-admin.git
cd corrie-admin
./setup.sh
yarn start
```

Your browser should automatically open http://localhost:3000/admin

### Lint

``` bash
yarn lint
```

### Test

``` bash
yarn test:cypress
```

## Deployment

Note: The deploy script included in this repo depends on other scripts that only exist in my private repos. If you want to deploy this repo, you'll have to create your own script.

``` bash
./deploy.sh
```
