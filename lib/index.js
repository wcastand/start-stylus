export default (userOptions) => (input) => {
  return function stylus(log) {
    const Stylus = require('stylus');
    return Promise.all(
      input.map(file => {
        const options = {...userOptions}
        const styl = Stylus(file.data)
        styl.set('filename', file.path)

        if(options.use)
          options.use.map(i => styl.use(i))

        if(options.sourcemap)
          styl.set('sourcemap', true)

        return new Promise((resolve, reject) => {
          styl.render((err, result) => {
            if(err) reject(err);
            log(file.path)
            resolve({
              path: file.path,
              data: result,
              map: styl.sourcemap || null
            });
          });
        })
      })
    );
  };
};
