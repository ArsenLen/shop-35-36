import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Filter from '../../components/Filter/Filter';
import Info from '../../components/Info/Info';
import Product from '../../components/Product/Product';
import styles from './catalogpage.module.css';
import productService from '../../services/products';
import ReactPaginate from 'react-paginate';

const CatalogPage = () => {
  const [products, setProducts] = useState([])
  const [gridView, setGridView] = useState(true)
  const [sort, setSort] = useState('price')
  const [productsOffset, setProductsOffset] = useState(0); // число, начиная с которого нужно показывать товар
  const productsPerPage = 4 // количество товаров на странице
  const [forcePage, setForcePage] = useState(0)

  const endOffset = productsOffset + productsPerPage; // число, до которого нам нужно показывать товары
  console.log(`Loading items from ${productsOffset} to ${endOffset}`);
  const currentProducts = products.slice(productsOffset, endOffset); // массив товаров, которые отображаются на одной странице [1, 2, 3, 4, 5] [6, 7, 8, 9, 10]
  const pageCount = Math.ceil(products.length / productsPerPage); // количество страниц пагинации

  const handlePageClick = (event) => {
    const newOffset = (event.selected * productsPerPage) % products.length; /* 12/16 = 0.75. 12 % 16 = 12 */
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setForcePage(event.selected) // сами управляем страницей
    setProductsOffset(newOffset);
  };

  useEffect(() => { 
    productService
      .getProducts()
      .then(res => {
        const sortedByPrice = res.data.sort((a, b) => a.price - b.price)
        setProducts(sortedByPrice)
      })
  }, [])

  useEffect(() => {
    if(sort === "price") {
      const sortedByPrice = [...products].sort((a, b) =>  a.price - b.price) // []
      setProducts(sortedByPrice)
    } else {
      const sortedByDate = [...products].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      setProducts(sortedByDate)
    }
    setForcePage(0)
    setProductsOffset(0)
  }, [sort])

  // console.log(new Date()) // 40832527876 - количество секунд, прошедших с 1 января 1970г, UNIX-time 

  return (
    <div>
      <Breadcrumbs title="Shop" />
      <Filter setGridView={setGridView} sort={sort} setSort={setSort} />
      <div className={styles["products-wrapper"]}>
        {currentProducts.map(product => {
          return (
            <Product
              key={product._id}
              id={product._id}
              img={product.img}
              title={product.title}
              price={product.price}
              date={product.createdAt}
              gridView={gridView}
            />
          )
        })}
      </div>
      <ReactPaginate
        forcePage={forcePage}
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        containerClassName={styles["pagination-wrapper"]}
        pageLinkClassName={styles["pagination-page"]}
        nextClassName={styles["pagination-next"]}
        activeLinkClassName={styles["pagination-active"]}
      />
      <Info />
    </div>
  );
};

export default CatalogPage;
// react query

/*
  Добавить в Filter еще одну иконку. 
    Модифицировать код таким образом, чтобы при нажатии на эту инонку отображалось по два элемента
      в одной строке.

  Добавить сортировку по цене от большей к меньшей цене 



  1. Создать состояние для количества элементов - productsPerPage
  2. Передавать setter в компонент Filter
  3. Менять состояние productsPerPage используя input, select
*/