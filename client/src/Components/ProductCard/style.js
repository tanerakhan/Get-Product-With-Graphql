import styled from 'styled-components'

const ProductContainer = styled.div`
    position: relative;
    width: 100%;
    display: block;
    max-width: 250px;
    padding: 10px;
    border: 1px #ededed solid;
    background-color: #fff;
    margin-right: 10px;
    border-radius: 5px;
        .like{
      display: inline-flex;
      position: absolute;
      top: 7px;
      right: 10px;
      z-index: 2;
        span{
        cursor: pointer;
        }
    }
        &:last-child{
    margin-right: 0;
    }
    @media screen and (max-width: 645px){
      max-width: 350px;
      margin: 0 auto 10px auto;
      &:last-child{
        margin: 0 auto;
      }
}
`;

const Product = styled.a`
    .image, .description, .cargo, .price, .title{
    padding: 5px 10px;
    }
    .title{
      margin-top: 10px;
      font-size: 16px;
      font-weight: bold;
    }
    .price{
        background-color: #eaeaea;
        border-radius: 5px;
        margin: 0 10px;
        font-size: 16px;
        font-weight: bold;
        margin: 10px;
    }
    .description{
      font-size: 13px;
    }
    .cargo{
      min-height: 35px;
      display: flex;
      align-items: center;
        svg{
        margin-right: 5px;
        }
        span{
        font-size: 13px;
        }
    }
`;

export { Product, ProductContainer };