# Personal-Journaling-App

Personal Journaling App is a sleek and intuitive platform designed to help you document your thoughts, experiences, and reflections effortlessly. Whether you're a daily journaler or someone who writes sporadically, this app caters to your needs with a range of customizable features and a user-friendly interface.

## Developers with expo go app

![scan](https://github.com/muthuri-dev/Personal-Journaling-App/assets/82339780/64943c5d-d84f-4014-88c9-b3a3ab06ac10)

### link

[Link to view app](https://expo.dev/preview/update?message=final&updateRuntimeVersion=1.0.0&createdAt=2024-07-07T23%3A08%3A57.097Z&slug=exp&projectId=e791ace3-514f-4f04-bda5-2c1f92eda0d3&group=50c45114-fd05-4206-8cde-09a2a7c38ec8)

## views

<p align="center">
  <img src="https://github.com/muthuri-dev/Personal-Journaling-App/assets/82339780/3b54e17e-8d1f-4e16-8fae-fd6a514b56da" />
</p>
<p align="center">
  <img src="https://github.com/muthuri-dev/Personal-Journaling-App/assets/82339780/575c470b-828b-4599-9cec-0e014dbb2952" width="800" />
</p>

<p align="center">
  <img src="https://github.com/muthuri-dev/Personal-Journaling-App/assets/82339780/ab1f291b-38e2-441e-a033-c66031a56466" width="800"/>
</p>

## Features

Journal comes with a wide range of features tailored for horse care:

- **Login register**: One can be able to create account and secure the data.
- **Create journals**: Write down your thoughts , moments and experiences.
- **View journals**: Get to tech your journals.
- **Update password**: be able to update password for secure purposes.

## Installation

To start using Equine Tracker, follow these installation steps:

1. Fork and Clone the repository:

   ```bash
   git clone https://github.com/muthuri-dev/Personal-Journaling-App
   ```

2. Navigate to the project directory:

   ```bash
   cd Personal-Journaling-App
   ```

3. Install the required dependencies:

   ```bash
   # for expo app
   cd apps/client && npm install
    # for api
   cd apps/api-server && npm install
   ```

4. Start the application:

   ```bash
   # for expo app
   npx expo start
   # for api-server
   npm run start:dev
   ```

   5.Create .env file and add:

   ```bash
   # database -relational(postgres)
     DATABASE_URL
     AUTH_SECRETE_KEY
   ```

## Server

The application uses graphql api endpoint

```bash
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      introspection: true,
      driver: ApolloDriver,
      sortSchema: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UsersModule,
    AuthModule,
    JournalsModule,
  ],
  providers: [ConfigService, PrismadbService],
})
export class AppModule {}

```

### Connecting to the api-server in react native(expo)

```bash
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useAuthStore } from "@/store/useAuthStore";

const httpLink = createHttpLink({
  uri: "https://journaling-app-api.zeabur.app/graphql",
});

const authLink = setContext((_, { headers }) => {
  // Get the authentication token from Zustand store
  const token = useAuthStore.getState().token;

  // Return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;

```

## Api Documentation

### register user mutation

```bash
# mutation
mutation Register {
    register(authDto: { password: "12", username: "kennedy" }) {
        created_at
        id
        updated_at
        username
    }
}

# response
{
    "data": {
        "register": {
            "created_at": "2024-07-09T06:20:57.787Z",
            "id": "clye0vuil0000kijucda5eejp",
            "updated_at": "2024-07-09T06:20:57.787Z",
            "username": "kennedy"
        }
    }
}

```

### login user mutation

```bash
# mutation
mutation Login {
    login(authDto: { password: "12", username: "kennedy" }) {
        access_token
        user {
            created_at
            id
            updated_at
            username
            journal {
                category
                content
                created_at
                date
                feeling
                id
                title
                updated_at
                user_name
            }
        }
    }
}


# response
{
    "data": {
        "login": {
            "access_token": "eyJhbGciOiJIUzI1Ni ****",
            "user": {
                "created_at": "2024-07-09T06:20:57.787Z",
                "id": "clye0vuil0000kijucda5eejp",
                "updated_at": "2024-07-09T06:20:57.787Z",
                "username": "kennedy",
                "journal": null
            }
        }
    }
}

```

### create journal mutation

```bash
# mutation
mutation CreateJournal {
    createJournal(
        createDto: {
            category: "work"
            content: "Did app documentation"
            date: "07/07/24"
            feeling: "happy"
            title: "App documentation"
            user_name: "kennedy"
        }
    ) {
        category
        content
        created_at
        date
        feeling
        id
        title
        updated_at
        user_name
    }
}
 pass access_token : "access_token": "eyJhbGciOiJIUzI1Ni ****",

# response
{
    "data": {
        "createJournal": {
            "category": "work",
            "content": "Did app documentation",
            "created_at": "2024-07-09T06:32:56.075Z",
            "date": "07/07/24",
            "feeling": "happy",
            "id": "clye1b92i0002kiju4cjst4or",
            "title": "App documentation",
            "updated_at": "2024-07-09T06:32:56.075Z",
            "user_name": "kennedy"
        }
    }
}

```

### get user journals query

```bash
# query
query Journals {
    journals(username: "kennedy") {
        category
        content
        created_at
        date
        feeling
        id
        title
        updated_at
        user_name
    }
}

 pass access_token : "access_token": "eyJhbGciOiJIUzI1Ni ****",

# response
{
    "data": {
        "journals": [
            {
                "category": "work",
                "content": "Did app documentation",
                "created_at": "2024-07-09T06:32:56.075Z",
                "date": "07/07/24",
                "feeling": "happy",
                "id": "clye1b92i0002kiju4cjst4or",
                "title": "App documentation",
                "updated_at": "2024-07-09T06:32:56.075Z",
                "user_name": "kennedy"
            }
        ]
    }
}

```

### remove journal mutation

```bash
# mutation
mutation RemoveJournal {
    removeJournal(id: "clye1b92i0002kiju4cjst4or") {
        category
        content
        created_at
        date
        feeling
        id
        title
        updated_at
        user_name
    }
}


 pass access_token : "access_token": "eyJhbGciOiJIUzI1Ni ****",

# response
{
    "data": {
        "removeJournal": {
            "category": "work",
            "content": "Did app documentation",
            "created_at": "2024-07-09T06:32:56.075Z",
            "date": "07/07/24",
            "feeling": "happy",
            "id": "clye1b92i0002kiju4cjst4or",
            "title": "App documentation",
            "updated_at": "2024-07-09T06:32:56.075Z",
            "user_name": "kennedy"
        }
    }
}
```

### update password mutation

```bash
# mutation
mutation UpdateUserPassword {
    updateUserPassword(updateDto: { password: "123", username: "kennedy" }) {
        created_at
        id
        updated_at
        username
    }
}



 pass access_token : "access_token": "eyJhbGciOiJIUzI1Ni ****",

# response
{
    "data": {
        "updateUserPassword": {
            "created_at": "2024-07-09T06:20:57.787Z",
            "id": "clye0vuil0000kijucda5eejp",
            "updated_at": "2024-07-09T06:40:29.100Z",
            "username": "kennedy"
        }
    }
}
```

### errors of not passing access_token

```bash
# example get all users muatation
query Users {
    users {
        created_at
        id
        updated_at
        username
    }
}


# response
{
    "errors": [
        {
            "message": "Unauthorized",
            "locations": [
                {
                    "line": 2,
                    "column": 5
                }
            ],
            "path": [
                "users"
            ],
            "extensions": {
                "code": "UNAUTHENTICATED",
                "stacktrace": [
                    "UnauthorizedException: Unauthorized",
                    "    at JwtAuthGuard.handleRequest (/src/src/auth/guards/jwt.guard.ts:17:20)",
                    "    at /src/node_modules/@nestjs/passport/dist/auth.guard.js:44:124",
                    "    at /src/node_modules/@nestjs/passport/dist/auth.guard.js:83:24",
                    "    at allFailed (/src/node_modules/passport/lib/middleware/authenticate.js:110:18)",
                    "    at attempt (/src/node_modules/passport/lib/middleware/authenticate.js:183:28)",
                    "    at strategy.fail (/src/node_modules/passport/lib/middleware/authenticate.js:314:9)",
                    "    at /src/node_modules/passport-jwt/lib/strategy.js:106:33",
                    "    at /src/node_modules/jsonwebtoken/verify.js:171:14",
                    "    at getSecret (/src/node_modules/jsonwebtoken/verify.js:97:14)",
                    "    at module.exports [as verify] (/src/node_modules/jsonwebtoken/verify.js:101:10)"
                ],
                "originalError": {
                    "message": "Unauthorized",
                    "statusCode": 401
                }
            }
        }
    ],
    "data": null
}
```

## Contributing

We welcome contributions from the community! If you have ideas for improvements, bug reports, or want to contribute code, please check our [Contribution Guidelines](CONTRIBUTING.md) for details on how to get involved.

## License

Equine Tracker is open-source software licensed under the Apache License 2.0. For full details, refer to the [LICENSE](LICENSE) file.

## Acknowledgments

We'd like to extend our gratitude to the equestrian community for their support and inspiration.

Thank you for choosing us!

```bash
  function currentMood(mood:string):string{
    return mood;
  }

  currentMood("happy 😂")
```
