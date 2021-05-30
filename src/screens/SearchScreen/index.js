import React from 'react';
import {SafeAreaView} from 'react-native';
import {Container, Header, Item, Input, Icon, Button, Text} from 'native-base';

const SearchScreen = () => (
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
    </Container>

);

export default SearchScreen;
