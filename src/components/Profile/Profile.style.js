import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: grey;
  text-align: center;
  width: 400px;
  margin: 40px auto;
  border-radius: 20px;
`;
export const Image = styled('img')`
  width: 200px;
  margin-bottom: 20px;
`;
export const Item = styled('li')`
  display: flex;
  flex-direction: column;
`;
export const List = styled('ul')`
  display: flex;
  justify-content: row;
  gap: 70px;
  list-style: none;
`;
export const NameTitle = styled('p')`
  font-weight: 700;
  font-size: 34px;
`;
