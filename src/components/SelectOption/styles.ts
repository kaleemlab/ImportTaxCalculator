import styled from "styled-components";

export const Container = styled.div<{ selected: boolean; }>`
  display: flex;
  border: 2px solid ${props => props.selected ? 'rgb(1,63,28)' : 'rgba(34,130,76,0.55)'}; /* rgb(177, 113, 238) */
  margin-top: 30px;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 15px;
  align-items: center;
  cursor: pointer;

  &:hover {
    border: 2px solid rgb(1, 63, 28);
  }

  background-color: rgb(235, 235, 235);
`;

export const Icon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgb(1, 63, 28);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`;

export const Info = styled.div`
  flex: 1;
  margin-left: 20px;
`;

export const Title = styled.div`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 7px;
`;

export const Description = styled.div`
  font-size: 14px;

`;
