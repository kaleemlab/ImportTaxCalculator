import styled from "styled-components";

export const Container = styled.div`
  margin: 50px 0;
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`;

export const Info = styled.div`
  flex: 1;
  margin-right: 20px;
`;

export const Title = styled.div`
  text-align: right;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 15px;
  color: rgb(1, 63, 28);

`;

export const Description = styled.div`
  text-align: right;
  font-size: 13px;
  color: black;

`;

export const IconArea = styled.div<{ active: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => props.active ? 'rgb(1,63,28)' : 'rgba(34,130,76,0.55)'};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Point = styled.div<{ active: boolean }>`
  width: 13px;
  height: 13px;
  border: 2px solid rgba(34, 130, 76, 0.55);
  border-radius: 50%;
  margin-left: 30px;
  margin-right: -6px;
  background-color: ${props => props.active ? 'rgb(1,63,28)' : 'rgba(34,130,76,0.55)'};
`;
