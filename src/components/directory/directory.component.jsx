import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";

const Directory = () => {
    const categories = [
        {
            id: 1,
            title: "Hats",
            imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
            routeName: "shop/hats",
        },
        {
            id: 2,
            title: "Jackets",
            imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
            routeName: "shop/jackets",
        },
        {
            id: 3,
            title: "Sneakers",
            imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
            routeName: "shop/sneakers",
        },
        {
            id: 4,
            title: "Womens",
            imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
            routeName: "shop/womens",
        },
        {
            id: 5,
            title: "Mens",
            imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
            routeName: "shop/mens",
        },
    ];

    return (
        <DirectoryContainer>
            {categories.map((category) => (
                <DirectoryItem category={category} key={category.id} />
            ))}
        </DirectoryContainer>
    );
};

export default Directory;
