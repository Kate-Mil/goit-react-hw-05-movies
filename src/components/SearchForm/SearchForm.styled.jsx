import styled from 'styled-components';

export const SearchFormWrapper = styled.form`
  margin-bottom: 30px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 54px;
  height: 54px;
  box-shadow: 0 0 5px 2px rgba(128, 128, 128, 0.5), 0 0 -5px 2px rgba(128, 128, 128, 0.5);
}
border-top-right-radius: 3px;
border-bottom-right-radius: 3px;
  background-image: url('https://img.icons8.com/color/search');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  border-left: none; 
  &:hover {
    opacity: 1;
  }
`;

export const SearchFormButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  height: 48px;
  width: 100%;
  font: inherit;
  font-size: 20px;
  outline-color: rgba(0, 0, 230, 0.5);
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
