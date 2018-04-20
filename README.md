# NgPwa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Http-server

## rm mkdir cp

1. npm install rimraf cpr make-dir-cli --save-dev
2. npm install --global copy
3. npm install --global make-dir-cli
4. npm install scripty --save-dev
5. npm install --global opn-cli
6. npm install onchange --save-dev
7. npm install imagemin-cli --save-dev

## Cygwin
1. 安装Cygwin https://cygwin.com/
2. C:\cygwin64\home\UserName
3. openssl genrsa -out key.pem 1024
4. openssl req -new -key key.pem -out cert.csr
5. openssl x509 -req -in cert.csr -signkey key.pem -out cert.pem
6. http-server -S  -C cert.pem -K key.pem

## Ngrok
1. "build": "ng build --prod",
2. "http:server": "cd dist && http-server -p 9088",
3. "ngr": "ngrok http 9088",

## PWA demo
[https://wkylin.github.io/ng-pwa/](https://wkylin.github.io/ng-pwa/)
