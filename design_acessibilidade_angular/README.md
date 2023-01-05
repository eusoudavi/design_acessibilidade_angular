# A11yP1

## Projeto do curso desatualizado

O projeto inicial foi desenvolvido no  [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.

Atualmente (Jan/2023) a versão LTS do Node é 18.12.1. Logo, para que o Angular funcione nessa versão, é preciso fazer o upgrade do Angular.
Esse upgrade é possível ser feito no [site](https://update.angular.io/?v=10.2-13.0).

Abixo segue o procedimento que fiz com base no site [upgrade.angular.io](https://update.angular.io/?v=10.2-13.0).

### Upgrade Angular

O primeiro passo é atualizar o Angular para a versão 11. O código para isso é:

`ng update @angular/core@11 @angular/cli@11 --allow-dirty --force`

Em seguida, o site orienta à atualizar a dependência @angular/material. Como não temos essa depêndencia em nosso projeto, intalamos da seguinte forma:

`npm install @angular/material@11`

Feito isso, o Angular vai precisar do TypeScript 4.0. Para isso, vamos executar:

`ng update`

Acrescentamos `"resolutions":{"webpack":"^5.0.0"}` ao `package.json`

Repetimos o processo agora para migrarmos o Angular para a versão 12:

```
ng update @angular/core@11 @angular/cli@11 --allow-dirty --force
ng update @angular/material@12 --allow-dirty --force
ng update
```

Agora já podemos migrar para a versão 13 com os seguintes procedimentos:

```
npx @angular/cli@13 update @angular/core@13 @angular/cli@13 --allow-dirty --force
ng update @angular/material@13 --allow-dirty --force
```

Nesse ponto, o projeto está rodando com o Angular na versão 13 e é compatível com o Node LTS (18.12.1)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
