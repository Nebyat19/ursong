import styled from 'styled-components';
import* as colors from "../constants/colors";

const Container = styled.div`
font-family: "Lato", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  padding: 12px 0; 
  justify-content: space-between;
  width: 80%;
  margin: auto;
`;

const Breadcrumb = styled.span`
  font-size: 1rem;
  color: #4b5563; 
  display:none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const BreadcrumbText = styled.span`
  color: #d77b95; 
  font-size: 0.875rem; 
  cursor: pointer;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 6px; 
  font-size: 0.875rem;
  color: #4b5563; 
  border: 1px solid ${colors.secondaryColor}; /* primary color */
  border-radius: 0.375rem; 
  transition: border-color 0.2s ease-in-out;

  &:hover {
    border-color: ${colors.secondaryColor}; /* secondary color */
  }
`;

const FindButton = styled.span`
  padding: 6px 8px; 
  font-size: 0.875rem;
  background-color: ${colors.secondaryColor}; /* primary color */
  color: #fff;
  border-radius: 0.375rem; 
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${colors.primaryColor}; /* secondary color */
  }
`;

const FilterOptions = styled.div`
  display: flex;
  gap: 0.5rem;
  cursor: pointer;
`;

const FilterOption = styled.span`
  padding: 6px 8px; 
  font-size: 0.875rem;
  border: 1px solid ${colors.secondaryColor}; 
  color: ${colors.secondaryColor}; 
  border-radius: 0.375rem; 
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${colors.secondaryColor}; 
    color: #fff;
  }
`;

function SearchSpace() {
  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbText>Home</BreadcrumbText> /Mysong
      </Breadcrumb>
      <InputWrapper>
        <Input type="text" placeholder="search..." />
        <FindButton>Find</FindButton>
      </InputWrapper>
      <FilterOptions>
        <FilterOption>All(10)</FilterOption>
        <FilterOption>Favs(1)</FilterOption>
      </FilterOptions>
    </Container>
  );
}

export { SearchSpace };
