import styled from "styled-components";

export const Container = styled.div`
  background-color: #dedede;
  width: 52.5%;
  height: 50%;
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  margin: 10px auto;
`;

export const CardProduct = styled.div`
  background-color: white;
  width: 230px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0 10px;
  border-radius: 5px;

  .image {
    width: 80px;
    height: 140px;
    margin-bottom: 20px;
  }

  span {
    text-align: center;
    font-weight: bold;
    font-size: 14px;
  }

  .price {
    color: #70e000;
    font-size: 16px;
  }

  button {
    background-color: #70e000;
    color: #fff;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    width: 90%;
    height: 40px;
    border: none;
    border-radius: 5px;
  }
`;
