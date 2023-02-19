import styled from '@emotion/styled';

export const Container = styled.ul`
  margin: 20px auto 0 auto;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 1px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => (props.status ? '#47b14a' : '#fd5351')};
`;

export const Avatar = styled.img`
  margin-left: 15px;
  width: 60px;
  border-radius: 5px;
`;

export const Name = styled.p`
  margin-left: 15px;
  font-size: 16px;
  font-weight: 700;
`;
