import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SecondaryButton } from '../atoms/button/SecondaryButton';
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

export const Top = () => {
    const { setUserInfo } = useContext(UserContext);

    const navigate = useNavigate();
    const onClickAdmin = () => {
        setUserInfo({ isAdmin: true });
        navigate("/users");
    };
    const onClickGeneral = () => {
        setUserInfo({ isAdmin: false });
        navigate("/users");
    };
    return (
        <SContainer>
            <h2>TOPページです</h2>
            <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
            <br />
            <br />
            <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
        </SContainer>
    );
};

const SContainer = styled.div`
    text-align: center;
`;
