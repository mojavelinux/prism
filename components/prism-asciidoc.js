/**
 * prism.js syntax highlighting support for the AsciiDoc markup language
 *
 * @author Dan Allen <dan.j.allen@gmail.com>
 * @see http://asciidoc.org, http://asciidoctor.org
 */
Prism.languages.asciidoc = {
    'comment': {
        pattern: /(^|\n)((\/{4,})\n(.|\n)*?\n\3|\/{2}.*?)(?=\n|$)/,
        lookbehind: true
    },
    'header': {
        pattern: /(^|\n)={1,5}[ \t]+\w(\w| |\t)*(?=\n|$)/,
        lookbehind: true
    },
    'title': {
        pattern: /(^|\n)\.\w[\w \t]*(?=\n|$)/,
        lookbehind: true
    },
    'attributes': {
        pattern: /(^|\n)\[.*?\](?=\n|$)/,
        lookbehind: true
    },
    'attr-name': {
        pattern: /(^|\n):[\w-]+:(?= |\t|\n|$)/,
        lookbehind: true
    },
    'ruler': {
        pattern: /(^|\n)'{3,}(?= |\t|\n|$)/,
        lookbehind: true
    },
    'label': {
        pattern: /(^|\n)(NOTE|TIP|IMPORTANT|WARNING|CAUTION):(?= |\t|\n|$)/,
        lookbehind: true
    },
    'bullet': {
        pattern: /(^|\n)( |\t)*(\*{1,5}|\.{1,5}|\-|.*?::)(?=[ \t]*[^ \t])/,
        lookbehind: true
    },
    'quotes': /(`(?!`|\s).+?'|`{2}.+?'{2})/,
    'strong': /(\B\*(?!\*|\s).+?\*\B|\*{2}.+?\*{2})/,
    // word boundary doesn't work w/ underscore
    'emphasis': /((_|')(?!\2|\s).+?\2|_{2}.+?_{2})/,
    'code': /(\B(\+|`)(?!\2|\s).+?\2\B|\+{2}.+?\+{2})/,
    'link': {
        pattern: /(https?|ftp|file):\/\/.*?\[.*?\]/,
        inside: {
            'url': /(https?|ftp|file):\/\/.*(?=\[)/,
            'punctuation': /(\[|\])/,
            'attributes': /.*/
        }
    },
    'attr-ref': /{[\w\-]+}/
};
