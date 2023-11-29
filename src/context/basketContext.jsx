import { createContext, useState } from "react";


export const BasketContext = createContext()


export function BasketProvider({ children }) {
    const [basket, setBasket] = useState([])

    // ürnünü alıp sepet ekler
    const addToBasket = (product) => {
        // sebetin miktar sayısını kontrol etme işlemi
        const found = basket.find((i) => i.id === product.id);

        if (found) {
            // sebette ürün varsa miktar +1 yap
            const updated = { ...found, amount: found.amount + 1 }
            // sepet dizisinden eski elemanı çıkar yenisini ekle
            const newBasket = basket.map((item) =>
                item.id === updated.id ? updated : item);

                setBasket(newBasket)

        } else {
            // sebette ürün yoksa yeni eklendiyse sebet miktarını 1 yap eşitle
            setBasket([...basket, { ...product, amount: 1 }])
        }

    };

    // console.log(basket)
    
    const removeFromBasket = (delete_id) => {
        const found =basket.find((i) => i.id == delete_id)
        if( found.amount >1) {
            // miktar 1 den fazlaysa 1 adet sil
            const updated = { ...found, amount: found.amount -1};
            // sepettte kalan elemanı güncelle adet ile birlikte
            const newBasket = basket.map((item) =>
            item.id === updated.id ? updated: item);

            setBasket(newBasket)

        }else{
            // miktar 1 adet ise komple sil
            const filtred = basket.filter((i) => i.id !== delete_id);
            setBasket(filtred)

        }
     };



    return (
        <BasketContext.Provider
            value={{ basket, addToBasket, removeFromBasket }}
        >
            {children}
        </BasketContext.Provider>

    )
}