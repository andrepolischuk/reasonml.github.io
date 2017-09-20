webpackJsonp([44],{"./node_modules/json-loader/index.js!./.cache/json/ru-guide-javascript-converting.json":function(e,a){e.exports={data:{allFile:{edges:[{node:{relativePath:"ru/guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Примеры",order:60}}}},{node:{relativePath:"ru/guide/index.md",childMarkdownRemark:{frontmatter:{title:"Гайд по Reason",order:0}}}},{node:{relativePath:"ru/guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:50}}}},{node:{relativePath:"ru/guide/what-and-why.md",childMarkdownRemark:{frontmatter:{title:"Что и Зачем",order:0}}}},{node:{relativePath:"ru/guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Перенос JS кода",order:5}}}},{node:{relativePath:"ru/guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:30}}}},{node:{relativePath:"ru/guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Взаимодействие",order:1}}}},{node:{relativePath:"ru/guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Библиотеки",order:2}}}},{node:{relativePath:"ru/guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Быстрый старт",order:0}}}},{node:{relativePath:"ru/guide/editor-tools/editors-plugins.md",childMarkdownRemark:{frontmatter:{title:"Плагины редактора",order:20}}}},{node:{relativePath:"ru/guide/javascript/syntax-cheatsheet.md",childMarkdownRemark:{frontmatter:{title:"Шпаргалка по синтаксису",order:1}}}},{node:{relativePath:"ru/guide/editor-tools/extra-goodies.md",childMarkdownRemark:{frontmatter:{title:"Дополнительные бонусы",order:30}}}},{node:{relativePath:"ru/guide/editor-tools/global-installation.md",childMarkdownRemark:{frontmatter:{title:"Глобальная установка",order:10}}}},{node:{relativePath:"ru/guide/editor-tools/index.md",childMarkdownRemark:{frontmatter:{title:"Настройка редактора",order:10}}}},{node:{relativePath:"ru/guide/language/boolean.md",childMarkdownRemark:{frontmatter:{title:"Булев",order:30}}}},{node:{relativePath:"ru/guide/language/exception.md",childMarkdownRemark:{frontmatter:{title:"Исключения",order:175}}}},{node:{relativePath:"ru/guide/language/external.md",childMarkdownRemark:{frontmatter:{title:"External",order:170}}}},{node:{relativePath:"ru/guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Деструктурирование",order:130}}}},{node:{relativePath:"ru/guide/language/function.md",childMarkdownRemark:{frontmatter:{title:"Функция",order:100}}}},{node:{relativePath:"ru/guide/language/if-else.md",childMarkdownRemark:{frontmatter:{title:"If-Else",order:110}}}},{node:{relativePath:"ru/guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:160}}}},{node:{relativePath:"ru/guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Императивные циклы",order:150}}}},{node:{relativePath:"ru/guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Основы языка",order:20}}}},{node:{relativePath:"ru/guide/language/integer-and-float.md",childMarkdownRemark:{frontmatter:{title:"Числа",order:40}}}},{node:{relativePath:"ru/guide/language/list-and-array.md",childMarkdownRemark:{frontmatter:{title:"Список и Массив",order:80}}}},{node:{relativePath:"ru/guide/language/module.md",childMarkdownRemark:{frontmatter:{title:"Модуль",order:180}}}},{node:{relativePath:"ru/guide/language/let-binding.md",childMarkdownRemark:{frontmatter:{title:"Let привязка",order:10}}}},{node:{relativePath:"ru/guide/language/more-on-type.md",childMarkdownRemark:{frontmatter:{title:"Больше о типах",order:120}}}},{node:{relativePath:"ru/guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Мутации",order:140}}}},{node:{relativePath:"ru/guide/language/object.md",childMarkdownRemark:{frontmatter:{title:"Объект",order:175}}}},{node:{relativePath:"ru/guide/language/pattern-matching.md",childMarkdownRemark:{frontmatter:{title:"Паттерн-матчинг",order:135}}}},{node:{relativePath:"ru/guide/language/record.md",childMarkdownRemark:{frontmatter:{title:"Запись",order:60}}}},{node:{relativePath:"ru/guide/language/string-and-char.md",childMarkdownRemark:{frontmatter:{title:"Строка и символ",order:20}}}},{node:{relativePath:"ru/guide/language/overview.md",childMarkdownRemark:{frontmatter:{title:"Обзор",order:0}}}},{node:{relativePath:"ru/guide/language/tuple.md",childMarkdownRemark:{frontmatter:{title:"Кортеж",order:50}}}},{node:{relativePath:"ru/guide/language/type.md",childMarkdownRemark:{frontmatter:{title:"Тип!",order:15}}}},{node:{relativePath:"ru/guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"ru/guide/language/variant.md",childMarkdownRemark:{frontmatter:{title:"Вариант!",order:70}}}},{node:{relativePath:"ru/guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:40}}}},{node:{relativePath:"ru/guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}}]},file:{relativePath:"ru/guide/javascript/converting.md",childMarkdownRemark:{html:'<h2 id="Подготовка"><a href="#%D0%9F%D0%BE%D0%B4%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D0%BA%D0%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Подготовка</h2>\n<p><strong>Прежде чем начать</strong>, пожалуйста, убедитесь, что Reason именно то,\nчто нужно вашей команде. Мы очень рады популярности Reason и Bucklescript,\nно не хотим, чтобы люди получали плохое первое впечатление. Это сложно\nпотом исправить.</p>\n<p>Это пошаговое руководство, которое поможет сконвертировать кодовую базу\nбыстро и эффективно. Оно не покрывает FFI фичи. Требуется базовое понимание\nReason/Bucklescript.</p>\n<h2 id="Синтаксис"><a href="#%D0%A1%D0%B8%D0%BD%D1%82%D0%B0%D0%BA%D1%81%D0%B8%D1%81" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Синтаксис</h2>\n<p><strong>Цель</strong>: первое и важное, <strong>сделать файл синтаксически корректным</strong>.\nНе беспокойтесь о неправильных типах, пропущенных модулях, плохой\nорганизации файлов, большому количеству внешних сущностей и так далее.\nПозже мы почистим все это, когда у нас будет возможность проверять\nрегрессии.</p>\n<p>Так как синтаксис Reason напоминает JavaScript, вместо старта нового файла,\nпросто скопируйте существующий js файл и работайте с этим.</p>\n<p><em>Совет</em>: не забудьте использовать <code>refmt</code> в редакторе/терминале!\nЕсли вы не знаете, например, порядок операторов, оберните их во столько\nскобок сколько считаете нужным, а потом запустите форматирование. Останутся\nтолько необходимые. Точно так же не нужно тратить время на расстановку\nотступов и пробелов: <code>refmt</code> сделает это за вас.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* Оригинальный JS код, который был скопирован */</span>\nconst school = require(\'school\');\n\nconst defaultId = <span class="hljs-number">10</span>;\n\nfunction queryResult(usePayload, payload) {\n  <span class="hljs-keyword">if</span> (usePayload) {\n    <span class="hljs-keyword">return</span> payload.student\n  }\n  <span class="hljs-keyword">return</span> school.getStudentById(defaultId);\n}</code></pre>\n      </div>\n<p>На этом этапе вы можете:</p>\n<ul>\n<li>Перевести вызовы функций</li>\n<li>Перевести все <code>var</code>/<code>const</code> в <code>let</code></li>\n<li>Спрятать <code>require</code></li>\n<li>Сделать другие подобные изменения.\nДля сущностей, не имеющих BuckleScript эквивалента, используйте\n<code>bs.raw</code> (<a href="http://bucklescript.github.io/bucklescript/Manual.html#_embedding_arbitrary_js_code_as_an_expression">документация</a>).</li>\n</ul>\n<p>Главное <strong>сделать файл синтаксически корректным</strong>. Пытаться изучать сразу синтаксис,\nтипы и семантику, может сильно снизить вашу скорость.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* Синтаксически валидны, но семантически неверный */</span>\n<span class="hljs-comment">/* const school = require(\'school\'); */</span>\n\n<span class="hljs-keyword">let</span> defaultId = <span class="hljs-number">10</span>;\n\n<span class="hljs-keyword">let</span> queryResult usePayload payload =&gt; {\n  <span class="hljs-keyword">if</span> (usePayload) {\n    payload.student\n  } <span class="hljs-keyword">else</span> {\n    <span class="hljs-comment">/* no need for early return in Reason; if-else is an expression */</span>\n    school.getStudentById defaultId;\n  }\n};</code></pre>\n      </div>\n<h2 id="Типы-проход-первый"><a href="#%D0%A2%D0%B8%D0%BF%D1%8B-%D0%BF%D1%80%D0%BE%D1%85%D0%BE%D0%B4-%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%B9" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Типы, проход первый</h2>\n<p><strong>Цель</strong>: скорректировать типы, но минимум, чтобы продвинуться на следующий\nшаг.</p>\n<p>Вы так же иногда будете получать ошибки синтаксиса, но не в таком количестве\nкак на предыдущем шаге.</p>\n<ul>\n<li>\n<p>Измените <code>foo.bar</code> на <code>foo##bar</code>. Эта <a href="http://bucklescript.github.io/bucklescript/Manual.html#_how_to_consume_js_property_and_methods">BuckleScript фича</a> будет вашим другом некоторое время.</p>\n</li>\n<li>\n<p>Измените <code>{foo: bar}</code> на <code>[%bs.obj {foo: bar}]</code> (<a href="http://bucklescript.github.io/bucklescript/Manual.html#_create_js_objects_using_bs_obj">docs</a>). После <code>refmt</code>, это будет приведено к <code>{"foo": bar}</code>.</p>\n</li>\n<li>\n<p>Для коммуникации с внешними JS файлами, используйте <code>external</code>.\nЭто BuckleScript <a href="http://bucklescript.github.io/bucklescript/Manual.html#_ffi">FFI</a>.</p>\n<ul>\n<li>\n<p>Делайте это прямо в файле, пока нет нужны создавать отдельные файлы</p>\n</li>\n<li>\n<p>Если это слишком сложно: создавать правильные типы для входа и выхода <code>external</code>\nиспользуйте полиморфные типы, например <code>external getStudentById: \'whatever => \'whateverElse = ...</code>.</p>\n</li>\n<li>\n<p>Для типов данных и шаблонов, которые сложно правильно сконвертировать, иногда можно\nиспользовать <code>external unsafeCast : myPayloadType => anotherDataType = "%identity";</code>.</p>\n</li>\n</ul>\n</li>\n</ul>\n<p>Это лишь первый проход. Финальные типы будут выглядеть лучше. Но сейчас оцените плюсы!\nКак только вы закончите с ошибкам, то JS файл будет сгенерирован. Держите его открытым рядом.\nТеперь время вернуться и пофиксить все хаки!</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* синтаксичеки неверно, семантически неверно, но лучше чем было */</span>\nexternal getStudentById: \'whatever =&gt; \'whateverElse = <span class="hljs-string">"getStudentById"</span> [@@bs.<span class="hljs-keyword">module</span> <span class="hljs-string">"school"</span>];\n\n<span class="hljs-keyword">let</span> defaultId = <span class="hljs-number">10</span>;\n\n<span class="hljs-keyword">let</span> queryResult usePayload payload =&gt; {\n  <span class="hljs-keyword">if</span> (usePayload) {\n    payload##student <span class="hljs-comment">/* this will be inferred as `Js.t \'a` */</span>\n  } <span class="hljs-keyword">else</span> {\n    getStudentById defaultId;\n  }\n};</code></pre>\n      </div>\n<h2 id="Семантика-времени-работы"><a href="#%D0%A1%D0%B5%D0%BC%D0%B0%D0%BD%D1%82%D0%B8%D0%BA%D0%B0-%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B8-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Семантика времени работы</h2>\n<p><strong>Цель</strong>: пофиксить все ошибки в конечном JS.</p>\n<p>Сравните это с вашим старым JS файлом. Полученный код, скорее всего\nнекорректен. Скорее всего вы пропустили некоторые внешние объявления.</p>\n<ul>\n<li>\n<p>Опишите форму JS объектов (штуки, которые требуют <code>##</code>).</p>\n</li>\n<li>\n<p>По возможности замените их на записи/варианты/идиоматические типы OCaml.</p>\n</li>\n</ul>\n<p>Каждый раз при изменении проверяйте, что на выходе в JS.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> student; <span class="hljs-comment">/* абстрактный тип, описан далее */</span>\nexternal getStudentById: \'whatever =&gt; student = <span class="hljs-string">"getStudentById"</span> [@@bs.<span class="hljs-keyword">module</span> <span class="hljs-string">"school"</span>];\n\n<span class="hljs-keyword">type</span> payloadType = <span class="hljs-type">Js</span>.t {. student: student};\n\n<span class="hljs-keyword">let</span> defaultId = <span class="hljs-number">10</span>;\n\n<span class="hljs-keyword">let</span> queryResult usePayload (payload: payloadType) =&gt; {\n  <span class="hljs-keyword">if</span> (<span class="hljs-type">Js</span>.to_bool usePayload) {\n    payload##student\n  } <span class="hljs-keyword">else</span> {\n    getStudentById defaultId;\n  }\n};</code></pre>\n      </div>\n<h2 id="Чистим-код-Типы-проход-второй"><a href="#%D0%A7%D0%B8%D1%81%D1%82%D0%B8%D0%BC-%D0%BA%D0%BE%D0%B4-%D0%A2%D0%B8%D0%BF%D1%8B-%D0%BF%D1%80%D0%BE%D1%85%D0%BE%D0%B4-%D0%B2%D1%82%D0%BE%D1%80%D0%BE%D0%B9" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Чистим код (Типы, проход второй)</h2>\n<p><strong>Цель</strong>: сделать типы корректными (звучащими).</p>\n<p>Вернемся и пофиксим все, что пропустили при первом проходе.</p>\n<ul>\n<li>\n<p>Убедитесь, что у вас нет неопределенных типов в <code>external</code></p>\n</li>\n<li>\n<p>Вы можете оставить <code>external</code> или переместить в отдельный файл</p>\n</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* в текущем файле */</span>\n<span class="hljs-keyword">type</span> payloadType = <span class="hljs-type">Js</span>.t {. student: <span class="hljs-type">School</span>.student};\n\n<span class="hljs-keyword">let</span> defaultId = <span class="hljs-number">10</span>;\n\n<span class="hljs-keyword">let</span> queryResult usePayload (payload: payloadType) =&gt; {\n  <span class="hljs-keyword">if</span> (<span class="hljs-type">Js</span>.to_bool usePayload) {\n    payload##student\n  } <span class="hljs-keyword">else</span> {\n    <span class="hljs-type">School</span>.getStudentById defaultId;\n  }\n};</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* в отдельном School.re файле */</span>\n<span class="hljs-keyword">type</span> student;\nexternal getStudentById: int =&gt; student = <span class="hljs-string">"getStudentById"</span> [@@bs.<span class="hljs-keyword">module</span> <span class="hljs-string">"School"</span>];\nexternal getAllStudents: unit =&gt; array student = <span class="hljs-string">"getAllStudents"</span> [@@bs.<span class="hljs-keyword">module</span> <span class="hljs-string">"School"</span>];</code></pre>\n      </div>\n<p>Тип <code>student</code> не имеет содержимого. Он называется <a href="../language/module#%D0%A1%D0%B8%D0%B3%D0%BD%D0%B0%D1%82%D1%83%D1%80%D1%8B">абстрактным типом</a>.\nЭто очень удобный способ указывать отношения между внешними вызовами,\nбез знания структуры данных.</p>\n<p>И теперь все готово!</p>\n<h2 id="Советы"><a href="#%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D1%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Советы</h2>\n<p><strong>Не пытайтесь</strong> сконвертировать JS файл за один присест. Это только\nвас затормозит! Это нормально иметь внешние зависимости и <code>bs.obj</code>, а\nтакже не иметь удобных OCaml фич (вариантов, именованных аргументов, и так далее).\nКак только вы переведете несколько файлов, вы сможете вернуться и\nсделать рефаторинг <strong>быстрее</strong> так как система типов будет помогать</p>\n<p>Все утилиты, которые вы используете (например конвертирование <code>Js.null_undefined Js.boolean</code> в <code>bool</code>)\nположите в отдельный файл <code>tempUtils.re</code>. Это будет хорошим примером\nдля ваших коллег.</p>\n<p>Мы <strong>крайне рекомендуем</strong> добавить полученный JS в систему контроля версий.\nЭто упростит сборку и в случае когда вас нет, ваши коллеги смогут сделать небольшие\nизменения, проверить diff и отловить ошибки. Это так же может быть полезно для\nбыстрых патчей прямо в JS код. Это как <a href="https://facebook.github.io/jest/docs/snapshot-testing.html">снапшоты Jest</a> бесплатно!</p>\n<p>Как всегда, вы можете написать нам в <a href="https://discord.gg/reasonml">Discord</a>.</p>',frontmatter:{title:"Перенос JS кода"}}}},pathContext:{section:"ru",relativePath:"ru/guide/javascript/converting.md",relatedFiles:"/^ru\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---ru-guide-javascript-converting-28f673acc0bd6ea03830.js.map