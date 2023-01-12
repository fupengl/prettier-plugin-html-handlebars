import type { SupportLanguage, Parser, Printer } from 'prettier';

import embed from './embed';
import print from './print';
import { locStart, locEnd } from './loc';

export const languages: Partial<SupportLanguage>[] = [
    {
        name: 'html-handlebars',
        parsers: ['html-handlebars'],
        extensions: ['.html', '.hbs'],
        vscodeLanguageIds: ['handlebars'],
    },
];

export const parsers: Record<string, Parser> = {
    'html-handlebars': {
        parse: () => {},
        preprocess: (text, options) => {
            return text;
        },
        locStart,
        locEnd,
        astFormat: 'html-handlebars-ast',
    },
};

export const printers: Record<string, Printer> = {
    'html-handlebars-ast': {
        embed,
        print,
    },
};
