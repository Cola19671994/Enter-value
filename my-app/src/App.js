import React, { useState } from "react";
import styles from "./App.module.css";

const App = () => {
    const [value, setValue] = useState("");
    const [list, setList] = useState([]);
    const [error, setError] = useState("");

    const onInputButtonClick = () => {
        const promptValue = prompt("Введите значение:");
        if (promptValue && promptValue.length >= 3) {
            setValue(promptValue);
            setError("");
        } else {
            setError("Ошибка: значение должно содержать минимум 3 символа");
        }
    };

    const onAddButtonClick = () => {
        if (value.length >= 3) {
            const id = Date.now();
            const dateTime = new Date().toLocaleString("ru-RU", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            });
            setList([...list, { id, value, dateTime }]);
            setValue("");
            setError("");
        }
    };

    const isValueValid = value.length >= 3;

    return (
        <div className={styles.app}>
            <h1>Ввод значения</h1>
            <output>Текущее значение value: "{value}"</output>
            <div>
                <button onClick={onInputButtonClick}>Ввести новое</button>
                <button onClick={onAddButtonClick} disabled={!isValueValid}>
                    Добавить в список
                </button>
            </div>
            {error && <div className={styles.error}>{error}</div>}
            <h2>Список:</h2>
            {list.length > 0 ? (
                <ul>
                    {list.map((item) => (
                        <li key={item.id}>
                            {item.value} (добавлено: {item.dateTime})
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Нет добавленных элементов</p>
            )}
        </div>
    );
};

export default App;
