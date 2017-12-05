// ==UserScript==
// @name         Scroll top/bottom
// @namespace    http://tampermonkey.net/
// @version      0.1
// @include      *
// @description  Scrolls page top/bottom
// @author       Anton Semenchenko
// @run-at       document-body
// @noframes
// @match        *
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const IMG_SRC_TOP = 'data:image/svg+xml;base64,PCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KPHRpdGxlPjwvdGl0bGU+CjxnIGlkPSJpY29tb29uLWlnbm9yZSI+CjwvZz4KPHBhdGggZD0iTTQzOC42MjcgMjAxLjM3M2wtMTYwLTE2MGMtMTIuNDk2LTEyLjQ5Ny0zMi43NTctMTIuNDk3LTQ1LjI1NCAwbC0xNjAgMTYwYy0xMi40OTcgMTIuNDk3LTEyLjQ5NyAzMi43NTggMCA0NS4yNTVzMzIuNzU4IDEyLjQ5OCA0NS4yNTUgMGwxMDUuMzcyLTEwNS4zNzN2MzA2Ljc0NWMwIDE3LjY3MyAxNC4zMjcgMzIgMzIgMzJzMzItMTQuMzI3IDMyLTMydi0zMDYuNzQ1bDEwNS4zNzMgMTA1LjM3M2M2LjI0OCA2LjI0OCAxNC40MzggOS4zNzIgMjIuNjI3IDkuMzcyczE2LjM3OS0zLjEyNCAyMi42MjctOS4zNzNjMTIuNDk3LTEyLjQ5NyAxMi40OTctMzIuNzU3IDAtNDUuMjU0eiI+PC9wYXRoPgo8L3N2Zz4K';
    const IMG_SRC_BOTTOM = 'data:image/svg+xml;base64,PCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KPHRpdGxlPjwvdGl0bGU+CjxnIGlkPSJpY29tb29uLWlnbm9yZSI+CjwvZz4KPHBhdGggZD0iTTQzOC42MjcgMzEwLjYyN2wtMTYwIDE2MGMtMTIuNDk2IDEyLjQ5Ny0zMi43NTcgMTIuNDk3LTQ1LjI1NCAwbC0xNjAtMTYwYy0xMi40OTctMTIuNDk3LTEyLjQ5Ny0zMi43NTggMC00NS4yNTVzMzIuNzU4LTEyLjQ5OCA0NS4yNTUgMGwxMDUuMzcyIDEwNS4zNzN2LTMwNi43NDVjMC0xNy42NzMgMTQuMzI3LTMyIDMyLTMyczMyIDE0LjMyNyAzMiAzMnYzMDYuNzQ1bDEwNS4zNzMtMTA1LjM3M2M2LjI0OC02LjI0OCAxNC40MzgtOS4zNzIgMjIuNjI3LTkuMzcyczE2LjM3OSAzLjEyNCAyMi42MjcgOS4zNzNjMTIuNDk3IDEyLjQ5NyAxMi40OTcgMzIuNzU3IDAgNDUuMjU0eiI+PC9wYXRoPgo8L3N2Zz4K';

    function scroll (top) {
        return function () {
            window.scroll({ top: top, left: 0 });
        };
    }

    function createPanel(...buttons) {
        var container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.border = 'solid 1px black';
        container.style.background = '#FFF';
        container.style.bottom = '10px';
        container.style.left = '5px';
        container.style.width = '40px';
        container.style.zIndex = '1000000';

        buttons.forEach(function (button) {
            container.appendChild(button);
        });

        return container;
    }

    function creteButton (url, action) {
        const button = document.createElement('a');
        button.style.cursor = 'pointer';
        button.addEventListener('click', action);

        const image = document.createElement('img');
        image.src = url;
        image.style.width = '35px';
        image.style.padding = '2px';

        button.appendChild(image);

        return button;
    }

    document.body.appendChild(createPanel(
        creteButton(IMG_SRC_TOP, scroll(0)),
        creteButton(IMG_SRC_BOTTOM, scroll(1000000))
    ));
})();
