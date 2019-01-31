# This is package for currency converter

You can convert all currency and cryptocurrency

Author [HaykMan95](https://github.com/HaykMan95)

### Install

`npm i currency-converter-for-all`


### How to use


```
import React, { Component } from 'react';
import { Converter } from 'currency-converter-for-all';

class App extends Component {

    state = {
        value: 0
    }

    constructor(props) {
        super(props);
        Converter('AMD', 'rub').then(res => {
            this.setState({value: res});
        });
    }

    render() {
        return (
            <h1>{this.state.value}</h1>
        )
    }
}

export default App;
```

### About

Converter get two parameter `from` and `to`

`to` - is default `USD`

`from` and `to` can have been only short string
# currency-converter-for-all
