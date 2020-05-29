const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Products {
    title: String
    price: String,
    image: String,
    description: String,
    cargo: String,
    link: String
  }
  type Query {
    products: [Products]
  }
`;

const products = [
  {
    title: 'iPhone 11',
    price: '11.500',
    image: "https://mcdn01.gittigidiyor.net/55821/tn50/558214423_tn50_0.jpg?1590730",
    description: "Apple iPhone 11 128 GB Gri Cep Telefonu (Apple Türkiye Garantili)",
    cargo: "Ücretsiz Kargo",
    link: "https://www.gittigidiyor.com/apple-iphone-11_spp_733280?id=559329036"
  },
  {
    title: 'iPhone 11',
    price: '10.900',
    image: "https://mcdn01.gittigidiyor.net/55589/tn50/555898460_tn50_0.jpg?1590730",
    description: "Apple iPhone 11 128 GB Gri Cep Telefonu (Apple Türkiye Garantili)",
    cargo: "Ücretsiz – Aynı Gün Kargo",
    link: "https://www.gittigidiyor.com/apple-iphone-11_spp_733280"
  },
  {
    title: 'iPhone 11 Pro Max',
    price: '12.100',
    image: "https://mcdn01.gittigidiyor.net/55589/tn50/555898460_tn50_0.jpg?1590730",
    description: "Apple iPhone 11 128 GB Gri Cep Telefonu (Apple Türkiye Garantili)",
    cargo: "Ücretli Kargo",
    link: "https://www.gittigidiyor.com/apple-iphone-11-pro-max_spp_733278"
  }
];

const resolvers = {
  Query: {
    products: () => products,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});