# simple-react-theming

## Usage CSS Modules

In your component file use:

```
import React from 'react';
import Theme from 'simple-react-theme';

const Classes = Theme('MY-THEME-VARIABLE', 'CSS-FILE-NAME');
```

where `MY-THEME-VARIABLE` would probably come from a .env file variable. e.g. `process.env.THEME` if you're using CRA then `process.env.REACT_APP_THEME` and `CSS-FILE-NAME` your filename. 

Then within each component file you would have your theme folders e.g. 

MyComponent
  - theme1
    - MyComponent.module.css
  - theme2
    - MyComponent.module.css

```
const Classes = Theme(process.env.THEME, 'MyComponent.module.css');
```

## Usage for generic CSS
```
import React from 'react';
import Theme from 'simple-react-theme';

Theme(process.env.THEME, 'global-styles.css');
```
