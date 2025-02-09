import React from "react";
import { useForm } from "react-hook-form"
import styles from './DynamicForm.module.css'

const DynamicForm = () => {
    const { 
        register, 
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Форма отправлена:", data);
    }

    const firstInputValue = watch("firstInput", "")

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
            <div className={styles.formGroup}>
                <label>Первое поле ввода:</label>
                <input type="text"
                {...register("firstInput", { required: true, minLenght: 3 })}
                className={styles.inputField}
                />
                {errors.firstInput && (
                    <span className={styles.errorMessage}>
                        Минимальная длина - 3 символа
                    </span>
                )}
            </div>
            {firstInputValue.lenght >= 3 && (
                <div className={styles.formGroup}>
                    <label>Второе поле ввода:</label>
                    <input 
                    type="text" 
                    {...register("secondInput", { required: true })}
                    className={styles.inputField}
                    />
                    {errors.secondInput && (
                        <span className={styles.errorMessage}>Это поле обязательно</span>
                    )}
                </div>
            )}
            <button type="submit" className={styles.submitButton}>Отправить</button>
        </form>
    )
}

export default DynamicForm