import styled from 'styled-components';

export const Divisor = styled.hr`
    border: none;
    border-top: 1px solid #444;
    margin-top: 30px;

    @media (max-device-width: 500px) {
        border-top: 2px solid #444;
        margin-top: 60px;
    }
`;

export const ManageContainer = styled.div`
    width: 100%;
    height: 30px;
    margin-top: 35px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-device-width: 500px) {
        height: 60px;
        margin-top: 120px;
        position: relative;
    }
`;

export const ManageButton = styled.button`
    background-color: #222;
    color: aquamarine;
    border: none;
    font-size: 25px;
    cursor: pointer;
    padding: 0 7px;  
    
    :focus {
        outline: none;
    }

    input[type='file'] {
        display: none;
    }

    label {
        cursor: pointer;
    }
    
    &.importFile {
        font-size: 20px;
        padding-bottom: 2px;
        margin-right: 3px;
    }
    
    &.saveTasks {
        color: red;
        transition: color 0.5s ease;
    }
    
    &.deleteAll {
        transition: color 0.5s ease;
    }
    

    @media (max-device-width: 500px) {
        font-size: 55px;
        padding: 0 20px;

        &.importFile {
            font-size: 50px;
            padding-bottom: 4px;
            margin-right: 6px;
        }
    
        &.saveTasks {
            font-size: 60px;
        }
    
        &.deleteAll {
            font-size: 70px;
        }
    }
`;