import styled from 'styled-components';

const StyledFooter = styled.div`
font-family: "Lato", sans-serif;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgb(2 6 23);
  display: flex;
  justify-content: center;
  color: #ccc;
`;

const FooterText = styled.h1`
  font-size: 14px;
  color: #fff;
  padding: 10px 20px;
`;

function Footer() {
  return (
    <StyledFooter>
      <FooterText>&copy; made by hetu</FooterText>
    </StyledFooter>
  );
}

export { Footer };

 