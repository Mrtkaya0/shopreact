import Loading from "../components/Loading";
import Card from "../components/Card";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const MainPages = () => {
    // context yapısına abone olma
    // context yapısında value olarak belirlenen verilere erişim sağlam
    const { products } = useContext(ProductContext);

    // console.log(products); // Değerleri konsola yazdır

    return (
        <div className="container d-flex flex-wrap justify-content-between justify-conten-md-between  gap-4 gap-md-5">
            {/* veriler gelmediyse yükleniyor göster */}
            {!products && <Loading />}
            {/* veriler geldiyse her biri için kart bas */}
            {products?.map((product) => (
                <Card key={product.id} product={product} />
            ))}
        </div>
    );
};

export default MainPages;