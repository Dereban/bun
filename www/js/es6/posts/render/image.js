System.register(['../../state', 'underscore', '../../options', '../../util', '../../lang'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var state_1, underscore_1, options_1, util_1, lang_1;
    var imagePaths, searchTemplates;
    function renderImage(data, reveal) {
        const showThumb = options_1.default.get("thumbs") !== 'hide' || reveal;
        return util_1.parseHTML `<figure>
			${renderFigcaption(data, reveal)}
			${state_1.config.images.hats && showThumb ? '<span class="hat"></span>' : ''}
			${showThumb ? renderThumbnail(data) : ''}
		</figure>`;
    }
    exports_1("renderImage", renderImage);
    function renderFigcaption(data, reveal) {
        const list = util_1.commaList([
            data.audio ? '\u266B' : '',
            data.length.toString(),
            readableFilesize(data.size),
            `${data.dims[0]}x${data.dims[1]}`,
            data.apng ? 'APNG' : ''
        ]);
        return util_1.parseHTML `<figcaption>
			${hiddenToggle(reveal)}
			${imageSearch(data)}
			<span>
				(${list})
			</span>
			${imageLink(data)}
		</figcaption>`;
    }
    exports_1("renderFigcaption", renderFigcaption);
    function readableFilesize(size) {
        if (size < 1024) {
            return size + ' B';
        }
        if (size < 1048576) {
            return Math.round(size / 1024) + ' KB';
        }
        const text = Math.round(size / 104857.6).toString();
        return `${text.slice(0, -1)}.${text.slice(-1)} MB`;
    }
    function hiddenToggle(reveal) {
        if (options_1.default.get('thumbs') !== 'hide') {
            return '';
        }
        return util_1.parseHTML `<a class="imageToggle">
			[${lang_1.images[reveal ? 'hide' : 'show']}]
		</a>`;
    }
    function imageSearch(data) {
        let html = '';
        if (data.fileType === 4) {
            if (options_1.default.get("google")) {
                return searchTemplates['google'](data);
            }
            return '';
        }
        for (let engine in searchTemplates) {
            html += searchTemplates[engine](data);
        }
        return html;
    }
    function thumbPath(data, mid) {
        const type = mid ? 'mid' : 'thumb';
        let ext;
        switch (data.fileType) {
            case 6:
            case 0:
                ext = '.jpg';
                break;
            case 1:
            case 2:
            case 3:
            case 4:
            case 7:
            case 8:
                ext = '.png';
                break;
        }
        return imagePaths[type] + data.file + ext;
    }
    function sourcePath({ file, fileType }) {
        return imagePaths['src'] + file + sourceExtension(fileType);
    }
    function sourceExtension(fileType) {
        const extensions = {
            [0]: '.jpg',
            [1]: '.png',
            [2]: '.gif',
            [3]: '.webm',
            [4]: '.pdf',
            [5]: '.svg',
            [6]: '.mp4',
            [7]: '.mp3',
            [8]: '.ogg'
        };
        return extensions[fileType];
    }
    function imageLink(data) {
        let name = '', { file, fileType, imgnm } = data;
        const m = imgnm.match(/^(.*)\.\w{3,4}$/);
        if (m) {
            name = m[1];
        }
        const fullName = underscore_1.escape(imgnm), tooLong = name.length >= 38;
        if (tooLong) {
            imgnm = underscore_1.escape(name.slice(0, 30))
                + '(&hellip;)'
                + underscore_1.escape(sourceExtension(fileType));
        }
        const attrs = {
            href: sourcePath(data),
            rel: 'nofollow',
            download: fullName
        };
        if (tooLong) {
            attrs['title'] = fullName;
        }
        return util_1.parseHTML `<a ${util_1.parseAttributes(attrs)}>
			${imgnm}
		</a>`;
    }
    function renderHat(showThumb) {
        if (showThumb && state_1.config.images.hats) {
            return '<span class="hat"></span>';
        }
        return '';
    }
    function renderThumbnail(data, href) {
        const src = sourcePath(data);
        let thumb, [width, height, thumbWidth, thumbHeight] = data.dims;
        if (data.spoiler && options_1.default.get('spoilers')) {
            thumb = imagePaths['spoil'] + data.spoiler + '.jpg';
            thumbWidth = thumbHeight = 250;
        }
        else if (data.fileType === 2 && options_1.default.get('autogif')) {
            thumb = src;
        }
        else {
            thumb = thumbPath(data, options_1.default.get('thumbs') !== 'small');
        }
        const linkAttrs = {
            target: '_blank',
            rel: 'nofollow',
            href: href || src
        };
        const imgAttrs = {
            src: thumb,
            width: thumbWidth.toString(),
            height: thumbHeight.toString()
        };
        if (href) {
            linkAttrs['class'] = 'history';
            imgAttrs['class'] = 'expanded';
            if (options_1.default.get('thumbs') === 'hide') {
                imgAttrs['style'] = 'display: none';
            }
        }
        return util_1.parseHTML `<a ${util_1.parseAttributes(linkAttrs)}>
			<img ${util_1.parseAttributes(imgAttrs)}>
		</a>`;
    }
    exports_1("renderThumbnail", renderThumbnail);
    return {
        setters:[
            function (state_1_1) {
                state_1 = state_1_1;
            },
            function (underscore_1_1) {
                underscore_1 = underscore_1_1;
            },
            function (options_1_1) {
                options_1 = options_1_1;
            },
            function (util_1_1) {
                util_1 = util_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            }],
        execute: function() {
            imagePaths = {
                src: '/img/src/',
                thumb: '/img/thumb/',
                mid: '/img/mid/',
                spoil: '/ass/spoil/spoiler'
            };
            searchTemplates = (function () {
                const models = [
                    {
                        engine: 'google',
                        url: 'https://www.google.com/searchbyimage?image_url=',
                        type: 'thumb',
                        symbol: 'G'
                    },
                    {
                        engine: 'iqdb',
                        url: 'http://iqdb.org/?url=',
                        type: 'thumb',
                        symbol: 'Iq'
                    },
                    {
                        engine: 'saucenao',
                        url: 'http://saucenao.com/search.php?db=999&url=',
                        type: 'thumb',
                        symbol: 'Sn'
                    },
                    {
                        engine: 'desustorage',
                        type: 'MD5',
                        url: 'https://desustorage.org/_/search/image/',
                        symbol: 'Ds'
                    },
                    {
                        engine: 'exhentai',
                        type: 'SHA1',
                        url: 'http://exhentai.org/?fs_similar=1&fs_exp=1&f_shash=',
                        symbol: 'Ex'
                    }
                ];
                const templates = {};
                for (let { engine, url, type, symbol } of models) {
                    const attrs = {
                        target: '_blank',
                        rel: 'nofollow',
                        class: 'imageSearch ' + engine
                    };
                    templates[engine] = data => {
                        if (!options_1.default.get(engine)) {
                            return '';
                        }
                        attrs['href'] = url
                            + (type === 'thumb' ? thumbPath(data, false) : data[type]);
                        return util_1.parseHTML `<a ${util_1.parseAttributes(attrs)}>
					${symbol}
				</a>`;
                    };
                }
                return templates;
            })();
        }
    }
});

//# sourceMappingURL=../../maps/posts/render/image.js.map
