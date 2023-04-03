import React from 'react';
import styles from './filter.module.css'

const Filter = ({setGridView, sort, setSort}) => {
    return (
        <div className={styles.filter}>
            <div className={styles.wrapper}>
                <div className={styles["icon-wrapper"]}>
                    <img src="/images/filter-icon.png" alt="" />
                    <p className={styles["filter-text"]}>Filter</p>
                    <img onClick={() => setGridView(true)} src="/images/grid-view-icon.png" alt="" />
                    <img onClick={() => setGridView(false)} src="/images/list-view-icon.png" alt="" />
                    <p className={styles["amount-text"]}>Showing 1-16 of 32 results</p>
                </div>
                <div className={styles.controls}>
                    <p className={styles.amount}>
                        Show
                        <input type="number" className={styles["amount-number"]}/>    
                    </p>
                    <p>
                        Sort by 
                        <select value={sort} onChange={e => setSort(e.target.value)}>
                            <option value="newest">Newest</option>
                            <option value="price">Price asc</option>
                            {/* <option value="priceDesc">Price desc</option> */}
                        </select>
                    </p>    
                </div>    
            </div>
        </div>
    );
};

export default Filter;