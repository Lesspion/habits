To start this project make sure you've typescript, typings, nodemon, yarn

## Global Install

```bash
npm install -g typescript
npm install -g bower
npm install -g typings
```

And for install yarn, please check the [official yarn website]

## Begin

```bash
typings install
yarn install
```

To build the project: ```yarn run build```

To start the project: ``` yarn run start ```

To watch (compile and restart) the project: ``` yarn run watch ```

(You can also use these different tasks with the npm command)

I recommend to work with visual-studio-code, because it's one of the most popular editor to write in typescript.

### TODO
- [ ] npm tasks (build, watch, start, test, setup, sass, lint)
    - [x] build
    - [x] watch
    - [x] start
    - [x] setup
    - [x] sass
    - [x] js
    - [x] move-static-files
    - [ ] lint
    - [ ] test
- [ ] Config
    - [x] DB
    - [x] Server
    - [x] Static files
    - [x] Views
    - [ ] Set Server/request/reply Interface with new method (decorations, view, etc...)
    - [x] Npm hapi Plugins
- [x] Controllers
- [x] Decorations
- [x] Interface
- [x] Routes
- [x] Plugins
- [x] Services
- [x] TypeDI
- [x] ORM
    - [x] Implementation
    - [x] Entity
- [ ] Units Test
- [ ] TSLint
- [ ] File Logger
- [ ] Joi Validation
- [ ] LDAP Token

[official yarn website]: https://yarnpkg.com/fr/docs/install#linux-tab