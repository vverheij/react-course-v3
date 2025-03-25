const Categories = ({ categories, filterOnCategory }) => {
  // console.log(categories);
  return (
    <div className="btn-container">
      {categories.map((categorie) => (
        <button className="btn" key={categorie} onClick={() => filterOnCategory(categorie)}>
          {categorie}
        </button>
      ))}
    </div>
  );
};
export default Categories;
