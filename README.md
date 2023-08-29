# reactapp
<b>Вопросы к д/з 26 недели: </b><br>

1. По адресу /users будет открываться главная страница, так как нет свойства exact у компонентов Route
2. Отобразится сообщение "Моя личная страница"
3. Метод map вторым агруметом принимает индекс элемента массива.
4. Как бы вы подошли к решению задачи по выводу компонентом <CardList> только тех экземпляров компонента <Card>, цена которых не превышает заданную?
<pre>
{
    id: 12345,
    title:"Пляжные тапки",
    price:35,
    description:"Пусть пригодятся",
    imgLink:"https://shop/beach_footwear.jpg"
}

function CardList() {
        return (
            <React.Fragment>
                {shoes.filter((item, index)=> {
                        if (item.price < 100) {
                        < Card
                            key={index}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            description={item.description}
                            imgLink={item.imgLink}
			/ >
                 	} 
			})
		}
            </React.Fragment>
        );
}
</pre>
5. Как задать параметр в пути? Например, filter (useLocation, useSearchParams).<br>
<pre> < Link to={`/Words/training/${filter}`} > </pre>
6. Какая разница между element и children в указании роутера? <br>
Element обозначает конкретный элемент (компонент), который должен быть отображен при совпадении пути с определенным маршрутом. В этом случае, только один элемент будет отображен на странице при совпадении с путем.   Children представляет собой группу элементов (компонентов), которые могут быть отображены одновременно при совпадении пути с определенным маршрутом. В этом случае, все дочерние элементы указанного маршрута будут отображены на странице при совпадении с путем.<br>
7. Exact нужен для проверки точного соответствия текущего адреса и адресов, указанных в Route. <br>
8. Самостоятельно разберитесь, зачем нужны useMatch, useLocation, useNavigate? <br>
useLocation - для возвращения объекта location , представляющего текущий URL.<br>
useMatch - даёт возможность в компонентах-функциях проверять текущий путь с шаблонным путем - useMatch("шаблонный путь")<br>
useNavigate возвращает функцию, которая в качестве первого аргумента принимает строку URL или целое число. Целое число может быть положительным (движение вперед по истории браузера) или отрицательным (движение назад по истории браузера). В качестве второго аргумента можно передать объект {replace, state}.<br>
9. Как можно сделать перенаправление на другую страницу по клику на кнопку с помощью useNavigate? 
<button onClick={() => navigate('/target-page')> -в скобках нужно указать адрес страницы куда будет переход, либо число, если число отрицательное, то будет переход назад по истории браузера, если положительное-вперед по истории. В качестве второго аргумениа можно передать {replace, state} для замены страницы на которую переходим при клике на другую.<br><br>

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
</pre>	
export default Counter; 
</pre>
1. <b>В компонент передаются атрибуты description и title . Могу ли я их сложить как на примере, чтобы получить одну строку и вывести в компоненте?</b></br>
Нет, пропсы надо менять через this, this.state.title = title + description;
2.  <b>С помощью какого метода можно отловить изменение props?</b></br>
Можно отловить изменение пропсов с помощью добавления второго аргумента в useEffect.

3. <b>Оператор расширения часто используется также для клонирования объекта. Подумайте, чем отличаются эти две записи и какую проблему решает здесь оператор расширения:</b>
 <pre>
	 const initialObj = { title:'Hello', text:'World' }

	//№1
	const firstObj = initialObj - //Полное копирование объекта,  firstObj зависит от initialObj, firstObj будет менятся, если изменится initialObj 
	
	//№2
	const secondObj = {...initialObj} // secondObj может отличаться по содержанию от initialObj, независимые объекты
 </pre>

4.<b> В каком из методов жизненного цикла лучше всего использовать методы вызова API и обращения к веб-хранилищам, если они должны быть вызваны всего один раз при загрузке страницы?</b></br>
 useEffect для функциональногo, componentDidMount() для классового компонента,

5. <b>С помощью какого метода можно отловить и отрисовать для пользователя возникшую в компоненте ошибку?</b></br>
Использовать метод жизненного цикла componentDidCatch(). Создается компонент ErrorBoundary, который оборачивает другие компоненты. Если в дочернем компоненте происходит ошибка, метод componentDidCatch() будет вызван, и компонент ErrorBoundary отобразит сообщение об ошибке для пользователя.</br>
6. <b>Какой код обычно пишут в конструкторе? Для каких задач он используется?</b></br>
   Внутри конструктора происходит инициализация компонента, устанавливается состояние (state) и пропсы (props)<br>
7. <b>Что делает функция render()? Что может её вызвать?</b><br>
render вставляет компонент в DOM, отрисовывает его на странице или перерисовывает после изменений.<br>
render вызывается после инициализации компонента и после изменения компонента-повторный рендер.<br>
8. <b>Что нужно изменить в коде из урока (видео), чтобы начальные параметры у компонента приходили из пропсов, но если пропсы вообще не заданы, начальные значения были инициализированы нулями?</b><br>
<pre>

</pre>
9. <b>Можно ли несколько раз использовать хук `useEffect` внутри одного компонента?</b><br>
Да.  
10. <b>Можно ли не передавать второй аргумент в хук `useEffect`? Что тогда произойдёт?</b></br>

11. <b>Что означает возвращение функции в теле хука `useEffect`? </b></br>

12. <b>Будут ли перерисованы дочерние элементы компонента при вызове метода `forceUpdate`()?</b></br>
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

