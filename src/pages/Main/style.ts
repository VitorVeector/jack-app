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
        .taskContent{
            margin-bottom: 24px; 
            width: 100%;
            padding: 12px;
            border-radius: 8px;
            background-color: red;
            margin-bottom: 20px;
            background: rgba(255, 255, 255, 0.6); 
            border-radius: 12px; 
            box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.4); 
            backdrop-filter: blur(10px); 
            -webkit-backdrop-filter: blur(10px);
        }
    }
`