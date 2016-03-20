# start-stylus

[stylus](http://stylus-lang.org/) task for [Start](https://github.com/start-runner/start).

## Install

```
npm i -S start-stylus
```

## Usage

```js
import start from 'start';
import reporter from 'start-pretty-reporter';
import files from 'start-files';
import clean from 'start-clean';
import read from 'start-read';
import stylus from 'start-stylus';
import rename from 'start-rename';
import write from 'start-write';

import autoprefixer from 'autoprefixer';

export function build() {
    return start(reporter())(
        files('build/'),
        clean(),
        files('lib/**/*.styl'),
        read(),
        stylus(),
        write('build/')
    );
}
```

This task relies on `[{ path, data, map }]` input and provides the same, see [documentation](https://github.com/start-runner/start#readme) for details.

## Arguments

`stylus(options)`

To use plugins like [rupture](https://jenius.github.io/rupture/) or include sourcemaps or any other option for stylus, just do it like that:
```
  const options = {
    use: [rupture()],
    sourcemap: true,
    ...
  }

[options](http://stylus-lang.com/docs/js.html)
