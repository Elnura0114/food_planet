import React from 'react';
import burger from '../../assets/images/Burger1.png';
import remove from '../../assets/icons/remove.png';
import style from './Cart.module.css';

const Cart = () => {
    return (
        <div className={style.container}>
            <div className={style.title_box}>
                <h3>Корзина</h3>
                <p>Товары в вашей корзине</p>
            </div>
            <div>
                <table className={style.order_table}>
                    <thead>
                        <tr>
                            <td>
                                <p>Продукт</p>
                            </td>
                            <td>
                                <p>Количество</p>
                            </td>
                            <td>
                                <p>Комментарий</p>
                            </td>
                            <td>
                                <p>Цена</p>
                            </td>
                            <td colSpan="2">
                                <p>К оплате</p>
                            </td>
                        </tr>
                    </thead>
                    <tr className={style.product_container}>
                        <td className={style.product_box}>
                            <div className={style.product_img}>
                                <img src={burger} alt=""/>
                            </div>
                            <div>
                                <p>Чизбургер</p>
                            </div>
                        </td>
                        <td>
                            <input type="text"/>
                        </td>
                        <td>
                            <input type="text"/>
                        </td>
                        <td>
                            <p>200 сом</p>
                        </td>
                        <td>
                            <p>200 сом</p>
                        </td>
                        <td className={style.remove}>
                            <img src={remove}  alt=""/>
                        </td>
                    </tr>
                    <tr className={style.product_container}>
                        <td className={style.product_box}>
                            <div className={style.product_img}>
                                <img src={burger} alt=""/>
                            </div>
                            <div>
                                <p>Чизбургер</p>
                            </div>
                        </td>
                        <td>
                            <input type="text"/>
                        </td>
                        <td>
                            <input type="text"/>
                        </td>
                        <td>
                            <p>200 сом</p>
                        </td>
                        <td>
                            <p>200 сом</p>
                        </td>
                        <td className={style.remove}>
                            <img src={remove}  alt=""/>
                        </td>
                    </tr>
                    <tfoot>
                        <tr>
                            <td colSpan="3">
                                <a href="#">Продолжить покупки</a>
                            </td>
                            <td className={style.sum_cell} >
                                <div className={style.sum_number}>
                                    <div>
                                        <p>Итого:</p>
                                    </div>
                                    <div>
                                        <p>200 сом</p>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit">Оформить заказ</button>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default Cart;