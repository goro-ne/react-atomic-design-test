import styled from "styled-components";
import { SearchInput } from '../../components/molecules/SearchInput';
import { UserCard } from '../../components/organisms/user/UserCard';
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

const users = [...Array(10).keys()].map((val) => {
    return {
        id: val,
        name: `山田裕一${val}`,
        image: "https://media.istockphoto.com/id/2153160662/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/young-man-portrait.jpg?s=1024x1024&w=is&k=20&c=Ncb2GPMMauHpHMXNTpqpiDPJJ-_gN8RarJrpTrbbhmc=",
        email: "yuichi-yamada@test.com",
        phone: "090-1111-1111",
        company: {
            name: "テスト株式会社",
            website: "https://google.com"
    
        }        
    }
});

export const Users = () => {
    const { userInfo, setUserInfo } = useContext(UserContext);
    const onClickSwitch = () => {
        setUserInfo({ isAdmin: !userInfo.isAdmin });
    };
    return (
        <SContainer>
            <h2>ユーザー一覧</h2>
            <SearchInput />
            <br />
            <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
            <SUserArea>
                {users.map((obj) => {
                    return (
                        <UserCard key={obj.id} user={obj}/>
                    );
                })}
            </SUserArea>
        </SContainer>
    );
};

const SContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 24px;
`;

const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 20px;
`;