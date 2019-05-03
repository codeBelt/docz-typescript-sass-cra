import { css } from 'docz-plugin-css';

export default {
    title: 'Docz Typescript',
    codeSandbox: false,
    typescript: true,
    plugins: [
        css({
            preprocessor: 'sass',
            cssmodules: true,
        }),
    ],
}
