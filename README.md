# Ecommerce Course
Completed files
## Requirements
Node JS installed
We are running Node, Gulp, and MYSQL

If you are not following along from scratch and wish to run this project
download or clone this repo and follow these steps


## Installations
```bash
sudo npm i -g @adonisjs/cli
sudo npm install har-validator@latest --save-dev
sudo npm install
sudo npm install gulp@3.9.1 -g 
sudo npm install webpack@4.25.1 -g
sudo npm install webpack-cli@3.1.2 -g
```
## Running App
check both versions of gulp are 3.9.1 local and global
```bash
gulp -v
```
Then make sure to make a new copy of the .env.example file and rename it to .env thats where you will put your passwords or database info
```bash
cp .env.example .env
```
Run adonis key:generate to generate the secret key
```bash
adonis key:generate
```
Run adonis migration:run to setup the database
```bash
adonis migration:run
```


Serve Application in Dev mode
```bash
adonis serve --dev
```
Then Run Browser sync in proxy in a new terminal window
```bash
npm run proxy
```

Site will be live at localhost:3000


# Deploying
Build static files for production 
```bash
npm run build
```
