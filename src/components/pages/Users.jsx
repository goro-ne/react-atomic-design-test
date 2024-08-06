import styled from "styled-components";
import { HeaderOnly } from "../../components/templates/HeaderOnly";
import { PrimaryButton } from '../../components/atoms/button/PrimaryButton';
import { SecondaryButton } from '../../components/atoms/button/SecondaryButton';
import { SearchInput } from '../../components/molecules/SearchInput';
import { UserCard } from '../../components/organisms/user/UserCard';

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
    return (
        <SContainer>
            <HeaderOnly>
                <h2>ユーザー一覧</h2>
                <PrimaryButton>テスト</PrimaryButton>
                <SecondaryButton>検索</SecondaryButton>
                <br />
                <SearchInput />
                {users.map((user) => {
                    return (
                        <UserCard key={user.id} user={user} />
                    );
                })}
            </HeaderOnly>
        </SContainer>
    );
};

const SContainer = styled.div`
    text-align: center;
`;
