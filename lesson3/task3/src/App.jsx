import React from 'react';
import Comment from './Comment';

const userInfo = {
  name: 'Roman',
  avatarUrl: 'https://avatars1.githubusercontent.com/romontherock',
};

const App = () => <Comment user={userInfo} text="Trumay hvist pistoletom!" date={new Date()} />;

export default App;
