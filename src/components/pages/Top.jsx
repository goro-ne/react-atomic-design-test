import styled from "styled-components";
import { DefaultLayout } from "../../components/templates/DefaultLayout";

export const Top = () => {
    return (
        <SContainer>
            <DefaultLayout>
                <h2>TOPページです</h2>
            </DefaultLayout>
        </SContainer>
    );
};

const SContainer = styled.div`
    text-align: center;
`;
