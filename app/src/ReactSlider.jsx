
class ReactSlider extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="slider">
                <div className="slider__inner">


                    <div className="slider__item">
                        <p className="slider__item-name">Голикова Татьяна Алексеевна
                        </p>
                        <div className="slider__item-box">
                            <div className="slider__item-number">7</div>
                            <div className="slider__item-imagebg">
                                <img className="slider__item-image" src="./images/user_golikova.png" alt=""></img>
                            </div>
                        </div>
                    </div>


                    <div className="slider__item">
                        <p className="slider__item-name">Хуснуллин Марат Шакирзянович
                        </p>
                        <div className="slider__item-box">
                            <div className="slider__item-number">6</div>
                            <div className="slider__item-imagebg">
                                <img className="slider__item-image" src="./images/user_husnullin.png" alt=""></img>
                            </div>
                        </div>
                    </div>


                    <div className="slider__item">
                        <p className="slider__item-name">Белоусов Андрей Рэмович
                        </p>
                        <div className="slider__item-box">
                            <div className="slider__item-number">5</div>
                            <div className="slider__item-imagebg">
                                <img className="slider__item-image" src="./images/user_belousov.png" alt=""></img>
                            </div>
                        </div>
                    </div>


                    <div className="slider__item">
                        <p className="slider__item-name">Григоренко Дмитрий Юрьевич
                        </p>
                        <div className="slider__item-box">
                            <div className="slider__item-number">1</div>
                            <div className="slider__item-imagebg">
                                <img className="slider__item-image" src="./images/user_grigorenko.png" alt=""></img>
                            </div>
                        </div>
                    </div>


                    <div className="slider__item">
                        <p className="slider__item-name">Борисов Юрий Иванович
                        </p>
                        <div className="slider__item-box">
                            <div className="slider__item-number ok-large"></div>
                            <div className="slider__item-imagebg">
                                <img className="slider__item-image" src="./images/user_borisov.png" alt=""></img>
                            </div>
                        </div>
                    </div>


                    <div className="slider__item">
                        <p className="slider__item-name">Абрамченко Виктория Валериевна
                        </p>
                        <div className="slider__item-box">
                            <div className="slider__item-number ok-large"></div>
                            <div className="slider__item-imagebg">
                                <img className="slider__item-image" src="./images/user_abramchenko.png" alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div className="slider__item">
                        <p className="slider__item-name">Абрамченко Виктория Валериевна
                        </p>
                        <div className="slider__item-box">
                            <div className="slider__item-number ok-large"></div>
                            <div className="slider__item-imagebg">
                                <img className="slider__item-image" src="./images/user_abramchenko.png" alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div className="slider__item">
                        <p className="slider__item-name">Борисов Юрий Иванович
                        </p>
                        <div className="slider__item-box">
                            <div className="slider__item-number ok-large"></div>
                            <div className="slider__item-imagebg">
                                <img className="slider__item-image" src="./images/user_borisov.png" alt=""></img>
                            </div>
                        </div>
                    </div>

                    <div className="slider__item">
                        <p className="slider__item-name">Григоренко Дмитрий Юрьевич
                        </p>
                        <div className="slider__item-box">
                            <div className="slider__item-number">1</div>
                            <div className="slider__item-imagebg">
                                <img className="slider__item-image" src="./images/user_grigorenko.png" alt=""></img>
                            </div>
                        </div>
                    </div>

                    <div className="slider__item">
                        <p className="slider__item-name">Белоусов Андрей Рэмович
                        </p>
                        <div className="slider__item-box">
                            <div className="slider__item-number">5</div>
                            <div className="slider__item-imagebg">
                                <img className="slider__item-image" src="./images/user_belousov.png" alt=""></img>
                            </div>
                        </div>
                    </div>

                    <div className="slider__item">
                        <p className="slider__item-name">Хуснуллин Марат Шакирзянович
                        </p>
                        <div className="slider__item-box">
                            <div className="slider__item-number">6</div>
                            <div className="slider__item-imagebg">
                                <img className="slider__item-image" src="./images/user_husnullin.png" alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div className="slider__item">
                        <p className="slider__item-name">Голикова Татьяна Алексеевна
                        </p>
                        <div className="slider__item-box">
                            <div className="slider__item-number">7</div>
                            <div className="slider__item-imagebg">
                                <img className="slider__item-image" src="./images/user_golikova.png" alt=""></img>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

const domContainer = document.querySelector('#react_slider');
ReactDOM.render( < ReactSlider /> , domContainer);