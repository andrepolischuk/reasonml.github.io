webpackJsonp([20],{"./node_modules/json-loader/index.js!./.cache/json/ru-guide-language-string-and-char.json":function(e,a){e.exports={data:{allFile:{edges:[{node:{relativePath:"ru/guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Примеры",order:60}}}},{node:{relativePath:"ru/guide/index.md",childMarkdownRemark:{frontmatter:{title:"Гайд по Reason",order:0}}}},{node:{relativePath:"ru/guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:50}}}},{node:{relativePath:"ru/guide/what-and-why.md",childMarkdownRemark:{frontmatter:{title:"Что и Зачем",order:0}}}},{node:{relativePath:"ru/guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Перенос JS кода",order:5}}}},{node:{relativePath:"ru/guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:30}}}},{node:{relativePath:"ru/guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Взаимодействие",order:1}}}},{node:{relativePath:"ru/guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Библиотеки",order:2}}}},{node:{relativePath:"ru/guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Быстрый старт",order:0}}}},{node:{relativePath:"ru/guide/editor-tools/editors-plugins.md",childMarkdownRemark:{frontmatter:{title:"Плагины редактора",order:20}}}},{node:{relativePath:"ru/guide/javascript/syntax-cheatsheet.md",childMarkdownRemark:{frontmatter:{title:"Шпаргалка по синтаксису",order:1}}}},{node:{relativePath:"ru/guide/editor-tools/extra-goodies.md",childMarkdownRemark:{frontmatter:{title:"Дополнительные бонусы",order:30}}}},{node:{relativePath:"ru/guide/editor-tools/global-installation.md",childMarkdownRemark:{frontmatter:{title:"Глобальная установка",order:10}}}},{node:{relativePath:"ru/guide/editor-tools/index.md",childMarkdownRemark:{frontmatter:{title:"Настройка редактора",order:10}}}},{node:{relativePath:"ru/guide/language/boolean.md",childMarkdownRemark:{frontmatter:{title:"Булев",order:30}}}},{node:{relativePath:"ru/guide/language/exception.md",childMarkdownRemark:{frontmatter:{title:"Исключения",order:175}}}},{node:{relativePath:"ru/guide/language/external.md",childMarkdownRemark:{frontmatter:{title:"External",order:170}}}},{node:{relativePath:"ru/guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Деструктурирование",order:130}}}},{node:{relativePath:"ru/guide/language/function.md",childMarkdownRemark:{frontmatter:{title:"Функция",order:100}}}},{node:{relativePath:"ru/guide/language/if-else.md",childMarkdownRemark:{frontmatter:{title:"If-Else",order:110}}}},{node:{relativePath:"ru/guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:160}}}},{node:{relativePath:"ru/guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Императивные циклы",order:150}}}},{node:{relativePath:"ru/guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Основы языка",order:20}}}},{node:{relativePath:"ru/guide/language/integer-and-float.md",childMarkdownRemark:{frontmatter:{title:"Числа",order:40}}}},{node:{relativePath:"ru/guide/language/list-and-array.md",childMarkdownRemark:{frontmatter:{title:"Список и Массив",order:80}}}},{node:{relativePath:"ru/guide/language/module.md",childMarkdownRemark:{frontmatter:{title:"Модуль",order:180}}}},{node:{relativePath:"ru/guide/language/let-binding.md",childMarkdownRemark:{frontmatter:{title:"Let привязка",order:10}}}},{node:{relativePath:"ru/guide/language/more-on-type.md",childMarkdownRemark:{frontmatter:{title:"Больше о типах",order:120}}}},{node:{relativePath:"ru/guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Мутации",order:140}}}},{node:{relativePath:"ru/guide/language/object.md",childMarkdownRemark:{frontmatter:{title:"Объект",order:175}}}},{node:{relativePath:"ru/guide/language/pattern-matching.md",childMarkdownRemark:{frontmatter:{title:"Паттерн-матчинг",order:135}}}},{node:{relativePath:"ru/guide/language/record.md",childMarkdownRemark:{frontmatter:{title:"Запись",order:60}}}},{node:{relativePath:"ru/guide/language/string-and-char.md",childMarkdownRemark:{frontmatter:{title:"Строка и символ",order:20}}}},{node:{relativePath:"ru/guide/language/overview.md",childMarkdownRemark:{frontmatter:{title:"Обзор",order:0}}}},{node:{relativePath:"ru/guide/language/tuple.md",childMarkdownRemark:{frontmatter:{title:"Кортеж",order:50}}}},{node:{relativePath:"ru/guide/language/type.md",childMarkdownRemark:{frontmatter:{title:"Тип!",order:15}}}},{node:{relativePath:"ru/guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"ru/guide/language/variant.md",childMarkdownRemark:{frontmatter:{title:"Вариант!",order:70}}}},{node:{relativePath:"ru/guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:40}}}},{node:{relativePath:"ru/guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}}]},file:{relativePath:"ru/guide/language/string-and-char.md",childMarkdownRemark:{html:'<h3 id="Строка"><a href="#%D0%A1%D1%82%D1%80%D0%BE%D0%BA%D0%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Строка</h3>\n<p>Строки в Reason ограничиваются <strong>двойными</strong> кавычками (одинарные кавычки зарезервированы для символов).</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code>let greeting = "Hello world!";\nlet multilineGreeting = "Hello\n world!";</code></pre>\n      </div>\n<p>Спецсимволы нужно экранировать:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> oneSlash = <span class="hljs-string">"\\\\"</span>;</code></pre>\n      </div>\n<p>Для конкатенации строк используется <code>^</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> greetings = <span class="hljs-string">"Hello "</span> ^ <span class="hljs-string">"world!"</span>;</code></pre>\n      </div>\n<h4 id="quoted-строка"><a href="#quoted-%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Quoted строка</h4>\n<p>Существует специальный синтаксис для строк, который позволяет:</p>\n<ul>\n<li>мультистроки</li>\n<li>отсутствие необходимости в экранировании</li>\n<li>хуки для специальных препроцессоров</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> <span class="hljs-type">GreetingAndOneSlash</span> = {|<span class="hljs-type">Hello</span>\n<span class="hljs-type">World</span>\n\\\n<span class="hljs-type">Hehe</span>...\n|};</code></pre>\n      </div>\n<p>Это похоже на JS строки в обратных кавычках, но без необходимости экранирования и без интерполяции. Хотя вы\nможете легко сделать интерполяцию,\n<a href="http://bucklescript.github.io/bucklescript/Manual.html#_unicode_support_with_string_interpolation_since_1_7_0">как это сделал BuckleScript</a>:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> world = {js|世界|js};\n<span class="hljs-keyword">let</span> helloWorld = {js|你好，$world|js};</code></pre>\n      </div>\n<p>Специальный препроцессор ищет строки с маркером <code>js</code> и трансформирует их в другой код.</p>\n<h4 id="Использование"><a href="#%D0%98%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Использование</h4>\n<p><a href="/api/String.html">Большинствро строковых операций можно найти в стандартной библиотеке</a>.\nДля компиляции в JS, смотрите <code>JS.String</code> биндинги в\n<a href="http://bucklescript.github.io/bucklescript/api/Js_string.html">BuckleScript API документации</a>.\nТак как строки Reason отображаются в строки JavaScript, вы можете смешивать и сопоставлять операции из обеих\nстандартных библиотек.</p>\n<h4 id="Советы-и-трюки"><a href="#%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D1%8B-%D0%B8-%D1%82%D1%80%D1%8E%D0%BA%D0%B8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Советы и трюки</h4>\n<p><a href="https://twitter.com/jusrin00/status/875238742621028355">https://twitter.com/jusrin00/status/875238742621028355</a></p>\n<p><strong>Теперь у вас есть выразительная система типов</strong>! В нетипизированном языке вы часто излишне используете\nстроки как:</p>\n<ul>\n<li>уникальный идентификатор: <code>var BLUE_COLOR = "blue"</code></li>\n<li>идентификатор внутри структуры данных: <code>var BLUE = "blue"; var RED = "red"; var colors = [BLUE, RED]</code></li>\n<li>имя поля объекта: <code>person["age"] = 24</code></li>\n<li>перечисление: <code>if (audio.canPlayType() === \'probably\') {...}</code>\n<a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canPlayType#Return_value">(ಠ_ಠ)</a></li>\n<li>другие безумные паттерны, которые покажутся вам ужасными, после использования Reason</li>\n</ul>\n<p>Чем больше вы перегружаете строковый тип, тем меньше система типом может вам помочь! Reason дает краткие,\nбыстрые и поддерживаем типы и структуры данных как альтернативу примерам выше (например, варианты, описанные в\nпоследующей секции).</p>\n<p>В случае нативной компиляции, Reason строки компилируются в простое представление, производительность\nкоторого легко анализировать, но иногда требует ручной настройки. Например, наивная конкатенация строк\n<code>"hi " ^ "how " ^ "are " ^ "you?"</code> выделяет память прод промежуточную строку <code>"are you?"</code> и <code>"how are you?"</code>.\nВ этом случае лучше использовать <a href="/api/String.html"><code>String.concat</code></a>. В некотором смысле, немного приятно, что\nтрадиционный анализ времени выполнения, который мы когда то изучали может быть полезен снова.</p>\n<p>В случае JavaScript компиляции, Reason строки отображаются в строки JS и наоборот. Потому таких возможностей\nоптимизации нет.</p>\n<h4 id="Дизайн-решения"><a href="#%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D1%8F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Дизайн решения</h4>\n<p>Использование quoted строки позволяет делать интересные DSL. Такие как <a href="/api/Str.html">регулярные выражения</a>:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> r = <span class="hljs-type">Str</span>.regexp {|hello \\([<span class="hljs-type">A</span>-<span class="hljs-type">Za</span>-z]+\\)|};</code></pre>\n      </div>\n<p>в противоположность</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> r = <span class="hljs-type">Str</span>.regexp <span class="hljs-string">"hello \\\\([A-Za-z]+\\\\)"</span>;</code></pre>\n      </div>\n<p>Хотя для JS компиляции вы должны использовать <a href="http://bucklescript.github.io/bucklescript/Manual.html#_regex_support"><code>[%bs.re]</code></a>.</p>\n<p>Акцент на простоту Reason/OCaml можно видеть в его прямолинейной реализации нативных строк. Слишком сложная\nреализация строки иногда может иметь <a href="http://mrale.ph/blog/2016/11/23/making-less-dart-faster.html">обратный эффект</a>.</p>\n<h3 id="Символ"><a href="#%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Символ</h3>\n<p>Reason имеет тип данных в виде строки, содержащей только одну букву:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> firstLetterOfAlphabet = \'a\';</code></pre>\n      </div>\n<p><strong>Важно</strong>: Символы не поддерживают Unicode или UTF-8.</p>\n<h4 id="Советы-и-трюки-1"><a href="#%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D1%8B-%D0%B8-%D1%82%D1%80%D1%8E%D0%BA%D0%B8-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Советы и трюки</h4>\n<p>Символ <a href="https://bucklescript.github.io/bucklescript/js-demo/?gist=7f6d24873a48fe03fa037c7c47848a4b">компилируется в целое число от 0 до 255</a>, для дополнительной скорости. Вы можете использовать паттерн-матчинг\n(описание далее) на нем:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> isVowel = <span class="hljs-keyword">switch</span> theChar {\n| \'a\' | \'e\' | \'i\' | \'o\' | \'u\' | \'y\' =&gt; <span class="hljs-literal">true</span>\n| <span class="hljs-number">_</span> =&gt; <span class="hljs-literal">false</span>\n};</code></pre>\n      </div>',frontmatter:{title:"Строка и символ"}}}},pathContext:{section:"ru",relativePath:"ru/guide/language/string-and-char.md",relatedFiles:"/^ru\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---ru-guide-language-string-and-char-925326f9acd9eb284bb3.js.map