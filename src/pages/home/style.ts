import styled from "styled-components";

export const ContainerStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .titleHome{
        font-weight: 300;
        text-align: center;
        font-family: 'Montserrat'; 
        animation: fadeIn 1s ease-in-out forwards;

        @keyframes fadeIn {
        from {
            opacity: 0;
            
        }
        to {
            opacity: 1;
        }
        }
    }

    .btnHome{
        margin-top: 80px;
        display: flex;
        width: 100%;
        max-width: 360px;
        justify-content: space-evenly;
        
    }
`