import { graphql } from '@apollo/react-hoc';
import gql from 'graphql-tag';

export const data = gql`
    query{
        products{
            title,
            price,
            image,
            description,
            cargo,
            link
        }
    }
`;

export const getProducts = graphql(data, {
    options: ({ products }) => ({
        variables: { products }
    }),
    props: ({ data }) => ({ ...data })
});