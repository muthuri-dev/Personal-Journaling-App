# Personal-Journaling-App

Personal Journaling App is a sleek and intuitive platform designed to help you document your thoughts, experiences, and reflections effortlessly. Whether you're a daily journaler or someone who writes sporadically, this app caters to your needs with a range of customizable features and a user-friendly interface.

## Features

Codelabs comes with a wide range of features tailored for horse care:

- **Learning platform**: Get to learn from community experts.
- **Course uploads**: Upload course in your are of expertise in form of writing.
- **Tech discussions**: Get engauged in tech related discussions and also start one.
- **Chat features**: Communication made easy for community members to reach everyone.
- **Integrate other apps**: Intergrate other apps to the site.
- **Community**: Connect with fellow tech enthusiasts and share your expertise.

## Installation

To start using Equine Tracker, follow these installation steps:

1. Fork and Clone the repository:

   ```bash
   fork the repo

   git clone https://github.com/muthuri-dev/codelabs-client
   ```

2. Navigate to the project directory:

   ```bash
   cd codelabs-client
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   npm run start:dev
   ```

   5.Create .env file and add:

```bash
  DATABASE_URL
  KINDE_CLIENT_ID
  KINDE_CLIENT_SECRET
  KINDE_ISSUER_URL
  KINDE_SITE_URL
  KINDE_POST_LOGOUT_REDIRECT_URL
  KINDE_POST_LOGIN_REDIRECT_URL

  UPLOADTHING_SECRET
  UPLOADTHING_APP_ID
```

## DataFlow

The application uses different microservices(subgraphs) connected together with graphql federation 2 gateway which connects with frontend.Each microservice uses different database

### Connecting to the api-gateway in next js

```bash
"use client";
import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export default function Provider({ children }: { children: React.ReactNode }) {
  const client = new ApolloClient({
    uri: "https://codelabs-api-gateway.up.railway.app/graphql",
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
```

## Contributing

We welcome contributions from the community! If you have ideas for improvements, bug reports, or want to contribute code, please check our [Contribution Guidelines](CONTRIBUTING.md) for details on how to get involved.

## License

Equine Tracker is open-source software licensed under the Apache License 2.0. For full details, refer to the [LICENSE](LICENSE) file.

## Acknowledgments

We'd like to extend our gratitude to the equestrian community for their support and inspiration.

Thank you for choosing us!
