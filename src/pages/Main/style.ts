import styled from "styled-components";

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    
    
    .inputArea{
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 48px;

        .inputTitle{
            margin-bottom: 24px;
        }

        .btnInput{
            margin-top: 24px;
            width: 124px;
            align-self: flex-end;
        }
    }

    .contentArea{
        li{
            ul{ 
                margin-bottom: 24px; 
            }
        }
    }
`