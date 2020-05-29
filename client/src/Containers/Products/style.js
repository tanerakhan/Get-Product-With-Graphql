import styled from 'styled-components'

const ProductAppContainer = styled.div`
max-width: 1200px;
background-color: #f9f9f9;
border: 1px #f1f1f1 solid;
display: flex;
justify-content: center;
margin: 50px auto;
padding: 20px;
border-radius: 5px;
@media screen and (max-width: 645px){
  flex-direction: column;
}
`;

export { ProductAppContainer };