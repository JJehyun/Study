import React from 'react';
import styled, {css} from 'styled-components/native';

//box 컴포넌트
interface IProps {
  rounded: boolean;
  size: 'small' | 'medium' | 'large';
  color: string;
}

const sizeStyles = css<IProps>`
  /* 크기 */
  ${props =>
    props.size === 'large' &&
    css`
      width: 300px;
      height: 300px;
    `}
  ${props =>
    props.size === 'medium' &&
    css`
      width: 200px;
      height: 200px;
    `}
${props =>
    props.size === 'small' &&
    css`
      width: 100px;
      height: 100px;
    `}
`;

const MainBox = styled.View<IProps>`
  ${sizeStyles}
  background-color: ${props => props.color || 'black'};
  border-radius: ${props => (props.rounded ? '10px' : '0px')};
`;
export default function Box({rounded, size, color}: IProps) {
  //Box 컴포넌트
  return <MainBox rounded={rounded} size={size} color={color} />;
}
