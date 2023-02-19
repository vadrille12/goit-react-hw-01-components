import styled from '@emotion/styled';

export const Container = styled.section`
  margin: 20px auto 0 auto;
  width: 350px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  overflow: hidden;
`;

export const Title = styled.h2`
  padding: 30px 0;
  color: #5c6065;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StatItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #fff;
  padding: 15px 0;
  width: 100%;
  &:nth-child(1) {
    background-color: #4ec5f6;
  }
  &:nth-child(2) {
    background-color: #a43def;
  }
  &:nth-child(3) {
    background-color: #e74b66;
  }
  &:nth-child(4) {
    background-color: #3ffc00;
  }
  &:nth-child(5) {
    background-color: #d4ff17;
  }
`;

export const Label = styled.span``;

export const Percentage = styled.span`
  font-size: 16px;
`;
