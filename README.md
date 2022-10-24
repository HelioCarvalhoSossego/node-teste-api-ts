#Installing Typescript
`npm install -g typescript`

#Step 1 - Initialize Node.js
`npm init`

#Step 2: Install project dependencies
`npm install typescript ts-node express @types/express morgan @types/morgan axios @types/axios nodemon`

#Step 3 - Initialize Typescript
`tsc --init`

#Step 4: Setting up the tsconfig.json
`
{
    "compilerOptions": {
        "forceConsistentCasingInFileNames": true,
        "module": "commonjs",
        "esModuleInterop": true,
        "outDir": "./build",
        "rootDir": "./source",
        "target": "es2016",
        "skipLibCheck": true,
        "strict": true
    }
}
`

#Step 5: Modify package.json
`
"main": "src/server.ts",
"scripts": {
    "dev": "nodemon source/server.ts",
    "build": "rm -rf build/ && prettier --write source/ && tsc"
}
`

Step 6: Setting up the application structure
`
|   package-lock.json
|   package.json
|   tsconfig.json
\---src
    |   server.ts
    \---controllers
    |       posts.ts
    \---routes
            posts.ts
`
#Setting up the controllers

#Adding the routes
#Setting up the server

#Step 6: Starting the development server
`npm run dev`


#Step 7: Testing the API with Postman

