import React from "react";
import { ScrollView, RefreshControl } from "react-native";
import styled from "styled-components";
import Loader from "../../components/Loader";
import { useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";

const FEED_QUERY = gql`
  {
    me {
      user {
        name
      }
    luvstores {
        name
      }
    } 
  }
`;


const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

export default () => {
  const {loading, data} = useQuery(FEED_QUERY)
  console.log(loading, data)
  return(
    <View>
      <Loader />
    </View>
  )
};

// 처음 로딩은 로딩 과 데이터 쿼리된다.
// 다음엔 안된다. 데이다는 persisicache 에 있음