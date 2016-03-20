import test from 'tape';
import assert from 'assert-dir-equal';
import path from 'path';

import Start from 'start';
import reporter from 'start-pretty-reporter';
import files from 'start-files';
import clean from 'start-clean';
import read from 'start-read';
import write from 'start-write';

import rupture from 'rupture';

import task from '../../lib/';

test('basic', t => {
  //t.plan(4);

  const start = Start(reporter());

  start(
    files(path.resolve(__dirname, '../compiled')),
    clean(),
    files(path.resolve(__dirname, '../base/main.styl')),
    read(),
    task({sourcemap: false}),
    write(path.resolve(__dirname, '../compiled'))
  )
  .then(() => {
    const te = () => assert(path.resolve(__dirname, '../compiled'), path.resolve(__dirname, '../expected'))
    t.doesNotThrow(te)

    t.equal(
      typeof task,
      'function',
      '1st function'
    );

    t.equal(
      typeof task(),
      'function',
      '2nd function'
    );

    t.equal(
      typeof task()(),
      'function',
      '3rd function'
    );

    t.end();
  });
});
