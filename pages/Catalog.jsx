// import React
import React from 'react';
import { useState, useEffect } from 'react';
// import componenst 
import Header from '../components/header/Header';
// import style 
import s from '../styles/Catalog.module.css'

// import axios 
import axios from 'axios';
import BookItem from '../components/cardBook/BookItem';
const books =
    [
        {
            "id": 1,
            "name": "Linux for Hacking: Install Test and Hack",
            "price": "1200.00",
            "title": "Эта книга посвящена изучению одной из самых популярных операционных систем, устанавливаемых на серверах: Linux.",
            "authors": [1],
            "publication_date": "Неизвестно",
            "genre": 1,
            "oblojka": "/final_project/shop/media/internet_shop/shop/media/photo_2022-08-09_21-12-29_ss8LxDb.jpg"
        },
        {
            "id": 2,
            "name": "Командная строка Linux. Полное руководство. 2-е издание",
            "price": "1000.00",
            "title": "освоите неустаревающие навыки владения командной строкой: навигацию по файловой системе, настройку окружения, объединение команд в цепочки и сопоставление с регулярными выражениями. Вы постигнете философию, лежащую в основе многих инструментов командной строки, разберетесь с богатым наследием, полученным от суперкомпьютеров с Unix, и приобщитесь к знаниям, накопленным поколениями гуру, исключивших мышь из своего арсенала инструментов",
            "authors": [2],
            "publication_date": "2020",
            "genre": 1,
            "oblojka": "/final_project/shop/media/internet_shop/shop/media/photo_2022-04-24_03-42-55.jpg"
        },
        {
            "id": 3,
            "name": "Удаленный сервер своими руками. От азов до практической работы",
            "price": "1500.00",
            "title": "Эта книга поможет вам самостоятельно освоить полный цикл создания своего собственного выделенного сервера: от установки операционной системы на сервер до настройки и администрирования. Будет подробно рассказано: как выполнить настройку сервера; как использовать командную строку; вы узнаете как настраивать сетевые интерфейсы сервера; поговорим о маршрутизации и настройке брандмауэра как пользоваться удаленным входом в систему по ssh; как настраивать файловый сервер FTP; что такое DHCP-сервер и как подключаться к Windows-инфраструктуре; как повысить производительность сервера и многое другой",
            "authors": [3],
            "publication_date": "2021",
            "genre": 1,
            "oblojka": "/final_project/shop/media/internet_shop/shop/media/photo_2022-06-02_17-45-37.jpg"
        },
        {
            "id": 4,
            "name": "Практикум: модули ядра Linux",
            "price": "1000.00",
            "title": "Этот практикум является конспектом курса практических занятий по написанию кодов ядра Linux",
            "authors": [4],
            "publication_date": "2018",
            "genre": 1,
            "oblojka": "/final_project/shop/media/internet_shop/shop/media/photo_2022-08-09_22-44-01.jpg"
        },
        {
            "id": 5,
            "name": "inux. Администрирование и системное программирование",
            "price": "1000.00",
            "title": "та книга представляет собой всеобъемлющее руководство по работе, настройке, администрированию и системному программированию операционных систем семейства UNIX/Linux, включая Ubuntu, Fedora, openSUSE, Red Hat, Debian, Mandriva, Mint и даже Mac OS X",
            "authors": [5],
            "publication_date": "2018",
            "genre": 1,
            "oblojka": "/final_project/shop/media/internet_shop/shop/media/photo_2022-08-09_22-45-27.jpg"
        },
        {
            "id": 6,
            "name": "Функциональное программирование на Javascript",
            "price": "500.00",
            "title": "Основные темы книги: Применение ценных методик ФП на практике и там, где это наиболее целесообразно; Отделение логики системы от подробностей ее реализации; Обработка ошибок, тестирование и отладка прикладного кода в стиле ФП; Демонстрация и обсуждение всех примеров кода на JavaScript, написанных по стандарту ES6 (ES 2015). Книга адресована разработчикам, твердо усвоившим основы программирования на JavaScript и обладающим достаточным опытом проектирования веб-приложений",
            "authors": [6],
            "publication_date": "2018",
            "genre": 2,
            "oblojka": "/final_project/shop/media/internet_shop/shop/media/photo_2022-08-09_22-48-02.jpg"
        },
        {
            "id": 7,
            "name": "Android глазами хакера",
            "price": "700.00",
            "title": "Рассмотрена внутренняя архитектура ОС Android, используемые ею разделы и файловые системы, принцип работы механизмов обновления и внутренних инст­рументов безопасности. Рассказано о разграничении доступа в ОС Android, о привилегиях, методах получения прав root, кастомизации и установке нестандартных прошивок. Описаны инструменты для дизассемблирования, отладки и анализа ко­да мобильных приложений, приведены примеры модификации кода с целью изме­нения функций ПО и внедрения в приложение сторонних модулей",
            "authors": [7],
            "publication_date": "2021",
            "genre": 4,
            "oblojka": "/final_project/shop/media/internet_shop/shop/media/photo_2022-08-09_22-53-18.jpg"
        },
        {
            "id": 8,
            "name": "Kotlin: программирование на примерах",
            "price": "1000.00",
            "title": "Книга посвящена разработке мобильных приложений для Android на языке Kotlin. Рассматриваются основные элементы языка, такие как функции и классы, приемы объектно-ориентированного программирования. Рассказывается о разработке микросервисов RESTful для приложений Android, о методах реализации шаблона архитектуры MVC и т.д.",
            "authors": [8],
            "publication_date": "2020",
            "genre": 4,
            "oblojka": "/final_project/shop/media/internet_shop/shop/media/photo_2022-08-09_22-58-56.jpg"
        },
        {
            "id": 9,
            "name": "Elements of Android Jetpack",
            "price": "1000.00",
            "title": "Эта книга продолжает руководство The Busy Coder’s Guide to Android Development, чтобы познакомить разработчиков с разработкой приложений для Android, уделяя особое внимание Jetpack. Здесь вы узнаете, как настроить Android-приложение для Java или Kotlin, создать пользовательский интерфейс и многое другое!",
            "authors": [9],
            "publication_date": "2021",
            "genre": 4,
            "oblojka": "/final_project/shop/media/internet_shop/shop/media/photo_2022-08-09_23-14-12.jpg"
        },
        {
            "id": 10,
            "name": "Kotlin в действии",
            "price": "1700.00",
            "title": "Язык Kotlin предлагает выразительный синтаксис, мощную и понятную систему типов, великолепную поддержку и бесшовную совместимость с существующим кодом на Java, богатый выбор библиотек и фреймворков. Kotlin может компилироваться в байт-код Java, поэтому его можно использовать везде, где используется Java, включая Android. А благодаря эффективному компилятору и маленькой стандартной библиотеке, Kotlin практически не привносит накладных расходов.",
            "authors": [10, 11],
            "publication_date": "2018",
            "genre": 4,
            "oblojka": "/final_project/shop/media/internet_shop/shop/media/photo_2022-08-09_23-18-08.jpg"
        },
        {
            "id": 11,
            "name": "Atomic Kotlin",
            "price": "1000.00",
            "title": "You're a novice if you don't have prior programming knowledge, but \"dedicated\" because we give you just enough to figure it out on your own. When you're finished, you'll have a solid foundation in programming and in Kotlin",
            "authors": [12, 13],
            "publication_date": "2020",
            "genre": 4,
            "oblojka": "/final_project/shop/media/internet_shop/shop/media/photo_2022-08-09_23-20-16.jpg"
        },
        {
            "id": 12,
            "name": "Реверсинг и защита программ от взлома",
            "price": "1000.00",
            "title": "Подробно изложены современные основные методики защиты программного обеспечения, начиная с составления программ и заканчивая их отладкой. Рассмотрены примеры взлома стандартных защит и даны рекомендации для предотвращения такого взлома. Подробно описана работа с отладчиком OllyDBg",
            "authors": [14],
            "publication_date": "2006",
            "genre": 5,
            "oblojka": "/final_project/shop/media/internet_shop/shop/media/photo_2022-08-09_23-22-30.jpg"
        },
        {
            "id": 13,
            "name": "Взлом. Приемы, Трюки и Секреты Хакеров",
            "price": "2000.00",
            "title": "Описана технология поиска и эксплуатации уязвимостей, детектирования \"песочник\" и антиотладки, управления процессами в ОС семейства Microsoft Windows и их маскировки. Рассказывается о способах обмена данными между вредоносными программами и управляющим сервером",
            "authors": [15, 16, 17, 18, 19],
            "publication_date": "2020",
            "genre": 5,
            "oblojka": "/final_project/shop/media/internet_shop/shop/media/photo_2022-08-09_23-24-30.jpg"
        },
        {
            "id": 14,
            "name": "Linux for Hackers",
            "price": "1200.00",
            "title": "Изучите основы Linux и bash, shell, python для взлома с использованием kali linux",
            "authors": [20],
            "publication_date": "2020",
            "genre": 5,
            "oblojka": "/final_project/shop/media/internet_shop/shop/media/photo_2022-08-09_23-25-35.jpg"
        },
        {
            "id": 15,
            "name": "Ловушка для багов. Полевое руководство по веб-хакингу",
            "price": "1300.00",
            "title": "Распостраненные типы ошибок и реальные хакерские отчеты о таких компаниях, как Twitter, Facebook, Google, Uber и Starbucks. Из этих отчетов вы поймете принципы работы уязвимостей и сможете сделать безопасней собственные приложения",
            "authors": [21],
            "publication_date": "2020",
            "genre": 5,
            "oblojka": "/final_project/shop/media/internet_shop/shop/media/photo_2022-08-09_23-26-38.jpg"
        },
        {
            "id": 16,
            "name": "От первых вирусов до целевых атак: Учебное пособие",
            "price": "1400.00",
            "title": "В пособии повествуется об истории вредоносного программного обеспечения, приведен обзор его типологии. Описаны технологии детектирования вредоносных и потенциально нежелательных программ. Рассказывается также о наиболее опасных и совершенных современных компьютерных угрозах в контексте целевых атак и кибершпионажа",
            "authors": [22, 23, 24],
            "publication_date": "2019",
            "genre": 5,
            "oblojka": "/final_project/shop/media/internet_shop/shop/media/photo_2022-08-09_23-29-01.jpg"
        },
        {
            "id": 17,
            "name": "Web Design Playground",
            "price": "1000.00",
            "title": "Автор книги проведет вас по длинному пути обучения веб-разработке от написания первой строки HTML-кода до создания интересных и привлекательных веб-страниц. Поработав с данной книгой и изучив несколько проектов, разбор которых включен в нее, вы прокачаете свои навыки в веб-дизайне",
            "authors": [25],
            "publication_date": "2019",
            "genre": 2,
            "oblojka": "/final_project/shop/media/internet_shop/shop/media/photo_2022-08-09_23-32-38.jpg"
        },
        {
            "id": 18,
            "name": "CSS: Полный справочник",
            "price": "1250.00",
            "title": "В первую очередь эта книга рассчитана на веб-дизайнеров и разработчиков мобильных приложений, которые заинтересованы в использовании новейших средств визуального оформления веб-страниц, характеризующихся широкими функциональными возможностями и повышенной производительностью",
            "authors": [28],
            "publication_date": "2020",
            "genre": 2,
            "oblojka": "/final_project/shop/media/internet_shop/shop/media/photo_2022-08-09_23-35-02.jpg"
        },
        {
            "id": 19,
            "name": "Создаем динамические веб-сайты с помощью PHP, MySQL, JavaScript, CSS и HTML5",
            "price": "1100.00",
            "title": "Эта книга предназначена для тех, кто хочет изучить способы создания эффективных и динамичных сайтов. Сюда можно отнести веб-мастеров или специалистов по графическому дизайну, которым уже приходилось создавать статические сайты и у которых есть желание вывести свое мастерство на следующий уровень, а также студентов вузов и колледжей, недавних выпускников этих учебных заведений и просто самоучек",
            "authors": [29],
            "publication_date": "2016",
            "genre": 2,
            "oblojka": "/final_project/shop/media/internet_shop/shop/media/photo_2022-08-09_23-37-29.jpg"
        },
        {
            "id": 20,
            "name": "Разработка на JavaScript",
            "price": "1500.00",
            "title": "Что такое современный JavaScript?  Когда-то он просто добавлял интерактивности к окнам веб-браузера, а теперь превратился в основательный фундамент мощного и надежного софта. Разработчики любого уровня смогут использовать JavaScript для создания API, веб-, мобильных и десктопных приложений",
            "authors": [30],
            "publication_date": "2021",
            "genre": 2,
            "oblojka": "/final_project/shop/media/internet_shop/shop/media/photo_2022-08-09_23-38-51.jpg"
        },
        {
            "id": 21,
            "name": "Python. Лучшие практики и инструменты",
            "price": "1400.00",
            "title": "Третье издание «Python. Лучшие практики и инструменты» даст вам инструменты для эффективного решения любой задачи разработки и сопровождения софта",
            "authors": [32],
            "publication_date": "2021",
            "genre": 3,
            "oblojka": "/final_project/shop/media/internet_shop/shop/media/photo_2022-08-09_23-40-12.jpg"
        },
        {
            "id": 22,
            "name": "Math for Programmers. 3d graphics, machine learning, and simulations with Python",
            "price": "1600.00",
            "title": "В этой книге мы начнем с изучения векторов — математического инструмента для представления многомерных данных. Компьютерная графика в 2D и 3D построена с помощью векторов, и вы узнаете, как создавать собственные 3D-анимации с помощью матричных преобразований",
            "authors": [33],
            "publication_date": "2020",
            "genre": 3,
            "oblojka": "/final_project/shop/media/internet_shop/shop/media/photo_2022-08-09_23-41-09.jpg"
        },
        {
            "id": 23,
            "name": "C# для чайников",
            "price": "1399.00",
            "title": "Даже если у вас есть опыт работы с C#, новые функциональные возможности C# 7.0 помогут вам создавать многофункциональные приложения еще быстрее, чем ранее. В этой книге представлено множество новых функциональных возможностей данного языка программирования",
            "authors": [34],
            "publication_date": "2019",
            "genre": 3,
            "oblojka": "/final_project/shop/media/internet_shop/shop/media/photo_2022-08-09_23-42-49.jpg"
        },
        {
            "id": 24,
            "name": "Микросервисы. Паттерны разработки и рефакторинга",
            "price": "1499.00",
            "title": "Книга, предназначенная для разработчиков и архитекторов из больших корпораций, рассказывает, как проектировать и писать приложения в духе микросервисной архитектуры. Также в ней описано, как делается рефакторинг крупного приложения – и монолит превращается в набор микросервисов",
            "authors": [35],
            "publication_date": "2020",
            "genre": 3,
            "oblojka": "/final_project/shop/media/internet_shop/shop/media/photo_2022-08-09_23-45-30.jpg"
        },
        {
            "id": 25,
            "name": "Разработка мобильных приложений на C# для IOS и Android",
            "price": "1200.00",
            "title": "Данная книга в сжатой форме описывает целостный процесс создания приложений для смартфонов и планшетов. Рассматриваются особенности мобильных операционных систем и устройств, выбор инструментов для разработки, подготовка рабочей документации в духе Agile, проектирование структуры и архитектуры решения, создание автоматизированного конвейера Continues Integration/Continues Delivery, а также мониторинг работоспособности конечного продукта на устройствах реальных пользователей. Все примеры приведены на языке C#",
            "authors": [36],
            "publication_date": "2020",
            "genre": 3,
            "oblojka": "/final_project/shop/media/internet_shop/shop/media/photo_2022-08-09_23-46-52.jpg"
        }
    ]



const Catalog = () => {

    return (
        <div>
            <Header />
            {books.map((book) => {
                // return (<BookItem book={book}   />)
            })}
            <h1 className={s.title}>Скоро ...</h1>

        </div>
    );
};

export default Catalog;