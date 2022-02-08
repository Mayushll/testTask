import React, {Dispatch, SetStateAction} from 'react';
import styles from "./index.module.css"
interface Props {
    pages: number[];
    setCurrentPage: Dispatch<SetStateAction<number>>;
    currentPage: number;
}
export const PhotoPagination = ({pages, setCurrentPage, currentPage}: Props) => {
    return (
        <div>
            <div className={styles.wrapper}>
                {currentPage > 1 && pages.length > 1 && (
                    <div>
                        <button
                            className={styles.arrowLeft}
                            onClick={
                                () => {
                                    setCurrentPage(currentPage - 1)
                                }
                            }
                        >
                            &#5130;
                        </button>
                    </div>
                )}
                {
                    pages.map((item:number, index:number) =>
                        <div key={index} className={styles.item}>
                            <div>
                                <button
                                    style={{cursor: 'pointer', background: 'none', border: 'none'}}
                                    className={currentPage === item ? styles.active : styles.notActive}
                                   onClick={() => {
                                       setCurrentPage(item)
                                   }}>{item}
                                </button>
                            </div>
                        </div>
                    )
                }
                <div>
                    {currentPage < pages.length && pages.length > 1 && (
                        <button
                            className={styles.arrowRight}
                            onClick={
                                () => {
                                    setCurrentPage(currentPage + 1)
                                }
                            }>
                            &#5125;
                        </button>
                    )
                    }
                </div>
            </div>
        </div>
    );
};