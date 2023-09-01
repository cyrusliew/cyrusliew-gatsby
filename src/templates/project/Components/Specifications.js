import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const BuiltStacks = styled.div`
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 1rem;
  padding-bottom: 1rem;

  @media (max-width: 540px) {
    justify-content: center;
  }
`;

const InnerWrapper = styled.div`
  background: white;
  border-radius: 5px;
  color: #262462;
  font-size: 0.875rem;
  padding: 2rem;
  postiion: sticky;
  top: 2rem;

  @media (max-width: 767px) {
    padding: 1rem;
  }
`;

const BuiltStack = styled.div`
  align-items: center;
  display: flex;
  flex-basis: 33%;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;

  > div {
    align-items: center;
    background: #262462;
    border-radius: 100%;
    color: white;
    display: flex;
    font-size: 20px;
    justify-content: center;
    margin-bottom: 0.5rem;
    height: 45px;
    width: 45px;
  }

  @media (max-width: 767px) {
    flex-basis: 20%;
    padding: 0.5rem;
  }
`;

const Dates = styled.div`
  table {
    td {
      border: 0;
      padding: 0.75rem;
    }
  }

  td:first-child {
    font-weight: bold;
  }
`;

const Specifications = ({ onGoing, completionDate, tags }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <BuiltStacks>
          {tags &&
            tags.length &&
            tags.map((tag) => (
              <BuiltStack key={tag}>
                <div>
                  <FontAwesomeIcon icon={`fa-brands fa-${tag.toLowerCase()}`} />
                  <FontAwesomeIcon icon={`fa-solid fa-${tag.toLowerCase()}`} />
                </div>
                <span>{tag}</span>
              </BuiltStack>
            ))}
        </BuiltStacks>
        <Dates>
          <table>
            <tbody>
              <tr>
                <td>On going</td>
                <td>
                  {onGoing ? <FontAwesomeIcon icon="fas fa-check" /> : "-"}
                </td>
              </tr>
              <tr>
                <td>Completion date</td>
                <td>{completionDate ? completionDate : "-"}</td>
              </tr>
            </tbody>
          </table>
        </Dates>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Specifications;
