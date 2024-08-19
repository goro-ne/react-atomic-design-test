import { memo, useContext } from "react";

import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";

export const UserIconWithName = memo((props) => {
    console.log("UserIconWithName");
    
    const { image, name } = props;
    const { userInfo } = useContext(UserContext);
    const isAdmin = userInfo ? userInfo.isAdmin : false;

    return (
        <div>
            <SImgWrapper>
                <SImg src={image} alt={name} />
            </SImgWrapper>
            <SName>{name}</SName>
            { isAdmin && <SEdit>編集</SEdit>}
        </div>
    );
});

const SContainer = styled.div`
    text-align: center;
`;

const SImgWrapper = styled.div`
    width: 160px;
    height: 160px;
    overflow: hidden;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;  // 親コンテナの中央に配置
`;

const SImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover; // 画像のアスペクト比を維持しつつ、円形の表示領域全体をカバー
    border-radius: 50%;
`;
const SName = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 0px;
    color: #40514e;
    text-align: center;
`;
const SEdit = styled.span`
    text-decoration: underline;
    color: #aaa;
    cursor: pointer;
`