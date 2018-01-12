# react-drag

一个简单的React拖拽组件

目前仅支持PC，仅在最新的Chrome和Firefox下测试

## 安装

```bash
$ npm install --save react-react
```

## 使用

```javascript
import React from 'react';
import Draggable from 'react-drag';

React.render(
    <Draggable>
      <div>需要拖拽</div>
    </Draggable>,
  document.getElementById('normal')
);
```