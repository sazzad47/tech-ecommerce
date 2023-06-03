import styled from "styled-components";

function DesignCard({ img, name }) {
  return (
    <Container>
      <img src={img} alt="project" className="absolute w-full h-full" />
      <div className="p-4 cursor-pointer details absolute top-[-100%] left-0 h-full w-full flex flex-col items-center justify-center bg-[#b004b0b7]">
        <h1 className="text-white font-bold text-3xl text-center">{name}</h1>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 20vw;
  height: 30vh;
  display: flex;
  margin: 0 1rem;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  background-color: #2c3333;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  :hover .details {
  top: 0;
  }
  @media screen and (max-width:640px) {
    width: 70vw;
    
  }
  @media screen and (max-width:890px) {
    width: 70vw;
    
  }
 
  .details {
  transition: 0.5s all;
  }
  }
`;

export default DesignCard;
