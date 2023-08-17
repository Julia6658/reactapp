# reactapp

<b>Вопросы к д/з 25 недели: </b><br>
Практическое задание 💎 - переписать классовый компонент Counter, используя хуки:
<pre>
function Counter () {
   const [count, setCount] = useState(0)
   handleClick = () => {
    setCount(count + 1)
  };
    return (
      <button onClick={handleClick}>{count}</button>;
    )
  }
}
	
export default Counter;
</pre>

5. 
6. Какой код обычно пишут в конструкторе? Для каких задач он используется?<br>
   Внутри конструктора происходит инициализация компонента, устанавливается состояние (state) и пропсы (props)<br>
9. Можно ли несколько раз использовать хук `useEffect` внутри одного компонента?<br>
Да. 
11. 
12. Будут ли перерисованы дочерние элементы компонента при вызове метода `forceUpdate`()?<br>
Да.



<b>Вопросы к д/з 21 недели: </b><br>
1. Нет, достаточно команды npm install -g create-react-app <br>
2. Минус SPA - SEO-продвижение для него не сделать, не работает у пользователей с отключенной поддержкой JS, не работает без доступа к сети <br>
Плюс SPA - мгновенная скорость загрузки, широкие возможности разработки, размер приложения и используемых им данных не ограничен памятью устройства.<br>
3. Командой create-react-app firstapp, после чего создается структура папок.<br>
4. Это библиотека (хотя везде его называют фреймворком), пример фреймфорков - angular, vue, jquery<br>
5. Командой - import { что импортируем } from './имя_файла_откуда_импортируем.js';<br>
6. react-slick, react-photo-gallery, react-google-maps<br>
7. src/App.js<br>
8. Папка build — этот каталог, который создается при сборке проекта для продакшена. Он содержит
все готовые файлы для продакшен-окружения. Весь код, написанный в каталогах /src/ и /public/, будет собран в пару файлов при выполнении сборки проекта и будет размещен в каталоге build. npm build - команда для полготовки проекта для выкладки на прод.

<b>Вопросы к д/з 22 недели: </b><br>
1. Props - это объект данных, котрый используется в компоненте. В функциональных компонентах можно использовать </br>
2. Нужно </br>
3. Нет </br>
4. JSX от HTML отличается - даже одиночные теги всегла нужно закрывать, вместо class используется className  <br>
5. props позволяет переиспользовать компоненты, подставляя в них любые данные <br>
6. Тегом div
7. Да<br>
8. Можно<br>
9. export default Назаване компонента;<br>
10. Самый верхний - Router, самый глубокий - Block<br>
<b>Вопросы к д/з 23 недели: </b><br>

