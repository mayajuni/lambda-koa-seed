import {src, dest, task, watch, series, parallel} from 'gulp';
import * as ts from 'gulp-typescript';
import nodemon from 'gulp-nodemon';
import tslint from 'gulp-tslint';
import cache from 'gulp-cached';
import { sync } from 'del';

const path: any = {
    src: ['src/*.ts', 'src/**/*.ts', 'src/**/**/*.ts', 'src/**/**/**/*.ts', 'src/**/**/**/**.ts']
};

const tsProject = ts.createProject('tsconfig.json');

const lint = () => src(path.src)
    .pipe(cache('lint'))
    .pipe(tslint({
        formatter: 'prose',
        fix: true,
    }))
    .pipe(tslint.report());

const tsc = () => src(path.src)
    .pipe(cache('tsc'))
    .pipe(tsProject()).js
    .pipe(dest('dist'));

/**
 * dist 폴더 삭제
 */
task('clean', (done: any) => {
    sync(['dist']);
    done();
});

/**
 * 서버 구동
 */
const autoServer = () => {
    const stream = nodemon({
        script: 'dist/server.js',
        watch: ['dist/*', 'dist/*/**'],
        env: { 'NODE_ENV': 'local' },
        ext: 'js',
    });

    stream
        .on('restart', () => {
            console.log('restarted!');
        })
        .on('crash', () => {
            console.error('Application has crashed!\n');
            stream.emit('restart', 10);
        });
};

const tsWatch = () => watch(path.src, series(lint, tsc, (done: any) => done()));

task('build', series(
    'clean',
    lint,
    tsc,
    (done: any) => done()));

task('serve', series('build', parallel(tsWatch, autoServer), (done: any) => done()));
